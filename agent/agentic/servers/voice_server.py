import asyncio
import base64
import logging
import uuid
import aiohttp
from aiohttp import web
from voice.speechmatics_service import SpeechmaticsService
from voice.rime_service import RimeTTS

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

RASA_URL = "http://localhost:5005/webhooks/rest/webhook"

async def send_to_rasa(session: aiohttp.ClientSession, sender: str, text: str) -> str:
    async with session.post(
        RASA_URL, json={"sender": sender, "message": text},
        timeout=aiohttp.ClientTimeout(total=60),
    ) as resp:
        resp.raise_for_status()
        msgs = await resp.json()
    return "  ".join(m["text"] for m in msgs if m.get("text"))

async def handle_voice(request: web.Request) -> web.Response:
    try:
        data = await request.json()
        audio_b64 = data.get("audio_base64", "")
        if not audio_b64:
            return web.json_response({"error": "No audio provided"}, status=400)

        wav_bytes = base64.b64decode(audio_b64)
        logger.info(f"Received audio: {len(wav_bytes)} bytes")

        # 1. Transcribe (STT)
        asr = SpeechmaticsService()
        transcript = await asr.transcribe(wav_bytes)
        logger.info(f"Transcript: {transcript}")

        if not transcript.strip():
            return web.json_response({"error": "Could not transcribe audio"}, status=400)

        # 2. Send to Rasa
        sender = f"web-voice-{uuid.uuid4().hex[:8]}"
        async with aiohttp.ClientSession() as session:
            reply = await send_to_rasa(session, sender, transcript)
            logger.info(f"Rasa reply: {reply}")

        # 3. Synthesize (TTS)
        audio_out_b64 = ""
        if reply:
            try:
                rime = RimeTTS()
                spoken_bytes = await rime.synthesize(reply)
                audio_out_b64 = base64.b64encode(spoken_bytes).decode('utf-8')
            except Exception as e:
                logger.error(f"TTS Error: {e}")

        return web.json_response({
            "transcript": transcript,
            "reply": reply,
            "audio_base64": audio_out_b64
        })

    except Exception as e:
        logger.exception("Error processing voice request")
        return web.json_response({"error": str(e)}, status=500)

async def handle_options(request: web.Request) -> web.Response:
    return web.Response(status=200)

app = web.Application()

# Setup CORS manually
async def cors_middleware(app, handler):
    async def middleware_handler(request):
        response = await handler(request)
        response.headers['Access-Control-Allow-Origin'] = '*'
        response.headers['Access-Control-Allow-Methods'] = 'POST, GET, OPTIONS'
        response.headers['Access-Control-Allow-Headers'] = 'Content-Type, Authorization'
        return response
    return middleware_handler

app.middlewares.append(cors_middleware)
app.router.add_options('/voice/chat', handle_options)
app.router.add_post('/voice/chat', handle_voice)

if __name__ == '__main__':
    logger.info("Starting Voice Server on port 8001...")
    web.run_app(app, host='0.0.0.0', port=8001)

import asyncio
import os
import speechmatics
import speechmatics.client
import speechmatics.models
from dotenv import load_dotenv

load_dotenv()
api_key = os.getenv("SPEECHMATICS_API_KEY")

async def test_auto():
    ws = speechmatics.client.WebsocketClient(
        speechmatics.models.ConnectionSettings(url="wss://eu.rt.speechmatics.com/v2", auth_token=api_key)
    )
    conf = speechmatics.models.TranscriptionConfig(
        language="auto", operating_point="enhanced"
    )
    print("Config created successfully!")

if __name__ == "__main__":
    asyncio.run(test_auto())

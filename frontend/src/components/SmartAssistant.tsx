import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, BrainCircuit, X, Sparkles, Send, Loader2, Mic, MicOff } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

// 產生 16kHz PCM WAV 的輔助函數
function encodeWAV(samples: Float32Array, sampleRate: number = 16000) {
  const buffer = new ArrayBuffer(44 + samples.length * 2);
  const view = new DataView(buffer);
  
  const writeString = (view: DataView, offset: number, string: string) => {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  };

  writeString(view, 0, 'RIFF');
  view.setUint32(4, 36 + samples.length * 2, true);
  writeString(view, 8, 'WAVE');
  writeString(view, 12, 'fmt ');
  view.setUint32(16, 16, true);
  view.setUint16(20, 1, true);
  view.setUint16(22, 1, true); // Mono
  view.setUint32(24, sampleRate, true);
  view.setUint32(28, sampleRate * 2, true);
  view.setUint16(32, 2, true);
  view.setUint16(34, 16, true);
  writeString(view, 36, 'data');
  view.setUint32(40, samples.length * 2, true);

  let offset = 44;
  for (let i = 0; i < samples.length; i++, offset += 2) {
    let s = Math.max(-1, Math.min(1, samples[i]));
    view.setInt16(offset, s < 0 ? s * 0x8000 : s * 0x7FFF, true);
  }

  return buffer;
}

export default function SmartAssistant() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [listCount, setListCount] = useState(0);

  // Chat states
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Hi! I am your CookSmart assistant. You can type or use your microphone to talk to me!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Audio recording states
  const [isRecording, setIsRecording] = useState(false);
  const audioContextRef = useRef<AudioContext | null>(null);
  const mediaStreamRef = useRef<MediaStream | null>(null);
  const processorRef = useRef<ScriptProcessorNode | null>(null);
  const audioChunksRef = useRef<Float32Array[]>([]);

  useEffect(() => {
    const updateCount = () => {
      const saved = localStorage.getItem('shopping_lists');
      if (saved) {
        try {
          const lists = JSON.parse(saved);
          const totalItems = lists.reduce((sum: number, list: any) => sum + (list.itemsCount || 0), 0);
          setListCount(totalItems);
        } catch (e) {
          setListCount(0);
        }
      } else {
        setListCount(0);
      }
    };

    updateCount();
    window.addEventListener('shopping_lists_updated', updateCount);
    return () => window.removeEventListener('shopping_lists_updated', updateCount);
  }, []);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  // Handle Text Send
  const handleSendText = async () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    try {
      const response = await fetch('http://localhost:5005/webhooks/rest/webhook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ sender: 'web_user', message: userMsg })
      });
      
      const data = await response.json();
      
      if (data && data.length > 0) {
        data.forEach((botMsg: any) => {
          if (botMsg.text) {
            setMessages(prev => [...prev, { sender: 'bot', text: botMsg.text }]);
          }
        });
      }
    } catch (error) {
      console.error('Error communicating with Rasa agent:', error);
      setMessages(prev => [...prev, { sender: 'bot', text: 'Oops! I am having trouble connecting to my brain.' }]);
    } finally {
      setLoading(false);
    }
  };

  // --- Voice Handlers ---
  
  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      mediaStreamRef.current = stream;
      
      const AudioContextCtor = window.AudioContext || (window as any).webkitAudioContext;
      const context = new AudioContextCtor({ sampleRate: 16000 });
      audioContextRef.current = context;
      
      const source = context.createMediaStreamSource(stream);
      const processor = context.createScriptProcessor(4096, 1, 1);
      processorRef.current = processor;
      audioChunksRef.current = [];

      processor.onaudioprocess = (e) => {
        const inputData = e.inputBuffer.getChannelData(0);
        audioChunksRef.current.push(new Float32Array(inputData));
      };

      source.connect(processor);
      processor.connect(context.destination);
      setIsRecording(true);

    } catch (error) {
      console.error("Microphone access denied:", error);
      alert("Please allow microphone access to use the voice feature.");
    }
  };

  const stopRecording = () => {
    if (!isRecording) return;
    
    if (processorRef.current && audioContextRef.current) {
      processorRef.current.disconnect();
      audioContextRef.current.close();
    }
    if (mediaStreamRef.current) {
      mediaStreamRef.current.getTracks().forEach(track => track.stop());
    }
    setIsRecording(false);
    setLoading(true);
    
    // Combine chunks
    const chunks = audioChunksRef.current;
    const length = chunks.reduce((acc, val) => acc + val.length, 0);
    const result = new Float32Array(length);
    let offset = 0;
    for (let chunk of chunks) {
      result.set(chunk, offset);
      offset += chunk.length;
    }
    
    const wavBuffer = encodeWAV(result, 16000);
    const wavBlob = new Blob([wavBuffer], { type: 'audio/wav' });
    
    const reader = new FileReader();
    reader.readAsDataURL(wavBlob);
    reader.onloadend = async () => {
      const base64AudioMessage = reader.result?.toString().split(',')[1];
      if (base64AudioMessage) {
        await handleSendVoice(base64AudioMessage);
      }
    };
  };

  const handleSendVoice = async (base64Audio: string) => {
    try {
      const response = await fetch('http://localhost:8001/voice/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ audio_base64: base64Audio })
      });
      
      const data = await response.json();
      
      if (data.transcript) {
        setMessages(prev => [...prev, { sender: 'user', text: data.transcript }]);
      }
      
      if (data.reply) {
        setMessages(prev => [...prev, { sender: 'bot', text: data.reply }]);
        
        // Play TTS audio if returned
        if (data.audio_base64) {
          const audioUrl = `data:audio/wav;base64,${data.audio_base64}`;
          const audio = new Audio(audioUrl);
          audio.play();
        }
      }
    } catch (error) {
      console.error('Error communicating with Voice Server:', error);
      setMessages(prev => [...prev, { sender: 'bot', text: 'Oops! The voice server is not responding.' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendText();
    }
  };

  const location = useLocation();
  if (location.pathname.startsWith('/shopping-list')) {
    return null;
  }

  return (
    <>
      {listCount > 0 && (
        <motion.button 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/shopping-list/all')}
          className="fixed bottom-24 right-5 z-40 bg-surface-container-high text-primary w-12 h-12 rounded-full shadow-lg flex items-center justify-center hover:bg-surface-container-highest transition-colors border border-outline-variant"
        >
          <ShoppingBag className="w-5 h-5" />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-error text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-white shadow-sm scale-90">
            {listCount > 99 ? '99+' : listCount}
          </div>
        </motion.button>
      )}

      <motion.button 
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-8 right-5 z-40 bg-cta text-white w-14 h-14 rounded-full shadow-xl flex items-center justify-center hover:bg-cta-hover transition-colors"
      >
        <BrainCircuit className="w-6 h-6" />
      </motion.button>

      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-5 bg-black/40 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ y: 50, scale: 0.9 }}
              animate={{ y: 0, scale: 1 }}
              exit={{ y: 50, scale: 0.9 }}
              className="bg-surface w-full max-w-md rounded-3xl overflow-hidden shadow-2xl flex flex-col h-[600px] max-h-[85vh] border border-outline-variant"
            >
              {/* Header */}
              <div className="bg-primary p-4 flex justify-between items-center text-white shrink-0">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5" />
                  <h3 className="font-bold text-lg">CookSmart Voice Agent</h3>
                </div>
                <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 p-2 rounded-full transition-colors">
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Chat History */}
              <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4 bg-surface-container-lowest">
                {messages.map((msg, idx) => (
                  <div key={idx} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div 
                      className={`max-w-[80%] p-3 rounded-2xl text-sm ${
                        msg.sender === 'user' 
                          ? 'bg-primary text-white rounded-tr-sm' 
                          : 'bg-surface-container-high text-on-surface rounded-tl-sm shadow-sm'
                      }`}
                      style={{ whiteSpace: 'pre-wrap' }}
                    >
                      {msg.text}
                    </div>
                  </div>
                ))}
                {loading && (
                  <div className="flex justify-start">
                    <div className="bg-surface-container-high p-3 rounded-2xl rounded-tl-sm flex gap-2 items-center text-primary text-sm shadow-sm">
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Thinking...</span>
                    </div>
                  </div>
                )}
                {isRecording && (
                  <div className="flex justify-end">
                    <div className="bg-error text-white p-3 rounded-2xl rounded-tr-sm flex gap-2 items-center text-sm shadow-sm animate-pulse">
                      <Mic className="w-4 h-4" />
                      <span>Listening...</span>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-surface border-t border-outline-variant shrink-0">
                <div className="flex gap-2 items-center">
                  <button
                    onMouseDown={startRecording}
                    onMouseUp={stopRecording}
                    onTouchStart={startRecording}
                    onTouchEnd={stopRecording}
                    className={`p-3 rounded-full text-white transition-all shadow-md ${isRecording ? 'bg-error scale-110' : 'bg-primary hover:bg-primary-hover'}`}
                  >
                    {isRecording ? <MicOff className="w-5 h-5" /> : <Mic className="w-5 h-5" />}
                  </button>
                  <div className="flex-1 flex gap-2 items-center bg-surface-container-low rounded-full px-4 py-2 border border-outline-variant focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                    <input 
                      type="text"
                      value={input}
                      onChange={(e) => setInput(e.target.value)}
                      onKeyDown={handleKeyDown}
                      placeholder="Hold mic to speak or type..."
                      className="flex-1 bg-transparent border-none outline-none text-sm py-2 text-on-surface"
                      disabled={loading || isRecording}
                    />
                    <button 
                      onClick={handleSendText}
                      disabled={loading || !input.trim() || isRecording}
                      className="p-2 text-primary hover:bg-primary/10 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
                <div className="text-center mt-2">
                  <span className="text-[10px] text-on-surface-variant font-medium">Hold the microphone icon to speak</span>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

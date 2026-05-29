import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, BrainCircuit, X, Sparkles, Send, Loader2 } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

interface Message {
  sender: 'user' | 'bot';
  text: string;
}

export default function SmartAssistant() {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const [listCount, setListCount] = useState(0);

  // Chat states
  const [messages, setMessages] = useState<Message[]>([
    { sender: 'bot', text: 'Hi! I am your CookSmart assistant. Tell me what ingredients you have, or ask me for a recipe recommendation!' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

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

  const handleSend = async () => {
    if (!input.trim()) return;
    
    const userMsg = input.trim();
    setMessages(prev => [...prev, { sender: 'user', text: userMsg }]);
    setInput('');
    setLoading(true);

    try {
      // Send to Rasa server
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
      } else {
        setMessages(prev => [...prev, { sender: 'bot', text: 'Sorry, I did not understand that.' }]);
      }
    } catch (error) {
      console.error('Error communicating with Rasa agent:', error);
      setMessages(prev => [...prev, { sender: 'bot', text: 'Oops! I am having trouble connecting to my brain. Is the Rasa server running on port 5005?' }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const location = useLocation();
  if (location.pathname.startsWith('/shopping-list')) {
    return null;
  }

  return (
    <>
      {/* Floating My Lists Button */}
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

      {/* AI Assistant Button */}
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
                  <h3 className="font-bold text-lg">CookSmart AI</h3>
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
                <div ref={messagesEndRef} />
              </div>

              {/* Input Area */}
              <div className="p-4 bg-surface border-t border-outline-variant shrink-0">
                <div className="flex gap-2 items-center bg-surface-container-low rounded-full px-4 py-2 border border-outline-variant focus-within:border-primary focus-within:ring-1 focus-within:ring-primary transition-all">
                  <input 
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask for a recipe or cooking advice..."
                    className="flex-1 bg-transparent border-none outline-none text-sm py-2 text-on-surface"
                    disabled={loading}
                  />
                  <button 
                    onClick={handleSend}
                    disabled={loading || !input.trim()}
                    className="p-2 text-primary hover:bg-primary/10 rounded-full disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    <Send className="w-5 h-5" />
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

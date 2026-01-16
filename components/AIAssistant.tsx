
import React, { useState, useRef, useEffect } from 'react';
import { askAssistant } from '../services/geminiService';

const AIAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'assistant'; content: string }[]>([
    { role: 'assistant', content: "Hello! I'm Diljit's digital twin. Ask me anything about my engineering background, my projects at UoB, or even my weightlifting journey!" }
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMsg = inputValue;
    setInputValue('');
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    setIsLoading(true);

    const response = await askAssistant(userMsg);
    setMessages(prev => [...prev, { role: 'assistant', content: response }]);
    setIsLoading(false);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-8 right-8 w-16 h-16 bg-black text-white rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.2)] flex items-center justify-center z-50 hover:scale-110 transition-all active:scale-95"
      >
        <i className={`fas ${isOpen ? 'fa-times' : 'fa-bolt-lightning'} text-lg`}></i>
      </button>

      {isOpen && (
        <div className="fixed bottom-28 right-8 w-[calc(100vw-4rem)] sm:w-[400px] h-[600px] bg-white rounded-3xl shadow-[0_35px_60px_-15px_rgba(0,0,0,0.3)] border border-gray-50 flex flex-col z-50 overflow-hidden animate-in fade-in slide-in-from-bottom-8 duration-500">
          <div className="p-6 bg-black text-white flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-2.5 h-2.5 bg-yellow-400 rounded-full animate-pulse"></div>
              <span className="font-bold uppercase tracking-widest text-xs">Engineering Assistant</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="opacity-50 hover:opacity-100 transition-opacity">
              <i className="fas fa-xmark"></i>
            </button>
          </div>

          <div ref={scrollRef} className="flex-1 overflow-y-auto p-6 space-y-6 bg-[#fafafa]">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div 
                  className={`max-w-[90%] p-4 rounded-2xl text-sm leading-relaxed ${
                    m.role === 'user' 
                      ? 'bg-black text-white rounded-tr-none shadow-lg' 
                      : 'bg-white text-gray-700 shadow-sm border border-gray-100 rounded-tl-none'
                  }`}
                >
                  <p className="whitespace-pre-wrap">{m.content}</p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-4 rounded-2xl shadow-sm border border-gray-100 rounded-tl-none">
                  <div className="flex space-x-1">
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce"></div>
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]"></div>
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="p-6 bg-white border-t border-gray-50">
            <div className="flex items-center space-x-3 bg-gray-100 rounded-2xl px-4 py-3 focus-within:ring-2 focus-within:ring-black transition-all">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Ask about my Fusion 360 skills..."
                className="flex-1 bg-transparent border-none text-sm outline-none placeholder:text-gray-400"
              />
              <button
                onClick={handleSend}
                disabled={isLoading}
                className="text-black disabled:opacity-30 hover:scale-110 transition-transform"
              >
                <i className="fas fa-arrow-up-long"></i>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;

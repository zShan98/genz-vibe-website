import React, { useState, useEffect } from 'react';
import QRCode from '../assets/qr_code.png';

const GUESTBOOK_KEY = 'genz-guestbook-messages';

export const Guestbook = () => {
  const [messages, setMessages] = useState([]);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem(GUESTBOOK_KEY);
    if (stored) setMessages(JSON.parse(stored));
  }, []);

  useEffect(() => {
    localStorage.setItem(GUESTBOOK_KEY, JSON.stringify(messages));
  }, [messages]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) {
      alert('Please enter both name and message!');
      return;
    }
    setIsSubmitting(true);
    const newMsg = {
      id: Date.now(),
      name: name.trim(),
      message: message.trim(),
      timestamp: new Date().toLocaleString(),
    };
    setTimeout(() => {
      setMessages([newMsg, ...messages]);
      setName('');
      setMessage('');
      setIsSubmitting(false);
    }, 500);
  };

  return (
    <div className="page-enter page-enter-active flex flex-col md:flex-row gap-8 items-start text-white">
      
      {/* Form Section */}
      <div className="w-full md:w-1/3 bg-gradient-to-br from-white/20 to-white/10 border border-white/20 backdrop-blur-md rounded-xl p-6 shadow-2xl animate-fade-in-up">
        <h2 className="text-3xl font-bold mb-2 text-green-400 drop-shadow">💬 Leave a Vibe</h2>
        <p className="text-sm text-white/70 mb-4 italic">(Stored locally in your browser)</p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="guestName" className="block text-sm font-medium mb-1">Name</label>
            <input
              id="guestName"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Your cool name"
              required
              className="w-full p-2 rounded-lg bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <div>
            <label htmlFor="guestMessage" className="block text-sm font-medium mb-1">Message / Doodle Idea</label>
            <textarea
              id="guestMessage"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Drop a message or suggest a doodle!"
              rows="4"
              required
              className="w-full p-2 rounded-lg bg-white/80 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-400"
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 px-4 font-semibold rounded-lg shadow-lg transition-transform duration-300 ease-in-out bg-gradient-to-r from-green-400 via-blue-500 to-purple-600 hover:scale-105 hover:shadow-xl ${
              isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? 'Posting...' : '✨ Leave Message'}
          </button>
        </form>

        <p className="text-xs mt-4 text-center text-white/60 italic">Doodle pad coming soon™️!</p>

        {/* QR Code Below the Form */}
        <div className="mt-8 flex flex-col items-center bg-white/90 bg-opacity-100 rounded-xl p-4 shadow-lg w-full">
          <img src={QRCode} alt="Scan this QR code" className="w-40 h-40 rounded-md" />
          <p className="text-sm mt-2 text-gray-700 font-medium text-center">Scan to open this guestbook!</p>
        </div>
      </div>

      {/* Messages Section */}
      <div className="w-full md:w-2/3 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <h3 className="text-2xl font-semibold mb-4 text-blue-300 drop-shadow">📜 Recent Vibes</h3>
        
        <div className="max-h-[70vh] overflow-y-auto space-y-4 pr-2">
          {messages.length === 0 ? (
            <p className="text-white/70 italic">No messages yet. Be the first!</p>
          ) : (
            messages.map((msg) => (
              <div
                key={msg.id}
                className="bg-white/10 border border-white/10 backdrop-blur-sm p-4 rounded-lg shadow-md transition-transform duration-200 hover:scale-[1.01] hover:shadow-lg animate-bubble-pop"
              >
                <p className="text-white/90 mb-2">"{msg.message}"</p>
                <div className="flex justify-between items-center text-xs text-white/60">
                  <span className="font-semibold">- {msg.name}</span>
                  <span>{msg.timestamp}</span>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

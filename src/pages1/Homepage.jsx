import React, { useState, useEffect } from 'react';

export const Homepage = () => {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      // You can uncomment this for actual hiding
      // setShowIntro(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const personalityTraits = [
    { id: 1, title: 'Creative Coder', emoji: '💻', delay: '0.2s' },
    { id: 2, title: 'Lo-fi Listener', emoji: '🎧', delay: '0.4s' },
    { id: 3, title: 'Meme Connoisseur', emoji: '🐸', delay: '0.6s' },
    { id: 4, title: 'Digital Artist', emoji: '🎨', delay: '0.8s' },
    { id: 5, title: 'Plant Parent', emoji: '🌿', delay: '1.0s' },
  ];

  return (
    <div className="min-h-screen px-4 py-10 bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e] text-center text-white font-sans page-enter page-enter-active">
      {/* Intro Section */}
      {showIntro && (
        <div className="mb-12 animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-yellow-300 to-cyan-400 drop-shadow-lg">
            Hey, Welcome!
          </h1>
          <p className="text-lg text-white/80 mt-2 italic">Loading the vibes... 🎶 (Lo-fi beat playing)</p>
        </div>
      )}

      {/* Personality Traits Section */}
      <h2 className="text-2xl font-semibold mb-8 text-white/90">Get to know me:</h2>
      <div className="flex flex-wrap justify-center gap-6 mb-12">
        {personalityTraits.map((trait) => (
          <div
            key={trait.id}
            className="bg-white/20 backdrop-blur-md border border-white/30 glossy-effect rounded-full w-40 h-40 md:w-48 md:h-48 flex flex-col items-center justify-center p-4 text-center shadow-lg cursor-pointer transform transition duration-300 hover:scale-105 hover:shadow-xl animate-bubble-pop"
            style={{
              animationDelay: trait.delay,
              background: 'linear-gradient(135deg, rgba(255,255,255,0.2), rgba(255,255,255,0.05))',
              boxShadow: '0 4px 20px rgba(255,255,255,0.1)',
            }}
          >
            <span className="text-4xl mb-2 drop-shadow-md">{trait.emoji}</span>
            <span className="font-semibold text-sm md:text-base text-white/90">{trait.title}</span>
          </div>
        ))}
      </div>

      {/* Graph Section */}
      <div className="max-w-4xl mx-auto mt-16 text-left">
        <h2 className="text-2xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300">
          Activity Overview 🔍
        </h2>
        <div className="space-y-4">
          {[
            { label: 'Coding Hours', value: 80, color: 'from-green-400 to-blue-500' },
            { label: 'Music Listening', value: 60, color: 'from-pink-400 to-red-500' },
            { label: 'Meme Browsing', value: 45, color: 'from-yellow-400 to-orange-500' },
            { label: 'Plant Care', value: 30, color: 'from-lime-400 to-emerald-500' },
          ].map((item, idx) => (
            <div key={idx}>
              <div className="flex justify-between mb-1 text-sm text-white/80">
                <span>{item.label}</span>
                <span>{item.value}%</span>
              </div>
              <div className="w-full bg-white/10 rounded-full h-4">
                <div
                  className={`h-4 rounded-full bg-gradient-to-r ${item.color}`}
                  style={{ width: `${item.value}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <p className="mt-16 text-sm text-white/60 italic">More vibes coming soon™️</p>
    </div>
  );
};

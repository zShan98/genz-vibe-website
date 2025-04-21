import React from 'react';

// Import your downloaded images
import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';
import b4 from '../assets/b4.png';
const artPieces = [
  { id: 1, src: b1, alt: 'Abstract Art' },
  { id: 2, src: b2, alt: 'Digital Painting' },
  { id: 3, src: b3, alt: 'Character Sketch' },
  { id: 4, src: b4, alt: 'Pixel Art' },
];

const videoPieces = [
  { id: 1, src: 'https://www.youtube.com/embed/jfKfPfyJRdk', title: 'Lo-fi Hip Hop Radio' },
  { id: 2, src: 'https://www.youtube.com/embed/5qap5aO4i9A', title: 'Chillhop Music' },
  { id: 3, src: 'https://www.youtube.com/embed/TURbeWK2wwg', title: 'Ambient Mix' },
];

export const Gallery = () => {
  return (
    <div className="page-enter page-enter-active space-y-16">
      {/* Art Gallery - Polaroid Grid */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8 text-white/90">Art Stash 🎨</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {artPieces.map((art, index) => (
            <div
              key={art.id}
              className="bg-white p-3 pb-8 shadow-lg rounded transform hover:scale-105 hover:rotate-[-2deg] hover:shadow-glow-hover relative group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <img
                src={art.src}
                alt={art.alt}
                className="w-full h-auto object-cover rounded-sm"
              />
              <p className="absolute bottom-2 left-3 text-xs font-semibold text-gray-600">
                {art.alt}
              </p>
              <div
                className="absolute inset-0 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-glow"
                style={{
                  boxShadow:
                    '0 0 15px rgba(255, 255, 255, 0.5), 0 0 25px rgba(255, 255, 255, 0.3)',
                }}
              ></div>
            </div>
          ))}
        </div>
      </div>

      {/* Video Section */}
      <div>
        <h2 className="text-3xl font-bold text-center mb-8 text-white/90">Vid Edits &amp; Faves 🎬</h2>
        <div className="bg-deep-space p-6 md:p-10 rounded-lg shadow-2xl space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-radial from-blue-500/10 via-purple-500/5 to-transparent blur-3xl opacity-50 animate-pulse"></div>
          {videoPieces.map((video, index) => (
            <div
              key={video.id}
              className="animate-fade-in-up"
              style={{ animationDelay: `${0.5 + index * 0.15}s` }}
            >
              <h3 className="text-lg font-semibold text-pastel-blue mb-2">
                {video.title}
              </h3>
              <div className="aspect-w-16 aspect-h-9 rounded overflow-hidden shadow-lg glossy-effect">
                <iframe
                  src={video.src}
                  title={video.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

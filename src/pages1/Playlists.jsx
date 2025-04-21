import React from 'react';

// Dummy Spotify Playlist IDs (Replace with actual ones)
// Go to Spotify -> Share -> Embed Playlist -> Copy the string after /embed/playlist/
const playlistIds = [
  '37i9dQZF1DXcBWIGoYBM5M', // Example: Lo-fi Beats
  '37i9dQZF1DWWQRwui02Gu5', // Example: Chillhop
  '37i9dQZF1DX4sWSpwq3LiO', // Example: Peaceful Piano
];

// Basic Cassette Component (Styling only)
const Cassette = ({ children, title }) => (
  <div className="bg-gradient-to-br from-gray-300 to-gray-100 p-4 rounded-lg shadow-xl border border-gray-400/50 relative w-full max-w-md mx-auto animate-fade-in-up">
    {/* Cassette "holes" */}
    <div className="absolute top-5 left-5 w-8 h-8 bg-gray-700 rounded-full border-2 border-gray-500"></div>
    <div className="absolute top-5 right-5 w-8 h-8 bg-gray-700 rounded-full border-2 border-gray-500"></div>

    {/* "Label" area */}
    <div className="bg-white/80 py-2 px-4 my-10 rounded border border-gray-300/50 text-center">
      <p className="text-sm font-semibold text-gray-600 font-mono">{title || 'My Awesome Mix'}</p>
    </div>

    {/* Embed area */}
    <div className="bg-gray-800/80 p-2 rounded shadow-inner">
       {children}
    </div>

    {/* Bottom screw holes */}
    <div className="absolute bottom-2 left-2 w-2 h-2 bg-gray-500 rounded-full"></div>
    <div className="absolute bottom-2 right-2 w-2 h-2 bg-gray-500 rounded-full"></div>
  </div>
);


export const Playlists = () => {
  return (
    <div className="page-enter page-enter-active space-y-12">
      <h2 className="text-3xl font-bold text-center mb-8 text-white/90">Playlist Swag 📼</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {playlistIds.map((id, index) => (
          <div key={id} style={{ animationDelay: `${index * 0.15}s` }}>
            <Cassette title={`Vibe Tape ${index + 1}`}>
              <iframe
                style={{ borderRadius: '12px' }}
                src={`https://open.spotify.com/embed/playlist/${id}?utm_source=generator&theme=0`} // theme=0 for dark
                width="100%"
                height="152" // Use smaller height for cassette
                frameBorder="0"
                allowFullScreen=""
                allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                loading="lazy"
                title={`Spotify Playlist ${index + 1}`}
              ></iframe>
            </Cassette>
           </div>
        ))}
      </div>
    </div>
  );
};

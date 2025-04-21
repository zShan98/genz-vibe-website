import React from 'react';

// Placeholder data - REAL FEEDS REQUIRE APIs and likely backend work!
const socialPosts = [
  { id: 't1', platform: 'TikTok', user: '@userVibes', content: 'Cool dance challenge vid!', color: 'bg-black', icon: '🎵' },
  { id: 'i1', platform: 'Instagram', user: 'insta_art', content: 'New digital painting post.', color: 'bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500', icon: '📸' },
  { id: 'tu1', platform: 'Tumblr', user: 'aesthetic-blog', content: 'Pastel moodboard dump.', color: 'bg-blue-900', icon: '✒️' },
  { id: 't2', platform: 'TikTok', user: '@userVibes', content: 'Funny sketch about coffee.', color: 'bg-black', icon: '🎵' },
  { id: 'i2', platform: 'Instagram', user: 'insta_art', content: 'Studio selfie! #artistlife', color: 'bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500', icon: '📸' },
  { id: 'tu2', platform: 'Tumblr', user: 'aesthetic-blog', content: 'Late night thoughts & poetry.', color: 'bg-blue-900', icon: '✒️' },
   { id: 'i3', platform: 'Instagram', user: 'insta_art', content: 'New reel showing process.', color: 'bg-gradient-to-br from-purple-500 via-pink-500 to-yellow-500', icon: '📸' },
   { id: 't3', platform: 'TikTok', user: '@userVibes', content: 'Trying the viral sound.', color: 'bg-black', icon: '🎵' },
   { id: 'tu3', platform: 'Tumblr', user: 'aesthetic-blog', content: 'Sharing some favorite gifs.', color: 'bg-blue-900', icon: '✒️' },
];

export const SocialMashup = () => {
  return (
    <div className="page-enter page-enter-active">
      <h2 className="text-3xl font-bold text-center mb-8 text-white/90">Social Feed Mashup 🌐</h2>
      <p className="text-center text-sm text-white/70 mb-8">(Placeholder content - Real feeds need API integration)</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {socialPosts.map((post, index) => (
          <div
            key={post.id}
            className={`rounded-lg shadow-lg p-4 text-white relative overflow-hidden group h-48 flex flex-col justify-between animate-fade-in-up ${post.color}`}
            style={{ animationDelay: `${index * 0.08}s `}}
          >
            <div>
                <div className="flex justify-between items-center mb-2">
                    <span className="font-bold text-sm">{post.platform} {post.icon}</span>
                    <span className="text-xs opacity-80">{post.user}</span>
                </div>
                <p className="text-sm">{post.content}</p>
            </div>

            {/* Hover Effect */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 cursor-pointer">
              <span className="text-xl font-bold">View Post</span>
            </div>
             {/* Optional: subtle glow on hover */}
             <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-glow" style={{ boxShadow: '0 0 10px rgba(255, 255, 255, 0.3), 0 0 20px rgba(255, 255, 255, 0.2)' }}></div>
          </div>
        ))}
      </div>
    </div>
  );
};

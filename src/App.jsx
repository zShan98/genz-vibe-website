import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import { Homepage } from './pages1/Homepage';
import { Gallery } from './pages1/Gallery';
import { MemeMagic } from './pages1/MemeMagic';
import { Playlists } from './pages1/Playlists';
import { SocialMashup } from './pages1/SocialMashup';
import { Guestbook } from './pages1/Guestbook';
import { LofiIntro } from './animation/MusicBeat';
import './App.css';
import { AboutUs } from './pages1/AboutUs';

function App() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowIntro(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  const Navbar = () => (
    <nav className="sticky top-0 z-50 p-4 mb-8 shadow-md backdrop-blur-lg bg-white/10 border-b border-white/20">
      <ul className="flex justify-center space-x-6 md:space-x-10 text-white font-medium text-sm md:text-base">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-white font-bold underline" : "hover:text-pink-400 transition"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "text-white font-bold underline" : "hover:text-pink-400 transition"
            }
          >
            Gallery
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/memes"
            className={({ isActive }) =>
              isActive ? "text-white font-bold underline" : "hover:text-pink-400 transition"
            }
          >
            Memes
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/playlists"
            className={({ isActive }) =>
              isActive ? "text-white font-bold underline" : "hover:text-pink-400 transition"
            }
          >
            Playlists
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/social"
            className={({ isActive }) =>
              isActive ? "text-white font-bold underline" : "hover:text-pink-400 transition"
            }
          >
            Social
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/guestbook"
            className={({ isActive }) =>
              isActive ? "text-white font-bold underline" : "hover:text-pink-400 transition"
            }
          >
            Guestbook
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/About-us"
            className={({ isActive }) =>
              isActive ? "text-white font-bold underline" : "hover:text-pink-400 transition"
            }
          >
            About Us
          </NavLink>
        </li>
      </ul>
    </nav>
  );

  if (showIntro) {
    return <LofiIntro />;
  }

  return (
    // <Router> // Uncomment this if this file wraps your entire app
    <div className="min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/memes" element={<MemeMagic />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/social" element={<SocialMashup />} />
          <Route path="/guestbook" element={<Guestbook />} />
          <Route path="/About-us" element={<AboutUs />} />
        </Routes>
      </main>
      <footer className="text-center p-4 mt-12 text-xs text-white/70">
        Built with ✨ vibes ✨
      </footer>
    </div>
    // </Router>
  );
}

export default App;

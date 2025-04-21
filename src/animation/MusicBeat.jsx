import React from 'react';
import Lottie from 'lottie-react';
import lofiAnimation from './lofi.json'; // your Lottie animation

export const LofiIntro = () => {
  return (
    <div className="w-screen h-screen relative flex items-center justify-center bg-black">
      {/* Lottie Animation */}
      <Lottie
        animationData={lofiAnimation}
        loop={true}
        className="w-full h-full object-cover"
      />

      {/* Welcome Text Overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-white text-5xl md:text-6xl font-bold drop-shadow-lg animate-fade-in">
          Welcome
        </h1>
        <p className="text-white/80 text-xl mt-4 font-light animate-fade-in-delay">
          to the Vibe Zone 🎧
        </p>
      </div>
    </div>
  );
};

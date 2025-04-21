import React, { useState, useRef, useEffect } from 'react';
import distractedBF from '../assets/Distracted-Boyfriend.jpg';
import drake from '../assets/Drake-Hotline-Bling.jpg';
import oneDoes from '../assets/One-Does-Not-Simply.jpg';
import changeMind from '../assets/Change-My-Mind.jpg';

export const MemeMagic = () => {
  const memeTemplates = [
    { id: 1, name: 'Distracted BF', url: distractedBF },
    { id: 2, name: 'Drake Hotline Bling', url: drake },
    { id: 3, name: 'One Does Not Simply', url: oneDoes },
    { id: 4, name: 'Change My Mind', url: changeMind },
  ];

  const [topText, setTopText] = useState('');
  const [bottomText, setBottomText] = useState('');
  const [selectedTemplate, setSelectedTemplate] = useState(memeTemplates[0]);
  const canvasRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const img = imageRef.current;

    img.onload = () => {
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0);

      ctx.fillStyle = 'white';
      ctx.strokeStyle = 'black';
      ctx.lineWidth = Math.max(1, canvas.width / 150);
      ctx.textAlign = 'center';
      const fontSize = Math.max(20, canvas.width / 12);
      ctx.font = `bold ${fontSize}px Impact, sans-serif`;

      if (topText) {
        ctx.textBaseline = 'top';
        ctx.strokeText(topText.toUpperCase(), canvas.width / 2, 10);
        ctx.fillText(topText.toUpperCase(), canvas.width / 2, 10);
      }
      if (bottomText) {
        ctx.textBaseline = 'bottom';
        ctx.strokeText(bottomText.toUpperCase(), canvas.width / 2, canvas.height - 10);
        ctx.fillText(bottomText.toUpperCase(), canvas.width / 2, canvas.height - 10);
      }
    };

    img.onerror = () => {
      console.error("Error loading image");
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = 'red';
      ctx.font = '16px Arial';
      ctx.textAlign = 'center';
      ctx.fillText('Error loading template', canvas.width / 2, canvas.height / 2);
    };

    img.crossOrigin = "anonymous";
    img.src = selectedTemplate.url;
  }, [topText, bottomText, selectedTemplate]);

  const handleDownload = () => {
    const canvas = canvasRef.current;
    const image = canvas.toDataURL('image/png');
    const link = document.createElement('a');
    link.href = image;
    link.download = `${selectedTemplate.name}-meme.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="page-enter page-enter-active flex flex-col lg:flex-row gap-10 items-start p-4">
      {/* Meme Controls */}
      <div className="w-full lg:w-1/3 bg-white/20 backdrop-blur-xl rounded-2xl p-6 shadow-2xl transition-all animate-fade-in-up glossy-effect">
        <h2 className="text-3xl font-bold mb-6 text-pink-300 tracking-wide drop-shadow-sm">Meme Generator 🎉</h2>

        <div className="mb-5">
          <label className="block text-sm font-semibold text-white/80 mb-1">Choose Template</label>
          <select
            onChange={(e) => setSelectedTemplate(
              memeTemplates.find(t => t.id === parseInt(e.target.value))
            )}
            className="w-full p-3 rounded-xl bg-white/30 text-white backdrop-blur-md focus:ring-2 focus:ring-purple-400 transition-all shadow-inner"
          >
            {memeTemplates.map(template => (
              <option key={template.id} value={template.id}>{template.name}</option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block text-sm font-semibold text-white/80 mb-1">Top Text</label>
          <input
            type="text"
            value={topText}
            onChange={(e) => setTopText(e.target.value)}
            placeholder="Enter top text"
            className="w-full p-3 rounded-xl bg-white/30 text-white backdrop-blur-md placeholder:text-white/60 focus:ring-2 focus:ring-purple-400 transition-all shadow-inner"
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-semibold text-white/80 mb-1">Bottom Text</label>
          <input
            type="text"
            value={bottomText}
            onChange={(e) => setBottomText(e.target.value)}
            placeholder="Enter bottom text"
            className="w-full p-3 rounded-xl bg-white/30 text-white backdrop-blur-md placeholder:text-white/60 focus:ring-2 focus:ring-purple-400 transition-all shadow-inner"
          />
        </div>

        <button
          onClick={handleDownload}
          className="w-full bg-gradient-to-r from-pink-500 to-purple-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:scale-105 hover:shadow-xl transition-all duration-300"
        >
          Download Meme 🚀
        </button>
      </div>

      {/* Meme Preview */}
      <div className="w-full lg:w-2/3 flex justify-center items-center animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
        <div className="relative w-full max-w-3xl bg-white/10 backdrop-blur-lg p-4 rounded-xl shadow-2xl">
          <img ref={imageRef} alt={selectedTemplate.name} style={{ display: 'none' }} />
          <canvas ref={canvasRef} className="w-full h-auto rounded-xl border-4 border-white/30 shadow-lg" />
        </div>
      </div>
    </div>
  );
};

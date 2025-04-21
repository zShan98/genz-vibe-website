/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		// "./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
		  colors: {
			'pastel-pink': '#FFD1DC',
			'pastel-blue': '#A2D2FF',
			'pastel-purple': '#CDB4DB',
			'pastel-green': '#BDE0FE',
			'deep-space': '#1a1a2e', // For dark mode elements
			'soft-glow': 'rgba(255, 255, 255, 0.1)',
		  },
		  fontFamily: {
			'sans': ['Poppins', 'sans-serif'], // Example: Using a modern font
		  },
		  animation: {
			'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
			'bubble-pop': 'bubblePop 0.5s ease-out forwards',
			'glow': 'glow 1.5s ease-in-out infinite alternate',
		  },
		  keyframes: {
			fadeInUp: {
			  '0%': { opacity: '0', transform: 'translateY(20px)' },
			  '100%': { opacity: '1', transform: 'translateY(0)' },
			},
			bubblePop: {
			  '0%': { transform: 'scale(0.5)', opacity: '0' },
			  '70%': { transform: 'scale(1.05)', opacity: '1' },
			  '100%': { transform: 'scale(1)', opacity: '1' },
			},
			glow: {
			  '0%': { 'box-shadow': '0 0 5px rgba(255, 255, 255, 0.2), 0 0 10px rgba(255, 255, 255, 0.1)' },
			  '100%': { 'box-shadow': '0 0 15px rgba(255, 255, 255, 0.4), 0 0 25px rgba(255, 255, 255, 0.2)' },
			}
		  },
		  boxShadow: {
			'glossy': 'inset 0 2px 5px rgba(255, 255, 255, 0.4), 0 2px 4px rgba(0, 0, 0, 0.1)',
			'glow-hover': '0 0 15px rgba(255, 255, 255, 0.5), 0 0 25px rgba(255, 255, 255, 0.3)',
		  }
		},
	  },
	  plugins: [],
	}
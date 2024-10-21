module.exports = {
	mode: 'jit',
	purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				customColor: '#yourColorCode', // Replace with your color code
				customHoverColor: '#yourHoverColorCode', // Replace with your hover color code
				gradientFrom: '#FFDD00', // Yellow
				gradientTo: '#FF8C00', // Orange
				gradientYellow: '#FBBF24',
				gradientOrange: '#FB923C',
			  },
			  animation: {
				fadeIn: 'fadeIn 2s ease-in-out',
				slideIn: 'slideIn 1.5s ease-out forwards',
			  }, keyframes: {
				fadeIn: {
				  '0%': { opacity: 0 },
				  '100%': { opacity: 1 },
				},
				slideIn: {
				  '0%': { transform: 'translateX(-100%)' },
				  '100%': { transform: 'translateX(0)' },
				},
			  },
			fontFamily: {
				inter: ['Inter', 'sans-serif'],
				montserrat: ['Montserrat', 'sans-serif'],
				akira: ['Akira', 'sans-serif'],
			},
			backgroundImage: () => ({
				'sports-edited': "url('/assets/images/sports.png')",
				'slider-one': "url('/assets/images/slider-one.jpeg')",
				'feature-image-1': "url('/assets/images/feature-image-1.jpeg')",
				cricket: "url('/assets/images/cricket-uniform-size.jpeg')",
				karate: "url('/assets/images/karate-uniform-size.jpeg')",
				archery: "url('/assets/images/archery-uniform-size.jpeg')",
				cricketImg: "url('/assets/images/cricket.jpg')",
				archeryImg: "url('/assets/images/archery.jfif')",
				cricketMain:"url('/assets/images/Activities/player.jfif')"
			}),
			cursor: {
				rockon: "url('/cursors/sports.png'), auto",
			},
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};

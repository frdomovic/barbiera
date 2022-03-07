module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'royal-green': '#1F3F1F',
        'header-green': '#052205',
        'button-gray': '#9C9469',
        'orange-ps': '#f8c468',
        'trans-green': '#052205',
        'trans-l-green': '#CFC03C'
      },
      backgroundImage: theme => ({
        'barber-img': "url('/src/Assets/Images/background.jpg')"
      }),

      screens: {
        se: '375px',
        sm: '640px',
        // => @media (min-width: 640px) { ... }

        md: '768px',
        // => @media (min-width: 768px) { ... }

        lg: '1024px',
        // => @media (min-width: 1024px) { ... }

        xl: '1280px',
        // => @media (min-width: 1280px) { ... }

        '2xl': '1536px'
        // => @media (min-width: 1536px) { ... }
      },
      height: theme => ({
        'screen/1': '65vh',
        'screen/2': '50vh',
        'screen/0': '73vh',
        'screen/3': 'calc(100vh / 3)',

        'screen/4': 'calc(100vh / 4)',

        'screen/5': 'calc(100vh / 5)'
      })
    }
  },
  plugins: []
}

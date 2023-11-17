import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}', // Note the addition of the `app` directory.
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
 
    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'kumbh': ['Kumbh Sans', 'sans-serif'],
      },
      fontWeight: {
        'normal': '400',
        'bold': '700',
      },
      screens: {
        'sm': '376px', // Movil
        'lg': '1440px', // Desktop
      },
      fontSize: {
        'paragraph': '16px',
      },
      colors: {
        primary: {
          'orange': 'hsl(26, 100%, 55%)',
          'pale-orange': 'hsl(25, 100%, 94%)',
        },
        neutral: {
          'very-dark-blue': 'hsl(220, 13%, 13%)',
          'dark-grayish-blue': 'hsl(219, 9%, 45%)',
          'grayish-blue': 'hsl(220, 14%, 75%)',
          'light-grayish-blue': 'hsl(223, 64%, 98%)',
          'white': 'hsl(0, 0%, 100%)',
          'black-lightbox': 'hsla(0, 0%, 0%, 0.75)', // Black with 75% opacity for lightbox background
        },
      },
    },
  },
  plugins: [],
}
export default config

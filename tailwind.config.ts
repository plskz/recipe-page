import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'young-serif': ['var(--font-young-serif)'],
        outfit: ['var(--font-outfit)'],
      },
      colors: {
        // Primary
        nutmeg: 'hsl(14, 45%, 36%)',
        'dark-raspberry': 'hsl(332, 51%, 32%)',
        // Neutral
        white: 'hsl(0, 0%, 100%)',
        'rose-white': 'hsl(330, 100%, 98%)',
        eggshell: 'hsl(30, 54%, 90%)',
        'light-grey': 'hsl(30, 18%, 87%)',
        'wenge-brown': 'hsl(30, 10%, 34%)',
        'dark-charcoal': 'hsl(24, 5%, 18%)',
      },
    },
  },
  plugins: [],
}
export default config

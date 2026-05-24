import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-display)', 'Inter', 'sans-serif'],
      },
      colors: {
        accent: '#0096FF',
        bg: '#06061A',
        surface: '#0E0E24',
        line: '#1A1A3A',
        dim: '#888888',
      },
    },
  },
  plugins: [],
}
export default config

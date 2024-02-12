import type {Config} from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        sub: 'hsla(0, 0%, 100%, 0.2)',
        footer: '#161616',
      },
      backgroundImage: {
        'rectangle': "url('/rectangle.png')",
      },
      fontFamily: {
        body: ['var(--font-oswald)', 'var(--font-noto-sans-jp)', ...defaultTheme.fontFamily.sans],
        noto: ['var(--font-noto-sans-jp)', ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
}
export default config

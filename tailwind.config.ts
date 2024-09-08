import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    fontFamily: {
      sans: ['Geologica'],
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        malachite: {
          DEFAULT: '#3ee03e',
          // '50': '#f1fdf0',
          // '100': '#dbfddb',
          // '200': '#bbf8ba',
          '300': '#5dF05d',
          '400': '#3ee03e',
          // '500': '#1ec91f',
          // '600': '#13a613',
          // '700': '#138214',
          // '800': '#146716',
          // '900': '#135415',
          '950': '#00C900',
        },
        'tory-blue': {
          // '50': '#eef8ff',
          // '100': '#d9efff',
          // '200': '#bbe4ff',
          // '300': '#8cd3ff',
          // '400': '#56b9ff',
          // '500': '#2e99ff',
          // '600': '#187af8',
          // '700': '#11488B',
          '800': '#11488B',
          '900': '#194da0',
          '950': '#132d57',
          '1000': '#0A1F41',
        },
        mercury: {
          '50': '#f6f6f6',
          '100': '#d1d1d1',
          '200': '#e4e4e4',
          // '300': '#c8c8c8',
          // '400': '#adadad',
          // '500': '#999999',
          // '600': '#888888',
          // '700': '#7b7b7b',
          // '800': '#676767',
          // '900': '#545454',
          // '950': '#363636',
        },
      },
    },
  },
  plugins: [],
}
export default config

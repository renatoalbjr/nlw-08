module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand': '#8257e6',
        'brand-500': '#8257e6',
        'brand-hover': '#996DFF',
        'text-on-brand': '#FFF',
        'dk-sfc-primary': '#18181B',
        'dk-sfc-secondary': '#27272A',
        'dk-sfc-secondary-hover': '#3F3F46',
        'dk-stroke': '#52525B',
        'dk-tooltip': '#F4F4F5',
        'dk-txt-primary': '#F4F4F5',
        'dk-txt-secondary': '#A1A1AA',
        'dk-txt-on-tooltip': '#27272A',
        'dk-bg': '#09090A'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('tailwind-scrollbar')
  ],
  variants: {
    outline: ['focus'],
    scrollbar: ['rounded']
  }
}
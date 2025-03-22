import { defineConfig } from 'windicss/helpers'

export default defineConfig({
    darkMode: 'class', // or 'media'
    theme: {
        extend: {
            screens: {
                'sm': '640px',
                'md': '768px',
                'lg': '1024px',
                'xl': '1280px',
                '2xl': '1536px',
            },
            colors: {
                primary: '#024e7b',
                secondary: '#0070b4',
                accent: '#e7db26',
                lightGrey: '#ede8e8'
            },
            fontFamily: {
                sans: ['sans-serif'],
            },
        }
    }
})
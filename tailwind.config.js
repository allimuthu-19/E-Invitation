/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FFFCF7',
        champagne: {
          DEFAULT: '#C6A46A',
          light: '#DFC08A',
          pale: '#F0E4CE',
          deep: '#A8854A',
        },
        beige: '#EAD7C3',
        blush: '#F4E7DC',
        brown: {
          DEFAULT: '#49372D',
          light: '#6B5347',
          deep: '#2E1F17',
        },
      },
      fontFamily: {
        script: ['"Great Vibes"', 'cursive'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Lato"', 'sans-serif'],
        tamil: ['"Noto Serif Tamil"', 'serif'],
      },
      animation: {
        'fade-in': 'fadeIn 1.2s ease-in-out forwards',
        'slide-up': 'slideUp 0.9s ease-out forwards',
        'seal-pulse': 'sealPulse 2s ease-in-out infinite',
        'seal-glow': 'sealGlow 0.6s ease-out forwards',
        'float': 'floatY 3s ease-in-out infinite',
        'card-rise': 'cardRise 0.9s cubic-bezier(0.22,1,0.36,1) forwards',
        'particle-drift': 'particleDrift 2.5s ease-out forwards',
        'shimmer': 'shimmer 1.5s ease-in-out forwards',
        'name-reveal': 'nameReveal 1s ease-out forwards',
        'dust-float': 'dustFloat 8s ease-in-out infinite',
        'dust-float-slow': 'dustFloat 12s ease-in-out infinite',
        'ornament-fade': 'ornamentFade 2s ease-out forwards',
      },
      keyframes: {
        fadeIn: { from: { opacity: '0' }, to: { opacity: '1' } },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(32px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        sealPulse: {
          '0%, 100%': { boxShadow: '0 0 0 0 rgba(198,164,106,0.45)' },
          '50%': { boxShadow: '0 0 0 12px rgba(198,164,106,0)' },
        },
        sealGlow: {
          '0%': { boxShadow: '0 0 0 0 rgba(198,164,106,0.8)', transform: 'scale(1)' },
          '50%': { boxShadow: '0 0 32px 8px rgba(198,164,106,0.6)', transform: 'scale(1.15)' },
          '100%': { boxShadow: '0 0 0 0 rgba(198,164,106,0)', transform: 'scale(0.85)', opacity: '0' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        cardRise: {
          '0%': { transform: 'translateY(60px) scale(0.92)', opacity: '0' },
          '100%': { transform: 'translateY(0px) scale(1)', opacity: '1' },
        },
        particleDrift: {
          '0%': { transform: 'translateY(0) translateX(0) rotate(0deg)', opacity: '1' },
          '100%': { transform: 'translateY(-120px) translateX(var(--drift-x, 30px)) rotate(360deg)', opacity: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        nameReveal: {
          '0%': { opacity: '0', transform: 'translateY(16px)', letterSpacing: '0.3em' },
          '100%': { opacity: '1', transform: 'translateY(0)', letterSpacing: 'normal' },
        },
        dustFloat: {
          '0%':   { transform: 'translateY(0px) translateX(0px)', opacity: '0' },
          '15%':  { opacity: '1' },
          '85%':  { opacity: '0.6' },
          '100%': { transform: 'translateY(-40px) translateX(var(--dust-x, 12px))', opacity: '0' },
        },
        ornamentFade: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      boxShadow: {
        envelope: '0 20px 60px rgba(73,55,45,0.18), 0 4px 16px rgba(73,55,45,0.10)',
        card: '0 4px 24px rgba(73,55,45,0.08)',
        seal: '0 4px 16px rgba(198,164,106,0.35)',
        'contact-card': '0 2px 16px rgba(73,55,45,0.07)',
      },
    },
  },
  plugins: [],
}

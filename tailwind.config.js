/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Premium Brand Colors - 고급스러운 금색/다크 조합
        brand: {
          gold: '#FFD700',
          'gold-light': '#FFE55C',
          'gold-dark': '#D4AF37',
          navy: '#181C2A',
          'navy-light': '#232B44',
          'navy-dark': '#0F1219',
        },
        // Enhanced Primary - 세련된 블루
        primary: {
          50: '#EFF6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          300: '#93C5FD',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
          950: '#172554',
        },
        // Sophisticated Secondary - 고급스러운 보라
        secondary: {
          50: '#FAF5FF',
          100: '#F3E8FF',
          200: '#E9D5FF',
          300: '#D8B4FE',
          400: '#C084FC',
          500: '#A855F7',
          600: '#9333EA',
          700: '#7E22CE',
          800: '#6B21A8',
          900: '#581C87',
          950: '#3B0764',
        },
        // Premium Accent - 우아한 에메랄드
        accent: {
          50: '#ECFDF5',
          100: '#D1FAE5',
          200: '#A7F3D0',
          300: '#6EE7B7',
          400: '#34D399',
          500: '#10B981',
          600: '#059669',
          700: '#047857',
          800: '#065F46',
          900: '#064E3B',
          950: '#022C22',
        },
        // Enhanced Neutrals - 가독성 최적화
        neutral: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E5E5E5',
          300: '#D4D4D4',
          400: '#A3A3A3',
          500: '#737373',
          600: '#525252',
          700: '#404040',
          800: '#262626',
          900: '#171717',
          950: '#0A0A0A',
        },
        // Success/Warning/Error States
        success: {
          50: '#F0FDF4',
          500: '#22C55E',
          600: '#16A34A',
          700: '#15803D',
        },
        warning: {
          50: '#FFFBEB',
          500: '#F59E0B',
          600: '#D97706',
          700: '#B45309',
        },
        error: {
          50: '#FEF2F2',
          500: '#EF4444',
          600: '#DC2626',
          700: '#B91C1C',
        },
      },
      fontFamily: {
        'sans': ['Pretendard', '-apple-system', 'BlinkMacSystemFont', 'system-ui', 'Roboto', 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo', 'Noto Sans KR', 'Malgun Gothic', 'sans-serif'],
        'mono': ['JetBrains Mono', 'Fira Code', 'Consolas', 'Courier New', 'monospace'],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'slide-down': 'slideDown 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
        'scale-in': 'scaleIn 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        'bounce-in': 'bounceIn 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55)',
        'float': 'float 6s ease-in-out infinite',
        'pulse-soft': 'pulseSoft 3s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(59, 130, 246, 0.5)' },
          '100%': { boxShadow: '0 0 20px rgba(59, 130, 246, 0.8)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-1000px 0' },
          '100%': { backgroundPosition: '1000px 0' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
      boxShadow: {
        'premium': '0 10px 40px -15px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'premium-lg': '0 20px 50px -15px rgba(0, 0, 0, 0.25), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
        'premium-xl': '0 25px 60px -20px rgba(0, 0, 0, 0.3), 0 15px 15px -10px rgba(0, 0, 0, 0.05)',
        'glow-gold': '0 0 20px rgba(255, 215, 0, 0.4), 0 0 40px rgba(255, 215, 0, 0.2)',
        'glow-blue': '0 0 20px rgba(59, 130, 246, 0.4), 0 0 40px rgba(59, 130, 246, 0.2)',
        'inner-premium': 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'gradient-premium': 'linear-gradient(135deg, var(--tw-gradient-stops))',
        'shimmer': 'linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)',
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      transitionDuration: {
        '400': '400ms',
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
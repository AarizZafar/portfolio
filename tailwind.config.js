/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        surface: '#e8ecf2',
        surface2: '#dfe4eb',
        surface3: '#d4dae3',
        ink: '#1a2332',
        ink2: '#334155',
        muted: '#64748b',
        accent: '#1e4d8c',
        accent2: '#2563eb',
        accentSoft: '#dbeafe',
        shadowDark: '#9aa3b0',
        shadowMid: '#b8c0cc',
        shadowLight: '#ffffff'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif']
      },
      boxShadow: {
        neu: '10px 10px 26px #9aa3b0, -10px -10px 26px #ffffff',
        'neu-sm': '5px 5px 14px #9aa3b0, -5px -5px 14px #ffffff',
        'neu-md': '8px 8px 22px #9aa3b0, -8px -8px 22px #ffffff',
        'neu-lg': '14px 14px 34px #8f99a8, -14px -14px 34px #ffffff',
        'neu-xl': '18px 18px 42px #8490a0, -18px -18px 42px #ffffff',
        'neu-inset': 'inset 6px 6px 14px #9aa3b0, inset -6px -6px 14px #ffffff',
        'neu-inset-sm': 'inset 3px 3px 8px #9aa3b0, inset -3px -3px 8px #ffffff',
        'neu-inset-lg': 'inset 8px 8px 18px #8f99a8, inset -8px -8px 18px #ffffff',
        'neu-pressed': 'inset 8px 8px 18px #8f99a8, inset -8px -8px 18px #ffffff',
        skeu: '10px 10px 26px #9aa3b0, -10px -10px 26px #ffffff, inset 0 1px 0 rgba(255,255,255,0.95), inset 0 -1px 0 rgba(154,163,176,0.35)',
        'skeu-inset': 'inset 6px 6px 14px #8f99a8, inset -4px -4px 12px #ffffff, inset 0 2px 4px rgba(154,163,176,0.25)'
      },
      backgroundImage: {
        'corporate-gradient': 'linear-gradient(135deg, #e8ecf2 0%, #d4dae3 50%, #e8ecf2 100%)',
        'surface-gradient': 'linear-gradient(145deg, #f0f3f8 0%, #e0e5ec 55%, #d8dee8 100%)',
        'surface-gradient-soft': 'linear-gradient(160deg, #eef1f6 0%, #e4e9f0 100%)',
        'recessed-gradient': 'linear-gradient(160deg, #d4dae3 0%, #e4e9f0 45%, #e8ecf2 100%)',
        'accent-gradient': 'linear-gradient(135deg, #1e4d8c 0%, #2563eb 100%)',
        'accent-gradient-skeu': 'linear-gradient(180deg, #3b82f6 0%, #2563eb 45%, #1e4d8c 100%)',
        'metal-shine': 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)'
      }
    }
  },
  plugins: []
}

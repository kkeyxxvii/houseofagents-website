// Design Tokens — House of Agents clone
export const colors = {
  // Brand
  accent: '#4d65ff',
  accentDark: '#3a4fd6',
  accentLight: '#6b82ff',

  // Neutrals
  white: '#ffffff',
  black: '#0a0a0a',
  ink: '#111111',
  inkLight: '#222222',
  muted: '#555555',
  mutedLight: '#888888',
  border: '#e5e5e5',
  borderDark: '#d0d0d0',
  surface: '#f8f8f8',
  surfaceAlt: '#f2f2f2',

  // Scroll
  scrollThumb: '#5a3019',

  // Status
  success: '#22c55e',
  warning: '#f59e0b',

  // Tag backgrounds
  tagBg: '#eef0ff',
  tagText: '#4d65ff',
  comingSoonBg: '#fff7ed',
  comingSoonText: '#c2410c',
} as const;

export const typography = {
  fontPrimary: '"Bdogrotesk", "Inter", sans-serif',
  fontMono: '"Fragmentmono", "JetBrains Mono", monospace',

  // Scale (rem)
  size: {
    xs: '0.75rem',
    sm: '0.875rem',
    base: '1rem',
    md: '1.125rem',
    lg: '1.25rem',
    xl: '1.5rem',
    '2xl': '1.875rem',
    '3xl': '2.25rem',
    '4xl': '3rem',
    '5xl': '3.75rem',
    '6xl': '4.5rem',
    '7xl': '5.5rem',
  },

  weight: {
    normal: '400',
    medium: '500',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },

  leading: {
    tight: '1.1',
    snug: '1.2',
    normal: '1.5',
    relaxed: '1.6',
  },
} as const;

export const spacing = {
  0: '0',
  1: '0.25rem',
  2: '0.5rem',
  3: '0.75rem',
  4: '1rem',
  5: '1.25rem',
  6: '1.5rem',
  8: '2rem',
  10: '2.5rem',
  12: '3rem',
  16: '4rem',
  20: '5rem',
  24: '6rem',
  32: '8rem',
  40: '10rem',
  48: '12rem',
} as const;

export const radius = {
  none: '0',
  sm: '0.25rem',
  base: '0.5rem',
  md: '0.75rem',
  lg: '1rem',
  xl: '1.5rem',
  '2xl': '2rem',
  full: '9999px',
} as const;

export const shadows = {
  sm: '0 1px 2px rgba(0,0,0,0.06)',
  base: '0 2px 8px rgba(0,0,0,0.08)',
  md: '0 4px 16px rgba(0,0,0,0.10)',
  lg: '0 8px 32px rgba(0,0,0,0.12)',
  xl: '0 16px 48px rgba(0,0,0,0.16)',
  accent: '0 4px 24px rgba(77,101,255,0.25)',
} as const;

export const transitions = {
  fast: '150ms ease',
  base: '250ms ease',
  slow: '400ms ease',
  spring: { type: 'spring', stiffness: 300, damping: 30 },
} as const;

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1440px',
} as const;

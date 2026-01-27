// Dark Theme - Default refined dark mode
import { Theme, ThemeColors } from '../types/settings';

export const darkColors: ThemeColors = {
    bgPrimary: '#0a0f14',
    bgSecondary: '#141820',
    bgTertiary: '#1b2230',

    textPrimary: '#e6e6e6',
    textSecondary: '#b0b8c4',
    textMuted: '#64748b',

    border: '#2a2f36',
    borderSubtle: '#1f242b',

    accent: '#3b82f6',
    accentHover: '#60a5fa',

    link: '#8ab4ff',
    linkHover: '#a8c9ff',
};

export const darkTheme: Theme = {
    name: 'dark',
    displayName: 'Dark',
    colors: darkColors,
};

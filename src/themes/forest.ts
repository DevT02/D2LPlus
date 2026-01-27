// Forest Theme - Nature-inspired green tones
import { Theme, ThemeColors } from '../types/settings';

export const forestColors: ThemeColors = {
    bgPrimary: '#0d1512',
    bgSecondary: '#13201a',
    bgTertiary: '#1a2d23',

    textPrimary: '#d4e6db',
    textSecondary: '#a3c4b0',
    textMuted: '#5a7a66',

    border: '#2d4a3a',
    borderSubtle: '#1f3829',

    accent: '#4ade80',
    accentHover: '#6ee7a0',

    link: '#86efac',
    linkHover: '#a7f3c5',
};

export const forestTheme: Theme = {
    name: 'forest',
    displayName: 'Forest',
    colors: forestColors,
};

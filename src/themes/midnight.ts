// Midnight Theme - GitHub-inspired deep blue
import { Theme, ThemeColors } from '../types/settings';

export const midnightColors: ThemeColors = {
    bgPrimary: '#0d1117',
    bgSecondary: '#161b22',
    bgTertiary: '#21262d',

    textPrimary: '#c9d1d9',
    textSecondary: '#8b949e',
    textMuted: '#6e7681',

    border: '#30363d',
    borderSubtle: '#21262d',

    accent: '#58a6ff',
    accentHover: '#79c0ff',

    link: '#58a6ff',
    linkHover: '#79c0ff',
};

export const midnightTheme: Theme = {
    name: 'midnight',
    displayName: 'Midnight',
    colors: midnightColors,
};

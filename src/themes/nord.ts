// Nord Theme - Arctic, calm color palette
import { Theme, ThemeColors } from '../types/settings';

export const nordColors: ThemeColors = {
    bgPrimary: '#2e3440',
    bgSecondary: '#3b4252',
    bgTertiary: '#434c5e',

    textPrimary: '#eceff4',
    textSecondary: '#d8dee9',
    textMuted: '#4c566a',

    border: '#4c566a',
    borderSubtle: '#434c5e',

    accent: '#88c0d0',
    accentHover: '#8fbcbb',

    link: '#81a1c1',
    linkHover: '#88c0d0',
};

export const nordTheme: Theme = {
    name: 'nord',
    displayName: 'Nord',
    colors: nordColors,
};

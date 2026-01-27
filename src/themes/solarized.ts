// Solarized Theme - Classic warm dark scheme
import { Theme, ThemeColors } from '../types/settings';

export const solarizedColors: ThemeColors = {
    bgPrimary: '#002b36',
    bgSecondary: '#073642',
    bgTertiary: '#094352',

    textPrimary: '#839496',
    textSecondary: '#93a1a1',
    textMuted: '#586e75',

    border: '#2aa198',
    borderSubtle: '#073642',

    accent: '#268bd2',
    accentHover: '#2aa198',

    link: '#2aa198',
    linkHover: '#859900',
};

export const solarizedTheme: Theme = {
    name: 'solarized',
    displayName: 'Solarized',
    colors: solarizedColors,
};

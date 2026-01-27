// Shared types for D2LPlus extension

export type ThemeName = 'light' | 'dark' | 'midnight' | 'nord' | 'solarized' | 'forest';

export interface D2LPlusSettings {
    enabled: boolean;
    darkMode: boolean; // legacy - kept for backward compatibility
    theme: ThemeName | 'system';
    animations: boolean;
    quickLinks: boolean;
    focusView: boolean;
    hideLegacyNav: boolean;
}

export const DEFAULT_SETTINGS: D2LPlusSettings = {
    enabled: true,
    darkMode: true,
    theme: 'dark',
    animations: true,
    quickLinks: true,
    focusView: false,
    hideLegacyNav: false,
};

export interface ThemeColors {
    // Main backgrounds
    bgPrimary: string;      // Page background
    bgSecondary: string;    // Cards, widgets
    bgTertiary: string;     // Nested elements, hover states

    // Text colors
    textPrimary: string;    // Main text
    textSecondary: string;  // Subtle text
    textMuted: string;      // Disabled, hints

    // Borders and lines
    border: string;
    borderSubtle: string;

    // Accent colors
    accent: string;
    accentHover: string;

    // Links
    link: string;
    linkHover: string;
}

export interface Theme {
    name: ThemeName;
    displayName: string;
    colors: ThemeColors;
}

// Theme Registry - Central export for all themes
import { Theme, ThemeColors, ThemeName } from '../types/settings';
import { darkTheme, darkColors } from './dark';
import { midnightTheme, midnightColors } from './midnight';
import { nordTheme, nordColors } from './nord';
import { solarizedTheme, solarizedColors } from './solarized';
import { forestTheme, forestColors } from './forest';

// Theme registry
export const themes: Record<ThemeName, Theme> = {
    light: { name: 'light', displayName: 'Light', colors: darkColors }, // Light uses no dark CSS
    dark: darkTheme,
    midnight: midnightTheme,
    nord: nordTheme,
    solarized: solarizedTheme,
    forest: forestTheme,
};

export function getTheme(name: ThemeName): Theme {
    return themes[name] || themes.dark;
}

// Generate main page CSS from theme colors
export function generateThemeCSS(colors: ThemeColors): string {
    return `
.d2lplus-dark {
    color-scheme: dark;
}
.d2lplus-dark .d2l-navigation,
.d2lplus-dark .d2l-navigation-s {
    background-color: ${colors.bgPrimary} !important;
    border-color: ${colors.border} !important;
}
.d2lplus-dark .d2l-navigation-s-main-wrapper {
    background-color: ${colors.bgPrimary} !important;
}
.d2lplus-dark .d2l-navigation-s-group-wrapper {
    background-color: ${colors.bgSecondary} !important;
    border-color: ${colors.border} !important;
}
.d2lplus-dark .d2l-widget,
.d2lplus-dark .d2l-tile,
.d2lplus-dark .d2l-card,
.d2lplus-dark .d2l-card-container {
    background-color: ${colors.bgSecondary} !important;
    border-color: ${colors.border} !important;
}
.d2lplus-dark .d2l-card-container,
.d2lplus-dark .d2l-widget-content-padding {
    box-shadow: none !important;
}
.d2lplus-dark .d2l-navigation-s-link {
    color: ${colors.textPrimary} !important;
}
.d2lplus-dark .d2l-navigation-s-link:hover {
    color: ${colors.textPrimary} !important;
}
.d2lplus-dark .d2l-navigation-s-group,
.d2lplus-dark .d2l-navigation-s-group-text {
    color: ${colors.textPrimary} !important;
}
.d2lplus-dark .d2l-dropdown-menu,
.d2lplus-dark .d2l-dropdown-content {
    background-color: ${colors.bgSecondary} !important;
    border-color: ${colors.border} !important;
}
.d2lplus-dark .d2l-dropdown-menu-item,
.d2lplus-dark .d2l-dropdown-content-item {
    color: ${colors.textPrimary} !important;
}
.d2lplus-dark .d2l-dropdown-menu-item:hover,
.d2lplus-dark .d2l-dropdown-content-item:hover {
    background-color: ${colors.bgTertiary} !important;
}
.d2lplus-dark .d2l-icon,
.d2lplus-dark d2l-icon {
    color: ${colors.textPrimary} !important;
}
.d2lplus-dark .d2l-heading,
.d2lplus-dark .d2l-heading-1,
.d2lplus-dark .d2l-heading-2,
.d2lplus-dark .d2l-heading-3,
.d2lplus-dark .d2l-heading-4,
.d2lplus-dark .d2l-label-text {
    color: ${colors.textPrimary} !important;
}
.d2lplus-dark .d2l-body-compact,
.d2lplus-dark .d2l-body-small,
.d2lplus-dark .d2l-body-standard {
    color: ${colors.textPrimary} !important;
}
.d2lplus-dark .d2l-htmlblock,
.d2lplus-dark .d2l-htmlblock-wc {
    color: ${colors.textPrimary} !important;
}
.d2lplus-dark .d2l-textblock,
.d2lplus-dark .d2l-textblock-secondary,
.d2lplus-dark .d2l-linkheading-link,
.d2lplus-dark .d2l-homepage-heading-link,
.d2lplus-dark .d2l-link,
.d2lplus-dark .d2l-link-inline {
    color: ${colors.textPrimary} !important;
}
.d2lplus-dark .d2l-homepage-header-wrapper,
.d2lplus-dark .d2l-widget-header {
    background-color: ${colors.bgPrimary} !important;
    color: ${colors.textPrimary} !important;
}
.d2lplus-dark body#d2l_body,
.d2lplus-dark #d2l_body,
.d2lplus-dark .d2l-body,
.d2lplus-dark body.d2l-body,
.d2lplus-dark .d2l-page,
.d2lplus-dark .d2l-page-main,
.d2lplus-dark .d2l-page-main-padding,
.d2lplus-dark .d2l-page-header,
.d2lplus-dark #D2L_LE_Content_ViewContentBg,
.d2lplus-dark .d2l-typography {
    background-color: ${colors.bgPrimary} !important;
    color: ${colors.textPrimary} !important;
}
.d2lplus-dark .d2l-homepage,
.d2lplus-dark .homepage-container,
.d2lplus-dark .homepage-row,
.d2lplus-dark .homepage-col-12,
.d2lplus-dark .homepage-col-8,
.d2lplus-dark .homepage-col-4 {
    background-color: ${colors.bgPrimary} !important;
}
.d2lplus-dark .d2l-datalist,
.d2lplus-dark .d2l-datalist-item {
    background-color: ${colors.bgSecondary} !important;
    border-color: ${colors.border} !important;
    color: ${colors.textPrimary} !important;
}
.d2lplus-dark [style*="background-color:#fFF"],
.d2lplus-dark [style*="background-color: #FFF"],
.d2lplus-dark [style*="background-color:#ffF"],
.d2lplus-dark [style*="background-color: #fff"],
.d2lplus-dark [style*="background-color:#FFFFFF"],
.d2lplus-dark [style*="background-color: #FFFFFF"],
.d2lplus-dark [style*="background-color:#ffffff"],
.d2lplus-dark [style*="background-color: #ffffff"],
.d2lplus-dark [style*="background-color: rgb(255, 255, 255)"],
.d2lplus-dark [style*="background-color: rgb(255,255,255)"] {
    background-color: ${colors.bgPrimary} !important;
}
`;
}

// Generate shadow DOM CSS for course cards
export function generateCardShadowCSS(colors: ThemeColors): string {
    return `
:host {
    color: ${colors.textPrimary} !important;
    background: ${colors.bgSecondary} !important;
    --d2l-card-background-color: ${colors.bgSecondary} !important;
    --d2l-card-border-color: ${colors.border} !important;
    --d2l-card-foreground-color: ${colors.textPrimary} !important;
}
.d2l-card-container,
.d2l-card-content,
.d2l-card-footer,
.d2l-card-header {
    background-color: ${colors.bgSecondary} !important;
    color: ${colors.textPrimary} !important;
}
.d2l-card-container {
    border-color: ${colors.border} !important;
    box-shadow: none !important;
}
a, .d2l-link, .d2l-heading, .d2l-body-compact, .d2l-body-small {
    color: ${colors.textPrimary} !important;
}
.d2l-offscreen {
    color: ${colors.textMuted} !important;
}
`;
}

// Re-export individual themes
export { darkTheme, darkColors } from './dark';
export { midnightTheme, midnightColors } from './midnight';
export { nordTheme, nordColors } from './nord';
export { solarizedTheme, solarizedColors } from './solarized';
export { forestTheme, forestColors } from './forest';

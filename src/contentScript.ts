(function () {
    type D2LPlusSettings = {
        darkMode: boolean; // legacy, kept for migration
        theme: 'system' | 'light' | 'dark';
        animations: boolean;
        quickLinks: boolean;
        focusView: boolean;
        hideLegacyNav: boolean;
    };

    const ext = globalThis.browser ?? globalThis.chrome;

    const DEFAULT_SETTINGS: D2LPlusSettings = {
        darkMode: true, // legacy
        theme: 'dark',
        animations: true,
        quickLinks: true,
        focusView: false,
        hideLegacyNav: false,
    };

    const storageArea = ext?.storage?.sync ?? ext?.storage?.local;

    const THEMES = {
        'dark': {
            bgPrimary: '#0a0f14', bgSecondary: '#141820', bgTertiary: '#1b2230',
            textPrimary: '#e6e6e6', textSecondary: '#b0b8c4', textMuted: '#64748b',
            border: '#2a2f36', borderSubtle: '#1f242b',
            accent: '#3b82f6', accentHover: '#60a5fa',
            link: '#8ab4ff', linkHover: '#a8c9ff'
        },
        'midnight': {
            bgPrimary: '#0d1117', bgSecondary: '#161b22', bgTertiary: '#21262d',
            textPrimary: '#c9d1d9', textSecondary: '#8b949e', textMuted: '#6e7681',
            border: '#30363d', borderSubtle: '#21262d',
            accent: '#58a6ff', accentHover: '#79c0ff',
            link: '#58a6ff', linkHover: '#79c0ff'
        },
        'solarized': {
            bgPrimary: '#002b36', bgSecondary: '#073642', bgTertiary: '#094352',
            textPrimary: '#839496', textSecondary: '#93a1a1', textMuted: '#586e75',
            border: '#2aa198', borderSubtle: '#073642',
            accent: '#268bd2', accentHover: '#2aa198',
            link: '#2aa198', linkHover: '#859900'
        },
        'forest': {
            bgPrimary: '#0d1512', bgSecondary: '#13201a', bgTertiary: '#1a2d23',
            textPrimary: '#d4e6db', textSecondary: '#a3c4b0', textMuted: '#5a7a66',
            border: '#2d4a3a', borderSubtle: '#1f3829',
            accent: '#4ade80', accentHover: '#6ee7a0',
            link: '#86efac', linkHover: '#a7f3c5'
        },
        'nord': {
            bgPrimary: '#2e3440', bgSecondary: '#3b4252', bgTertiary: '#434c5e',
            textPrimary: '#eceff4', textSecondary: '#d8dee9', textMuted: '#4c566a',
            border: '#4c566a', borderSubtle: '#434c5e',
            accent: '#88c0d0', accentHover: '#8fbcbb',
            link: '#81a1c1', linkHover: '#88c0d0'
        }
    };

    const DARK_MODE_CSS = `
/* ==============================================
   D2L+ DARK MODE - COMPREHENSIVE STYLES
   ============================================== */

/* Base styles */
.d2lplus-dark,
.d2lplus-dark body,
.d2lplus-dark html {
    background: var(--d2lplus-bg-primary) !important;
    color: var(--d2lplus-text-primary) !important;
}

/* Links */
.d2lplus-dark a,
.d2lplus-dark a:visited {
    color: var(--d2lplus-link) !important;
}
.d2lplus-dark a:hover {
    color: #a8c8ff !important;
}

/* Headings */
.d2lplus-dark .d2l-heading-1,
.d2lplus-dark .d2l-heading-2,
.d2lplus-dark .d2l-heading-3,
.d2lplus-dark .d2l-heading-4,
.d2lplus-dark .d2l-heading-5,
.d2lplus-dark .d2l-heading-6,
.d2lplus-dark h1, .d2lplus-dark h2, .d2lplus-dark h3,
.d2lplus-dark h4, .d2lplus-dark h5, .d2lplus-dark h6 {
    color: #f1f5f9 !important;
}

/* Body text */
.d2lplus-dark .d2l-body,
.d2lplus-dark .d2l-body-small,
.d2lplus-dark .d2l-body-compact,
.d2lplus-dark p,
.d2lplus-dark span,
.d2lplus-dark div,
.d2lplus-dark label {
    color: var(--d2lplus-text-primary) !important;
}

/* ==============================================
   CARDS & WIDGETS
   ============================================== */
.d2lplus-dark .d2l-widget,
.d2lplus-dark .d2l-page-main,
.d2lplus-dark .d2l-page-main-padding,
.d2lplus-dark .d2l-tile,
.d2lplus-dark .d2l-card-container,
.d2lplus-dark .d2l-card,
.d2lplus-dark d2l-card,
.d2lplus-dark d2l-enrollment-card {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* Card borders fix */
.d2lplus-dark .d2l-card-container,
.d2lplus-dark .d2l-card,
.d2lplus-dark d2l-card {
    border: 1px solid var(--d2lplus-border) !important;
    box-shadow: none !important;
}

/* ==============================================
   NAVIGATION
   ============================================== */
.d2lplus-dark .d2l-navigation-s,
.d2lplus-dark .d2l-navigation-s-main-wrapper,
.d2lplus-dark .d2l-navigation-s-item,
.d2lplus-dark .d2l-branding-navigation-background-color,
.d2lplus-dark nav,
.d2lplus-dark .d2l-navigation {
    background: #0f141b !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

.d2lplus-dark .d2l-navigation-s-link,
.d2lplus-dark .d2l-navigation-s-group,
.d2lplus-dark .d2l-navigation-s-group-text {
    color: var(--d2lplus-text-primary) !important;
}

.d2lplus-dark .d2l-navigation-s-link:hover {
    color: #ffffff !important;
}

/* ==============================================
   DROPDOWNS & MENUS
   ============================================== */
.d2lplus-dark d2l-dropdown-content,
.d2lplus-dark d2l-menu,
.d2lplus-dark .d2l-dropdown-menu,
.d2lplus-dark .d2l-menu-item-text,
.d2lplus-dark d2l-dropdown,
.d2lplus-dark d2l-dropdown-menu,
.d2lplus-dark d2l-dropdown-button,
.d2lplus-dark d2l-dropdown-button-subtle,
.d2lplus-dark d2l-dropdown-context-menu,
.d2lplus-dark .d2l-dropdown,
.d2lplus-dark .d2l-menu,
.d2lplus-dark .d2l-menu-item,
.d2lplus-dark [class*="dropdown"],
.d2lplus-dark [class*="menu"] {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

.d2lplus-dark d2l-menu-item,
.d2lplus-dark d2l-menu-item-link,
.d2lplus-dark d2l-menu-item-radio,
.d2lplus-dark d2l-menu-item-checkbox {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
}

.d2lplus-dark d2l-menu-item:hover,
.d2lplus-dark d2l-menu-item-link:hover {
    background: var(--d2lplus-bg-tertiary) !important;
}

/* ==============================================
   HOMEPAGE ELEMENTS
   ============================================== */
.d2lplus-dark .d2l-page-main-padding,
.d2lplus-dark .d2l-homepage,
.d2lplus-dark .homepage-container,
.d2lplus-dark .homepage-row,
.d2lplus-dark .homepage-col-8,
.d2lplus-dark .homepage-col-4,
.d2lplus-dark .homepage-col-12,
.d2lplus-dark .d2l-widget-content,
.d2lplus-dark .d2l-widget-content-padding,
.d2lplus-dark .d2l-homepage-pageheader,
.d2lplus-dark .d2l-box,
.d2lplus-dark .d2l-box-layout,
.d2lplus-dark .d2l-homepage-header-wrapper,
.d2lplus-dark .d2l-widget-header {
    background-color: #0f141b !important;
    color: var(--d2lplus-text-primary) !important;
}

.d2lplus-dark .d2l-widget-content.dls,
.d2lplus-dark .d2l-widget-content.dls * {
    color: var(--d2lplus-text-primary) !important;
}

.d2lplus-dark .d2l-widget-content.dls a {
    color: var(--d2lplus-link) !important;
}

/* ==============================================
   "NEED HELP" SECTION
   ============================================== */
.d2lplus-dark .d2l-help-widget,
.d2lplus-dark [class*="help"],
.d2lplus-dark .d2l-help,
.d2lplus-dark .needhelp,
.d2lplus-dark [class*="support"] {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
}

/* ==============================================
   EMAIL & MESSAGING
   ============================================== */
.d2lplus-dark .d2l-email,
.d2lplus-dark .d2l-pager-email,
.d2lplus-dark [class*="email"],
.d2lplus-dark [class*="mail"],
.d2lplus-dark [class*="message"],
.d2lplus-dark [class*="inbox"],
.d2lplus-dark .d2l-folder,
.d2lplus-dark [class*="folder"],
.d2lplus-dark .d2l-datalist,
.d2lplus-dark .d2l-datalist-item {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* ==============================================
   ePORTFOLIO, SELF-REGISTRATION, SPLS
   ============================================== */
.d2lplus-dark .d2l-collectionbrowser,
.d2lplus-dark [class*="portfolio"],
.d2lplus-dark [class*="registration"],
.d2lplus-dark [class*="spls"],
.d2lplus-dark [class*="task"],
.d2lplus-dark .d2l-page-sidebar,
.d2lplus-dark .d2l-page-sidebars {
    background: #0f141b !important;
    color: var(--d2lplus-text-primary) !important;
}

/* ==============================================
   CONTENT BROWSER & LIBRARY
   ============================================== */
.d2lplus-dark .d2l-content-browser,
.d2lplus-dark [class*="content-browser"],
.d2lplus-dark [class*="library"],
.d2lplus-dark [class*="search"],
.d2lplus-dark .d2l-search,
.d2lplus-dark .d2l-search-input,
.d2lplus-dark d2l-input-search,
.d2lplus-dark d2l-input-text,
.d2lplus-dark input[type="text"],
.d2lplus-dark input[type="search"] {
    background: var(--d2lplus-bg-tertiary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* ==============================================
   CLASS UPDATES & ACTIVITY FEED
   ============================================== */
.d2lplus-dark .d2l-activity,
.d2lplus-dark [class*="activity"],
.d2lplus-dark [class*="update"],
.d2lplus-dark [class*="feed"],
.d2lplus-dark [class*="news"],
.d2lplus-dark .d2l-datalist,
.d2lplus-dark .d2l-list,
.d2lplus-dark d2l-list,
.d2lplus-dark d2l-list-item {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* ==============================================
   CALENDAR
   ============================================== */
.d2lplus-dark .d2l-calendar,
.d2lplus-dark [class*="calendar"],
.d2lplus-dark .d2l-le,
.d2lplus-dark .d2l-le-calendar,
.d2lplus-dark d2l-calendar,
.d2lplus-dark .fc,
.d2lplus-dark .fc-view,
.d2lplus-dark .fc-day,
.d2lplus-dark .fc-daygrid,
.d2lplus-dark .fc-header-toolbar,
.d2lplus-dark table.fc-scrollgrid {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

.d2lplus-dark .fc-day-today {
    background: var(--d2lplus-bg-tertiary) !important;
}

.d2lplus-dark .fc-event,
.d2lplus-dark .fc-event-title {
    background: var(--d2lplus-accent) !important;
    color: #ffffff !important;
    border-color: #1d4ed8 !important;
}

/* ==============================================
   QUIZZES
   ============================================== */
.d2lplus-dark .d2l-quiz,
.d2lplus-dark [class*="quiz"],
.d2lplus-dark .d2l-questions,
.d2lplus-dark [class*="question"],
.d2lplus-dark .d2l-qb,
.d2lplus-dark .d2l-question-text,
.d2lplus-dark .d2l-answer,
.d2lplus-dark [class*="answer"] {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* ==============================================
   GRADES
   ============================================== */
.d2lplus-dark .d2l-grades,
.d2lplus-dark [class*="grade"],
.d2lplus-dark .d2l-grade-item,
.d2lplus-dark .d_ggl1,
.d2lplus-dark .d_gl,
.d2lplus-dark .d_gt,
.d2lplus-dark .d_gn,
.d2lplus-dark .d_go,
.d2lplus-dark .d_gf {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* ==============================================
   TABLES
   ============================================== */
.d2lplus-dark table,
.d2lplus-dark .d2l-table,
.d2lplus-dark .d2l-table-wrapper,
.d2lplus-dark d2l-table-wrapper,
.d2lplus-dark thead,
.d2lplus-dark tbody,
.d2lplus-dark tfoot,
.d2lplus-dark tr,
.d2lplus-dark th,
.d2lplus-dark td {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

.d2lplus-dark th {
    background: var(--d2lplus-bg-tertiary) !important;
}

.d2lplus-dark tr:hover {
    background: var(--d2lplus-bg-tertiary) !important;
}

/* Alternating row colors */
.d2lplus-dark tr:nth-child(even) {
    background: var(--d2lplus-bg-secondary) !important;
}

/* ==============================================
   LEGACY D2L CLASSES
   ============================================== */
.d2lplus-dark body#d2l_body,
.d2lplus-dark #d_content,
.d2lplus-dark #d_content_inner,
.d2lplus-dark #d_content_r,
.d2lplus-dark #d_content_r_p,
.d2lplus-dark .dco,
.d2lplus-dark .dco_c,
.d2lplus-dark .d_ma,
.d2lplus-dark .d_gh,
.d2lplus-dark .d_ggl1,
.d2lplus-dark .d_gt,
.d2lplus-dark .d_hch,
.d2lplus-dark .d2l-grid-wrapper,
.d2lplus-dark .d2l-grid {
    background-color: #0f141b !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* ==============================================
   HTML BLOCKS & TEXT
   ============================================== */
.d2lplus-dark .d2l-htmlblock-untrusted,
.d2lplus-dark .d2l-htmlblock-inline,
.d2lplus-dark .d2l-htmlblock-wc,
.d2lplus-dark .d2l-textblock,
.d2lplus-dark .d2l-textblock-secondary,
.d2lplus-dark .d2l-linkheading-link,
.d2lplus-dark .d2l-homepage-heading-link,
.d2lplus-dark .d2l-link,
.d2lplus-dark .d2l-link-inline {
    color: var(--d2lplus-text-primary) !important;
}

/* ==============================================
   FORMS & INPUTS
   ============================================== */
.d2lplus-dark input,
.d2lplus-dark textarea,
.d2lplus-dark select,
.d2lplus-dark button,
.d2lplus-dark .d2l-input,
.d2lplus-dark d2l-input,
.d2lplus-dark d2l-button,
.d2lplus-dark d2l-button-subtle,
.d2lplus-dark .d2l-button {
    background: var(--d2lplus-bg-tertiary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

.d2lplus-dark input:focus,
.d2lplus-dark textarea:focus,
.d2lplus-dark select:focus {
    border-color: var(--d2lplus-accent) !important;
    outline-color: var(--d2lplus-accent) !important;
}

/* Primary buttons keep their accent color */
.d2lplus-dark d2l-button[primary],
.d2lplus-dark .d2l-button-primary {
    background: var(--d2lplus-accent) !important;
    color: #ffffff !important;
    border-color: #1d4ed8 !important;
}

/* ==============================================
   DIALOGS & MODALS
   ============================================== */
.d2lplus-dark .d2l-dialog,
.d2lplus-dark d2l-dialog,
.d2lplus-dark d2l-dialog-fullscreen,
.d2lplus-dark [class*="dialog"],
.d2lplus-dark [class*="modal"],
.d2lplus-dark .d2l-overlay {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* ==============================================
   TOOLTIPS & POPOVERS
   ============================================== */
.d2lplus-dark .d2l-tooltip,
.d2lplus-dark d2l-tooltip,
.d2lplus-dark [class*="tooltip"],
.d2lplus-dark [class*="popover"] {
    background: var(--d2lplus-bg-tertiary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* ==============================================
   ALERTS & NOTIFICATIONS
   ============================================== */
.d2lplus-dark .d2l-alert,
.d2lplus-dark d2l-alert,
.d2lplus-dark [class*="alert"],
.d2lplus-dark [class*="notification"] {
    background: var(--d2lplus-bg-tertiary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* ==============================================
   ICONS & IMAGES
   ============================================== */
.d2lplus-dark .d2l-icon,
.d2lplus-dark d2l-icon,
.d2lplus-dark svg {
    fill: var(--d2lplus-text-primary) !important;
    color: var(--d2lplus-text-primary) !important;
}

/* ==============================================
   INLINE STYLE OVERRIDES
   ============================================== */
.d2lplus-dark [style*="color:#000"],
.d2lplus-dark [style*="color: #000"],
.d2lplus-dark [style*="color:#000000"],
.d2lplus-dark [style*="color: #000000"],
.d2lplus-dark [style*="color:black"],
.d2lplus-dark [style*="color: black"],
.d2lplus-dark [style*="color: rgb(0, 0, 0)"],
.d2lplus-dark [style*="color:rgb(0,0,0)"] {
    color: var(--d2lplus-text-primary) !important;
}

.d2lplus-dark [style*="background-color:#FfF"],
.d2lplus-dark [style*="background-color: #FFF"],
.d2lplus-dark [style*="background-color:#fff"],
.d2lplus-dark [style*="background-color: #fff"],
.d2lplus-dark [style*="background-color:#FFFFFF"],
.d2lplus-dark [style*="background-color: #FFFFFF"],
.d2lplus-dark [style*="background-color:#ffffff"],
.d2lplus-dark [style*="background-color: #ffffff"],
.d2lplus-dark [style*="background-color: rgb(255, 255, 255)"],
.d2lplus-dark [style*="background-color: rgb(255,255,255)"],
.d2lplus-dark [style*="background-color:white"],
.d2lplus-dark [style*="background-color: white"],
.d2lplus-dark [style*="background:#FFF"],
.d2lplus-dark [style*="background: #FFF"],
.d2lplus-dark [style*="background:#fff"],
.d2lplus-dark [style*="background: #fff"],
.d2lplus-dark [style*="background:#FFFFFF"],
.d2lplus-dark [style*="background: #FFFFFF"],
.d2lplus-dark [style*="background:#ffffff"],
.d2lplus-dark [style*="background: #ffffff"],
.d2lplus-dark [style*="background: rgb(255, 255, 255)"],
.d2lplus-dark [style*="background: rgb(255,255,255)"],
.d2lplus-dark [style*="background:white"],
.d2lplus-dark [style*="background: white"],
.d2lplus-dark [style*="background-color: rgb(255, 255, 255)"],
.d2lplus-dark [style*="background-color:rgb(255,255,255)"],
.d2lplus-dark [style*="background: rgb(255, 255, 255)"] {
    background-color: var(--d2lplus-bg-secondary) !important;
    background: var(--d2lplus-bg-secondary) !important;
}

/* ==============================================
   SCROLLBARS
   ============================================== */
.d2lplus-dark ::-webkit-scrollbar {
    width: 10px;
    height: 10px;
}

.d2lplus-dark ::-webkit-scrollbar-track {
    background: var(--d2lplus-bg-primary);
}

.d2lplus-dark ::-webkit-scrollbar-thumb {
    background: var(--d2lplus-border);
    border-radius: 5px;
}

.d2lplus-dark ::-webkit-scrollbar-thumb:hover {
    background: #374151;
}

/* ==============================================
   IFRAMES (partial support)
   ============================================== */
.d2lplus-dark iframe {
    border-color: var(--d2lplus-border) !important;
}

/* ==============================================
   SPECIFIC D2L WEB COMPONENTS
   ============================================== */
.d2lplus-dark d2l-breadcrumb,
.d2lplus-dark d2l-breadcrumbs,
.d2lplus-dark d2l-tab,
.d2lplus-dark d2l-tabs,
.d2lplus-dark d2l-tab-panel,
.d2lplus-dark d2l-loading-spinner,
.d2lplus-dark d2l-status-indicator,
.d2lplus-dark d2l-expand-collapse-content {
    background: transparent !important;
    color: var(--d2lplus-text-primary) !important;
}

.d2lplus-dark d2l-tab[selected],
.d2lplus-dark d2l-tab:hover {
    background: var(--d2lplus-bg-tertiary) !important;
}

/* ==============================================
   NEED HELP WIDGET (Force light text)
   ============================================== */
.d2lplus-dark .d2l-widget[data-widget-type*="help"],
.d2lplus-dark .homepage-col-4 .d2l-widget:last-child,
.d2lplus-dark [class*="NeedHelp"],
.d2lplus-dark [class*="needhelp"],
.d2lplus-dark [class*="need-help"] {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
}

.d2lplus-dark .d2l-widget .d2l-htmlblock *,
.d2lplus-dark .d2l-widget-content .d2l-htmlblock *,
.d2lplus-dark .homepage-col-4 * {
    color: var(--d2lplus-text-primary) !important;
}

/* ==============================================
   CALENDAR SIDEBAR & MINI CALENDAR
   ============================================== */
.d2lplus-dark .d2l-calendar-mini,
.d2lplus-dark .d2l-minibar,
.d2lplus-dark [class*="mini-cal"],
.d2lplus-dark [class*="calendar-mini"],
.d2lplus-dark [class*="calendar-sidebar"],
.d2lplus-dark .d2l-datepicker,
.d2lplus-dark d2l-calendar {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

.d2lplus-dark .d2l-calendar-mini table,
.d2lplus-dark .d2l-calendar-mini td,
.d2lplus-dark .d2l-calendar-mini th {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
}

/* ==============================================
   EMAIL TABLE HEADERS & SEARCH
   ============================================== */
.d2lplus-dark .d2l-pager-container,
.d2lplus-dark .d2l-filter,
.d2lplus-dark .d2l-filter-container,
.d2lplus-dark .d2l-table-header,
.d2lplus-dark .d2l-header-row,
.d2lplus-dark [class*="header-row"],
.d2lplus-dark [class*="filter"] {
    background: var(--d2lplus-bg-tertiary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* ==============================================
   LEGACY D2L PAGES (d2l_body containers)
   ============================================== */
.d2lplus-dark .d2l_1,
.d2lplus-dark .d2l_2,
.d2lplus-dark .d2l-page,
.d2lplus-dark .d2l-page-content,
.d2lplus-dark ._d2l-body,
.d2lplus-dark .d2l-twopanelselector,
.d2lplus-dark .d2l-twopanelselector-side,
.d2lplus-dark .d2l-twopanelselector-main,
.d2lplus-dark .d2l-collapsiblepane,
.d2lplus-dark .d2l-collapsiblepane-header,
.d2lplus-dark .d2l-collapsiblepane-content {
    background: #0f141b !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* Legacy gray backgrounds */
.d2lplus-dark .d_ich,
.d2lplus-dark .d_ic,
.d2lplus-dark .d_ie,
.d2lplus-dark .d_if,
.d2lplus-dark .d_ig,
.d2lplus-dark .d_il,
.d2lplus-dark .d_it {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
}

/* ==============================================
   SELF REGISTRATION & SPLS SPECIFIC
   ============================================== */
.d2lplus-dark .d2l-form,
.d2lplus-dark .d2l-form-container,
.d2lplus-dark [class*="self-reg"],
.d2lplus-dark [class*="selfreg"],
.d2lplus-dark #SelfRegMainDiv,
.d2lplus-dark #SelfRegForm,
.d2lplus-dark .d2l-checkbox-label,
.d2lplus-dark .d2l-radio-label {
    background: #0f141b !important;
    color: var(--d2lplus-text-primary) !important;
}

/* ==============================================
   CONTENT VIEWER & MODULES
   ============================================== */
.d2lplus-dark .d2l-le-content,
.d2lplus-dark .d2l-le-lessonDisplay,
.d2lplus-dark .d2l-unit,
.d2lplus-dark .d2l-module,
.d2lplus-dark [class*="content-view"],
.d2lplus-dark [class*="content-viewer"],
.d2lplus-dark [class*="module-list"],
.d2lplus-dark [class*="topic-list"] {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* ==============================================
   ASSIGNMENTS & DROPBOX
   ============================================== */
.d2lplus-dark .d2l-dropbox,
.d2lplus-dark [class*="dropbox"],
.d2lplus-dark [class*="assignment"],
.d2lplus-dark .d2l-submission,
.d2lplus-dark [class*="submission"] {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* ==============================================
   DISCUSSION BOARDS
   ============================================== */
.d2lplus-dark .d2l-discussion,
.d2lplus-dark [class*="discussion"],
.d2lplus-dark .d2l-post,
.d2lplus-dark [class*="forum"],
.d2lplus-dark [class*="thread"],
.d2lplus-dark [class*="topic"] {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* ==============================================
   FALLBACK: ALL LIGHT BACKGROUNDS
   ============================================== */
.d2lplus-dark [style*="background:#E8"],
.d2lplus-dark [style*="background: #E8"],
.d2lplus-dark [style*="background:#e8"],
.d2lplus-dark [style*="background-color:#E8"],
.d2lplus-dark [style*="background-color: #E8"],
.d2lplus-dark [style*="background:#F"],
.d2lplus-dark [style*="background: #F"],
.d2lplus-dark [style*="background-color:#F"],
.d2lplus-dark [style*="background-color: #F"] {
    background: var(--d2lplus-bg-secondary) !important;
    background-color: var(--d2lplus-bg-secondary) !important;
}

/* Force dark on common light gray colors */
.d2lplus-dark [style*="background-color: #f"],
.d2lplus-dark [style*="background-color:#f"],
.d2lplus-dark [style*="background:#f"],
.d2lplus-dark [style*="background: #f"],
.d2lplus-dark [style*="background-color:rgb(24"],
.d2lplus-dark [style*="background-color: rgb(24"],
.d2lplus-dark [style*="background-color:rgb(25"],
.d2lplus-dark [style*="background-color: rgb(25"] {
    background: var(--d2lplus-bg-secondary) !important;
    background-color: var(--d2lplus-bg-secondary) !important;
}

/* ==============================================
   EMAIL PAGE SPECIFIC
   ============================================== */
.d2lplus-dark .d2l-datalist-container,
.d2lplus-dark .d2l-datalist,
.d2lplus-dark .d_tl,
.d2lplus-dark .d_t,
.d2lplus-dark .d_th,
.d2lplus-dark .d_tn,
.d2lplus-dark .d_tch,
.d2lplus-dark .d_tc,
.d2lplus-dark .d2l-select,
.d2lplus-dark .d2l-selectmenu,
.d2lplus-dark #z_b,
.d2lplus-dark #z_a,
.d2lplus-dark #z_c,
.d2lplus-dark #z_bc,
.d2lplus-dark .d_tch,
.d2lplus-dark [id^="z_"],
.d2lplus-dark .d_toolbar {
    background: var(--d2lplus-bg-secondary) !important;
    background-color: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* Email table headers */
.d2lplus-dark .d_gh,
.d2lplus-dark .d_gch,
.d2lplus-dark .d_gl,
.d2lplus-dark .d_grh {
    background: var(--d2lplus-bg-tertiary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* Email folder list */
.d2lplus-dark .d2l-tree,
.d2lplus-dark .d2l-tree-item,
.d2lplus-dark .d2l-tree-target,
.d2lplus-dark [class*="folder"],
.d2lplus-dark [class*="tree"] {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
}

/* ==============================================
   AGGRESSIVE BODY OVERRIDES FOR LEGACY PAGES
   ============================================== */
.d2lplus-dark body,
.d2lplus-dark body.d2l-body,
.d2lplus-dark body#d2l_body,
.d2lplus-dark body.d2l_body,
.d2lplus-dark .d2l-page-frame,
.d2lplus-dark .d2l_body,
.d2lplus-dark .d_body,
.d2lplus-dark ._d2l-body,
.d2lplus-dark #ContentView,
.d2lplus-dark #MainContent,
.d2lplus-dark #MainContentArea,
.d2lplus-dark #ContentArea,
.d2lplus-dark #d2l_body,
.d2lplus-dark .d2l-page-main-content,
.d2lplus-dark main,
.d2lplus-dark article,
.d2lplus-dark section,
.d2lplus-dark aside,
.d2lplus-dark header,
.d2lplus-dark footer {
    background: #0f141b !important;
    background-color: #0f141b !important;
    color: var(--d2lplus-text-primary) !important;
}

/* Force all divs, spans, paragraphs to have correct colors */
.d2lplus-dark body * {
    border-color: var(--d2lplus-border) !important;
}

/* ==============================================
   SELF REGISTRATION PAGE
   ============================================== */
.d2lplus-dark .d2l-fieldgroup,
.d2lplus-dark .d2l-fieldset,
.d2lplus-dark fieldset,
.d2lplus-dark legend,
.d2lplus-dark .vui-field-row,
.d2lplus-dark .vui-composite,
.d2lplus-dark #z_selfregform,
.d2lplus-dark .d2l-checkbox,
.d2lplus-dark .d2l-radio {
    background: #0f141b !important;
    color: var(--d2lplus-text-primary) !important;
}

/* ==============================================
   SPLS & LTI PAGES (inside iframes)
   ============================================== */
.d2lplus-dark .d2l-external-tool,
.d2lplus-dark .d2l-lti-tool,
.d2lplus-dark [class*="lti"],
.d2lplus-dark [class*="external"] {
    background: #0f141b !important;
    color: var(--d2lplus-text-primary) !important;
}

/* ==============================================
   AGGRESSIVE TABLE STYLING
   ============================================== */
.d2lplus-dark table *,
.d2lplus-dark .d2l-table *,
.d2lplus-dark .d_gl *,
.d2lplus-dark .d_gt * {
    background-color: inherit !important;
    color: var(--d2lplus-text-primary) !important;
}

.d2lplus-dark table a,
.d2lplus-dark .d2l-table a {
    color: var(--d2lplus-link) !important;
}

/* ==============================================
   CONTENT PAGES (le/content)
   ============================================== */
.d2lplus-dark .d2l-le-content,
.d2lplus-dark .d2l-collapsepane,
.d2lplus-dark .d2l-collapsepane-content,
.d2lplus-dark .d2l-collapsepane-header,
.d2lplus-dark .d2l-collapsepane-container,
.d2lplus-dark .d2l-collapsible-content,
.d2lplus-dark [class*="collapsepane"],
.d2lplus-dark [class*="collapsible"],
.d2lplus-dark .d2l-le-lessonDisplay,
.d2lplus-dark .d2l-floatingcontainer,
.d2lplus-dark d2l-floating-container,
.d2lplus-dark [class*="floating-container"] {
    background: var(--d2lplus-bg-secondary) !important;
    background-color: var(--d2lplus-bg-secondary) !important;
    background-image: none !important;
    color: var(--d2lplus-text-primary) !important;
}

/* Content headers - remove gradient overlays */
.d2lplus-dark .d2l-le-content-header,
.d2lplus-dark .d2l-content-header,
.d2lplus-dark [class*="content-header"],
.d2lplus-dark .d2l-lesson-header {
    background: var(--d2lplus-bg-tertiary) !important;
    background-image: none !important;
    color: var(--d2lplus-text-primary) !important;
}

/* Table of Contents sidebar */
.d2lplus-dark .d2l-sidebar,
.d2lplus-dark .d2l-le-sidebar,
.d2lplus-dark [class*="sidebar"],
.d2lplus-dark .d2l-toc,
.d2lplus-dark [class*="toc"],
.d2lplus-dark .d2l-le-TreeAccordion {
    background: #0f141b !important;
    color: var(--d2lplus-text-primary) !important;
}

/* Selected item in sidebar - fix weird white effect */
.d2lplus-dark .d2l-le-TreeAccordionItem.d2l-current,
.d2lplus-dark .d2l-le-TreeAccordionItem:hover,
.d2lplus-dark .d2l-le-TreeAccordionItem-Selected,
.d2lplus-dark .d2l-le-TreeAccordionItem-SelectedRoot,
.d2lplus-dark [class*="TreeAccordionItem-Selected"],
.d2lplus-dark [class*="selected"],
.d2lplus-dark [class*="current"],
.d2lplus-dark [aria-selected="true"] {
    background: var(--d2lplus-bg-tertiary) !important;
    background-color: var(--d2lplus-bg-tertiary) !important;
    background-image: none !important;
    color: #ffffff !important;
}

/* Content browser list items */
.d2lplus-dark .ddl_li_c,
.d2lplus-dark .d2l-datalist-item,
.d2lplus-dark [class*="datalist-item"] {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
}

/* Content browser hover - fix weird hover color */
.d2lplus-dark .ddl_li_c:hover,
.d2lplus-dark .d2l-datalist-item:hover,
.d2lplus-dark [class*="datalist-item"]:hover,
.d2lplus-dark .d2l-le-TreeAccordionItem-anchor:hover {
    background: var(--d2lplus-bg-tertiary) !important;
    background-color: var(--d2lplus-bg-tertiary) !important;
}

/* Card widgets - remove white box-shadow borders */
.d2lplus-dark .d2l-widget,
.d2lplus-dark .d2l-widget.d2l-tile,
.d2lplus-dark .d2l-tile,
.d2lplus-dark [class*="widget"],
.d2lplus-dark [class*="tile"] {
    background: var(--d2lplus-bg-secondary) !important;
    border: 1px solid var(--d2lplus-border) !important;
    box-shadow: none !important;
}

/* ==============================================
   NEED HELP SECTION - EXPLICIT TEXT COLORS
   ============================================== */
.d2lplus-dark .d2l-widget-content-padding,
.d2lplus-dark .d2l-widget-content-padding *,
.d2lplus-dark .d2l-widget-content,
.d2lplus-dark .d2l-widget-content *,
.d2lplus-dark .d2l-htmlblock,
.d2lplus-dark .d2l-htmlblock *,
.d2lplus-dark .d2l-widget div,
.d2lplus-dark .d2l-widget span,
.d2lplus-dark .d2l-widget p,
.d2lplus-dark .d2l-widget li,
.d2lplus-dark .d2l-widget label,
.d2lplus-dark .d2l-widget strong,
.d2lplus-dark .d2l-widget b,
.d2lplus-dark .d2l-widget small {
    color: var(--d2lplus-text-primary) !important;
}

/* Progress bars */
.d2lplus-dark .d2l-progress,
.d2lplus-dark .d2l-progress-bar,
.d2lplus-dark .d2l-progress-container,
.d2lplus-dark [class*="progress-bar"],
.d2lplus-dark [class*="progress-container"],
.d2lplus-dark d2l-meter-linear,
.d2lplus-dark d2l-meter-circle {
    background: var(--d2lplus-bg-tertiary) !important;
    color: var(--d2lplus-text-primary) !important;
}

/* ==============================================
   ePORTFOLIO SPECIFIC
   ============================================== */
.d2lplus-dark .d2l-eportfolio,
.d2lplus-dark [class*="eportfolio"],
.d2lplus-dark [class*="portfolio"],
.d2lplus-dark .d2l-ep,
.d2lplus-dark .ep-,
.d2lplus-dark [class^="ep-"],
.d2lplus-dark .d2l-collection,
.d2lplus-dark [class*="collection"] {
    background: #0f141b !important;
    background-color: #0f141b !important;
    color: var(--d2lplus-text-primary) !important;
}

/* ==============================================
   CALENDAR SPECIFIC
   ============================================== */
.d2lplus-dark .d2l-calendar-widget,
.d2lplus-dark .d2l-calendar-container,
.d2lplus-dark .d2l-calendar-day,
.d2lplus-dark .d2l-calendar-week,
.d2lplus-dark .d2l-calendar-month,
.d2lplus-dark [class*="calendar"],
.d2lplus-dark .fc,
.d2lplus-dark .fc-theme-standard,
.d2lplus-dark .fc-scrollgrid,
.d2lplus-dark .fc-col-header,
.d2lplus-dark .fc-daygrid-body,
.d2lplus-dark .fc-timegrid,
.d2lplus-dark .fc-list {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

.d2lplus-dark .fc-col-header-cell,
.d2lplus-dark .fc-daygrid-day,
.d2lplus-dark .fc-timegrid-slot {
    background: var(--d2lplus-bg-secondary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* Calendar toolbar buttons (Agenda, Day, Week, Month) */
.d2lplus-dark .vui-button,
.d2lplus-dark .d2l-button,
.d2lplus-dark .d2l-button-filter,
.d2lplus-dark [class*="vui-button"],
.d2lplus-dark button.vui-button {
    background: var(--d2lplus-bg-tertiary) !important;
    background-color: var(--d2lplus-bg-tertiary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

.d2lplus-dark .vui-button:hover,
.d2lplus-dark .d2l-button:hover {
    background: #2a3442 !important;
}

.d2lplus-dark .d2l-button-filter-selected,
.d2lplus-dark .vui-button.vui-pressed,
.d2lplus-dark .vui-button.d2l-button-filter-selected {
    background: var(--d2lplus-accent) !important;
    color: #ffffff !important;
}

/* Calendar navigation arrows < > */
.d2lplus-dark .d2l-iterator-button,
.d2lplus-dark .d2l-iterator-button-prev,
.d2lplus-dark .d2l-iterator-button-next,
.d2lplus-dark [class*="iterator-button"],
.d2lplus-dark button[aria-label*="Previous"],
.d2lplus-dark button[aria-label*="Next"] {
    background: var(--d2lplus-bg-tertiary) !important;
    background-color: var(--d2lplus-bg-tertiary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

.d2lplus-dark .d2l-iterator-button:hover {
    background: #2a3442 !important;
}

/* Today button */
.d2lplus-dark button[aria-label*="Today"],
.d2lplus-dark .d2l-today-button {
    background: var(--d2lplus-bg-tertiary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* ==============================================
   NEED HELP SECTION (text visibility fix)
   ============================================== */
.d2lplus-dark .d2l-widget,
.d2lplus-dark .d2l-widget-content {
    color: var(--d2lplus-text-primary) !important;
}

/* Force all text inside widgets to be light */
.d2lplus-dark .d2l-widget *,
.d2lplus-dark .d2l-widget div,
.d2lplus-dark .d2l-widget span,
.d2lplus-dark .d2l-widget p,
.d2lplus-dark .d2l-widget li,
.d2lplus-dark .d2l-widget label,
.d2lplus-dark .d2l-widget small,
.d2lplus-dark .d2l-widget strong,
.d2lplus-dark .d2l-widget em,
.d2lplus-dark .d2l-widget b {
    color: var(--d2lplus-text-primary) !important;
}

/* Need Help specific text */
.d2lplus-dark .d2l-htmlblock,
.d2lplus-dark .d2l-htmlblock *,
.d2lplus-dark [class*="htmlblock"] * {
    color: var(--d2lplus-text-primary) !important;
}

/* ==============================================
   CARD EDGES (border fix)
   ============================================== */
.d2lplus-dark d2l-card,
.d2lplus-dark .d2l-card,
.d2lplus-dark [class*="card"] {
    border: 1px solid var(--d2lplus-border) !important;
    box-shadow: none !important;
}

/* Remove white glow/shadow from cards */
.d2lplus-dark d2l-card::before,
.d2lplus-dark d2l-card::after,
.d2lplus-dark .d2l-card::before,
.d2lplus-dark .d2l-card::after {
    display: none !important;
}

/* ==============================================
   NAVBAR STRIP FIX (NUCLEAR OPTION V2)
   ============================================== */
/* V3: NEUTRALIZE THE TERTIARY VARIABLE ITSELF */
.d2lplus-dark .d2l-navigation-s-item,
.d2lplus-dark .d2l-navigation-s-group,
.d2lplus-dark .d2l-navigation-s-separator,
.d2lplus-dark [class*="d2l-navigation-s-"],
.d2lplus-dark .d2l-navigation-s-placeholder,
.d2lplus-dark d2l-navigation-main-header,
.d2lplus-dark d2l-navigation-main-footer,
.d2lplus-dark .d2l-navigation-shadow-drop-border,
.d2lplus-dark [class*="d2l-navigation"]::before,
.d2lplus-dark [class*="d2l-navigation"]::after {
    /* Neutralize the specific variable causing issues */
    --d2lplus-bg-tertiary: transparent !important;
    
    background: transparent !important;
    background-color: transparent !important;
    border: none !important;
    box-shadow: none !important;
    background-image: none !important;
    mask: none !important;
    -webkit-mask: none !important;
}

/* ==============================================
   DROPDOWN CONTENT TRANSPARENCY FIX
   Targeting user-provided structure
   ============================================== */
.d2lplus-dark d2l-dropdown-content,
.d2lplus-dark .d2l-placeholder,
.d2lplus-dark .d2l-placeholder-live,
.d2lplus-dark d2l-labs-navigation-dropdown-button-icon {
    --d2lplus-bg-tertiary: transparent !important;
    background: transparent !important;
    background-color: transparent !important;
    box-shadow: none !important;
}

/* Ensure only the MAIN container has background (if needed) but let's trust the body background or global theme var */
.d2lplus-dark d2l-navigation-main-header {
    background-color: var(--d2lplus-bg-secondary) !important;
}

/* ==============================================
   LIST & CONTENT BROWSER FIX (Forest Theme)
   ============================================== */
/* Aggressively clear backgrounds on all list items to fix "Green Block" glitch */
.d2lplus-dark .d2l-list,
.d2lplus-dark .d2l-list-item,
.d2lplus-dark .d2l-datalist,
.d2lplus-dark .d2l-datalist-item,
.d2lplus-dark d2l-list-item,
.d2lplus-dark d2l-list,
.d2lplus-dark [class*="d2l-list"],
.d2lplus-dark [class*="d2l-datalist"] {
    /* Neutralize the tertiary variable here too */
    --d2lplus-bg-tertiary: transparent !important;

    background: transparent !important;
    background-color: transparent !important;
    border-color: var(--d2lplus-border) !important;
    color: var(--d2lplus-text-primary) !important;
}

/* Fix specific 'Content Browser' green block issue */
.d2lplus-dark .d2l-collapsepane-content,
.d2lplus-dark .d2l-collapsepane-header {
    background: var(--d2lplus-bg-secondary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* ==============================================
   TOP NAVBAR NOTIFICATION ICONS (enhanced)
   ============================================== */
.d2lplus-dark button[aria-label*="alerts"],
.d2lplus-dark button[aria-label*="course"],
.d2lplus-dark button[aria-label*="Message"],
.d2lplus-dark button[aria-label*="Subscription"],
.d2lplus-dark button[aria-label*="Update"] {
    background: transparent !important;
    color: var(--d2lplus-text-primary) !important;
}

.d2lplus-dark button[aria-label*="alerts"]:hover,
.d2lplus-dark button[aria-label*="course"]:hover,
.d2lplus-dark button[aria-label*="Message"]:hover,
.d2lplus-dark button[aria-label*="Subscription"]:hover,
.d2lplus-dark button[aria-label*="Update"]:hover {
    background: var(--d2lplus-bg-tertiary) !important;
    border-radius: 4px;
}

/* Icon SVG colors */
.d2lplus-dark button[aria-label*="alerts"] svg,
.d2lplus-dark button[aria-label*="course"] svg,
.d2lplus-dark svg[class*="icon"],
.d2lplus-dark .d2l-icon {
    fill: var(--d2lplus-text-primary) !important;
    color: var(--d2lplus-text-primary) !important;
}

/* ==============================================
   NAVIGATION MINIBAR & ICONS
   ============================================== */
.d2lplus-dark .d2l-navigation-s-header,
.d2lplus-dark .d2l-navigation-main-header,
.d2lplus-dark d2l-navigation-main-header,
.d2lplus-dark .d2l-navigation-header,
.d2lplus-dark .d2l-branding-navigation-header-background-color {
    background: var(--d2lplus-bg-primary) !important;
    background-color: var(--d2lplus-bg-primary) !important;
}

/* Notification/alert icons in minibar */
.d2lplus-dark .d2l-navigation-s-personal-menu,
.d2lplus-dark .d2l-navigation-button-icon,
.d2lplus-dark d2l-navigation-button-notification-icon,
.d2lplus-dark d2l-navigation-link-icon,
.d2lplus-dark [class*="notification-icon"],
.d2lplus-dark [class*="alert-icon"] {
    background: transparent !important;
    color: var(--d2lplus-text-primary) !important;
}

/* Dropdown opened from minibar */
.d2lplus-dark .d2l-navigation-s-dropdown,
.d2lplus-dark d2l-navigation-dropdown,
.d2lplus-dark .d2l-navigation-notification-popover,
.d2lplus-dark [class*="popover"],
.d2lplus-dark [class*="notification"] {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* ==============================================
   ALL INPUTS & SEARCH BOXES
   ============================================== */
.d2lplus-dark input.d2l-input,
.d2lplus-dark .d2l-input,
.d2lplus-dark input[type="text"],
.d2lplus-dark input[type="search"],
.d2lplus-dark input[type="email"],
.d2lplus-dark input[type="password"],
.d2lplus-dark input[type="number"],
.d2lplus-dark .d2l-textinput,
.d2lplus-dark textarea,
.d2lplus-dark select {
    background: var(--d2lplus-bg-tertiary) !important;
    background-color: var(--d2lplus-bg-tertiary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* ==============================================
   FLOATING CONTAINERS & PANELS
   ============================================== */
.d2lplus-dark d2l-floating-container,
.d2lplus-dark .d2l-floating-container,
.d2lplus-dark [class*="floating"],
.d2lplus-dark .d2l-panel,
.d2lplus-dark [class*="-panel"],
.d2lplus-dark .d2l-offscreen,
.d2lplus-dark .d2l-off-screen {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* ==============================================
   VERY AGGRESSIVE OVERRIDES
   ============================================== */
/* Reset any white gradients */
.d2lplus-dark *[style*="linear-gradient"],
.d2lplus-dark *[style*="radial-gradient"] {
    background-image: none !important;
}

/* Override any remaining white/light backgrounds */
.d2lplus-dark *[style*="background: white"],
.d2lplus-dark *[style*="background:white"],
.d2lplus-dark *[style*="background-color: white"],
.d2lplus-dark *[style*="background-color:white"],
.d2lplus-dark *[style*="background: #fff"],
.d2lplus-dark *[style*="background:#fff"],
.d2lplus-dark *[style*="background-color: #fff"],
.d2lplus-dark *[style*="background-color:#fff"] {
    background: var(--d2lplus-bg-secondary) !important;
    background-color: var(--d2lplus-bg-secondary) !important;
}

/* ==============================================
   NUCLEAR TEXT COLOR OVERRIDE
   Force ALL text to be light in dark mode
   ============================================== */
.d2lplus-dark,
.d2lplus-dark body,
.d2lplus-dark div,
.d2lplus-dark span,
.d2lplus-dark p,
.d2lplus-dark li,
.d2lplus-dark ul,
.d2lplus-dark ol,
.d2lplus-dark label,
.d2lplus-dark strong,
.d2lplus-dark b,
.d2lplus-dark em,
.d2lplus-dark i,
.d2lplus-dark small,
.d2lplus-dark td,
.d2lplus-dark th,
.d2lplus-dark h1,
.d2lplus-dark h2,
.d2lplus-dark h3,
.d2lplus-dark h4,
.d2lplus-dark h5,
.d2lplus-dark h6,
.d2lplus-dark dt,
.d2lplus-dark dd,
.d2lplus-dark address,
.d2lplus-dark blockquote,
.d2lplus-dark pre,
.d2lplus-dark code,
.d2lplus-dark figcaption,
.d2lplus-dark caption,
.d2lplus-dark legend {
    color: var(--d2lplus-text-primary) !important;
}

/* But keep link colors visible */
.d2lplus-dark a,
.d2lplus-dark a:visited {
    color: var(--d2lplus-link) !important;
}

.d2lplus-dark a:hover {
    color: #a5c8ff !important;
}

/* ==============================================
   NUCLEAR HOVER FIX
   All hover states should be dark
   ============================================== */
.d2lplus-dark *:hover {
    background-color: inherit;
}

.d2lplus-dark li:hover,
.d2lplus-dark tr:hover,
.d2lplus-dark .d2l-datalist-item:hover,
.d2lplus-dark .ddl_li_c:hover,
.d2lplus-dark [class*="list-item"]:hover,
.d2lplus-dark [class*="TreeAccordion"]:hover,
.d2lplus-dark a:hover {
    background: var(--d2lplus-bg-tertiary) !important;
    background-color: var(--d2lplus-bg-tertiary) !important;
}

/* ==============================================
   ePORTFOLIO SPECIFIC ELEMENTS
   ============================================== */
.d2lplus-dark .d2l-user-profile-card,
.d2lplus-dark .d2l-profile-card,
.d2lplus-dark [class*="profile-card"],
.d2lplus-dark .d2l-fileinput,
.d2lplus-dark .d2l-file-input,
.d2lplus-dark [class*="fileinput"],
.d2lplus-dark .d2l-placeholder,
.d2lplus-dark [class*="placeholder"],
.d2lplus-dark .d2l-newsfeed,
.d2lplus-dark [class*="newsfeed"],
.d2lplus-dark .d2l-ep-container,
.d2lplus-dark .d2l-ep-dashboard,
.d2lplus-dark .d2l-ep-sidebar,
.d2lplus-dark .d2l-ep-content {
    background: var(--d2lplus-bg-secondary) !important;
    background-color: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* ==============================================
   Heading/Widget Header Fixes
   ============================================== */
.d2lplus-dark .d2l-homepage-header-wrapper .d2l-heading,
.d2lplus-dark .d2l-widget-header,
.d2lplus-dark .d2l-collapsepane-header,
.d2lplus-dark .d2l-collapsepane-content {
    background: var(--d2lplus-bg-secondary) !important;
    background-color: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
    border: none !important;
}

/* Specific fix for Announcements heading wrapper */
.d2lplus-dark .d2l-homepage-header-wrapper {
    background: transparent !important;
    border: none !important;
}

/* ==============================================
   CONTENT BROWSER / LEGACY LIST FIX
   Targeting .ddl_c, .vui-list, .dco, etc.
   ============================================== */
.d2lplus-dark .ddl_c,
.d2lplus-dark .ddl_sc,
.d2lplus-dark .vui-list,
.d2lplus-dark .ddl_li_m,
.d2lplus-dark .ddl_li_c,
.d2lplus-dark .ddl_li_b,
.d2lplus-dark .dco,
.d2lplus-dark .dco_c,
.d2lplus-dark .dsr {
    /* Neutralize the specific variable causing issues */
    --d2lplus-bg-tertiary: transparent !important;

    background: transparent !important;
    background-color: transparent !important;
    color: var(--d2lplus-text-primary) !important;
    border: none !important;
    box-shadow: none !important;
}

/* Ensure links in these lists are visible and not weirdly colored */
.d2lplus-dark .ddl_li_c {
    color: var(--d2lplus-text-primary) !important;
}

/* ePortfolio textarea/longedit */
.d2lplus-dark .d2l-longedit,
.d2lplus-dark textarea.d2l-longedit,
.d2lplus-dark [class*="longedit"],
.d2lplus-dark .d2l-reflection,
.d2lplus-dark [class*="reflection"] {
    background: var(--d2lplus-bg-tertiary) !important;
    background-color: var(--d2lplus-bg-tertiary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* ePortfolio image links/containers */
.d2lplus-dark .d2l-imagelink,
.d2lplus-dark [class*="imagelink"],
.d2lplus-dark .d2l-image-container,
.d2lplus-dark [class*="image-container"] {
    background: var(--d2lplus-bg-secondary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* ePortfolio buttons */
.d2lplus-dark .d2l-ep button,
.d2lplus-dark .d2l-dropdown-opener,
.d2lplus-dark [class*="dropdown-opener"],
.d2lplus-dark button[class*="add-"],
.d2lplus-dark [class*="add-other"] {
    background: var(--d2lplus-bg-tertiary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

.d2lplus-dark .d2l-ep button:hover,
.d2lplus-dark .d2l-dropdown-opener:hover {
    background: #2a3442 !important;
}

/* Dynamic ID containers (d2l_1_*) */
.d2lplus-dark [id^="d2l_"],
.d2lplus-dark [id^="d2l-uid-"] {
    background-color: inherit !important;
    color: inherit !important;
}

/* ePortfolio Build section - icons/images */
.d2lplus-dark .d2l-icon,
.d2lplus-dark [class*="icon"] {
    fill: var(--d2lplus-text-primary) !important;
    color: var(--d2lplus-text-primary) !important;
}

/* White icon images - invert them slightly - REMOVED as it causes weird colors
.d2lplus-dark img[src*="icon"],
.d2lplus-dark img[class*="icon"] {
    filter: invert(0.1) brightness(0.9);
}
*/

/* ==============================================
   CALENDAR SIDEBAR COLUMNS
   ============================================== */
.d2lplus-dark .d2l-column-side-bg,
.d2lplus-dark .d2l-column-flip-side,
.d2lplus-dark .d2l-column-side,
.d2lplus-dark [class*="column-side"],
.d2lplus-dark [class*="column-flip"],
.d2lplus-dark .d2l-calendar-filter,
.d2lplus-dark .d2l-calendar-search,
.d2lplus-dark .d2l-minibar-calendar,
.d2lplus-dark .d2l-datepicker-calendar,
.d2lplus-dark [class*="datepicker"] {
    background: var(--d2lplus-bg-secondary) !important;
    background-color: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}

/* Calendar date cells */
.d2lplus-dark .d2l-calendar-cell,
.d2lplus-dark .d2l-calendar-date,
.d2lplus-dark [class*="calendar-cell"],
.d2lplus-dark [class*="calendar-date"] {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
}

.d2lplus-dark .d2l-calendar-today,
.d2lplus-dark [class*="calendar-today"] {
    background: var(--d2lplus-accent) !important;
    color: #ffffff !important;
}

/* ==============================================
   SIDEBAR SELECTED/CURRENT STATES
   ============================================== */
.d2lplus-dark .d2l-le-TreeAccordionItem-anchor-selected,
.d2lplus-dark .d2l-le-TreeAccordionItem-anchor:hover,
.d2lplus-dark [class*="TreeAccordionItem-anchor-selected"],
.d2lplus-dark [class*="anchor-selected"],
.d2lplus-dark .d2l-sidebar-item-selected,
.d2lplus-dark [class*="item-selected"],
.d2lplus-dark a.d2l-current {
    background: var(--d2lplus-bg-tertiary) !important;
    background-color: var(--d2lplus-bg-tertiary) !important;
    color: #ffffff !important;
    /* Remove the white arrow/triangle effect */
    background-image: none !important;
}

/* Sidebar arrows/triangles */
.d2lplus-dark .d2l-le-TreeAccordionItem-anchor-selected::before,
.d2lplus-dark .d2l-le-TreeAccordionItem-anchor-selected::after,
.d2lplus-dark [class*="TreeAccordionItem"]::before,
.d2lplus-dark [class*="TreeAccordionItem"]::after {
    border-color: transparent !important;
    background: transparent !important;
}

/* ==============================================
   SPLS TASKS / LTI FRAME CONTENT
   ============================================== */
.d2lplus-dark .d2l-lti-frame,
.d2lplus-dark .d2l-lti-iframe,
.d2lplus-dark [class*="lti-content"],
.d2lplus-dark [class*="lti-container"],
.d2lplus-dark .d2l-quicklink-content,
.d2lplus-dark [class*="quicklink"] {
    background: #0f141b !important;
    color: var(--d2lplus-text-primary) !important;
}

/* ==============================================
   DROP ZONES / FILE UPLOAD
   ============================================== */
.d2lplus-dark .d2l-dropzone,
.d2lplus-dark [class*="dropzone"],
.d2lplus-dark [class*="drop-zone"],
.d2lplus-dark .d2l-upload-area,
.d2lplus-dark [class*="upload"] {
    background: var(--d2lplus-bg-tertiary) !important;
    border-color: var(--d2lplus-accent) !important;
    color: var(--d2lplus-text-primary) !important;
}

/* ==============================================
   TOP NAVBAR NOTIFICATION ICONS
   ============================================== */
.d2lplus-dark .d2l-navigation-s-icon-button,
.d2lplus-dark d2l-navigation-button-notification-icon,
.d2lplus-dark d2l-button-icon,
.d2lplus-dark .d2l-button-icon,
.d2lplus-dark [class*="icon-button"] {
    background: transparent !important;
    color: var(--d2lplus-text-primary) !important;
}

/* Icon buttons hover/focus */
.d2lplus-dark .d2l-navigation-s-icon-button:hover,
.d2lplus-dark d2l-navigation-button-notification-icon:hover,
.d2lplus-dark d2l-button-icon:hover {
    background: var(--d2lplus-bg-tertiary) !important;
}

/* Notification badges */
.d2lplus-dark .d2l-count-badge,
.d2lplus-dark [class*="count-badge"],
.d2lplus-dark [class*="notification-count"] {
    background: #ef4444 !important;
    color: #ffffff !important;
}

/* ==============================================
   DROPDOWN MENUS (REFINED)
   ============================================== */
.d2lplus-dark d2l-dropdown-content,
.d2lplus-dark d2l-dropdown-menu,
.d2lplus-dark .d2l-dropdown-content,
.d2lplus-dark .d2l-dropdown-menu {
    background: var(--d2lplus-bg-secondary) !important;
    border: 1px solid var(--d2lplus-border) !important;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4) !important;
}

.d2lplus-dark d2l-menu-item:hover,
.d2lplus-dark d2l-menu-item-link:hover,
.d2lplus-dark .d2l-menu-item:hover {
    background: var(--d2lplus-bg-tertiary) !important;
}

/* Dropdown borders */
.d2lplus-dark d2l-menu-item,
.d2lplus-dark d2l-menu-item-link,
.d2lplus-dark .d2l-menu-item {
    border-bottom-color: var(--d2lplus-border) !important;
}
`;


    const DARK_MODE_CARD_SHADOW_CSS = `
    :host {
        color: var(--d2lplus-text-primary) !important;
        background: var(--d2lplus-bg-secondary) !important;
        --d2l-card-background-color: var(--d2lplus-bg-secondary) !important;
        --d2l-card-border-color: var(--d2lplus-border) !important;
        --d2l-card-foreground-color: var(--d2lplus-text-primary) !important;
        border: 1px solid var(--d2lplus-border) !important;
        border-radius: 6px !important;
    }
    .d2l-card-container,
    .d2l-my-courses-card-grid,
    .d2l-my-courses-widget,
    .d2l-card {
        background: var(--d2lplus-bg-secondary) !important;
        color: var(--d2lplus-text-primary) !important;
        border: none !important; /* Managed by host */
        box-shadow: none !important;
    }
    .d2l-card-link-container,
    .d2l-card-header,
    .d2l-card-content,
    .d2l-card-actions,
    .d2l-card-footer,
    .d2l-card-badge,
    .d2l-card-link-text {
        background: transparent !important;
        color: var(--d2lplus-text-primary) !important;
        border: none !important;
        box-shadow: none !important;
    }
    /* Ensure links stand out but don't have weird backgrounds */
    a, .d2l-card-link-text {
        color: var(--d2lplus-link) !important;
        background: transparent !important;
    }
    
    /* Remove white borders/backgrounds from any nested divs */
    div, span, section {
        border-color: var(--d2lplus-border) !important;
    }
    `;

    const ANIMATIONS_CSS = `
.d2lplus-animate .d2l-navigation-s-link,
.d2lplus-animate d2l-button,
.d2lplus-animate .d2l-card-container,
.d2lplus-animate .d2l-widget,
.d2lplus-animate .d2l-tile {
    transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;
}
.d2lplus-animate .d2l-navigation-s-link:hover,
.d2lplus-animate d2l-button:hover,
.d2lplus-animate .d2l-card-container:hover {
    transform: translateY(-2px);
}
`;

    const FOCUS_VIEW_CSS = `
.d2lplus-focus .d2l-navigation-s,
.d2lplus-focus .d2l-page-header,
.d2lplus-focus .d2l-page-sidebars {
    display: none !important;
}
.d2lplus-focus .d2l-page-main {
    max-width: 1100px !important;
    margin: 0 auto !important;
}
`;

    const QUICK_LINKS_CSS = `
.d2lplus-quicklinks {
    position: relative;
}
.d2lplus-dropdown {
    position: relative;
}
.d2lplus-dropdown__summary {
    list-style: none;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    gap: 6px;
}
.d2lplus-dropdown__summary::-webkit-details-marker {
    display: none;
}
.d2lplus-dropdown__list {
    position: absolute;
    top: 100%;
    left: 0;
    min-width: 220px;
    background: #ffffff;
    border: 1px solid #e4e7ec;
    border-radius: 12px;
    box-shadow: 0 12px 24px rgba(15, 23, 42, 0.15);
    padding: 6px;
    z-index: 9999;
}
.d2lplus-dropdown[open] .d2lplus-dropdown__list {
    animation: d2lplus-fade 120ms ease-out;
}
.d2lplus-dropdown__item {
    display: block;
    padding: 8px 10px;
    border-radius: 8px;
    color: var(--d2lplus-bg-tertiary);
    text-decoration: none;
    font-size: 13px;
}
.d2lplus-dropdown__item:hover {
    background: #f1f5f9;
}
.d2lplus-dark .d2lplus-dropdown__list {
    background: #0f141b;
    border-color: var(--d2lplus-border);
}
.d2lplus-dark .d2lplus-dropdown__item {
    color: var(--d2lplus-text-primary);
}
.d2lplus-dark .d2lplus-dropdown__item:hover {
    background: var(--d2lplus-bg-tertiary);
}
@keyframes d2lplus-fade {
    from { opacity: 0; transform: translateY(4px); }
    to { opacity: 1; transform: translateY(0); }
}
`;

    const BACK_BUTTON_CSS = `
.d2lplus-back {
    position: fixed;
    bottom: 18px;
    left: 18px;
    z-index: 10000;
    padding: 10px 14px;
    border-radius: 999px;
    border: 1px solid #d0d5dd;
    background: #ffffff;
    color: #111827;
    font-weight: 600;
    font-size: 12px;
    box-shadow: 0 10px 20px rgba(15, 23, 42, 0.18);
    cursor: pointer;
}
.d2lplus-back:hover {
    transform: translateY(-1px);
}
.d2lplus-dark .d2lplus-back {
    background: #0f141b;
    color: var(--d2lplus-text-primary);
    border-color: var(--d2lplus-border);
}
/* Hide any back buttons that are NOT direct children of body */
.d2l-widget .d2lplus-back,
.d2l-tile .d2lplus-back,
[class*="widget"] .d2lplus-back,
[class*="content-browser"] .d2lplus-back,
[class*="update"] .d2lplus-back,
.d2l-collapsepane .d2lplus-back,
.d2l-homepage .d2lplus-back,
.homepage-container .d2lplus-back {
    display: none !important;
}
`;

    const ALL_PAGE_CSS = `
.d2lplus-allpage {
    position: fixed;
    top: var(--d2lplus-nav-height, 88px);
    left: 0;
    right: 0;
    bottom: auto;
    height: var(--d2lplus-allpage-height, calc(100vh - var(--d2lplus-nav-height, 88px)));
    background: #f6f7fb;
    color: #0f172a;
    z-index: 10001;
    overflow: auto;
    padding: 24px;
}
.d2lplus-allpage-active,
.d2lplus-allpage-active body {
    overflow: hidden !important;
}
.d2lplus-allpage-active .d2l-navigation-s {
    display: block !important;
    position: sticky;
    top: 0;
    z-index: 10002;
}
.d2lplus-allpage-active body {
    padding-top: 0 !important;
}
.d2lplus-allpage--lock {
    overflow: hidden;
}
.d2lplus-allpage__header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16px;
}
.d2lplus-allpage__title {
    font-size: 20px;
    font-weight: 700;
}
.d2lplus-allpage__subtitle {
    color: #475467;
    font-size: 12px;
}
.d2lplus-allpage__actions {
    display: flex;
    gap: 8px;
}
.d2lplus-allpage__btn {
    border: 1px solid #d0d5dd;
    background: #ffffff;
    color: #111827;
    border-radius: 999px;
    padding: 6px 12px;
    font-size: 12px;
    font-weight: 600;
    cursor: pointer;
}
.d2lplus-allpage--edit .d2lplus-allpage__summary {
    cursor: grab;
}
.d2lplus-allpage--edit .d2lplus-allpage__summary:active {
    cursor: grabbing;
}
.d2lplus-allpage__grid {
    display: grid;
    gap: 10px;
}
.d2lplus-allpage__item {
    background: #ffffff;
    border: 1px solid #e4e7ec;
    border-radius: 12px;
    padding: 10px 12px;
}
.d2lplus-allpage__summary {
    cursor: pointer;
    font-weight: 600;
    list-style: none;
    display: flex;
    align-items: center;
    gap: 8px;
}
.d2lplus-allpage__summary::-webkit-details-marker {
    display: none;
}
.d2lplus-allpage__handle {
    width: 16px;
    height: 16px;
    border-radius: 4px;
    background: linear-gradient(180deg, #e2e8f0, #cbd5f5);
    display: inline-block;
    position: relative;
    opacity: 0;
    transition: opacity 0.2s ease;
}
.d2lplus-allpage__handle::after {
    content: "⋮⋮";
    position: absolute;
    inset: 0;
    font-size: 12px;
    line-height: 16px;
    text-align: center;
    color: var(--d2lplus-text-muted);
}
.d2lplus-allpage--edit .d2lplus-allpage__handle {
    opacity: 1;
}
.d2lplus-allpage__item.is-dragging {
    opacity: 0.6;
    transform: scale(0.995);
}
.d2lplus-allpage__item.is-over {
    border-color: var(--d2lplus-accent);
    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);
}
.d2lplus-allpage__frame {
    width: 100%;
    border: none;
    height: auto;
    max-height: 70vh;
    margin-top: 10px;
    border-radius: 10px;
    background: #f8fafc;
    overflow: auto;
}
.d2lplus-allpage__resize {
    height: 10px;
    cursor: ns-resize;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 8px;
}
.d2lplus-allpage__resize::before {
    content: "";
    width: 80px;
    height: 4px;
    border-radius: 999px;
    background: #cbd5f5;
}
.d2lplus-dark .d2lplus-allpage__resize::before {
    background: var(--d2lplus-bg-tertiary);
}
.d2lplus-dark .d2lplus-allpage {
    background: #0f141b;
    color: var(--d2lplus-text-primary);
}
.d2lplus-dark .d2lplus-allpage__item {
    background: var(--d2lplus-bg-secondary);
    border-color: var(--d2lplus-border);
}
.d2lplus-dark .d2lplus-allpage__btn {
    background: #0f141b;
    color: var(--d2lplus-text-primary);
    border-color: var(--d2lplus-border);
}
.d2lplus-dark .d2lplus-allpage__frame {
    background: var(--d2lplus-bg-secondary);
    color: var(--d2lplus-text-primary);
}
.d2lplus-dark .d2lplus-allpage__frame table,
.d2lplus-dark .d2lplus-allpage__frame th,
.d2lplus-dark .d2lplus-allpage__frame td {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
    border-color: var(--d2lplus-border) !important;
}
.d2lplus-dark .d2lplus-allpage__frame .dco,
.d2lplus-dark .d2lplus-allpage__frame .dco_c,
.d2lplus-dark .d2lplus-allpage__frame form {
    background: var(--d2lplus-bg-secondary) !important;
}
.d2lplus-dark .d2lplus-allpage__frame .dco_c[style*="background-color"] {
    background-color: var(--d2lplus-bg-secondary) !important;
}
.d2lplus-dark .d2lplus-allpage__frame [style*="background-color:#FfF"],
.d2lplus-dark .d2lplus-allpage__frame [style*="background-color: #FFF"],
.d2lplus-dark .d2lplus-allpage__frame [style*="background-color:#Fff"],
.d2lplus-dark .d2lplus-allpage__frame [style*="background-color: #fff"],
.d2lplus-dark .d2lplus-allpage__frame [style*="background-color:#FFFFFF"],
.d2lplus-dark .d2lplus-allpage__frame [style*="background-color: #FFFFFF"],
.d2lplus-dark .d2lplus-allpage__frame [style*="background-color:#ffffff"],
.d2lplus-dark .d2lplus-allpage__frame [style*="background-color: #ffffff"],
.d2lplus-dark .d2lplus-allpage__frame [style*="background-color: rgb(255, 255, 255)"],
.d2lplus-dark .d2lplus-allpage__frame [style*="background-color: rgb(255,255,255)"] {
    background-color: var(--d2lplus-bg-secondary) !important;
}
.d2lplus-dark .d2lplus-allpage__frame #d_content,
.d2lplus-dark .d2lplus-allpage__frame #d_content_inner,
.d2lplus-dark .d2lplus-allpage__frame #d_content_r,
.d2lplus-dark .d2lplus-allpage__frame #d_content_r_c1,
.d2lplus-dark .d2lplus-allpage__frame #d_content_r_c2,
.d2lplus-dark .d2lplus-allpage__frame #d_content_r_p {
    background: var(--d2lplus-bg-secondary) !important;
    color: var(--d2lplus-text-primary) !important;
}
.d2lplus-dark .d2lplus-allpage__frame [style*="background-color"] {
    background-color: var(--d2lplus-bg-tertiary) !important;
}
.d2lplus-dark .d2lplus-allpage__frame [style*="background-color:#E8F8FF"] {
    background-color: var(--d2lplus-bg-tertiary) !important;
}
.d2lplus-dark .d2lplus-allpage__frame [style*="color"] {
    color: var(--d2lplus-text-primary) !important;
}
.d2lplus-dark .d2lplus-allpage__frame a {
    color: var(--d2lplus-link) !important;
}
.d2lplus-dark .d2lplus-allpage__handle {
    background: linear-gradient(180deg, var(--d2lplus-bg-tertiary), #111827);
}
.d2lplus-dark .d2lplus-allpage__handle::after {
    color: #94a3b8;
}
`;

    function setStyle(id: string, css: string, enabled: boolean) {
        let style = document.getElementById(id);
        if (enabled) {
            if (!style) {
                style = document.createElement("style");
                style.id = id;
                document.head.appendChild(style);
            }
            style.textContent = css;
        } else if (style) {
            style.remove();
        }
    }

    function setShadowStyle(root: ShadowRoot, id: string, css: string, enabled: boolean) {
        let style = root.getElementById(id);
        if (enabled) {
            if (!style) {
                style = document.createElement("style");
                style.id = id;
                root.appendChild(style);
            }
            style.textContent = css;
        } else if (style) {
            style.remove();
        }
    }


    /* Icon Button Specific Shadow CSS - Forces transparency */
    const ICON_BUTTON_SHADOW_CSS = `
    /* Force specific transparency for icon buttons */
    :host, button, .d2l-button-icon {
        background: transparent !important;
        background-color: transparent !important;
        box-shadow: none !important;
        border: none !important;
        min-height: auto !important;
        height: auto !important;
        width: auto !important;
        padding: 0 !important;
        margin: 0 !important;
    }
    
    /* Ensure icon color is visible */
    d2l-icon, .d2l-icon {
        color: var(--d2lplus-text-primary) !important;
        fill: var(--d2lplus-text-primary) !important;
    }

    /* Hover state - semi-transparent dark */
    button:hover, .d2l-button-icon:hover, :host(:hover) button, .d2l-button-icon:hover button {
        background: rgba(31, 41, 55, 0.8) !important;
        background-color: rgba(31, 41, 55, 0.8) !important;
        border-radius: 4px !important;
    }
    
    /* Remove any borders or shadows on the button element itself */
    button {
       border: 0 !important;
       box-shadow: none !important;
       background-image: none !important;
    }
    `;

    async function applyDarkModeToCourseCards(enabled: boolean) {
        // Use findInShadows to search deeply through shadow DOM
        const findInShadows = (root: Document | ShadowRoot, selector: string): Element | null => {
            const match = root.querySelector(selector);
            if (match) return match;
            const elements = Array.from(root.querySelectorAll('*'));
            for (const el of elements) {
                if ((el as any).shadowRoot) {
                    const match = findInShadows((el as any).shadowRoot, selector);
                    if (match) return match;
                }
            }
            return null;
        };

        // Helper to find ALL matches deeply
        const findAllInShadows = (root: Document | ShadowRoot, selector: string, results: Element[] = []): Element[] => {
            const matches = Array.from(root.querySelectorAll(selector));
            results.push(...matches);

            const elements = Array.from(root.querySelectorAll('*'));
            for (const el of elements) {
                if ((el as any).shadowRoot) {
                    findAllInShadows((el as any).shadowRoot, selector, results);
                }
            }
            return results;
        };

        const myCourses = findInShadows(document, 'd2l-my-courses');
        if (!myCourses) return;

        const coursesRoot = (myCourses as any).shadowRoot as ShadowRoot | null;
        if (coursesRoot) {
            setShadowStyle(coursesRoot, "d2lplus-dark-courses", DARK_MODE_CARD_SHADOW_CSS, enabled);
        }

        const container = coursesRoot?.querySelector('d2l-my-courses-container') as Element | null;
        const containerRoot = (container as any)?.shadowRoot as ShadowRoot | null;
        if (containerRoot) {
            setShadowStyle(containerRoot, "d2lplus-dark-courses-container", DARK_MODE_CARD_SHADOW_CSS, enabled);
        }

        const content = containerRoot?.querySelector('d2l-my-courses-content') as Element | null;
        const contentRoot = (content as any)?.shadowRoot as ShadowRoot | null;
        if (contentRoot) {
            setShadowStyle(contentRoot, "d2lplus-dark-courses-content", DARK_MODE_CARD_SHADOW_CSS, enabled);
        }

        const cardGrid = contentRoot?.querySelector('d2l-my-courses-card-grid') as Element | null;
        const cardGridRoot = (cardGrid as any)?.shadowRoot as ShadowRoot | null;
        if (cardGridRoot) {
            setShadowStyle(cardGridRoot, "d2lplus-dark-cardgrid", DARK_MODE_CARD_SHADOW_CSS, enabled);
            const cards = Array.from(cardGridRoot.querySelectorAll('d2l-enrollment-card')) as Element[];
            for (const card of cards) {
                const cardRoot = (card as any).shadowRoot as ShadowRoot | null;
                if (cardRoot) {
                    setShadowStyle(cardRoot, "d2lplus-dark-enrollment", DARK_MODE_CARD_SHADOW_CSS, enabled);

                    // Explicitly find and style button icons DEEP inside the card
                    const buttons = findAllInShadows(cardRoot, 'd2l-button-icon');
                    for (const btn of buttons) {
                        const btnShadow = (btn as any).shadowRoot as ShadowRoot | null;
                        if (btnShadow) {
                            setShadowStyle(btnShadow, "d2lplus-dark-shadow", "", false); // Remove generic
                            setShadowStyle(btnShadow, "d2lplus-dark-icon-shadow", ICON_BUTTON_SHADOW_CSS, enabled);
                        }
                    }

                    const innerCard = cardRoot.querySelector('d2l-card') as Element | null;
                    const innerCardRoot = (innerCard as any)?.shadowRoot as ShadowRoot | null;
                    if (innerCardRoot) {
                        setShadowStyle(innerCardRoot, "d2lplus-dark-card", DARK_MODE_CARD_SHADOW_CSS, enabled);

                        // Also check inside inner card
                        const innerButtons = findAllInShadows(innerCardRoot, 'd2l-button-icon');
                        for (const btn of innerButtons) {
                            const btnShadow = (btn as any).shadowRoot as ShadowRoot | null;
                            if (btnShadow) {
                                setShadowStyle(btnShadow, "d2lplus-dark-shadow", "", false); // Remove generic
                                setShadowStyle(btnShadow, "d2lplus-dark-icon-shadow", ICON_BUTTON_SHADOW_CSS, enabled);
                            }
                        }
                    }
                }
            }
        }
    }

    const DARK_MODE_DROPDOWN_SHADOW_CSS = `
        /* Dropdown container inside shadow root */
        .d2l-dropdown-content-container,
        .d2l-dropdown-content-inner,
        #content-wrapper,
        .content-width,
        .vdiff-target,
        [class*="dropdown-content"],
        [class*="content-wrapper"] {
        background: var(--d2lplus-bg-secondary) !important;
        background-color: var(--d2lplus-bg-secondary) !important;
        color: var(--d2lplus-text-primary) !important;
        border-color: var(--d2lplus-border) !important;
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5) !important;
    }

    /* Button internals */
    button, .d2l-button-content, .d2l-button-container {
        background: var(--d2lplus-bg-tertiary) !important;
        color: var(--d2lplus-text-primary) !important;
        border-color: var(--d2lplus-border) !important;
    }

    /* Input internals */
    input, textarea, .d2l-input-container, .d2l-input-wrapper {
        background: var(--d2lplus-bg-tertiary) !important;
        background-color: var(--d2lplus-bg-tertiary) !important;
        color: var(--d2lplus-text-primary) !important;
        border-color: var(--d2lplus-border) !important;
    }

    /* Menu items */
    .d2l-menu-item-container, .d2l-menu-item-content {
        background: var(--d2lplus-bg-secondary) !important;
        color: var(--d2lplus-text-primary) !important;
        padding-top: 10px !important;
        padding-bottom: 10px !important;
    }
    .d2l-menu-item-container:hover, .d2l-menu-item-content:hover {
        background: var(--d2lplus-bg-tertiary) !important;
    }

    /* ePortfolio 'What are you learning' container - targets dynamic class using content */
    div:has(> textarea[id*="reflection"]),
    div:has(> .d2l-reflection-text),
    div:has(> textarea.d2l-longedit) {
        background: var(--d2lplus-bg-tertiary) !important;
        border: 1px solid var(--d2lplus-border) !important;
    }

    /* Course Cards (Enrollment Cards) Shadow DOM fixes */
    d2l-enrollment-card,
    d2l-card,
    .d2l-widget-content {
        --d2l-card-background-color: var(--d2lplus-bg-secondary);
        --d2l-card-border-color: var(--d2lplus-border);
        --d2l-color-ferrite: var(--d2lplus-text-primary); /* Text color variable */
    }

    /* Specific overrides for Help Widget to ensure text visibility */
    .d2l-widget-content div,
    .d2l-widget-content p,
    .d2l-widget-content span,
    .d2l-widget-content b,
    .d2l-widget-content strong {
        color: var(--d2lplus-text-primary) !important;
    }

    /* Primary button keep accent */
    button[primary], .d2l-button-primary {
        background: var(--d2lplus-accent) !important;
        color: #ffffff !important;
    }

    /* ePortfolio Shadow DOM elements */
    .d2l-longedit-container, .d2l-longedit-input {
        background: var(--d2lplus-bg-tertiary) !important;
        color: var(--d2lplus-text-primary) !important;
    }

    /* All white backgrounds inside shadow */
    div, span, section, article, aside, header, footer, main {
        background-color: inherit;
    }
    `;


    async function applyDarkModeToShadowElements(enabled: boolean) {
        const elementsWithShadow = [
            'd2l-dropdown-content',
            'd2l-dropdown-menu',
            'd2l-dropdown',
            'd2l-button',
            'd2l-button-subtle',
            'd2l-input-text',
            'd2l-input-search',
            'd2l-menu',
            'd2l-menu-item',
            'd2l-menu-item-link',
            'd2l-calendar',
            'd2l-navigation-main-header',
            'd2l-navigation-button-notification-icon',
            'd2l-longedit',
            'd2l-enrollment-card',
            'd2l-card',
            'd2l-button-icon',
            'd2l-icon-button'
        ];

        const styleAllShadowRoots = (root: Document | ShadowRoot) => {
            // Helper to determine if an element is an icon button
            const isScannerTarget = (tagName: string) => {
                return tagName === 'd2l-button-icon' ||
                    tagName === 'd2l-icon-button' ||
                    tagName === 'd2l-navigation-button-notification-icon' ||
                    tagName === 'd2l-navigation-link-icon' ||
                    tagName.includes('notification-icon');
            };

            // 1. Explicitly check for our target list
            for (const selector of elementsWithShadow) {
                const elements = root.querySelectorAll(selector);
                elements.forEach((el) => {
                    const shadow = (el as any).shadowRoot as ShadowRoot | null;
                    if (shadow) {
                        const tagName = el.tagName.toLowerCase();

                        if (isScannerTarget(tagName)) {
                            // Apply specific transparent style for icon buttons
                            // CRITICAL: Remove the generic style if it exists to prevent conflict
                            setShadowStyle(shadow, "d2lplus-dark-shadow", "", false);
                            setShadowStyle(shadow, "d2lplus-dark-icon-shadow", ICON_BUTTON_SHADOW_CSS, enabled);
                        } else {
                            // Apply generic dark style for other components
                            setShadowStyle(shadow, "d2lplus-dark-shadow", DARK_MODE_DROPDOWN_SHADOW_CSS, enabled);
                        }

                        // Recursively check for more shadow roots inside
                        styleAllShadowRoots(shadow);
                    }
                });
            }

            // 2. Fallback: check ALL elements with shadow roots to catch missed ones
            root.querySelectorAll('*').forEach((el) => {
                if ((el as any).shadowRoot) {
                    const shadow = (el as any).shadowRoot as ShadowRoot | null;

                    // Check if we need to process this (if not already styled correctly)
                    const hasGeneric = !!shadow.getElementById("d2lplus-dark-shadow");
                    const hasIcon = !!shadow.getElementById("d2lplus-dark-icon-shadow");

                    if (!hasGeneric && !hasIcon) {
                        // New element, not styled yet
                        const tagName = el.tagName.toLowerCase();
                        if (isScannerTarget(tagName)) {
                            setShadowStyle(shadow, "d2lplus-dark-icon-shadow", ICON_BUTTON_SHADOW_CSS, enabled);
                        } else {
                            setShadowStyle(shadow, "d2lplus-dark-shadow", DARK_MODE_DROPDOWN_SHADOW_CSS, enabled);
                        }
                        styleAllShadowRoots(shadow);
                    } else {
                        // Already has styling, but verify it's the CORRECT one
                        const tagName = el.tagName.toLowerCase();
                        if (isScannerTarget(tagName) && hasGeneric) {
                            // It has the WRONG style (generic instead of icon). Fix it.
                            setShadowStyle(shadow, "d2lplus-dark-shadow", "", false);
                            setShadowStyle(shadow, "d2lplus-dark-icon-shadow", ICON_BUTTON_SHADOW_CSS, enabled);
                        }
                        // Recurse anyway just in case dynamic content appeared inside
                        styleAllShadowRoots(shadow);
                    }
                }
            });
        };

        styleAllShadowRoots(document);
    }

    function getIsDarkMode(settings: D2LPlusSettings): boolean {
        if (settings.theme === 'light') return false;
        if (settings.theme === 'system') return window.matchMedia('(prefers-color-scheme: dark)').matches;
        // All other themes (dark, midnight, solarized, etc.) are dark-based
        return true;
    }

    function applySettings(settings: D2LPlusSettings) {
        const isDarkMode = getIsDarkMode(settings);

        // Determine active theme colors
        let activeThemeName = settings.theme;
        if (activeThemeName === 'system') {
            activeThemeName = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }

        let themeVarsCSS = '';
        if (isDarkMode && activeThemeName !== 'light') {
            const colors = THEMES[activeThemeName as keyof typeof THEMES] || THEMES['dark'];
            themeVarsCSS = `
            :root {
                --d2lplus-bg-primary: ${colors.bgPrimary};
                --d2lplus-bg-secondary: ${colors.bgSecondary};
                --d2lplus-bg-tertiary: ${colors.bgTertiary};
                --d2lplus-text-primary: ${colors.textPrimary};
                --d2lplus-text-secondary: ${colors.textSecondary};
                --d2lplus-text-muted: ${colors.textMuted};
                --d2lplus-border: ${colors.border};
                --d2lplus-border-subtle: ${colors.borderSubtle};
                --d2lplus-accent: ${colors.accent};
                --d2lplus-accent-hover: ${colors.accentHover};
                --d2lplus-link: ${colors.link};
                --d2lplus-link-hover: ${colors.linkHover};
            }
            .d2lplus-dark {
                 --d2lplus-bg-primary: ${colors.bgPrimary};
                --d2lplus-bg-secondary: ${colors.bgSecondary};
                --d2lplus-bg-tertiary: ${colors.bgTertiary};
                --d2lplus-text-primary: ${colors.textPrimary};
                --d2lplus-text-secondary: ${colors.textSecondary};
                --d2lplus-text-muted: ${colors.textMuted};
                --d2lplus-border: ${colors.border};
                --d2lplus-border-subtle: ${colors.borderSubtle};
                --d2lplus-accent: ${colors.accent};
                --d2lplus-accent-hover: ${colors.accentHover};
                --d2lplus-link: ${colors.link};
                --d2lplus-link-hover: ${colors.linkHover};
            }
            `;
        }

        setStyle("d2lplus-theme-vars", themeVarsCSS, isDarkMode);

        document.documentElement.classList.toggle("d2lplus-dark", isDarkMode);
        document.documentElement.classList.toggle("d2lplus-animate", settings.animations);
        document.documentElement.classList.toggle("d2lplus-focus", settings.focusView);
        setStyle("d2lplus-dark-style", DARK_MODE_CSS, isDarkMode);
        setStyle("d2lplus-animate-style", ANIMATIONS_CSS, settings.animations);
        setStyle("d2lplus-focus-style", FOCUS_VIEW_CSS, settings.focusView);
        setStyle("d2lplus-quicklinks-style", QUICK_LINKS_CSS, settings.quickLinks);
        setStyle("d2lplus-back-style", BACK_BUTTON_CSS, true);
        setStyle("d2lplus-allpage-style", ALL_PAGE_CSS, true);
        if (isDarkMode) {
            applyIframeDarkStyles(document);
        }

        if (settings.quickLinks) {
            addQuickLinks();
        } else {
            removeQuickLinks();
        }
        // Wrap in setTimeout to prevent potential layout thrashing/blank page issues (User requested delay)
        setTimeout(() => {
            observeLegacyNav(settings.hideLegacyNav);
        }, 500);


        // ALWAYS call these to ensure cleanup if isDarkMode is false
        // This fixes the bug where cards stuck in dark mode after switching to light
        applyDarkModeToCourseCards(isDarkMode);
        applyDarkModeToShadowElements(isDarkMode);

        if (isDarkMode) {
            // Delayed apply to handle dynamic content loading
            setTimeout(() => applyDarkModeToCourseCards(true), 1200);
            setTimeout(() => applyDarkModeToCourseCards(true), 3000);

            setTimeout(() => applyDarkModeToShadowElements(true), 500);
            setTimeout(() => applyDarkModeToShadowElements(true), 1500);
            setTimeout(() => applyDarkModeToShadowElements(true), 3000);
            setTimeout(() => applyDarkModeToShadowElements(true), 5000);

            // Setup MutationObserver for dynamic content (calendar, dropdowns, etc.)
            setupDynamicStyleObserver();
        } else {
            // Disconnect observer if disabled
            if (dynamicObserver) {
                dynamicObserver.disconnect();
                dynamicObserver = null;
            }
        }

        // Hide back button on homepage specifically
        if (window.location.pathname === '/d2l/home') {
            const styleId = "d2lplus-hide-back-home";
            let style = document.getElementById(styleId);
            if (!style) {
                style = document.createElement("style");
                style.id = styleId;
                style.textContent = ".d2lplus-back { display: none !important; }";
                document.head.appendChild(style);
            }
        } else {
            ensureBackButton();
        }
        if (!document.querySelector("[data-d2lplus-back]")) {
            setTimeout(ensureBackButton, 1200);
            setTimeout(ensureBackButton, 3000);
        }
    }

    let dynamicObserver: MutationObserver | null = null;
    let debounceTimeout: ReturnType<typeof setTimeout> | null = null;

    function setupDynamicStyleObserver() {
        if (dynamicObserver) return; // Already set up

        dynamicObserver = new MutationObserver((mutations) => {
            // Debounce to avoid excessive re-styling
            if (debounceTimeout) clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(() => {
                applyDarkModeToShadowElements(true);
                applyIframeDarkStyles(document);
            }, 100);
        });

        // Observe the entire document for added nodes and attribute changes
        dynamicObserver.observe(document.body, {
            childList: true,
            subtree: true,
            attributes: true,
            attributeFilter: ['class', 'style', 'aria-expanded']
        });
    }

    function getSettings(): Promise<D2LPlusSettings> {
        if (!storageArea) return Promise.resolve({ ...DEFAULT_SETTINGS });
        return new Promise((resolve) => {
            storageArea.get(DEFAULT_SETTINGS, (items: any) => resolve(items as D2LPlusSettings));
        });
    }

    type CourseInfo = { id: string; name: string };

    function saveCourseList(courses: CourseInfo[]) {
        if (!storageArea) return;
        storageArea.set({ courseList: courses }, () => { });
    }

    function saveCourseOrder(order: string[]) {
        if (!storageArea) return;
        storageArea.set({ courseOrder: order }, () => { });
    }

    function getCourseListFromStorage(): Promise<CourseInfo[]> {
        if (!storageArea) return Promise.resolve([]);
        return new Promise((resolve) => {
            storageArea.get({ courseList: [] }, (items: any) =>
                resolve(items.courseList || [])
            );
        });
    }

    function getCourseOrderFromStorage(): Promise<string[]> {
        if (!storageArea) return Promise.resolve([]);
        return new Promise((resolve) => {
            storageArea.get({ courseOrder: [] }, (items: any) =>
                resolve(items.courseOrder || [])
            );
        });
    }

    function applyCourseOrder(courses: CourseInfo[], order: string[]): CourseInfo[] {
        if (!order.length) return courses;
        const map = new Map(courses.map(c => [c.id, c]));
        const ordered: CourseInfo[] = [];
        for (const id of order) {
            const course = map.get(id);
            if (course) ordered.push(course);
        }
        for (const course of courses) {
            if (!order.includes(course.id)) ordered.push(course);
        }
        return ordered;
    }

    function getAllPageHeightFromStorage(): Promise<number | null> {
        if (!storageArea) return Promise.resolve(null);
        return new Promise((resolve) => {
            storageArea.get({ allPageHeight: null }, (items: any) =>
                resolve(items.allPageHeight)
            );
        });
    }

    function saveAllPageHeight(height: number) {
        if (!storageArea) return;
        storageArea.set({ allPageHeight: height }, () => { });
    }

    function openExtensionPage(page: string) {
        const url = new URL(window.location.href);
        url.pathname = "/d2l/home";
        url.searchParams.set("d2lplus", page.replace(".html", ""));
        window.location.href = url.toString();
    }

    function observeLegacyNav(hide: boolean) {
        if (!hide) {
            const navObserver = (window as any).d2lPlusNavObserver as MutationObserver | undefined;
            if (navObserver) navObserver.disconnect();
            const wrapperObserver = (window as any).d2lPlusNavWrapperObserver as MutationObserver | undefined;
            if (wrapperObserver) wrapperObserver.disconnect();
            document.querySelectorAll("[data-d2lplus-hidden-nav]").forEach((node) => {
                (node as HTMLElement).style.removeProperty("display");
                node.removeAttribute("data-d2lplus-hidden-nav");
            });
            return;
        }

        const hiddenLabels = [
            "email",
            "eportfolio",
            "self registration",
            "spls tasks",
            "help"
        ];

        const normalizeLabel = (value: string) =>
            value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();

        const isHiddenLabel = (value: string) => {
            const normalized = normalizeLabel(value);
            if (!normalized) return false;
            return hiddenLabels.some((label) =>
                normalized === label ||
                normalized.startsWith(`${label} `) ||
                normalized.endsWith(` ${label}`)
            );
        };

        const hiddenHrefParts = [
            "/d2l/lms/email/",
            "/d2l/ep/",
            "/d2l/lms/legacy/selfregistration",
            "quicklink/quicklink.d2l",
            "help.d2l.msu.edu"
        ];

        const isQuickLinkElement = (element: Element) =>
            Boolean(element.closest("[data-d2lplus-link], [data-d2lplus-page-link], [data-d2lplus-dropdown]"));

        const getHref = (element: Element) =>
            (element.getAttribute("href") ||
                (element as HTMLAnchorElement).href ||
                element.getAttribute("data-href") ||
                "").toLowerCase();

        const isHiddenHref = (href: string) =>
            hiddenHrefParts.some((part) => href.includes(part));

        const queryAllDeep = (root: ParentNode, selector: string, results: Element[] = []) => {
            const rootNode = root as ParentNode;
            results.push(...Array.from(rootNode.querySelectorAll(selector)));
            const elements = Array.from(rootNode.querySelectorAll("*"));
            for (const el of elements) {
                const shadowRoot = (el as any).shadowRoot as ShadowRoot | null;
                if (shadowRoot) {
                    queryAllDeep(shadowRoot, selector, results);
                }
            }
            if ((root as any).shadowRoot) {
                queryAllDeep((root as any).shadowRoot, selector, results);
            }
            return results;
        };

        const getNavRoots = () => {
            const navHosts = Array.from(document.querySelectorAll(
                "d2l-navigation, d2l-navigation-main, d2l-navigation-main-header, d2l-navigation-s, d2l-navigation-dropdown, d2l-navigation-s-dropdown, nav, header[role='navigation']"
            ));
            return navHosts;
        };

        const getLabel = (element: Element) =>
            (element.getAttribute("text") ||
                element.getAttribute("aria-label") ||
                element.getAttribute("title") ||
                element.textContent ||
                "").trim();

        const markHidden = (element: Element) => {
            const htmlTarget = element as HTMLElement;
            htmlTarget.style.display = "none";
            htmlTarget.setAttribute("data-d2lplus-hidden-nav", "true");
        };

        const shouldSkipItem = (item: Element) =>
            item.hasAttribute("data-d2lplus-link") ||
            item.hasAttribute("data-d2lplus-page-link") ||
            item.hasAttribute("data-d2lplus-dropdown") ||
            Boolean(item.querySelector("[data-d2lplus-link],[data-d2lplus-page-link],[data-d2lplus-dropdown]"));

        const hideItemsInWrapper = (wrapper: Element | ShadowRoot) => {
            const navItems = Array.from(wrapper.querySelectorAll(".d2l-navigation-s-item"));
            for (const item of navItems) {
                if (shouldSkipItem(item)) {
                    const htmlItem = item as HTMLElement;
                    htmlItem.style.removeProperty("display");
                    htmlItem.removeAttribute("data-d2lplus-hidden-nav");
                    continue;
                }

                const anchor = item.querySelector("a") as HTMLAnchorElement | null;
                const label = anchor ? getLabel(anchor) : getLabel(item);
                const href = anchor ? getHref(anchor) : getHref(item);

                if (isHiddenLabel(label) || isHiddenHref(href)) {
                    markHidden(item);
                }
            }

            const moreWrapper = wrapper.querySelector(".d2l-navigation-s-more");
            if (moreWrapper) {
                const menuItems = Array.from(moreWrapper.querySelectorAll("d2l-menu-item-link, d2l-menu-item"));
                for (const element of menuItems) {
                    const label = getLabel(element);
                    const href = getHref(element);
                    if (!isHiddenLabel(label) && !isHiddenHref(href)) continue;
                    markHidden(element);
                }
                const remaining = moreWrapper.querySelectorAll("d2l-menu-item-link:not([data-d2lplus-hidden-nav]), d2l-menu-item:not([data-d2lplus-hidden-nav])");
                if (!remaining.length) {
                    markHidden(moreWrapper);
                }
            }
        };

        const hideItems = () => {
            const wrappers = Array.from(document.querySelectorAll(".d2l-navigation-s-main-wrapper"));
            if (wrappers.length) {
                wrappers.forEach(hideItemsInWrapper);
                return;
            }

            const roots = getNavRoots();
            if (!roots.length) return;
            const candidates: Element[] = [];
            for (const root of roots) {
                queryAllDeep(root, ".d2l-navigation-s-main-wrapper", candidates);
            }
            if (candidates.length) {
                candidates.forEach(hideItemsInWrapper);
            }
        };

        const hideWhenWrapperReady = async () => {
            const wrapper = await getNavigationWrapper();
            if (!wrapper) return;

            hideItemsInWrapper(wrapper);

            const existing = (window as any).d2lPlusNavWrapperObserver as MutationObserver | undefined;
            if (existing) existing.disconnect();

            const wrapperObserver = new MutationObserver(() => {
                requestAnimationFrame(() => hideItemsInWrapper(wrapper));
            });
            wrapperObserver.observe(wrapper, { childList: true, subtree: true });
            (window as any).d2lPlusNavWrapperObserver = wrapperObserver;
        };

        const hideWhenNavReady = async () => {
            hideItems();

            const nav = document.querySelector("nav.d2l-navigation-s");
            if (nav) {
                hideItems();
                return;
            }

            const navigationRoot = await waitForElement("d2l-navigation", 15000);
            if (!navigationRoot) return;
            const navigationShadow = await waitForShadowRoot(navigationRoot, 15000);
            if (!navigationShadow) return;

            const navigationMainFooter = navigationShadow.querySelector("d2l-navigation-main-footer");
            if (navigationMainFooter) {
                await waitForShadowRoot(navigationMainFooter, 15000);
            }
            hideItems();
        };

        // Run immediately
        hideItems();
        setTimeout(hideItems, 800);
        setTimeout(hideItems, 2000);
        hideWhenNavReady();
        hideWhenWrapperReady();

        // And observe for changes (handling dynamic loading)
        const observer = new MutationObserver(() => {
            requestAnimationFrame(hideItems);
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });

        // Store observer globally to potentially manage lifecycle
        (window as any).d2lPlusNavObserver = observer;
    }

    function getCourseSelectorPath(): string | null {
        const courseSelector = document.querySelector('[data-prl*="courseSelector"]');
        const prl = courseSelector?.getAttribute("data-prl");
        if (prl) return prl;
        return null;
    }

    ext?.runtime?.onMessage?.addListener((request: any) => {
        if (request?.action === "D2LPlusSettingsUpdated" && request?.settings) {
            applySettings(request.settings);
        }
    });

    getSettings().then(applySettings);

    // Code preview feature
    const PREVIEW_BUTTON = `< slot class="PreviewButton" > <d2l-button class="preview-btn" primary = "" type = "button" style = "margin-left:auto; margin-right:auto" > Preview < /d2l-button></slot > `;
    let lastPress = new Date().getTime();
    const lastPressLimit = 2 * 1000;

    setTimeout(() => {
        let LZString: any;

        (async () => {
            const src = ext.runtime.getURL("src/lz-string-default.min.js");
            LZString = (await import(src)).default;
        })();

        try {
            const gradeList = (document.querySelector('d2l-consistent-evaluation[class="d2l-token-receiver"]') as any)
                ?.shadowRoot?.querySelector('d2l-consistent-evaluation-page[activity-type="assignmentActivity"]')
                ?.shadowRoot?.querySelector('d2l-template-primary-secondary')
                ?.querySelector('div[slot="primary"]')
                ?.querySelector('d2l-consistent-evaluation-left-panel[activity-type="assignmentActivity"]')
                ?.shadowRoot?.querySelector('d2l-consistent-evaluation-evidence-assignment')
                ?.shadowRoot?.querySelector('d2l-consistent-evaluation-assignments-submissions-page')
                ?.shadowRoot?.querySelector('.d2l-consistent-evaluation-submission-list-view')
                ?.querySelector('d2l-list[separators="between"]')
                ?.querySelector('d2l-consistent-evaluation-assignments-submission-item')
                ?.shadowRoot?.querySelector('d2l-list[aria-role="list"][separators="all"]');

            if (!gradeList) {
                return;
            }

            const items = Array.from(gradeList.children);
            for (let i = 0; i < items.length; i++) {
                try {
                    if ((items[i] as HTMLElement).getAttribute("role")) {
                        let item = items[i] as HTMLElement;
                        let file_element = item.querySelector('d2l-dropdown-menu')?.querySelector("d2l-menu")?.querySelector("d2l-menu-item") as HTMLElement | null;
                        let file_link = item.querySelector('div[class = "d2l-submission-attachment-list-item-flexbox"]')?.querySelector("d2l-list-item-content")?.querySelector('a[class="truncate"]') as HTMLAnchorElement | null;

                        if (!file_link) {
                            continue;
                        }

                        let file_name = file_link.innerText;
                        let url = file_element?.getAttribute("data-href");
                        let file_extension = file_element?.getAttribute("data-extension");

                        item.innerHTML += PREVIEW_BUTTON;

                        const getFile = async () => {
                            const response = await fetch(url!);
                            const file_contents = await response.text();

                            let previewButton = item.querySelector("slot[class=PreviewButton]")?.querySelector('d2l-button[class="preview-btn"]') as HTMLElement | null;
                            if (!previewButton) return;

                            previewButton.onclick = () => {
                                if ((new Date().getTime() - lastPress) < lastPressLimit) return;
                                lastPress = new Date().getTime();
                                ext.runtime.sendMessage({
                                    action: "openPopup",
                                    lang: file_extension,
                                    code: LZString.compressToEncodedURIComponent(file_contents),
                                    file_name: file_name
                                });
                            };
                        };
                        getFile();
                    }
                } catch { }
            }
        } catch { }
    }, 3000);

    async function waitForElement(selector: string, timeout = 30000): Promise<Element | null> {
        const startTime = Date.now();
        while (document.querySelector(selector) === null) {
            if (Date.now() - startTime > timeout) return null;
            await new Promise(resolve => requestAnimationFrame(resolve));
        }
        return document.querySelector(selector);
    }

    async function waitForShadowElement(parent: Element, selector: string, timeout = 30000): Promise<Element | null> {
        const startTime = Date.now();
        while ((parent as any).shadowRoot === null || (parent as any).shadowRoot.querySelector(selector) === null) {
            if (Date.now() - startTime > timeout) return null;
            await new Promise(resolve => requestAnimationFrame(resolve));
        }
        return (parent as any).shadowRoot.querySelector(selector);
    }

    async function waitForShadowRoot(parent: Element, timeout = 30000): Promise<ShadowRoot | null> {
        const startTime = Date.now();
        while ((parent as any).shadowRoot === null) {
            if (Date.now() - startTime > timeout) return null;
            await new Promise(resolve => requestAnimationFrame(resolve));
        }
        return (parent as any).shadowRoot;
    }

    async function waitForChildElement(parent: Element | ShadowRoot, selector: string, timeout = 30000): Promise<Element | null> {
        const startTime = Date.now();
        while (parent.querySelector(selector) === null) {
            if (Date.now() - startTime > timeout) return null;
            await new Promise(resolve => requestAnimationFrame(resolve));
        }
        return parent.querySelector(selector);
    }

    async function waitForAnyShadowElement(parent: Element, selectors: string[], timeout = 30000): Promise<Element | null> {
        const startTime = Date.now();
        while (Date.now() - startTime < timeout) {
            for (const selector of selectors) {
                if ((parent as any).shadowRoot && (parent as any).shadowRoot.querySelector(selector)) {
                    return (parent as any).shadowRoot.querySelector(selector);
                }
            }
            await new Promise(resolve => setTimeout(resolve, 100));
        }
        return null;
    }

    const QUICK_LINK_ATTR = "data-d2lplus-link";
    const QUICK_DROPDOWN_ATTR = "data-d2lplus-dropdown";
    const PAGE_LINK_ATTR = "data-d2lplus-page-link";
    const ALL_PAGE_ATTR = "data-d2lplus-allpage";

    function removeQuickLinks() {
        document.querySelectorAll(`[${QUICK_LINK_ATTR}]`).forEach(node => node.remove());
        document.querySelectorAll(`[${QUICK_DROPDOWN_ATTR}]`).forEach(node => node.remove());
        document.querySelectorAll(`[${PAGE_LINK_ATTR}]`).forEach(node => node.remove());
        document.querySelectorAll(`[${ALL_PAGE_ATTR}]`).forEach(node => node.remove());
        document.documentElement.classList.remove("d2lplus-allpage-active");
    }

    async function getNavigationWrapper(): Promise<Element | null> {
        const nav = await waitForElement('nav.d2l-navigation-s');
        if (nav) {
            const labsNav = nav.querySelector('d2l-labs-navigation');
            if (!labsNav) return null;
            const labsFooter = labsNav.querySelector('d2l-labs-navigation-main-footer');
            if (!labsFooter) return null;
            const slotMainDiv = labsFooter.querySelector('div[slot="main"]');
            return slotMainDiv?.querySelector('div.d2l-navigation-s-main-wrapper') ?? null;
        }

        const navigationRoot = await waitForElement('d2l-navigation');
        if (!navigationRoot) return null;
        const navigationShadow = await waitForShadowRoot(navigationRoot);
        if (!navigationShadow) return null;
        const navigationMainFooter = navigationShadow.querySelector('d2l-navigation-main-footer');
        if (!navigationMainFooter) return null;
        const footerShadow = await waitForShadowRoot(navigationMainFooter);
        if (!footerShadow) return null;
        const slotMainDiv = footerShadow.querySelector('div[slot="main"]');
        return slotMainDiv?.querySelector('div.d2l-navigation-s-main-wrapper') ?? null;
    }

    async function getCourseOrgUnitId(): Promise<string | null> {
        let element: Element | null = await waitForElement('.d2l-body.d2l-typography.vui-typography.d2l-tiles-container.daylight .d2l-page-main.d2l-max-width.d2l-min-width .d2l-page-main-padding .d2l-homepage .homepage-container .homepage-row .homepage-col-8 .d2l-widget.d2l-tile[role="region"]');
        if (!element) return null;
        element = element.querySelector('d2l-expand-collapse-content');
        element = element?.querySelector('div.d2l-widget-content-padding d2l-my-courses') ?? null;
        if (!element) return null;
        element = await waitForShadowElement(element, 'd2l-my-courses-container');
        if (!element) return null;
        element = await waitForShadowElement(element, 'd2l-tabs d2l-tab-panel');
        if (!element) return null;
        element = element.querySelector('d2l-my-courses-content');
        if (!element) return null;
        element = await waitForShadowElement(element, 'd2l-my-courses-card-grid');
        if (!element) return null;

        const selectors = [
            'div.course-card-grid.columns-2 d2l-enrollment-card:not([disabled]):not([closed])',
            'div.course-card-grid.columns-1 d2l-enrollment-card:not([disabled]):not([closed])',
            'div.course-card-grid.columns-3 d2l-enrollment-card:not([disabled]):not([closed])'
        ];
        element = await waitForAnyShadowElement(element, selectors);
        if (!element) return null;
        element = await waitForShadowElement(element, 'd2l-card');
        if (!element) return null;
        element = await waitForShadowElement(element, '.d2l-card-container');
        if (!element) return null;
        element = await waitForChildElement(element, 'a[href]');
        if (!element) return null;
        const href = element.getAttribute('href');
        if (!href) return null;
        const match = href.match(/\/d2l\/home\/(\d+)/);
        return match ? match[1] : null;
    }

    function cleanCourseName(raw: string): string {
        let name = raw.replace(/\s+/g, " ").trim();
        if (!name) return name;
        if (/ends\s+\w+/i.test(name)) {
            const commaIndex = name.indexOf(",");
            if (commaIndex !== -1) {
                name = name.slice(0, commaIndex).trim();
            } else {
                name = name.replace(/,?\s*ends\s.*$/i, "").trim();
            }
        }
        return name;
    }

    async function getCourseList(): Promise<CourseInfo[]> {
        let element: Element | null = await waitForElement('.d2l-body.d2l-typography.vui-typography.d2l-tiles-container.daylight .d2l-page-main.d2l-max-width.d2l-min-width .d2l-page-main-padding .d2l-homepage .homepage-container .homepage-row .homepage-col-8 .d2l-widget.d2l-tile[role="region"]');
        if (!element) return [];
        element = element.querySelector('d2l-expand-collapse-content');
        element = element?.querySelector('div.d2l-widget-content-padding d2l-my-courses') ?? null;
        if (!element) return [];
        element = await waitForShadowElement(element, 'd2l-my-courses-container');
        if (!element) return [];
        element = await waitForShadowElement(element, 'd2l-tabs d2l-tab-panel');
        if (!element) return [];
        element = element.querySelector('d2l-my-courses-content');
        if (!element) return [];
        element = await waitForShadowElement(element, 'd2l-my-courses-card-grid');
        if (!element || !(element as any).shadowRoot) return [];

        const cards = Array.from((element as any).shadowRoot.querySelectorAll('d2l-enrollment-card')) as Element[];
        const results: CourseInfo[] = [];

        for (const card of cards) {
            if ((card as Element).hasAttribute("disabled") || (card as Element).hasAttribute("closed")) continue;
            const cardShadow = (card as any).shadowRoot;
            const innerCard = cardShadow?.querySelector('d2l-card');
            const innerCardShadow = innerCard?.shadowRoot;
            const link = innerCardShadow?.querySelector('.d2l-card-container a[href*="/d2l/home/"]');
            const href = link?.getAttribute("href");
            const match = href?.match(/\/d2l\/home\/(\d+)/);
            if (!match) continue;
            const rawName = link?.textContent?.trim() ||
                (card as Element).getAttribute("title") ||
                (card as Element).getAttribute("course-name") ||
                `Course ${match[1]} `;
            const name = cleanCourseName(rawName);
            results.push({ id: match[1], name });
        }
        return results;
    }

    function createDropdown(label: string, items: CourseInfo[], hrefBuilder: (id: string) => string): HTMLElement {
        const wrapper = document.createElement("div");
        wrapper.className = "d2l-navigation-s-item d2lplus-quicklinks";
        wrapper.setAttribute(QUICK_DROPDOWN_ATTR, label.toLowerCase());

        const details = document.createElement("details");
        details.className = "d2lplus-dropdown";

        const summary = document.createElement("summary");
        summary.className = "d2l-navigation-s-link d2lplus-dropdown__summary";
        summary.textContent = label;

        const list = document.createElement("div");
        list.className = "d2lplus-dropdown__list";

        for (const item of items) {
            const link = document.createElement("a");
            link.className = "d2lplus-dropdown__item";
            link.href = hrefBuilder(item.id);
            link.textContent = item.name;
            list.appendChild(link);
        }

        details.appendChild(summary);
        details.appendChild(list);
        wrapper.appendChild(details);

        return wrapper;
    }

    async function addQuickLinks(attempt = 0) {
        const orgUnitId = await getCourseOrgUnitId();
        if (!orgUnitId) {
            if (attempt < 5) {
                setTimeout(() => addQuickLinks(attempt + 1), 1200);
                return;
            }
            console.warn("D2L+ quick links: org unit not found");
            return;
        }

        const navigationWrapper = await getNavigationWrapper();
        if (!navigationWrapper) {
            console.warn("D2L+ quick links: navigation wrapper not found");
            return;
        }

        const templateItem = Array.from(navigationWrapper.querySelectorAll('.d2l-navigation-s-item'))
            .find(item => item.querySelector('a'));
        if (!templateItem) {
            console.warn("D2L+ quick links: template item not found");
            return;
        }

        const calendarId = "calendar";
        if (!navigationWrapper.querySelector(`[${QUICK_LINK_ATTR}="${calendarId}"]`)) {
            const clone = templateItem.cloneNode(true) as HTMLElement;
            const anchor = clone.querySelector('a') as HTMLAnchorElement;
            if (anchor) {
                anchor.href = `https://d2l.msu.edu/d2l/le/calendar/${orgUnitId}`;
                anchor.textContent = "Calendar";
                clone.setAttribute(QUICK_LINK_ATTR, calendarId);
                navigationWrapper.appendChild(clone);
            }
        }

        if (!navigationWrapper.querySelector(`[${PAGE_LINK_ATTR}="grades"]`)) {
            const clone = templateItem.cloneNode(true) as HTMLElement;
            const anchor = clone.querySelector('a') as HTMLAnchorElement;
            if (anchor) {
                anchor.href = "#";
                anchor.textContent = "All Grades";
                anchor.addEventListener("click", (event) => {
                    event.preventDefault();
                    openExtensionPage("grades.html");
                });
                clone.setAttribute(PAGE_LINK_ATTR, "grades");
                navigationWrapper.appendChild(clone);
            }
        }

        if (!navigationWrapper.querySelector(`[${PAGE_LINK_ATTR}="assignments"]`)) {
            const clone = templateItem.cloneNode(true) as HTMLElement;
            const anchor = clone.querySelector('a') as HTMLAnchorElement;
            if (anchor) {
                anchor.href = "#";
                anchor.textContent = "All Assignments";
                anchor.addEventListener("click", (event) => {
                    event.preventDefault();
                    openExtensionPage("assignments.html");
                });
                clone.setAttribute(PAGE_LINK_ATTR, "assignments");
                navigationWrapper.appendChild(clone);
            }
        }

        if (!navigationWrapper.querySelector(`[${PAGE_LINK_ATTR}="courses"]`)) {
            const clone = templateItem.cloneNode(true) as HTMLElement;
            const anchor = clone.querySelector('a') as HTMLAnchorElement;
            if (anchor) {
                anchor.href = "/d2l/home";
                anchor.textContent = "Home";
                clone.setAttribute(PAGE_LINK_ATTR, "courses");
                navigationWrapper.insertBefore(clone, navigationWrapper.firstChild);
            }
        }

        const courses = await getCourseList();
        if (!courses.length) {
            if (attempt < 5) {
                setTimeout(() => addQuickLinks(attempt + 1), 1200);
            }
            return;
        }
        saveCourseList(courses);
    }

    const injectFrameDarkStyles = (doc: Document) => {
        if (doc.getElementById("d2lplus-frame-dark")) return;
        const parentStyles = getComputedStyle(document.documentElement);
        const bgPrimary = parentStyles.getPropertyValue("--d2lplus-bg-primary").trim() || "#0f141b";
        const bgSecondary = parentStyles.getPropertyValue("--d2lplus-bg-secondary").trim() || "#111827";
        const bgTertiary = parentStyles.getPropertyValue("--d2lplus-bg-tertiary").trim() || "#1f2937";
        const textPrimary = parentStyles.getPropertyValue("--d2lplus-text-primary").trim() || "#e5e7eb";
        const link = parentStyles.getPropertyValue("--d2lplus-link").trim() || "#93c5fd";

        doc.documentElement.style.setProperty("--d2lplus-bg-primary", bgPrimary);
        doc.documentElement.style.setProperty("--d2lplus-bg-secondary", bgSecondary);
        doc.documentElement.style.setProperty("--d2lplus-bg-tertiary", bgTertiary);
        doc.documentElement.style.setProperty("--d2lplus-text-primary", textPrimary);
        doc.documentElement.style.setProperty("--d2lplus-link", link);

        const style = doc.createElement("style");
        style.id = "d2lplus-frame-dark";
            style.textContent = `
                :root, body {
                    background: var(--d2lplus-bg-secondary, #111827) !important;
                    color: var(--d2lplus-text-primary, #e5e7eb) !important;
                }
            .dco, .dco_c, form,
            #d_content, #d_content_inner, #d_content_r, #d_content_r_c1, #d_content_r_c2, #d_content_r_p {
                background: var(--d2lplus-bg-secondary, #111827) !important;
                color: var(--d2lplus-text-primary, #e5e7eb) !important;
            }
            [style*="background-color:#FFF"],
            [style*="background-color: #FFF"],
            [style*="background-color:#fff"],
            [style*="background-color: #fff"],
            [style*="background-color:#ffffff"],
            [style*="background-color: #ffffff"],
            [style*="background-color: rgb(255, 255, 255)"],
            [style*="background-color: rgb(255,255,255)"] {
                background-color: var(--d2lplus-bg-secondary, #111827) !important;
            }
            [style*="color"] {
                color: var(--d2lplus-text-primary, #e5e7eb) !important;
            }
                a {
                    color: var(--d2lplus-link, #93c5fd) !important;
                }
                .ddl_li_c:hover,
                .ddl_li_b:hover,
                .ddl_li_b:focus,
                .ddl_li_b:focus-within,
                .ddl_li_b:active {
                    background: var(--d2lplus-bg-tertiary, #1f2937) !important;
                }
                .ddl_li_b,
                .ddl_li_c {
                    background: transparent !important;
                }
                .vui-list > .d2l-list-item-action-hover,
                .vui-list > .d2l-list-item-action-focus,
                .vui-list > .d2l-list-item-action-hover > .ddl_li_c,
                .vui-list > .d2l-list-item-action-focus > .ddl_li_c {
                    background: var(--d2lplus-bg-tertiary, #1f2937) !important;
                }
            `;
        doc.head.appendChild(style);
    };

    const applyIframeDarkStyles = (root: ParentNode) => {
        const frames = Array.from(root.querySelectorAll("iframe")) as HTMLIFrameElement[];
        for (const frame of frames) {
            const applyToFrame = () => {
                try {
                    const doc = frame.contentDocument;
                    if (!doc) return;
                    injectFrameDarkStyles(doc);
                } catch { }
            };
            frame.addEventListener("load", applyToFrame, { once: true });
            applyToFrame();
        }
    };

    async function renderAllPage(mode: "grades" | "assignments", courses: CourseInfo[]) {
        if (document.querySelector(`[${ALL_PAGE_ATTR}]`)) return;

        document.documentElement.classList.add("d2lplus-allpage-active");

        const nav = document.querySelector("nav.d2l-navigation-s");
        if (nav) {
            const navHeight = Math.max(nav.getBoundingClientRect().height, 60);
            document.documentElement.style.setProperty("--d2lplus-nav-height", `${navHeight}px`);
        }

        const container = document.createElement("div");
        container.className = "d2lplus-allpage";
        container.setAttribute(ALL_PAGE_ATTR, "true");

        const header = document.createElement("div");
        header.className = "d2lplus-allpage__header";

        const titleWrap = document.createElement("div");
        const title = document.createElement("div");
        title.className = "d2lplus-allpage__title";
        title.textContent = mode === "grades" ? "All Grades" : "All Assignments";
        const subtitle = document.createElement("div");
        subtitle.className = "d2lplus-allpage__subtitle";
        subtitle.textContent = "Click a course to expand";
        titleWrap.appendChild(title);
        titleWrap.appendChild(subtitle);
        header.appendChild(titleWrap);

        const actions = document.createElement("div");
        actions.className = "d2lplus-allpage__actions";

        let editMode = false;

        const homeBtn = document.createElement("button");
        homeBtn.className = "d2lplus-allpage__btn";
        homeBtn.textContent = "Home";
        homeBtn.addEventListener("click", () => {
            window.location.href = "https://d2l.msu.edu/d2l/home";
        });

        const editBtn = document.createElement("button");
        editBtn.className = "d2lplus-allpage__btn";
        editBtn.textContent = "Edit order";
        editBtn.setAttribute("aria-pressed", "false");

        const refreshBtn = document.createElement("button");
        refreshBtn.className = "d2lplus-allpage__btn";
        refreshBtn.textContent = "Refresh courses";
        refreshBtn.addEventListener("click", async () => {
            const updated = await getCourseList();
            if (updated.length) {
                saveCourseList(updated);
                const order = await getCourseOrderFromStorage();
                const ordered = applyCourseOrder(updated, order);
                document.querySelector(`[${ALL_PAGE_ATTR}]`)?.remove();
                renderAllPage(mode, ordered);
            }
        });

        const setEditMode = (enabled: boolean) => {
            editMode = enabled;
            container.classList.toggle("d2lplus-allpage--edit", enabled);
            editBtn.textContent = enabled ? "Done" : "Edit order";
            editBtn.setAttribute("aria-pressed", enabled ? "true" : "false");
            grid.querySelectorAll(".d2lplus-allpage__summary").forEach((node) => {
                (node as HTMLElement).setAttribute("draggable", enabled ? "true" : "false");
            });
        };

        editBtn.addEventListener("click", () => {
            setEditMode(!editMode);
        });

        actions.appendChild(homeBtn);
        actions.appendChild(editBtn);
        actions.appendChild(refreshBtn);
        header.appendChild(actions);

        const grid = document.createElement("div");
        grid.className = "d2lplus-allpage__grid";

        const removeCourseMetadata = (container: HTMLElement, courseName: string) => {
            const nameLower = courseName.toLowerCase();
            const nodes = Array.from(container.querySelectorAll("*")) as HTMLElement[];
            for (const node of nodes) {
                if (node.children.length) continue;
                const text = (node.textContent || "").replace(/\s+/g, " ").trim();
                if (!text) continue;
                if (text.length < 60) continue;
                const lower = text.toLowerCase();
                if (!lower.includes(nameLower)) continue;
                if (!/ends\s+[a-z]/i.test(text)) continue;
                node.remove();
            }
        };

        for (const course of courses) {
            const details = document.createElement("details");
            details.className = "d2lplus-allpage__item";
            details.setAttribute("data-course-id", course.id);

            const summary = document.createElement("summary");
            summary.className = "d2lplus-allpage__summary";
            summary.setAttribute("draggable", "false");

            const handle = document.createElement("span");
            handle.className = "d2lplus-allpage__handle";
            const label = document.createElement("span");
            label.textContent = course.name;

            summary.appendChild(handle);
            summary.appendChild(label);

            const body = document.createElement("div");
            body.className = "d2lplus-allpage__frame";
            body.setAttribute("data-src", mode === "grades"
                ? `https://d2l.msu.edu/d2l/lms/grades/my_grades/main.d2l?ou=${course.id}`
                : `https://d2l.msu.edu/d2l/lms/dropbox/user/folders_list.d2l?ou=${course.id}`);
            body.textContent = "Loading...";

            details.addEventListener("toggle", () => {
                if (details.open && !body.getAttribute("data-loaded")) {
                    const url = body.getAttribute("data-src") || "";
                    fetch(url, { credentials: "include" })
                        .then(res => res.text())
                        .then(html => {
                            const doc = new DOMParser().parseFromString(html, "text/html");
                            const candidate = doc.querySelector(".d2l-grid-container") ||
                                doc.querySelector("d2l-table-wrapper") ||
                                doc.querySelector(".d2l-page-main") ||
                                doc.body;
                            body.innerHTML = candidate ? candidate.innerHTML : "<div>No data found.</div>";
                            removeCourseMetadata(body, course.name);
                            applyIframeDarkStyles(body);
                            body.setAttribute("data-loaded", "true");
                        })
                        .catch(() => {
                            body.innerHTML = "<div>Failed to load.</div>";
                        });
                }
            });

            details.appendChild(summary);
            details.appendChild(body);
            grid.appendChild(details);
        }

        container.appendChild(header);
        container.appendChild(grid);

        const resizeHandle = document.createElement("div");
        resizeHandle.className = "d2lplus-allpage__resize";
        container.appendChild(resizeHandle);

        document.body.appendChild(container);

        if (!document.querySelector("[data-d2lplus-back]")) {
            ensureBackButton();
        }

        const savedHeight = await getAllPageHeightFromStorage();
        if (savedHeight) {
            document.documentElement.style.setProperty("--d2lplus-allpage-height", `${savedHeight}px`);
        }

        let resizing = false;
        let startY = 0;
        let startHeight = 0;

        const startResize = (clientY: number) => {
            resizing = true;
            startY = clientY;
            startHeight = container.getBoundingClientRect().height;
        };

        const moveResize = (clientY: number) => {
            if (!resizing) return;
            const delta = clientY - startY;
            const next = Math.max(300, startHeight + delta);
            document.documentElement.style.setProperty("--d2lplus-allpage-height", `${next}px`);
        };

        const endResize = () => {
            if (!resizing) return;
            resizing = false;
            const height = container.getBoundingClientRect().height;
            saveAllPageHeight(height);
        };

        resizeHandle.addEventListener("mousedown", (event) => {
            event.preventDefault();
            startResize(event.clientY);
        });
        resizeHandle.addEventListener("touchstart", (event) => {
            const touch = event.touches[0];
            if (!touch) return;
            startResize(touch.clientY);
        }, { passive: true });

        window.addEventListener("mousemove", (event) => moveResize(event.clientY));
        window.addEventListener("touchmove", (event) => {
            const touch = event.touches[0];
            if (!touch) return;
            moveResize(touch.clientY);
        }, { passive: true });
        window.addEventListener("mouseup", endResize);
        window.addEventListener("touchend", endResize);

        // Drag and drop
        let draggingId: string | null = null;

        grid.addEventListener("dragstart", (event) => {
            if (!editMode) return;
            const target = event.target as HTMLElement;
            const item = target?.closest("[data-course-id]") as HTMLElement | null;
            if (item) {
                draggingId = item.getAttribute("data-course-id");
                event.dataTransfer?.setData("text/plain", draggingId || "");
                const img = document.createElement("canvas");
                img.width = 1;
                img.height = 1;
                event.dataTransfer?.setDragImage(img, 0, 0);
                item.classList.add("is-dragging");
            }
        });

        grid.addEventListener("drop", (event) => {
            event.preventDefault();
            if (!editMode) return;
            if (!draggingId) return;
            const target = (event.target as HTMLElement)?.closest("[data-course-id]") as HTMLElement | null;
            const draggingEl = grid.querySelector(`[data-course-id="${draggingId}"]`) as HTMLElement | null;
            if (target && draggingEl && target !== draggingEl) {
                grid.insertBefore(draggingEl, target);
            }
            const items = Array.from(grid.querySelectorAll("[data-course-id]"));
            const order = items.map(item => item.getAttribute("data-course-id") || "").filter(Boolean);
            saveCourseOrder(order);
            draggingEl?.classList.remove("is-dragging");
            draggingId = null;
        });

        grid.addEventListener("dragover", (event) => {
            event.preventDefault();
            if (!editMode) return;
            const target = (event.target as HTMLElement)?.closest("[data-course-id]") as HTMLElement | null;
            grid.querySelectorAll(".is-over").forEach(el => el.classList.remove("is-over"));
            if (target) target.classList.add("is-over");
        });

        grid.addEventListener("dragleave", () => {
            if (!editMode) return;
            grid.querySelectorAll(".is-over").forEach(el => el.classList.remove("is-over"));
        });
    }

    async function maybeRenderAllPage(attempt = 0) {
        const url = new URL(window.location.href);
        const mode = url.searchParams.get("d2lplus");
        if (mode !== "grades" && mode !== "assignments") return;

        let courses = await getCourseListFromStorage();
        if (!courses.length) {
            courses = await getCourseList();
        }
        if (!courses.length) {
            if (attempt < 5) {
                setTimeout(() => maybeRenderAllPage(attempt + 1), 1200);
            }
            return;
        }
        courses = courses.map(course => ({ ...course, name: cleanCourseName(course.name) }));
        saveCourseList(courses);

        const order = await getCourseOrderFromStorage();
        const ordered = applyCourseOrder(courses, order);
        renderAllPage(mode as "grades" | "assignments", ordered);
    }

    maybeRenderAllPage();

    function ensureBackButton() {
        // Only add back button to the main window, not iframes/widgets
        if (window !== window.top) return;

        if (!document.body) return;
        if (document.querySelector("[data-d2lplus-back]")) return;
        const button = document.createElement("button");
        button.className = "d2lplus-back";
        button.setAttribute("data-d2lplus-back", "true");
        button.textContent = "Back";
        button.addEventListener("click", () => history.back());
        document.body.appendChild(button);
    }
})();

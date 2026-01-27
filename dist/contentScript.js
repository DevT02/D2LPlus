var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
(function () {
    var _this = this;
    var _a, _b, _c, _d, _e, _f;
    var ext = (_a = globalThis.browser) !== null && _a !== void 0 ? _a : globalThis.chrome;
    var DEFAULT_SETTINGS = {
        darkMode: true, // legacy
        theme: 'dark',
        animations: true,
        quickLinks: true,
        focusView: false,
        hideLegacyNav: false,
    };
    var storageArea = (_c = (_b = ext === null || ext === void 0 ? void 0 : ext.storage) === null || _b === void 0 ? void 0 : _b.sync) !== null && _c !== void 0 ? _c : (_d = ext === null || ext === void 0 ? void 0 : ext.storage) === null || _d === void 0 ? void 0 : _d.local;
    var THEMES = {
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
    var DARK_MODE_CSS = "\n/* ==============================================\n   D2L+ DARK MODE - COMPREHENSIVE STYLES\n   ============================================== */\n\n/* Base styles */\n.d2lplus-dark,\n.d2lplus-dark body,\n.d2lplus-dark html {\n    background: var(--d2lplus-bg-primary) !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* Links */\n.d2lplus-dark a,\n.d2lplus-dark a:visited {\n    color: var(--d2lplus-link) !important;\n}\n.d2lplus-dark a:hover {\n    color: #a8c8ff !important;\n}\n\n/* Headings */\n.d2lplus-dark .d2l-heading-1,\n.d2lplus-dark .d2l-heading-2,\n.d2lplus-dark .d2l-heading-3,\n.d2lplus-dark .d2l-heading-4,\n.d2lplus-dark .d2l-heading-5,\n.d2lplus-dark .d2l-heading-6,\n.d2lplus-dark h1, .d2lplus-dark h2, .d2lplus-dark h3,\n.d2lplus-dark h4, .d2lplus-dark h5, .d2lplus-dark h6 {\n    color: #f1f5f9 !important;\n}\n\n/* Body text */\n.d2lplus-dark .d2l-body,\n.d2lplus-dark .d2l-body-small,\n.d2lplus-dark .d2l-body-compact,\n.d2lplus-dark p,\n.d2lplus-dark span,\n.d2lplus-dark div,\n.d2lplus-dark label {\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* ==============================================\n   CARDS & WIDGETS\n   ============================================== */\n.d2lplus-dark .d2l-widget,\n.d2lplus-dark .d2l-page-main,\n.d2lplus-dark .d2l-page-main-padding,\n.d2lplus-dark .d2l-tile,\n.d2lplus-dark .d2l-card-container,\n.d2lplus-dark .d2l-card,\n.d2lplus-dark d2l-card,\n.d2lplus-dark d2l-enrollment-card {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* Card borders fix */\n.d2lplus-dark .d2l-card-container,\n.d2lplus-dark .d2l-card,\n.d2lplus-dark d2l-card {\n    border: 1px solid var(--d2lplus-border) !important;\n    box-shadow: none !important;\n}\n\n/* ==============================================\n   NAVIGATION\n   ============================================== */\n.d2lplus-dark .d2l-navigation-s,\n.d2lplus-dark .d2l-navigation-s-main-wrapper,\n.d2lplus-dark .d2l-navigation-s-item,\n.d2lplus-dark .d2l-branding-navigation-background-color,\n.d2lplus-dark nav,\n.d2lplus-dark .d2l-navigation {\n    background: #0f141b !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n.d2lplus-dark .d2l-navigation-s-link,\n.d2lplus-dark .d2l-navigation-s-group,\n.d2lplus-dark .d2l-navigation-s-group-text {\n    color: var(--d2lplus-text-primary) !important;\n}\n\n.d2lplus-dark .d2l-navigation-s-link:hover {\n    color: #ffffff !important;\n}\n\n/* ==============================================\n   DROPDOWNS & MENUS\n   ============================================== */\n.d2lplus-dark d2l-dropdown-content,\n.d2lplus-dark d2l-menu,\n.d2lplus-dark .d2l-dropdown-menu,\n.d2lplus-dark .d2l-menu-item-text,\n.d2lplus-dark d2l-dropdown,\n.d2lplus-dark d2l-dropdown-menu,\n.d2lplus-dark d2l-dropdown-button,\n.d2lplus-dark d2l-dropdown-button-subtle,\n.d2lplus-dark d2l-dropdown-context-menu,\n.d2lplus-dark .d2l-dropdown,\n.d2lplus-dark .d2l-menu,\n.d2lplus-dark .d2l-menu-item,\n.d2lplus-dark [class*=\"dropdown\"],\n.d2lplus-dark [class*=\"menu\"] {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n.d2lplus-dark d2l-menu-item,\n.d2lplus-dark d2l-menu-item-link,\n.d2lplus-dark d2l-menu-item-radio,\n.d2lplus-dark d2l-menu-item-checkbox {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n.d2lplus-dark d2l-menu-item:hover,\n.d2lplus-dark d2l-menu-item-link:hover {\n    background: var(--d2lplus-bg-tertiary) !important;\n}\n\n/* ==============================================\n   HOMEPAGE ELEMENTS\n   ============================================== */\n.d2lplus-dark .d2l-page-main-padding,\n.d2lplus-dark .d2l-homepage,\n.d2lplus-dark .homepage-container,\n.d2lplus-dark .homepage-row,\n.d2lplus-dark .homepage-col-8,\n.d2lplus-dark .homepage-col-4,\n.d2lplus-dark .homepage-col-12,\n.d2lplus-dark .d2l-widget-content,\n.d2lplus-dark .d2l-widget-content-padding,\n.d2lplus-dark .d2l-homepage-pageheader,\n.d2lplus-dark .d2l-box,\n.d2lplus-dark .d2l-box-layout,\n.d2lplus-dark .d2l-homepage-header-wrapper,\n.d2lplus-dark .d2l-widget-header {\n    background-color: #0f141b !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n.d2lplus-dark .d2l-widget-content.dls,\n.d2lplus-dark .d2l-widget-content.dls * {\n    color: var(--d2lplus-text-primary) !important;\n}\n\n.d2lplus-dark .d2l-widget-content.dls a {\n    color: var(--d2lplus-link) !important;\n}\n\n/* ==============================================\n   \"NEED HELP\" SECTION\n   ============================================== */\n.d2lplus-dark .d2l-help-widget,\n.d2lplus-dark [class*=\"help\"],\n.d2lplus-dark .d2l-help,\n.d2lplus-dark .needhelp,\n.d2lplus-dark [class*=\"support\"] {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* ==============================================\n   EMAIL & MESSAGING\n   ============================================== */\n.d2lplus-dark .d2l-email,\n.d2lplus-dark .d2l-pager-email,\n.d2lplus-dark [class*=\"email\"],\n.d2lplus-dark [class*=\"mail\"],\n.d2lplus-dark [class*=\"message\"],\n.d2lplus-dark [class*=\"inbox\"],\n.d2lplus-dark .d2l-folder,\n.d2lplus-dark [class*=\"folder\"],\n.d2lplus-dark .d2l-datalist,\n.d2lplus-dark .d2l-datalist-item {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* ==============================================\n   ePORTFOLIO, SELF-REGISTRATION, SPLS\n   ============================================== */\n.d2lplus-dark .d2l-collectionbrowser,\n.d2lplus-dark [class*=\"portfolio\"],\n.d2lplus-dark [class*=\"registration\"],\n.d2lplus-dark [class*=\"spls\"],\n.d2lplus-dark [class*=\"task\"],\n.d2lplus-dark .d2l-page-sidebar,\n.d2lplus-dark .d2l-page-sidebars {\n    background: #0f141b !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* ==============================================\n   CONTENT BROWSER & LIBRARY\n   ============================================== */\n.d2lplus-dark .d2l-content-browser,\n.d2lplus-dark [class*=\"content-browser\"],\n.d2lplus-dark [class*=\"library\"],\n.d2lplus-dark [class*=\"search\"],\n.d2lplus-dark .d2l-search,\n.d2lplus-dark .d2l-search-input,\n.d2lplus-dark d2l-input-search,\n.d2lplus-dark d2l-input-text,\n.d2lplus-dark input[type=\"text\"],\n.d2lplus-dark input[type=\"search\"] {\n    background: var(--d2lplus-bg-tertiary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* ==============================================\n   CLASS UPDATES & ACTIVITY FEED\n   ============================================== */\n.d2lplus-dark .d2l-activity,\n.d2lplus-dark [class*=\"activity\"],\n.d2lplus-dark [class*=\"update\"],\n.d2lplus-dark [class*=\"feed\"],\n.d2lplus-dark [class*=\"news\"],\n.d2lplus-dark .d2l-datalist,\n.d2lplus-dark .d2l-list,\n.d2lplus-dark d2l-list,\n.d2lplus-dark d2l-list-item {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* ==============================================\n   CALENDAR\n   ============================================== */\n.d2lplus-dark .d2l-calendar,\n.d2lplus-dark [class*=\"calendar\"],\n.d2lplus-dark .d2l-le,\n.d2lplus-dark .d2l-le-calendar,\n.d2lplus-dark d2l-calendar,\n.d2lplus-dark .fc,\n.d2lplus-dark .fc-view,\n.d2lplus-dark .fc-day,\n.d2lplus-dark .fc-daygrid,\n.d2lplus-dark .fc-header-toolbar,\n.d2lplus-dark table.fc-scrollgrid {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n.d2lplus-dark .fc-day-today {\n    background: var(--d2lplus-bg-tertiary) !important;\n}\n\n.d2lplus-dark .fc-event,\n.d2lplus-dark .fc-event-title {\n    background: var(--d2lplus-accent) !important;\n    color: #ffffff !important;\n    border-color: #1d4ed8 !important;\n}\n\n/* ==============================================\n   QUIZZES\n   ============================================== */\n.d2lplus-dark .d2l-quiz,\n.d2lplus-dark [class*=\"quiz\"],\n.d2lplus-dark .d2l-questions,\n.d2lplus-dark [class*=\"question\"],\n.d2lplus-dark .d2l-qb,\n.d2lplus-dark .d2l-question-text,\n.d2lplus-dark .d2l-answer,\n.d2lplus-dark [class*=\"answer\"] {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* ==============================================\n   GRADES\n   ============================================== */\n.d2lplus-dark .d2l-grades,\n.d2lplus-dark [class*=\"grade\"],\n.d2lplus-dark .d2l-grade-item,\n.d2lplus-dark .d_ggl1,\n.d2lplus-dark .d_gl,\n.d2lplus-dark .d_gt,\n.d2lplus-dark .d_gn,\n.d2lplus-dark .d_go,\n.d2lplus-dark .d_gf {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* ==============================================\n   TABLES\n   ============================================== */\n.d2lplus-dark table,\n.d2lplus-dark .d2l-table,\n.d2lplus-dark .d2l-table-wrapper,\n.d2lplus-dark d2l-table-wrapper,\n.d2lplus-dark thead,\n.d2lplus-dark tbody,\n.d2lplus-dark tfoot,\n.d2lplus-dark tr,\n.d2lplus-dark th,\n.d2lplus-dark td {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n.d2lplus-dark th {\n    background: var(--d2lplus-bg-tertiary) !important;\n}\n\n.d2lplus-dark tr:hover {\n    background: var(--d2lplus-bg-tertiary) !important;\n}\n\n/* Alternating row colors */\n.d2lplus-dark tr:nth-child(even) {\n    background: var(--d2lplus-bg-secondary) !important;\n}\n\n/* ==============================================\n   LEGACY D2L CLASSES\n   ============================================== */\n.d2lplus-dark body#d2l_body,\n.d2lplus-dark #d_content,\n.d2lplus-dark #d_content_inner,\n.d2lplus-dark #d_content_r,\n.d2lplus-dark #d_content_r_p,\n.d2lplus-dark .dco,\n.d2lplus-dark .dco_c,\n.d2lplus-dark .d_ma,\n.d2lplus-dark .d_gh,\n.d2lplus-dark .d_ggl1,\n.d2lplus-dark .d_gt,\n.d2lplus-dark .d_hch,\n.d2lplus-dark .d2l-grid-wrapper,\n.d2lplus-dark .d2l-grid {\n    background-color: #0f141b !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* ==============================================\n   HTML BLOCKS & TEXT\n   ============================================== */\n.d2lplus-dark .d2l-htmlblock-untrusted,\n.d2lplus-dark .d2l-htmlblock-inline,\n.d2lplus-dark .d2l-htmlblock-wc,\n.d2lplus-dark .d2l-textblock,\n.d2lplus-dark .d2l-textblock-secondary,\n.d2lplus-dark .d2l-linkheading-link,\n.d2lplus-dark .d2l-homepage-heading-link,\n.d2lplus-dark .d2l-link,\n.d2lplus-dark .d2l-link-inline {\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* ==============================================\n   FORMS & INPUTS\n   ============================================== */\n.d2lplus-dark input,\n.d2lplus-dark textarea,\n.d2lplus-dark select,\n.d2lplus-dark button,\n.d2lplus-dark .d2l-input,\n.d2lplus-dark d2l-input,\n.d2lplus-dark d2l-button,\n.d2lplus-dark d2l-button-subtle,\n.d2lplus-dark .d2l-button {\n    background: var(--d2lplus-bg-tertiary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n.d2lplus-dark input:focus,\n.d2lplus-dark textarea:focus,\n.d2lplus-dark select:focus {\n    border-color: var(--d2lplus-accent) !important;\n    outline-color: var(--d2lplus-accent) !important;\n}\n\n/* Primary buttons keep their accent color */\n.d2lplus-dark d2l-button[primary],\n.d2lplus-dark .d2l-button-primary {\n    background: var(--d2lplus-accent) !important;\n    color: #ffffff !important;\n    border-color: #1d4ed8 !important;\n}\n\n/* ==============================================\n   DIALOGS & MODALS\n   ============================================== */\n.d2lplus-dark .d2l-dialog,\n.d2lplus-dark d2l-dialog,\n.d2lplus-dark d2l-dialog-fullscreen,\n.d2lplus-dark [class*=\"dialog\"],\n.d2lplus-dark [class*=\"modal\"],\n.d2lplus-dark .d2l-overlay {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* ==============================================\n   TOOLTIPS & POPOVERS\n   ============================================== */\n.d2lplus-dark .d2l-tooltip,\n.d2lplus-dark d2l-tooltip,\n.d2lplus-dark [class*=\"tooltip\"],\n.d2lplus-dark [class*=\"popover\"] {\n    background: var(--d2lplus-bg-tertiary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* ==============================================\n   ALERTS & NOTIFICATIONS\n   ============================================== */\n.d2lplus-dark .d2l-alert,\n.d2lplus-dark d2l-alert,\n.d2lplus-dark [class*=\"alert\"],\n.d2lplus-dark [class*=\"notification\"] {\n    background: var(--d2lplus-bg-tertiary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* ==============================================\n   ICONS & IMAGES\n   ============================================== */\n.d2lplus-dark .d2l-icon,\n.d2lplus-dark d2l-icon,\n.d2lplus-dark svg {\n    fill: var(--d2lplus-text-primary) !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* ==============================================\n   INLINE STYLE OVERRIDES\n   ============================================== */\n.d2lplus-dark [style*=\"color:#000\"],\n.d2lplus-dark [style*=\"color: #000\"],\n.d2lplus-dark [style*=\"color:#000000\"],\n.d2lplus-dark [style*=\"color: #000000\"],\n.d2lplus-dark [style*=\"color:black\"],\n.d2lplus-dark [style*=\"color: black\"],\n.d2lplus-dark [style*=\"color: rgb(0, 0, 0)\"],\n.d2lplus-dark [style*=\"color:rgb(0,0,0)\"] {\n    color: var(--d2lplus-text-primary) !important;\n}\n\n.d2lplus-dark [style*=\"background-color:#FfF\"],\n.d2lplus-dark [style*=\"background-color: #FFF\"],\n.d2lplus-dark [style*=\"background-color:#fff\"],\n.d2lplus-dark [style*=\"background-color: #fff\"],\n.d2lplus-dark [style*=\"background-color:#FFFFFF\"],\n.d2lplus-dark [style*=\"background-color: #FFFFFF\"],\n.d2lplus-dark [style*=\"background-color:#ffffff\"],\n.d2lplus-dark [style*=\"background-color: #ffffff\"],\n.d2lplus-dark [style*=\"background-color: rgb(255, 255, 255)\"],\n.d2lplus-dark [style*=\"background-color: rgb(255,255,255)\"],\n.d2lplus-dark [style*=\"background-color:white\"],\n.d2lplus-dark [style*=\"background-color: white\"],\n.d2lplus-dark [style*=\"background:#FFF\"],\n.d2lplus-dark [style*=\"background: #FFF\"],\n.d2lplus-dark [style*=\"background:#fff\"],\n.d2lplus-dark [style*=\"background: #fff\"],\n.d2lplus-dark [style*=\"background:#FFFFFF\"],\n.d2lplus-dark [style*=\"background: #FFFFFF\"],\n.d2lplus-dark [style*=\"background:#ffffff\"],\n.d2lplus-dark [style*=\"background: #ffffff\"],\n.d2lplus-dark [style*=\"background: rgb(255, 255, 255)\"],\n.d2lplus-dark [style*=\"background: rgb(255,255,255)\"],\n.d2lplus-dark [style*=\"background:white\"],\n.d2lplus-dark [style*=\"background: white\"],\n.d2lplus-dark [style*=\"background-color: rgb(255, 255, 255)\"],\n.d2lplus-dark [style*=\"background-color:rgb(255,255,255)\"],\n.d2lplus-dark [style*=\"background: rgb(255, 255, 255)\"] {\n    background-color: var(--d2lplus-bg-secondary) !important;\n    background: var(--d2lplus-bg-secondary) !important;\n}\n\n/* ==============================================\n   SCROLLBARS\n   ============================================== */\n.d2lplus-dark ::-webkit-scrollbar {\n    width: 10px;\n    height: 10px;\n}\n\n.d2lplus-dark ::-webkit-scrollbar-track {\n    background: var(--d2lplus-bg-primary);\n}\n\n.d2lplus-dark ::-webkit-scrollbar-thumb {\n    background: var(--d2lplus-border);\n    border-radius: 5px;\n}\n\n.d2lplus-dark ::-webkit-scrollbar-thumb:hover {\n    background: #374151;\n}\n\n/* ==============================================\n   IFRAMES (partial support)\n   ============================================== */\n.d2lplus-dark iframe {\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* ==============================================\n   SPECIFIC D2L WEB COMPONENTS\n   ============================================== */\n.d2lplus-dark d2l-breadcrumb,\n.d2lplus-dark d2l-breadcrumbs,\n.d2lplus-dark d2l-tab,\n.d2lplus-dark d2l-tabs,\n.d2lplus-dark d2l-tab-panel,\n.d2lplus-dark d2l-loading-spinner,\n.d2lplus-dark d2l-status-indicator,\n.d2lplus-dark d2l-expand-collapse-content {\n    background: transparent !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n.d2lplus-dark d2l-tab[selected],\n.d2lplus-dark d2l-tab:hover {\n    background: var(--d2lplus-bg-tertiary) !important;\n}\n\n/* ==============================================\n   NEED HELP WIDGET (Force light text)\n   ============================================== */\n.d2lplus-dark .d2l-widget[data-widget-type*=\"help\"],\n.d2lplus-dark .homepage-col-4 .d2l-widget:last-child,\n.d2lplus-dark [class*=\"NeedHelp\"],\n.d2lplus-dark [class*=\"needhelp\"],\n.d2lplus-dark [class*=\"need-help\"] {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n.d2lplus-dark .d2l-widget .d2l-htmlblock *,\n.d2lplus-dark .d2l-widget-content .d2l-htmlblock *,\n.d2lplus-dark .homepage-col-4 * {\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* ==============================================\n   CALENDAR SIDEBAR & MINI CALENDAR\n   ============================================== */\n.d2lplus-dark .d2l-calendar-mini,\n.d2lplus-dark .d2l-minibar,\n.d2lplus-dark [class*=\"mini-cal\"],\n.d2lplus-dark [class*=\"calendar-mini\"],\n.d2lplus-dark [class*=\"calendar-sidebar\"],\n.d2lplus-dark .d2l-datepicker,\n.d2lplus-dark d2l-calendar {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n.d2lplus-dark .d2l-calendar-mini table,\n.d2lplus-dark .d2l-calendar-mini td,\n.d2lplus-dark .d2l-calendar-mini th {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* ==============================================\n   EMAIL TABLE HEADERS & SEARCH\n   ============================================== */\n.d2lplus-dark .d2l-pager-container,\n.d2lplus-dark .d2l-filter,\n.d2lplus-dark .d2l-filter-container,\n.d2lplus-dark .d2l-table-header,\n.d2lplus-dark .d2l-header-row,\n.d2lplus-dark [class*=\"header-row\"],\n.d2lplus-dark [class*=\"filter\"] {\n    background: var(--d2lplus-bg-tertiary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* ==============================================\n   LEGACY D2L PAGES (d2l_body containers)\n   ============================================== */\n.d2lplus-dark .d2l_1,\n.d2lplus-dark .d2l_2,\n.d2lplus-dark .d2l-page,\n.d2lplus-dark .d2l-page-content,\n.d2lplus-dark ._d2l-body,\n.d2lplus-dark .d2l-twopanelselector,\n.d2lplus-dark .d2l-twopanelselector-side,\n.d2lplus-dark .d2l-twopanelselector-main,\n.d2lplus-dark .d2l-collapsiblepane,\n.d2lplus-dark .d2l-collapsiblepane-header,\n.d2lplus-dark .d2l-collapsiblepane-content {\n    background: #0f141b !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* Legacy gray backgrounds */\n.d2lplus-dark .d_ich,\n.d2lplus-dark .d_ic,\n.d2lplus-dark .d_ie,\n.d2lplus-dark .d_if,\n.d2lplus-dark .d_ig,\n.d2lplus-dark .d_il,\n.d2lplus-dark .d_it {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* ==============================================\n   SELF REGISTRATION & SPLS SPECIFIC\n   ============================================== */\n.d2lplus-dark .d2l-form,\n.d2lplus-dark .d2l-form-container,\n.d2lplus-dark [class*=\"self-reg\"],\n.d2lplus-dark [class*=\"selfreg\"],\n.d2lplus-dark #SelfRegMainDiv,\n.d2lplus-dark #SelfRegForm,\n.d2lplus-dark .d2l-checkbox-label,\n.d2lplus-dark .d2l-radio-label {\n    background: #0f141b !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* ==============================================\n   CONTENT VIEWER & MODULES\n   ============================================== */\n.d2lplus-dark .d2l-le-content,\n.d2lplus-dark .d2l-le-lessonDisplay,\n.d2lplus-dark .d2l-unit,\n.d2lplus-dark .d2l-module,\n.d2lplus-dark [class*=\"content-view\"],\n.d2lplus-dark [class*=\"content-viewer\"],\n.d2lplus-dark [class*=\"module-list\"],\n.d2lplus-dark [class*=\"topic-list\"] {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* ==============================================\n   ASSIGNMENTS & DROPBOX\n   ============================================== */\n.d2lplus-dark .d2l-dropbox,\n.d2lplus-dark [class*=\"dropbox\"],\n.d2lplus-dark [class*=\"assignment\"],\n.d2lplus-dark .d2l-submission,\n.d2lplus-dark [class*=\"submission\"] {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* ==============================================\n   DISCUSSION BOARDS\n   ============================================== */\n.d2lplus-dark .d2l-discussion,\n.d2lplus-dark [class*=\"discussion\"],\n.d2lplus-dark .d2l-post,\n.d2lplus-dark [class*=\"forum\"],\n.d2lplus-dark [class*=\"thread\"],\n.d2lplus-dark [class*=\"topic\"] {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* ==============================================\n   FALLBACK: ALL LIGHT BACKGROUNDS\n   ============================================== */\n.d2lplus-dark [style*=\"background:#E8\"],\n.d2lplus-dark [style*=\"background: #E8\"],\n.d2lplus-dark [style*=\"background:#e8\"],\n.d2lplus-dark [style*=\"background-color:#E8\"],\n.d2lplus-dark [style*=\"background-color: #E8\"],\n.d2lplus-dark [style*=\"background:#F\"],\n.d2lplus-dark [style*=\"background: #F\"],\n.d2lplus-dark [style*=\"background-color:#F\"],\n.d2lplus-dark [style*=\"background-color: #F\"] {\n    background: var(--d2lplus-bg-secondary) !important;\n    background-color: var(--d2lplus-bg-secondary) !important;\n}\n\n/* Force dark on common light gray colors */\n.d2lplus-dark [style*=\"background-color: #f\"],\n.d2lplus-dark [style*=\"background-color:#f\"],\n.d2lplus-dark [style*=\"background:#f\"],\n.d2lplus-dark [style*=\"background: #f\"],\n.d2lplus-dark [style*=\"background-color:rgb(24\"],\n.d2lplus-dark [style*=\"background-color: rgb(24\"],\n.d2lplus-dark [style*=\"background-color:rgb(25\"],\n.d2lplus-dark [style*=\"background-color: rgb(25\"] {\n    background: var(--d2lplus-bg-secondary) !important;\n    background-color: var(--d2lplus-bg-secondary) !important;\n}\n\n/* ==============================================\n   EMAIL PAGE SPECIFIC\n   ============================================== */\n.d2lplus-dark .d2l-datalist-container,\n.d2lplus-dark .d2l-datalist,\n.d2lplus-dark .d_tl,\n.d2lplus-dark .d_t,\n.d2lplus-dark .d_th,\n.d2lplus-dark .d_tn,\n.d2lplus-dark .d_tch,\n.d2lplus-dark .d_tc,\n.d2lplus-dark .d2l-select,\n.d2lplus-dark .d2l-selectmenu,\n.d2lplus-dark #z_b,\n.d2lplus-dark #z_a,\n.d2lplus-dark #z_c,\n.d2lplus-dark #z_bc,\n.d2lplus-dark .d_tch,\n.d2lplus-dark [id^=\"z_\"],\n.d2lplus-dark .d_toolbar {\n    background: var(--d2lplus-bg-secondary) !important;\n    background-color: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* Email table headers */\n.d2lplus-dark .d_gh,\n.d2lplus-dark .d_gch,\n.d2lplus-dark .d_gl,\n.d2lplus-dark .d_grh {\n    background: var(--d2lplus-bg-tertiary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* Email folder list */\n.d2lplus-dark .d2l-tree,\n.d2lplus-dark .d2l-tree-item,\n.d2lplus-dark .d2l-tree-target,\n.d2lplus-dark [class*=\"folder\"],\n.d2lplus-dark [class*=\"tree\"] {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* ==============================================\n   AGGRESSIVE BODY OVERRIDES FOR LEGACY PAGES\n   ============================================== */\n.d2lplus-dark body,\n.d2lplus-dark body.d2l-body,\n.d2lplus-dark body#d2l_body,\n.d2lplus-dark body.d2l_body,\n.d2lplus-dark .d2l-page-frame,\n.d2lplus-dark .d2l_body,\n.d2lplus-dark .d_body,\n.d2lplus-dark ._d2l-body,\n.d2lplus-dark #ContentView,\n.d2lplus-dark #MainContent,\n.d2lplus-dark #MainContentArea,\n.d2lplus-dark #ContentArea,\n.d2lplus-dark #d2l_body,\n.d2lplus-dark .d2l-page-main-content,\n.d2lplus-dark main,\n.d2lplus-dark article,\n.d2lplus-dark section,\n.d2lplus-dark aside,\n.d2lplus-dark header,\n.d2lplus-dark footer {\n    background: #0f141b !important;\n    background-color: #0f141b !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* Force all divs, spans, paragraphs to have correct colors */\n.d2lplus-dark body * {\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* ==============================================\n   SELF REGISTRATION PAGE\n   ============================================== */\n.d2lplus-dark .d2l-fieldgroup,\n.d2lplus-dark .d2l-fieldset,\n.d2lplus-dark fieldset,\n.d2lplus-dark legend,\n.d2lplus-dark .vui-field-row,\n.d2lplus-dark .vui-composite,\n.d2lplus-dark #z_selfregform,\n.d2lplus-dark .d2l-checkbox,\n.d2lplus-dark .d2l-radio {\n    background: #0f141b !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* ==============================================\n   SPLS & LTI PAGES (inside iframes)\n   ============================================== */\n.d2lplus-dark .d2l-external-tool,\n.d2lplus-dark .d2l-lti-tool,\n.d2lplus-dark [class*=\"lti\"],\n.d2lplus-dark [class*=\"external\"] {\n    background: #0f141b !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* ==============================================\n   AGGRESSIVE TABLE STYLING\n   ============================================== */\n.d2lplus-dark table *,\n.d2lplus-dark .d2l-table *,\n.d2lplus-dark .d_gl *,\n.d2lplus-dark .d_gt * {\n    background-color: inherit !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n.d2lplus-dark table a,\n.d2lplus-dark .d2l-table a {\n    color: var(--d2lplus-link) !important;\n}\n\n/* ==============================================\n   CONTENT PAGES (le/content)\n   ============================================== */\n.d2lplus-dark .d2l-le-content,\n.d2lplus-dark .d2l-collapsepane,\n.d2lplus-dark .d2l-collapsepane-content,\n.d2lplus-dark .d2l-collapsepane-header,\n.d2lplus-dark .d2l-collapsepane-container,\n.d2lplus-dark .d2l-collapsible-content,\n.d2lplus-dark [class*=\"collapsepane\"],\n.d2lplus-dark [class*=\"collapsible\"],\n.d2lplus-dark .d2l-le-lessonDisplay,\n.d2lplus-dark .d2l-floatingcontainer,\n.d2lplus-dark d2l-floating-container,\n.d2lplus-dark [class*=\"floating-container\"] {\n    background: var(--d2lplus-bg-secondary) !important;\n    background-color: var(--d2lplus-bg-secondary) !important;\n    background-image: none !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* Content headers - remove gradient overlays */\n.d2lplus-dark .d2l-le-content-header,\n.d2lplus-dark .d2l-content-header,\n.d2lplus-dark [class*=\"content-header\"],\n.d2lplus-dark .d2l-lesson-header {\n    background: var(--d2lplus-bg-tertiary) !important;\n    background-image: none !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* Table of Contents sidebar */\n.d2lplus-dark .d2l-sidebar,\n.d2lplus-dark .d2l-le-sidebar,\n.d2lplus-dark [class*=\"sidebar\"],\n.d2lplus-dark .d2l-toc,\n.d2lplus-dark [class*=\"toc\"],\n.d2lplus-dark .d2l-le-TreeAccordion {\n    background: #0f141b !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* Selected item in sidebar - fix weird white effect */\n.d2lplus-dark .d2l-le-TreeAccordionItem.d2l-current,\n.d2lplus-dark .d2l-le-TreeAccordionItem:hover,\n.d2lplus-dark .d2l-le-TreeAccordionItem-Selected,\n.d2lplus-dark .d2l-le-TreeAccordionItem-SelectedRoot,\n.d2lplus-dark [class*=\"TreeAccordionItem-Selected\"],\n.d2lplus-dark [class*=\"selected\"],\n.d2lplus-dark [class*=\"current\"],\n.d2lplus-dark [aria-selected=\"true\"] {\n    background: var(--d2lplus-bg-tertiary) !important;\n    background-color: var(--d2lplus-bg-tertiary) !important;\n    background-image: none !important;\n    color: #ffffff !important;\n}\n\n/* Content browser list items */\n.d2lplus-dark .ddl_li_c,\n.d2lplus-dark .d2l-datalist-item,\n.d2lplus-dark [class*=\"datalist-item\"] {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* Content browser hover - fix weird hover color */\n.d2lplus-dark .ddl_li_c:hover,\n.d2lplus-dark .d2l-datalist-item:hover,\n.d2lplus-dark [class*=\"datalist-item\"]:hover,\n.d2lplus-dark .d2l-le-TreeAccordionItem-anchor:hover {\n    background: var(--d2lplus-bg-tertiary) !important;\n    background-color: var(--d2lplus-bg-tertiary) !important;\n}\n\n/* Card widgets - remove white box-shadow borders */\n.d2lplus-dark .d2l-widget,\n.d2lplus-dark .d2l-widget.d2l-tile,\n.d2lplus-dark .d2l-tile,\n.d2lplus-dark [class*=\"widget\"],\n.d2lplus-dark [class*=\"tile\"] {\n    background: var(--d2lplus-bg-secondary) !important;\n    border: 1px solid var(--d2lplus-border) !important;\n    box-shadow: none !important;\n}\n\n/* ==============================================\n   NEED HELP SECTION - EXPLICIT TEXT COLORS\n   ============================================== */\n.d2lplus-dark .d2l-widget-content-padding,\n.d2lplus-dark .d2l-widget-content-padding *,\n.d2lplus-dark .d2l-widget-content,\n.d2lplus-dark .d2l-widget-content *,\n.d2lplus-dark .d2l-htmlblock,\n.d2lplus-dark .d2l-htmlblock *,\n.d2lplus-dark .d2l-widget div,\n.d2lplus-dark .d2l-widget span,\n.d2lplus-dark .d2l-widget p,\n.d2lplus-dark .d2l-widget li,\n.d2lplus-dark .d2l-widget label,\n.d2lplus-dark .d2l-widget strong,\n.d2lplus-dark .d2l-widget b,\n.d2lplus-dark .d2l-widget small {\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* Progress bars */\n.d2lplus-dark .d2l-progress,\n.d2lplus-dark .d2l-progress-bar,\n.d2lplus-dark .d2l-progress-container,\n.d2lplus-dark [class*=\"progress-bar\"],\n.d2lplus-dark [class*=\"progress-container\"],\n.d2lplus-dark d2l-meter-linear,\n.d2lplus-dark d2l-meter-circle {\n    background: var(--d2lplus-bg-tertiary) !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* ==============================================\n   ePORTFOLIO SPECIFIC\n   ============================================== */\n.d2lplus-dark .d2l-eportfolio,\n.d2lplus-dark [class*=\"eportfolio\"],\n.d2lplus-dark [class*=\"portfolio\"],\n.d2lplus-dark .d2l-ep,\n.d2lplus-dark .ep-,\n.d2lplus-dark [class^=\"ep-\"],\n.d2lplus-dark .d2l-collection,\n.d2lplus-dark [class*=\"collection\"] {\n    background: #0f141b !important;\n    background-color: #0f141b !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* ==============================================\n   CALENDAR SPECIFIC\n   ============================================== */\n.d2lplus-dark .d2l-calendar-widget,\n.d2lplus-dark .d2l-calendar-container,\n.d2lplus-dark .d2l-calendar-day,\n.d2lplus-dark .d2l-calendar-week,\n.d2lplus-dark .d2l-calendar-month,\n.d2lplus-dark [class*=\"calendar\"],\n.d2lplus-dark .fc,\n.d2lplus-dark .fc-theme-standard,\n.d2lplus-dark .fc-scrollgrid,\n.d2lplus-dark .fc-col-header,\n.d2lplus-dark .fc-daygrid-body,\n.d2lplus-dark .fc-timegrid,\n.d2lplus-dark .fc-list {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n.d2lplus-dark .fc-col-header-cell,\n.d2lplus-dark .fc-daygrid-day,\n.d2lplus-dark .fc-timegrid-slot {\n    background: var(--d2lplus-bg-secondary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* Calendar toolbar buttons (Agenda, Day, Week, Month) */\n.d2lplus-dark .vui-button,\n.d2lplus-dark .d2l-button,\n.d2lplus-dark .d2l-button-filter,\n.d2lplus-dark [class*=\"vui-button\"],\n.d2lplus-dark button.vui-button {\n    background: var(--d2lplus-bg-tertiary) !important;\n    background-color: var(--d2lplus-bg-tertiary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n.d2lplus-dark .vui-button:hover,\n.d2lplus-dark .d2l-button:hover {\n    background: #2a3442 !important;\n}\n\n.d2lplus-dark .d2l-button-filter-selected,\n.d2lplus-dark .vui-button.vui-pressed,\n.d2lplus-dark .vui-button.d2l-button-filter-selected {\n    background: var(--d2lplus-accent) !important;\n    color: #ffffff !important;\n}\n\n/* Calendar navigation arrows < > */\n.d2lplus-dark .d2l-iterator-button,\n.d2lplus-dark .d2l-iterator-button-prev,\n.d2lplus-dark .d2l-iterator-button-next,\n.d2lplus-dark [class*=\"iterator-button\"],\n.d2lplus-dark button[aria-label*=\"Previous\"],\n.d2lplus-dark button[aria-label*=\"Next\"] {\n    background: var(--d2lplus-bg-tertiary) !important;\n    background-color: var(--d2lplus-bg-tertiary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n.d2lplus-dark .d2l-iterator-button:hover {\n    background: #2a3442 !important;\n}\n\n/* Today button */\n.d2lplus-dark button[aria-label*=\"Today\"],\n.d2lplus-dark .d2l-today-button {\n    background: var(--d2lplus-bg-tertiary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* ==============================================\n   NEED HELP SECTION (text visibility fix)\n   ============================================== */\n.d2lplus-dark .d2l-widget,\n.d2lplus-dark .d2l-widget-content {\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* Force all text inside widgets to be light */\n.d2lplus-dark .d2l-widget *,\n.d2lplus-dark .d2l-widget div,\n.d2lplus-dark .d2l-widget span,\n.d2lplus-dark .d2l-widget p,\n.d2lplus-dark .d2l-widget li,\n.d2lplus-dark .d2l-widget label,\n.d2lplus-dark .d2l-widget small,\n.d2lplus-dark .d2l-widget strong,\n.d2lplus-dark .d2l-widget em,\n.d2lplus-dark .d2l-widget b {\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* Need Help specific text */\n.d2lplus-dark .d2l-htmlblock,\n.d2lplus-dark .d2l-htmlblock *,\n.d2lplus-dark [class*=\"htmlblock\"] * {\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* ==============================================\n   CARD EDGES (border fix)\n   ============================================== */\n.d2lplus-dark d2l-card,\n.d2lplus-dark .d2l-card,\n.d2lplus-dark [class*=\"card\"] {\n    border: 1px solid var(--d2lplus-border) !important;\n    box-shadow: none !important;\n}\n\n/* Remove white glow/shadow from cards */\n.d2lplus-dark d2l-card::before,\n.d2lplus-dark d2l-card::after,\n.d2lplus-dark .d2l-card::before,\n.d2lplus-dark .d2l-card::after {\n    display: none !important;\n}\n\n/* ==============================================\n   NAVBAR STRIP FIX (NUCLEAR OPTION V2)\n   ============================================== */\n/* V3: NEUTRALIZE THE TERTIARY VARIABLE ITSELF */\n.d2lplus-dark .d2l-navigation-s-item,\n.d2lplus-dark .d2l-navigation-s-group,\n.d2lplus-dark .d2l-navigation-s-separator,\n.d2lplus-dark [class*=\"d2l-navigation-s-\"],\n.d2lplus-dark .d2l-navigation-s-placeholder,\n.d2lplus-dark d2l-navigation-main-header,\n.d2lplus-dark d2l-navigation-main-footer,\n.d2lplus-dark .d2l-navigation-shadow-drop-border,\n.d2lplus-dark [class*=\"d2l-navigation\"]::before,\n.d2lplus-dark [class*=\"d2l-navigation\"]::after {\n    /* Neutralize the specific variable causing issues */\n    --d2lplus-bg-tertiary: transparent !important;\n    \n    background: transparent !important;\n    background-color: transparent !important;\n    border: none !important;\n    box-shadow: none !important;\n    background-image: none !important;\n    mask: none !important;\n    -webkit-mask: none !important;\n}\n\n/* ==============================================\n   DROPDOWN CONTENT TRANSPARENCY FIX\n   Targeting user-provided structure\n   ============================================== */\n.d2lplus-dark d2l-dropdown-content,\n.d2lplus-dark .d2l-placeholder,\n.d2lplus-dark .d2l-placeholder-live,\n.d2lplus-dark d2l-labs-navigation-dropdown-button-icon {\n    --d2lplus-bg-tertiary: transparent !important;\n    background: transparent !important;\n    background-color: transparent !important;\n    box-shadow: none !important;\n}\n\n/* Ensure only the MAIN container has background (if needed) but let's trust the body background or global theme var */\n.d2lplus-dark d2l-navigation-main-header {\n    background-color: var(--d2lplus-bg-secondary) !important;\n}\n\n/* ==============================================\n   LIST & CONTENT BROWSER FIX (Forest Theme)\n   ============================================== */\n/* Aggressively clear backgrounds on all list items to fix \"Green Block\" glitch */\n.d2lplus-dark .d2l-list,\n.d2lplus-dark .d2l-list-item,\n.d2lplus-dark .d2l-datalist,\n.d2lplus-dark .d2l-datalist-item,\n.d2lplus-dark d2l-list-item,\n.d2lplus-dark d2l-list,\n.d2lplus-dark [class*=\"d2l-list\"],\n.d2lplus-dark [class*=\"d2l-datalist\"] {\n    /* Neutralize the tertiary variable here too */\n    --d2lplus-bg-tertiary: transparent !important;\n\n    background: transparent !important;\n    background-color: transparent !important;\n    border-color: var(--d2lplus-border) !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* Fix specific 'Content Browser' green block issue */\n.d2lplus-dark .d2l-collapsepane-content,\n.d2lplus-dark .d2l-collapsepane-header {\n    background: var(--d2lplus-bg-secondary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* ==============================================\n   TOP NAVBAR NOTIFICATION ICONS (enhanced)\n   ============================================== */\n.d2lplus-dark button[aria-label*=\"alerts\"],\n.d2lplus-dark button[aria-label*=\"course\"],\n.d2lplus-dark button[aria-label*=\"Message\"],\n.d2lplus-dark button[aria-label*=\"Subscription\"],\n.d2lplus-dark button[aria-label*=\"Update\"] {\n    background: transparent !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n.d2lplus-dark button[aria-label*=\"alerts\"]:hover,\n.d2lplus-dark button[aria-label*=\"course\"]:hover,\n.d2lplus-dark button[aria-label*=\"Message\"]:hover,\n.d2lplus-dark button[aria-label*=\"Subscription\"]:hover,\n.d2lplus-dark button[aria-label*=\"Update\"]:hover {\n    background: var(--d2lplus-bg-tertiary) !important;\n    border-radius: 4px;\n}\n\n/* Icon SVG colors */\n.d2lplus-dark button[aria-label*=\"alerts\"] svg,\n.d2lplus-dark button[aria-label*=\"course\"] svg,\n.d2lplus-dark svg[class*=\"icon\"],\n.d2lplus-dark .d2l-icon {\n    fill: var(--d2lplus-text-primary) !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* ==============================================\n   NAVIGATION MINIBAR & ICONS\n   ============================================== */\n.d2lplus-dark .d2l-navigation-s-header,\n.d2lplus-dark .d2l-navigation-main-header,\n.d2lplus-dark d2l-navigation-main-header,\n.d2lplus-dark .d2l-navigation-header,\n.d2lplus-dark .d2l-branding-navigation-header-background-color {\n    background: var(--d2lplus-bg-primary) !important;\n    background-color: var(--d2lplus-bg-primary) !important;\n}\n\n/* Notification/alert icons in minibar */\n.d2lplus-dark .d2l-navigation-s-personal-menu,\n.d2lplus-dark .d2l-navigation-button-icon,\n.d2lplus-dark d2l-navigation-button-notification-icon,\n.d2lplus-dark d2l-navigation-link-icon,\n.d2lplus-dark [class*=\"notification-icon\"],\n.d2lplus-dark [class*=\"alert-icon\"] {\n    background: transparent !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* Dropdown opened from minibar */\n.d2lplus-dark .d2l-navigation-s-dropdown,\n.d2lplus-dark d2l-navigation-dropdown,\n.d2lplus-dark .d2l-navigation-notification-popover,\n.d2lplus-dark [class*=\"popover\"],\n.d2lplus-dark [class*=\"notification\"] {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* ==============================================\n   ALL INPUTS & SEARCH BOXES\n   ============================================== */\n.d2lplus-dark input.d2l-input,\n.d2lplus-dark .d2l-input,\n.d2lplus-dark input[type=\"text\"],\n.d2lplus-dark input[type=\"search\"],\n.d2lplus-dark input[type=\"email\"],\n.d2lplus-dark input[type=\"password\"],\n.d2lplus-dark input[type=\"number\"],\n.d2lplus-dark .d2l-textinput,\n.d2lplus-dark textarea,\n.d2lplus-dark select {\n    background: var(--d2lplus-bg-tertiary) !important;\n    background-color: var(--d2lplus-bg-tertiary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* ==============================================\n   FLOATING CONTAINERS & PANELS\n   ============================================== */\n.d2lplus-dark d2l-floating-container,\n.d2lplus-dark .d2l-floating-container,\n.d2lplus-dark [class*=\"floating\"],\n.d2lplus-dark .d2l-panel,\n.d2lplus-dark [class*=\"-panel\"],\n.d2lplus-dark .d2l-offscreen,\n.d2lplus-dark .d2l-off-screen {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* ==============================================\n   VERY AGGRESSIVE OVERRIDES\n   ============================================== */\n/* Reset any white gradients */\n.d2lplus-dark *[style*=\"linear-gradient\"],\n.d2lplus-dark *[style*=\"radial-gradient\"] {\n    background-image: none !important;\n}\n\n/* Override any remaining white/light backgrounds */\n.d2lplus-dark *[style*=\"background: white\"],\n.d2lplus-dark *[style*=\"background:white\"],\n.d2lplus-dark *[style*=\"background-color: white\"],\n.d2lplus-dark *[style*=\"background-color:white\"],\n.d2lplus-dark *[style*=\"background: #fff\"],\n.d2lplus-dark *[style*=\"background:#fff\"],\n.d2lplus-dark *[style*=\"background-color: #fff\"],\n.d2lplus-dark *[style*=\"background-color:#fff\"] {\n    background: var(--d2lplus-bg-secondary) !important;\n    background-color: var(--d2lplus-bg-secondary) !important;\n}\n\n/* ==============================================\n   NUCLEAR TEXT COLOR OVERRIDE\n   Force ALL text to be light in dark mode\n   ============================================== */\n.d2lplus-dark,\n.d2lplus-dark body,\n.d2lplus-dark div,\n.d2lplus-dark span,\n.d2lplus-dark p,\n.d2lplus-dark li,\n.d2lplus-dark ul,\n.d2lplus-dark ol,\n.d2lplus-dark label,\n.d2lplus-dark strong,\n.d2lplus-dark b,\n.d2lplus-dark em,\n.d2lplus-dark i,\n.d2lplus-dark small,\n.d2lplus-dark td,\n.d2lplus-dark th,\n.d2lplus-dark h1,\n.d2lplus-dark h2,\n.d2lplus-dark h3,\n.d2lplus-dark h4,\n.d2lplus-dark h5,\n.d2lplus-dark h6,\n.d2lplus-dark dt,\n.d2lplus-dark dd,\n.d2lplus-dark address,\n.d2lplus-dark blockquote,\n.d2lplus-dark pre,\n.d2lplus-dark code,\n.d2lplus-dark figcaption,\n.d2lplus-dark caption,\n.d2lplus-dark legend {\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* But keep link colors visible */\n.d2lplus-dark a,\n.d2lplus-dark a:visited {\n    color: var(--d2lplus-link) !important;\n}\n\n.d2lplus-dark a:hover {\n    color: #a5c8ff !important;\n}\n\n/* ==============================================\n   NUCLEAR HOVER FIX\n   All hover states should be dark\n   ============================================== */\n.d2lplus-dark *:hover {\n    background-color: inherit;\n}\n\n.d2lplus-dark li:hover,\n.d2lplus-dark tr:hover,\n.d2lplus-dark .d2l-datalist-item:hover,\n.d2lplus-dark .ddl_li_c:hover,\n.d2lplus-dark [class*=\"list-item\"]:hover,\n.d2lplus-dark [class*=\"TreeAccordion\"]:hover,\n.d2lplus-dark a:hover {\n    background: var(--d2lplus-bg-tertiary) !important;\n    background-color: var(--d2lplus-bg-tertiary) !important;\n}\n\n/* ==============================================\n   ePORTFOLIO SPECIFIC ELEMENTS\n   ============================================== */\n.d2lplus-dark .d2l-user-profile-card,\n.d2lplus-dark .d2l-profile-card,\n.d2lplus-dark [class*=\"profile-card\"],\n.d2lplus-dark .d2l-fileinput,\n.d2lplus-dark .d2l-file-input,\n.d2lplus-dark [class*=\"fileinput\"],\n.d2lplus-dark .d2l-placeholder,\n.d2lplus-dark [class*=\"placeholder\"],\n.d2lplus-dark .d2l-newsfeed,\n.d2lplus-dark [class*=\"newsfeed\"],\n.d2lplus-dark .d2l-ep-container,\n.d2lplus-dark .d2l-ep-dashboard,\n.d2lplus-dark .d2l-ep-sidebar,\n.d2lplus-dark .d2l-ep-content {\n    background: var(--d2lplus-bg-secondary) !important;\n    background-color: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* ==============================================\n   Heading/Widget Header Fixes\n   ============================================== */\n.d2lplus-dark .d2l-homepage-header-wrapper .d2l-heading,\n.d2lplus-dark .d2l-widget-header,\n.d2lplus-dark .d2l-collapsepane-header,\n.d2lplus-dark .d2l-collapsepane-content {\n    background: var(--d2lplus-bg-secondary) !important;\n    background-color: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border: none !important;\n}\n\n/* Specific fix for Announcements heading wrapper */\n.d2lplus-dark .d2l-homepage-header-wrapper {\n    background: transparent !important;\n    border: none !important;\n}\n\n/* ==============================================\n   CONTENT BROWSER / LEGACY LIST FIX\n   Targeting .ddl_c, .vui-list, .dco, etc.\n   ============================================== */\n.d2lplus-dark .ddl_c,\n.d2lplus-dark .ddl_sc,\n.d2lplus-dark .vui-list,\n.d2lplus-dark .ddl_li_m,\n.d2lplus-dark .ddl_li_c,\n.d2lplus-dark .ddl_li_b,\n.d2lplus-dark .dco,\n.d2lplus-dark .dco_c,\n.d2lplus-dark .dsr {\n    /* Neutralize the specific variable causing issues */\n    --d2lplus-bg-tertiary: transparent !important;\n\n    background: transparent !important;\n    background-color: transparent !important;\n    color: var(--d2lplus-text-primary) !important;\n    border: none !important;\n    box-shadow: none !important;\n}\n\n/* Ensure links in these lists are visible and not weirdly colored */\n.d2lplus-dark .ddl_li_c {\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* ePortfolio textarea/longedit */\n.d2lplus-dark .d2l-longedit,\n.d2lplus-dark textarea.d2l-longedit,\n.d2lplus-dark [class*=\"longedit\"],\n.d2lplus-dark .d2l-reflection,\n.d2lplus-dark [class*=\"reflection\"] {\n    background: var(--d2lplus-bg-tertiary) !important;\n    background-color: var(--d2lplus-bg-tertiary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* ePortfolio image links/containers */\n.d2lplus-dark .d2l-imagelink,\n.d2lplus-dark [class*=\"imagelink\"],\n.d2lplus-dark .d2l-image-container,\n.d2lplus-dark [class*=\"image-container\"] {\n    background: var(--d2lplus-bg-secondary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* ePortfolio buttons */\n.d2lplus-dark .d2l-ep button,\n.d2lplus-dark .d2l-dropdown-opener,\n.d2lplus-dark [class*=\"dropdown-opener\"],\n.d2lplus-dark button[class*=\"add-\"],\n.d2lplus-dark [class*=\"add-other\"] {\n    background: var(--d2lplus-bg-tertiary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n.d2lplus-dark .d2l-ep button:hover,\n.d2lplus-dark .d2l-dropdown-opener:hover {\n    background: #2a3442 !important;\n}\n\n/* Dynamic ID containers (d2l_1_*) */\n.d2lplus-dark [id^=\"d2l_\"],\n.d2lplus-dark [id^=\"d2l-uid-\"] {\n    background-color: inherit !important;\n    color: inherit !important;\n}\n\n/* ePortfolio Build section - icons/images */\n.d2lplus-dark .d2l-icon,\n.d2lplus-dark [class*=\"icon\"] {\n    fill: var(--d2lplus-text-primary) !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* White icon images - invert them slightly - REMOVED as it causes weird colors\n.d2lplus-dark img[src*=\"icon\"],\n.d2lplus-dark img[class*=\"icon\"] {\n    filter: invert(0.1) brightness(0.9);\n}\n*/\n\n/* ==============================================\n   CALENDAR SIDEBAR COLUMNS\n   ============================================== */\n.d2lplus-dark .d2l-column-side-bg,\n.d2lplus-dark .d2l-column-flip-side,\n.d2lplus-dark .d2l-column-side,\n.d2lplus-dark [class*=\"column-side\"],\n.d2lplus-dark [class*=\"column-flip\"],\n.d2lplus-dark .d2l-calendar-filter,\n.d2lplus-dark .d2l-calendar-search,\n.d2lplus-dark .d2l-minibar-calendar,\n.d2lplus-dark .d2l-datepicker-calendar,\n.d2lplus-dark [class*=\"datepicker\"] {\n    background: var(--d2lplus-bg-secondary) !important;\n    background-color: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n\n/* Calendar date cells */\n.d2lplus-dark .d2l-calendar-cell,\n.d2lplus-dark .d2l-calendar-date,\n.d2lplus-dark [class*=\"calendar-cell\"],\n.d2lplus-dark [class*=\"calendar-date\"] {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n.d2lplus-dark .d2l-calendar-today,\n.d2lplus-dark [class*=\"calendar-today\"] {\n    background: var(--d2lplus-accent) !important;\n    color: #ffffff !important;\n}\n\n/* ==============================================\n   SIDEBAR SELECTED/CURRENT STATES\n   ============================================== */\n.d2lplus-dark .d2l-le-TreeAccordionItem-anchor-selected,\n.d2lplus-dark .d2l-le-TreeAccordionItem-anchor:hover,\n.d2lplus-dark [class*=\"TreeAccordionItem-anchor-selected\"],\n.d2lplus-dark [class*=\"anchor-selected\"],\n.d2lplus-dark .d2l-sidebar-item-selected,\n.d2lplus-dark [class*=\"item-selected\"],\n.d2lplus-dark a.d2l-current {\n    background: var(--d2lplus-bg-tertiary) !important;\n    background-color: var(--d2lplus-bg-tertiary) !important;\n    color: #ffffff !important;\n    /* Remove the white arrow/triangle effect */\n    background-image: none !important;\n}\n\n/* Sidebar arrows/triangles */\n.d2lplus-dark .d2l-le-TreeAccordionItem-anchor-selected::before,\n.d2lplus-dark .d2l-le-TreeAccordionItem-anchor-selected::after,\n.d2lplus-dark [class*=\"TreeAccordionItem\"]::before,\n.d2lplus-dark [class*=\"TreeAccordionItem\"]::after {\n    border-color: transparent !important;\n    background: transparent !important;\n}\n\n/* ==============================================\n   SPLS TASKS / LTI FRAME CONTENT\n   ============================================== */\n.d2lplus-dark .d2l-lti-frame,\n.d2lplus-dark .d2l-lti-iframe,\n.d2lplus-dark [class*=\"lti-content\"],\n.d2lplus-dark [class*=\"lti-container\"],\n.d2lplus-dark .d2l-quicklink-content,\n.d2lplus-dark [class*=\"quicklink\"] {\n    background: #0f141b !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* ==============================================\n   DROP ZONES / FILE UPLOAD\n   ============================================== */\n.d2lplus-dark .d2l-dropzone,\n.d2lplus-dark [class*=\"dropzone\"],\n.d2lplus-dark [class*=\"drop-zone\"],\n.d2lplus-dark .d2l-upload-area,\n.d2lplus-dark [class*=\"upload\"] {\n    background: var(--d2lplus-bg-tertiary) !important;\n    border-color: var(--d2lplus-accent) !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* ==============================================\n   TOP NAVBAR NOTIFICATION ICONS\n   ============================================== */\n.d2lplus-dark .d2l-navigation-s-icon-button,\n.d2lplus-dark d2l-navigation-button-notification-icon,\n.d2lplus-dark d2l-button-icon,\n.d2lplus-dark .d2l-button-icon,\n.d2lplus-dark [class*=\"icon-button\"] {\n    background: transparent !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n\n/* Icon buttons hover/focus */\n.d2lplus-dark .d2l-navigation-s-icon-button:hover,\n.d2lplus-dark d2l-navigation-button-notification-icon:hover,\n.d2lplus-dark d2l-button-icon:hover {\n    background: var(--d2lplus-bg-tertiary) !important;\n}\n\n/* Notification badges */\n.d2lplus-dark .d2l-count-badge,\n.d2lplus-dark [class*=\"count-badge\"],\n.d2lplus-dark [class*=\"notification-count\"] {\n    background: #ef4444 !important;\n    color: #ffffff !important;\n}\n\n/* ==============================================\n   DROPDOWN MENUS (REFINED)\n   ============================================== */\n.d2lplus-dark d2l-dropdown-content,\n.d2lplus-dark d2l-dropdown-menu,\n.d2lplus-dark .d2l-dropdown-content,\n.d2lplus-dark .d2l-dropdown-menu {\n    background: var(--d2lplus-bg-secondary) !important;\n    border: 1px solid var(--d2lplus-border) !important;\n    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4) !important;\n}\n\n.d2lplus-dark d2l-menu-item:hover,\n.d2lplus-dark d2l-menu-item-link:hover,\n.d2lplus-dark .d2l-menu-item:hover {\n    background: var(--d2lplus-bg-tertiary) !important;\n}\n\n/* Dropdown borders */\n.d2lplus-dark d2l-menu-item,\n.d2lplus-dark d2l-menu-item-link,\n.d2lplus-dark .d2l-menu-item {\n    border-bottom-color: var(--d2lplus-border) !important;\n}\n";
    var DARK_MODE_CARD_SHADOW_CSS = "\n    :host {\n        color: var(--d2lplus-text-primary) !important;\n        background: var(--d2lplus-bg-secondary) !important;\n        --d2l-card-background-color: var(--d2lplus-bg-secondary) !important;\n        --d2l-card-border-color: var(--d2lplus-border) !important;\n        --d2l-card-foreground-color: var(--d2lplus-text-primary) !important;\n        border: 1px solid var(--d2lplus-border) !important;\n        border-radius: 6px !important;\n    }\n    .d2l-card-container,\n    .d2l-my-courses-card-grid,\n    .d2l-my-courses-widget,\n    .d2l-card {\n        background: var(--d2lplus-bg-secondary) !important;\n        color: var(--d2lplus-text-primary) !important;\n        border: none !important; /* Managed by host */\n        box-shadow: none !important;\n    }\n    .d2l-card-link-container,\n    .d2l-card-header,\n    .d2l-card-content,\n    .d2l-card-actions,\n    .d2l-card-footer,\n    .d2l-card-badge,\n    .d2l-card-link-text {\n        background: transparent !important;\n        color: var(--d2lplus-text-primary) !important;\n        border: none !important;\n        box-shadow: none !important;\n    }\n    /* Ensure links stand out but don't have weird backgrounds */\n    a, .d2l-card-link-text {\n        color: var(--d2lplus-link) !important;\n        background: transparent !important;\n    }\n    \n    /* Remove white borders/backgrounds from any nested divs */\n    div, span, section {\n        border-color: var(--d2lplus-border) !important;\n    }\n    ";
    var ANIMATIONS_CSS = "\n.d2lplus-animate .d2l-navigation-s-link,\n.d2lplus-animate d2l-button,\n.d2lplus-animate .d2l-card-container,\n.d2lplus-animate .d2l-widget,\n.d2lplus-animate .d2l-tile {\n    transition: transform 0.2s ease, background-color 0.2s ease, color 0.2s ease;\n}\n.d2lplus-animate .d2l-navigation-s-link:hover,\n.d2lplus-animate d2l-button:hover,\n.d2lplus-animate .d2l-card-container:hover {\n    transform: translateY(-2px);\n}\n";
    var FOCUS_VIEW_CSS = "\n.d2lplus-focus .d2l-navigation-s,\n.d2lplus-focus .d2l-page-header,\n.d2lplus-focus .d2l-page-sidebars {\n    display: none !important;\n}\n.d2lplus-focus .d2l-page-main {\n    max-width: 1100px !important;\n    margin: 0 auto !important;\n}\n";
    var QUICK_LINKS_CSS = "\n.d2lplus-quicklinks {\n    position: relative;\n}\n.d2lplus-dropdown {\n    position: relative;\n}\n.d2lplus-dropdown__summary {\n    list-style: none;\n    cursor: pointer;\n    display: inline-flex;\n    align-items: center;\n    gap: 6px;\n}\n.d2lplus-dropdown__summary::-webkit-details-marker {\n    display: none;\n}\n.d2lplus-dropdown__list {\n    position: absolute;\n    top: 100%;\n    left: 0;\n    min-width: 220px;\n    background: #ffffff;\n    border: 1px solid #e4e7ec;\n    border-radius: 12px;\n    box-shadow: 0 12px 24px rgba(15, 23, 42, 0.15);\n    padding: 6px;\n    z-index: 9999;\n}\n.d2lplus-dropdown[open] .d2lplus-dropdown__list {\n    animation: d2lplus-fade 120ms ease-out;\n}\n.d2lplus-dropdown__item {\n    display: block;\n    padding: 8px 10px;\n    border-radius: 8px;\n    color: var(--d2lplus-bg-tertiary);\n    text-decoration: none;\n    font-size: 13px;\n}\n.d2lplus-dropdown__item:hover {\n    background: #f1f5f9;\n}\n.d2lplus-dark .d2lplus-dropdown__list {\n    background: #0f141b;\n    border-color: var(--d2lplus-border);\n}\n.d2lplus-dark .d2lplus-dropdown__item {\n    color: var(--d2lplus-text-primary);\n}\n.d2lplus-dark .d2lplus-dropdown__item:hover {\n    background: var(--d2lplus-bg-tertiary);\n}\n@keyframes d2lplus-fade {\n    from { opacity: 0; transform: translateY(4px); }\n    to { opacity: 1; transform: translateY(0); }\n}\n";
    var BACK_BUTTON_CSS = "\n.d2lplus-back {\n    position: fixed;\n    bottom: 18px;\n    left: 18px;\n    z-index: 10000;\n    padding: 10px 14px;\n    border-radius: 999px;\n    border: 1px solid #d0d5dd;\n    background: #ffffff;\n    color: #111827;\n    font-weight: 600;\n    font-size: 12px;\n    box-shadow: 0 10px 20px rgba(15, 23, 42, 0.18);\n    cursor: pointer;\n}\n.d2lplus-back:hover {\n    transform: translateY(-1px);\n}\n.d2lplus-dark .d2lplus-back {\n    background: #0f141b;\n    color: var(--d2lplus-text-primary);\n    border-color: var(--d2lplus-border);\n}\n/* Hide any back buttons that are NOT direct children of body */\n.d2l-widget .d2lplus-back,\n.d2l-tile .d2lplus-back,\n[class*=\"widget\"] .d2lplus-back,\n[class*=\"content-browser\"] .d2lplus-back,\n[class*=\"update\"] .d2lplus-back,\n.d2l-collapsepane .d2lplus-back,\n.d2l-homepage .d2lplus-back,\n.homepage-container .d2lplus-back {\n    display: none !important;\n}\n";
    var ALL_PAGE_CSS = "\n.d2lplus-allpage {\n    position: fixed;\n    top: var(--d2lplus-nav-height, 88px);\n    left: 0;\n    right: 0;\n    bottom: auto;\n    height: var(--d2lplus-allpage-height, calc(100vh - var(--d2lplus-nav-height, 88px)));\n    background: #f6f7fb;\n    color: #0f172a;\n    z-index: 10001;\n    overflow: auto;\n    padding: 24px;\n}\n.d2lplus-allpage-active,\n.d2lplus-allpage-active body {\n    overflow: hidden !important;\n}\n.d2lplus-allpage-active .d2l-navigation-s {\n    display: block !important;\n    position: sticky;\n    top: 0;\n    z-index: 10002;\n}\n.d2lplus-allpage-active body {\n    padding-top: 0 !important;\n}\n.d2lplus-allpage--lock {\n    overflow: hidden;\n}\n.d2lplus-allpage__header {\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    margin-bottom: 16px;\n}\n.d2lplus-allpage__title {\n    font-size: 20px;\n    font-weight: 700;\n}\n.d2lplus-allpage__subtitle {\n    color: #475467;\n    font-size: 12px;\n}\n.d2lplus-allpage__actions {\n    display: flex;\n    gap: 8px;\n}\n.d2lplus-allpage__btn {\n    border: 1px solid #d0d5dd;\n    background: #ffffff;\n    color: #111827;\n    border-radius: 999px;\n    padding: 6px 12px;\n    font-size: 12px;\n    font-weight: 600;\n    cursor: pointer;\n}\n.d2lplus-allpage--edit .d2lplus-allpage__summary {\n    cursor: grab;\n}\n.d2lplus-allpage--edit .d2lplus-allpage__summary:active {\n    cursor: grabbing;\n}\n.d2lplus-allpage__grid {\n    display: grid;\n    gap: 10px;\n}\n.d2lplus-allpage__item {\n    background: #ffffff;\n    border: 1px solid #e4e7ec;\n    border-radius: 12px;\n    padding: 10px 12px;\n}\n.d2lplus-allpage__summary {\n    cursor: pointer;\n    font-weight: 600;\n    list-style: none;\n    display: flex;\n    align-items: center;\n    gap: 8px;\n}\n.d2lplus-allpage__summary::-webkit-details-marker {\n    display: none;\n}\n.d2lplus-allpage__handle {\n    width: 16px;\n    height: 16px;\n    border-radius: 4px;\n    background: linear-gradient(180deg, #e2e8f0, #cbd5f5);\n    display: inline-block;\n    position: relative;\n    opacity: 0;\n    transition: opacity 0.2s ease;\n}\n.d2lplus-allpage__handle::after {\n    content: \"\u22EE\u22EE\";\n    position: absolute;\n    inset: 0;\n    font-size: 12px;\n    line-height: 16px;\n    text-align: center;\n    color: var(--d2lplus-text-muted);\n}\n.d2lplus-allpage--edit .d2lplus-allpage__handle {\n    opacity: 1;\n}\n.d2lplus-allpage__item.is-dragging {\n    opacity: 0.6;\n    transform: scale(0.995);\n}\n.d2lplus-allpage__item.is-over {\n    border-color: var(--d2lplus-accent);\n    box-shadow: 0 0 0 2px rgba(37, 99, 235, 0.2);\n}\n.d2lplus-allpage__frame {\n    width: 100%;\n    border: none;\n    height: auto;\n    max-height: 70vh;\n    margin-top: 10px;\n    border-radius: 10px;\n    background: #f8fafc;\n    overflow: auto;\n}\n.d2lplus-allpage__resize {\n    height: 10px;\n    cursor: ns-resize;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    margin-top: 8px;\n}\n.d2lplus-allpage__resize::before {\n    content: \"\";\n    width: 80px;\n    height: 4px;\n    border-radius: 999px;\n    background: #cbd5f5;\n}\n.d2lplus-dark .d2lplus-allpage__resize::before {\n    background: var(--d2lplus-bg-tertiary);\n}\n.d2lplus-dark .d2lplus-allpage {\n    background: #0f141b;\n    color: var(--d2lplus-text-primary);\n}\n.d2lplus-dark .d2lplus-allpage__item {\n    background: var(--d2lplus-bg-secondary);\n    border-color: var(--d2lplus-border);\n}\n.d2lplus-dark .d2lplus-allpage__btn {\n    background: #0f141b;\n    color: var(--d2lplus-text-primary);\n    border-color: var(--d2lplus-border);\n}\n.d2lplus-dark .d2lplus-allpage__frame {\n    background: var(--d2lplus-bg-secondary);\n    color: var(--d2lplus-text-primary);\n}\n.d2lplus-dark .d2lplus-allpage__frame table,\n.d2lplus-dark .d2lplus-allpage__frame th,\n.d2lplus-dark .d2lplus-allpage__frame td {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n    border-color: var(--d2lplus-border) !important;\n}\n.d2lplus-dark .d2lplus-allpage__frame .dco,\n.d2lplus-dark .d2lplus-allpage__frame .dco_c,\n.d2lplus-dark .d2lplus-allpage__frame form {\n    background: var(--d2lplus-bg-secondary) !important;\n}\n.d2lplus-dark .d2lplus-allpage__frame .dco_c[style*=\"background-color\"] {\n    background-color: var(--d2lplus-bg-secondary) !important;\n}\n.d2lplus-dark .d2lplus-allpage__frame [style*=\"background-color:#FfF\"],\n.d2lplus-dark .d2lplus-allpage__frame [style*=\"background-color: #FFF\"],\n.d2lplus-dark .d2lplus-allpage__frame [style*=\"background-color:#Fff\"],\n.d2lplus-dark .d2lplus-allpage__frame [style*=\"background-color: #fff\"],\n.d2lplus-dark .d2lplus-allpage__frame [style*=\"background-color:#FFFFFF\"],\n.d2lplus-dark .d2lplus-allpage__frame [style*=\"background-color: #FFFFFF\"],\n.d2lplus-dark .d2lplus-allpage__frame [style*=\"background-color:#ffffff\"],\n.d2lplus-dark .d2lplus-allpage__frame [style*=\"background-color: #ffffff\"],\n.d2lplus-dark .d2lplus-allpage__frame [style*=\"background-color: rgb(255, 255, 255)\"],\n.d2lplus-dark .d2lplus-allpage__frame [style*=\"background-color: rgb(255,255,255)\"] {\n    background-color: var(--d2lplus-bg-secondary) !important;\n}\n.d2lplus-dark .d2lplus-allpage__frame #d_content,\n.d2lplus-dark .d2lplus-allpage__frame #d_content_inner,\n.d2lplus-dark .d2lplus-allpage__frame #d_content_r,\n.d2lplus-dark .d2lplus-allpage__frame #d_content_r_c1,\n.d2lplus-dark .d2lplus-allpage__frame #d_content_r_c2,\n.d2lplus-dark .d2lplus-allpage__frame #d_content_r_p {\n    background: var(--d2lplus-bg-secondary) !important;\n    color: var(--d2lplus-text-primary) !important;\n}\n.d2lplus-dark .d2lplus-allpage__frame [style*=\"background-color\"] {\n    background-color: var(--d2lplus-bg-tertiary) !important;\n}\n.d2lplus-dark .d2lplus-allpage__frame [style*=\"background-color:#E8F8FF\"] {\n    background-color: var(--d2lplus-bg-tertiary) !important;\n}\n.d2lplus-dark .d2lplus-allpage__frame [style*=\"color\"] {\n    color: var(--d2lplus-text-primary) !important;\n}\n.d2lplus-dark .d2lplus-allpage__frame a {\n    color: var(--d2lplus-link) !important;\n}\n.d2lplus-dark .d2lplus-allpage__handle {\n    background: linear-gradient(180deg, var(--d2lplus-bg-tertiary), #111827);\n}\n.d2lplus-dark .d2lplus-allpage__handle::after {\n    color: #94a3b8;\n}\n";
    function setStyle(id, css, enabled) {
        var style = document.getElementById(id);
        if (enabled) {
            if (!style) {
                style = document.createElement("style");
                style.id = id;
                document.head.appendChild(style);
            }
            style.textContent = css;
        }
        else if (style) {
            style.remove();
        }
    }
    function setShadowStyle(root, id, css, enabled) {
        var style = root.getElementById(id);
        if (enabled) {
            if (!style) {
                style = document.createElement("style");
                style.id = id;
                root.appendChild(style);
            }
            style.textContent = css;
        }
        else if (style) {
            style.remove();
        }
    }
    /* Icon Button Specific Shadow CSS - Forces transparency */
    var ICON_BUTTON_SHADOW_CSS = "\n    /* Force specific transparency for icon buttons */\n    :host, button, .d2l-button-icon {\n        background: transparent !important;\n        background-color: transparent !important;\n        box-shadow: none !important;\n        border: none !important;\n        min-height: auto !important;\n        height: auto !important;\n        width: auto !important;\n        padding: 0 !important;\n        margin: 0 !important;\n    }\n    \n    /* Ensure icon color is visible */\n    d2l-icon, .d2l-icon {\n        color: var(--d2lplus-text-primary) !important;\n        fill: var(--d2lplus-text-primary) !important;\n    }\n\n    /* Hover state - semi-transparent dark */\n    button:hover, .d2l-button-icon:hover, :host(:hover) button, .d2l-button-icon:hover button {\n        background: rgba(31, 41, 55, 0.8) !important;\n        background-color: rgba(31, 41, 55, 0.8) !important;\n        border-radius: 4px !important;\n    }\n    \n    /* Remove any borders or shadows on the button element itself */\n    button {\n       border: 0 !important;\n       box-shadow: none !important;\n       background-image: none !important;\n    }\n    ";
    function applyDarkModeToCourseCards(enabled) {
        return __awaiter(this, void 0, void 0, function () {
            var findInShadows, findAllInShadows, myCourses, coursesRoot, container, containerRoot, content, contentRoot, cardGrid, cardGridRoot, cards, _i, cards_1, card, cardRoot, buttons, _a, buttons_1, btn, btnShadow, innerCard, innerCardRoot, innerButtons, _b, innerButtons_1, btn, btnShadow;
            return __generator(this, function (_c) {
                findInShadows = function (root, selector) {
                    var match = root.querySelector(selector);
                    if (match)
                        return match;
                    var elements = Array.from(root.querySelectorAll('*'));
                    for (var _i = 0, elements_1 = elements; _i < elements_1.length; _i++) {
                        var el = elements_1[_i];
                        if (el.shadowRoot) {
                            var match_1 = findInShadows(el.shadowRoot, selector);
                            if (match_1)
                                return match_1;
                        }
                    }
                    return null;
                };
                findAllInShadows = function (root, selector, results) {
                    if (results === void 0) { results = []; }
                    var matches = Array.from(root.querySelectorAll(selector));
                    results.push.apply(results, matches);
                    var elements = Array.from(root.querySelectorAll('*'));
                    for (var _i = 0, elements_2 = elements; _i < elements_2.length; _i++) {
                        var el = elements_2[_i];
                        if (el.shadowRoot) {
                            findAllInShadows(el.shadowRoot, selector, results);
                        }
                    }
                    return results;
                };
                myCourses = findInShadows(document, 'd2l-my-courses');
                if (!myCourses)
                    return [2 /*return*/];
                coursesRoot = myCourses.shadowRoot;
                if (coursesRoot) {
                    setShadowStyle(coursesRoot, "d2lplus-dark-courses", DARK_MODE_CARD_SHADOW_CSS, enabled);
                }
                container = coursesRoot === null || coursesRoot === void 0 ? void 0 : coursesRoot.querySelector('d2l-my-courses-container');
                containerRoot = container === null || container === void 0 ? void 0 : container.shadowRoot;
                if (containerRoot) {
                    setShadowStyle(containerRoot, "d2lplus-dark-courses-container", DARK_MODE_CARD_SHADOW_CSS, enabled);
                }
                content = containerRoot === null || containerRoot === void 0 ? void 0 : containerRoot.querySelector('d2l-my-courses-content');
                contentRoot = content === null || content === void 0 ? void 0 : content.shadowRoot;
                if (contentRoot) {
                    setShadowStyle(contentRoot, "d2lplus-dark-courses-content", DARK_MODE_CARD_SHADOW_CSS, enabled);
                }
                cardGrid = contentRoot === null || contentRoot === void 0 ? void 0 : contentRoot.querySelector('d2l-my-courses-card-grid');
                cardGridRoot = cardGrid === null || cardGrid === void 0 ? void 0 : cardGrid.shadowRoot;
                if (cardGridRoot) {
                    setShadowStyle(cardGridRoot, "d2lplus-dark-cardgrid", DARK_MODE_CARD_SHADOW_CSS, enabled);
                    cards = Array.from(cardGridRoot.querySelectorAll('d2l-enrollment-card'));
                    for (_i = 0, cards_1 = cards; _i < cards_1.length; _i++) {
                        card = cards_1[_i];
                        cardRoot = card.shadowRoot;
                        if (cardRoot) {
                            setShadowStyle(cardRoot, "d2lplus-dark-enrollment", DARK_MODE_CARD_SHADOW_CSS, enabled);
                            buttons = findAllInShadows(cardRoot, 'd2l-button-icon');
                            for (_a = 0, buttons_1 = buttons; _a < buttons_1.length; _a++) {
                                btn = buttons_1[_a];
                                btnShadow = btn.shadowRoot;
                                if (btnShadow) {
                                    setShadowStyle(btnShadow, "d2lplus-dark-shadow", "", false); // Remove generic
                                    setShadowStyle(btnShadow, "d2lplus-dark-icon-shadow", ICON_BUTTON_SHADOW_CSS, enabled);
                                }
                            }
                            innerCard = cardRoot.querySelector('d2l-card');
                            innerCardRoot = innerCard === null || innerCard === void 0 ? void 0 : innerCard.shadowRoot;
                            if (innerCardRoot) {
                                setShadowStyle(innerCardRoot, "d2lplus-dark-card", DARK_MODE_CARD_SHADOW_CSS, enabled);
                                innerButtons = findAllInShadows(innerCardRoot, 'd2l-button-icon');
                                for (_b = 0, innerButtons_1 = innerButtons; _b < innerButtons_1.length; _b++) {
                                    btn = innerButtons_1[_b];
                                    btnShadow = btn.shadowRoot;
                                    if (btnShadow) {
                                        setShadowStyle(btnShadow, "d2lplus-dark-shadow", "", false); // Remove generic
                                        setShadowStyle(btnShadow, "d2lplus-dark-icon-shadow", ICON_BUTTON_SHADOW_CSS, enabled);
                                    }
                                }
                            }
                        }
                    }
                }
                return [2 /*return*/];
            });
        });
    }
    var DARK_MODE_DROPDOWN_SHADOW_CSS = "\n        /* Dropdown container inside shadow root */\n        .d2l-dropdown-content-container,\n        .d2l-dropdown-content-inner,\n        #content-wrapper,\n        .content-width,\n        .vdiff-target,\n        [class*=\"dropdown-content\"],\n        [class*=\"content-wrapper\"] {\n        background: var(--d2lplus-bg-secondary) !important;\n        background-color: var(--d2lplus-bg-secondary) !important;\n        color: var(--d2lplus-text-primary) !important;\n        border-color: var(--d2lplus-border) !important;\n        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.5) !important;\n    }\n\n    /* Button internals */\n    button, .d2l-button-content, .d2l-button-container {\n        background: var(--d2lplus-bg-tertiary) !important;\n        color: var(--d2lplus-text-primary) !important;\n        border-color: var(--d2lplus-border) !important;\n    }\n\n    /* Input internals */\n    input, textarea, .d2l-input-container, .d2l-input-wrapper {\n        background: var(--d2lplus-bg-tertiary) !important;\n        background-color: var(--d2lplus-bg-tertiary) !important;\n        color: var(--d2lplus-text-primary) !important;\n        border-color: var(--d2lplus-border) !important;\n    }\n\n    /* Menu items */\n    .d2l-menu-item-container, .d2l-menu-item-content {\n        background: var(--d2lplus-bg-secondary) !important;\n        color: var(--d2lplus-text-primary) !important;\n        padding-top: 10px !important;\n        padding-bottom: 10px !important;\n    }\n    .d2l-menu-item-container:hover, .d2l-menu-item-content:hover {\n        background: var(--d2lplus-bg-tertiary) !important;\n    }\n\n    /* ePortfolio 'What are you learning' container - targets dynamic class using content */\n    div:has(> textarea[id*=\"reflection\"]),\n    div:has(> .d2l-reflection-text),\n    div:has(> textarea.d2l-longedit) {\n        background: var(--d2lplus-bg-tertiary) !important;\n        border: 1px solid var(--d2lplus-border) !important;\n    }\n\n    /* Course Cards (Enrollment Cards) Shadow DOM fixes */\n    d2l-enrollment-card,\n    d2l-card,\n    .d2l-widget-content {\n        --d2l-card-background-color: var(--d2lplus-bg-secondary);\n        --d2l-card-border-color: var(--d2lplus-border);\n        --d2l-color-ferrite: var(--d2lplus-text-primary); /* Text color variable */\n    }\n\n    /* Specific overrides for Help Widget to ensure text visibility */\n    .d2l-widget-content div,\n    .d2l-widget-content p,\n    .d2l-widget-content span,\n    .d2l-widget-content b,\n    .d2l-widget-content strong {\n        color: var(--d2lplus-text-primary) !important;\n    }\n\n    /* Primary button keep accent */\n    button[primary], .d2l-button-primary {\n        background: var(--d2lplus-accent) !important;\n        color: #ffffff !important;\n    }\n\n    /* ePortfolio Shadow DOM elements */\n    .d2l-longedit-container, .d2l-longedit-input {\n        background: var(--d2lplus-bg-tertiary) !important;\n        color: var(--d2lplus-text-primary) !important;\n    }\n\n    /* All white backgrounds inside shadow */\n    div, span, section, article, aside, header, footer, main {\n        background-color: inherit;\n    }\n    ";
    function applyDarkModeToShadowElements(enabled) {
        return __awaiter(this, void 0, void 0, function () {
            var elementsWithShadow, styleAllShadowRoots;
            return __generator(this, function (_a) {
                elementsWithShadow = [
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
                styleAllShadowRoots = function (root) {
                    // Helper to determine if an element is an icon button
                    var isScannerTarget = function (tagName) {
                        return tagName === 'd2l-button-icon' ||
                            tagName === 'd2l-icon-button' ||
                            tagName === 'd2l-navigation-button-notification-icon' ||
                            tagName === 'd2l-navigation-link-icon' ||
                            tagName.includes('notification-icon');
                    };
                    // 1. Explicitly check for our target list
                    for (var _i = 0, elementsWithShadow_1 = elementsWithShadow; _i < elementsWithShadow_1.length; _i++) {
                        var selector = elementsWithShadow_1[_i];
                        var elements = root.querySelectorAll(selector);
                        elements.forEach(function (el) {
                            var shadow = el.shadowRoot;
                            if (shadow) {
                                var tagName = el.tagName.toLowerCase();
                                if (isScannerTarget(tagName)) {
                                    // Apply specific transparent style for icon buttons
                                    // CRITICAL: Remove the generic style if it exists to prevent conflict
                                    setShadowStyle(shadow, "d2lplus-dark-shadow", "", false);
                                    setShadowStyle(shadow, "d2lplus-dark-icon-shadow", ICON_BUTTON_SHADOW_CSS, enabled);
                                }
                                else {
                                    // Apply generic dark style for other components
                                    setShadowStyle(shadow, "d2lplus-dark-shadow", DARK_MODE_DROPDOWN_SHADOW_CSS, enabled);
                                }
                                // Recursively check for more shadow roots inside
                                styleAllShadowRoots(shadow);
                            }
                        });
                    }
                    // 2. Fallback: check ALL elements with shadow roots to catch missed ones
                    root.querySelectorAll('*').forEach(function (el) {
                        if (el.shadowRoot) {
                            var shadow = el.shadowRoot;
                            // Check if we need to process this (if not already styled correctly)
                            var hasGeneric = !!shadow.getElementById("d2lplus-dark-shadow");
                            var hasIcon = !!shadow.getElementById("d2lplus-dark-icon-shadow");
                            if (!hasGeneric && !hasIcon) {
                                // New element, not styled yet
                                var tagName = el.tagName.toLowerCase();
                                if (isScannerTarget(tagName)) {
                                    setShadowStyle(shadow, "d2lplus-dark-icon-shadow", ICON_BUTTON_SHADOW_CSS, enabled);
                                }
                                else {
                                    setShadowStyle(shadow, "d2lplus-dark-shadow", DARK_MODE_DROPDOWN_SHADOW_CSS, enabled);
                                }
                                styleAllShadowRoots(shadow);
                            }
                            else {
                                // Already has styling, but verify it's the CORRECT one
                                var tagName = el.tagName.toLowerCase();
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
                return [2 /*return*/];
            });
        });
    }
    function getIsDarkMode(settings) {
        if (settings.theme === 'light')
            return false;
        if (settings.theme === 'system')
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        // All other themes (dark, midnight, solarized, etc.) are dark-based
        return true;
    }
    function applySettings(settings) {
        var isDarkMode = getIsDarkMode(settings);
        // Determine active theme colors
        var activeThemeName = settings.theme;
        if (activeThemeName === 'system') {
            activeThemeName = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        }
        var themeVarsCSS = '';
        if (isDarkMode && activeThemeName !== 'light') {
            var colors = THEMES[activeThemeName] || THEMES['dark'];
            themeVarsCSS = "\n            :root {\n                --d2lplus-bg-primary: ".concat(colors.bgPrimary, ";\n                --d2lplus-bg-secondary: ").concat(colors.bgSecondary, ";\n                --d2lplus-bg-tertiary: ").concat(colors.bgTertiary, ";\n                --d2lplus-text-primary: ").concat(colors.textPrimary, ";\n                --d2lplus-text-secondary: ").concat(colors.textSecondary, ";\n                --d2lplus-text-muted: ").concat(colors.textMuted, ";\n                --d2lplus-border: ").concat(colors.border, ";\n                --d2lplus-border-subtle: ").concat(colors.borderSubtle, ";\n                --d2lplus-accent: ").concat(colors.accent, ";\n                --d2lplus-accent-hover: ").concat(colors.accentHover, ";\n                --d2lplus-link: ").concat(colors.link, ";\n                --d2lplus-link-hover: ").concat(colors.linkHover, ";\n            }\n            .d2lplus-dark {\n                 --d2lplus-bg-primary: ").concat(colors.bgPrimary, ";\n                --d2lplus-bg-secondary: ").concat(colors.bgSecondary, ";\n                --d2lplus-bg-tertiary: ").concat(colors.bgTertiary, ";\n                --d2lplus-text-primary: ").concat(colors.textPrimary, ";\n                --d2lplus-text-secondary: ").concat(colors.textSecondary, ";\n                --d2lplus-text-muted: ").concat(colors.textMuted, ";\n                --d2lplus-border: ").concat(colors.border, ";\n                --d2lplus-border-subtle: ").concat(colors.borderSubtle, ";\n                --d2lplus-accent: ").concat(colors.accent, ";\n                --d2lplus-accent-hover: ").concat(colors.accentHover, ";\n                --d2lplus-link: ").concat(colors.link, ";\n                --d2lplus-link-hover: ").concat(colors.linkHover, ";\n            }\n            ");
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
        }
        else {
            removeQuickLinks();
        }
        // Wrap in setTimeout to prevent potential layout thrashing/blank page issues (User requested delay)
        setTimeout(function () {
            observeLegacyNav(settings.hideLegacyNav);
        }, 500);
        // ALWAYS call these to ensure cleanup if isDarkMode is false
        // This fixes the bug where cards stuck in dark mode after switching to light
        applyDarkModeToCourseCards(isDarkMode);
        applyDarkModeToShadowElements(isDarkMode);
        if (isDarkMode) {
            // Delayed apply to handle dynamic content loading
            setTimeout(function () { return applyDarkModeToCourseCards(true); }, 1200);
            setTimeout(function () { return applyDarkModeToCourseCards(true); }, 3000);
            setTimeout(function () { return applyDarkModeToShadowElements(true); }, 500);
            setTimeout(function () { return applyDarkModeToShadowElements(true); }, 1500);
            setTimeout(function () { return applyDarkModeToShadowElements(true); }, 3000);
            setTimeout(function () { return applyDarkModeToShadowElements(true); }, 5000);
            // Setup MutationObserver for dynamic content (calendar, dropdowns, etc.)
            setupDynamicStyleObserver();
        }
        else {
            // Disconnect observer if disabled
            if (dynamicObserver) {
                dynamicObserver.disconnect();
                dynamicObserver = null;
            }
        }
        // Hide back button on homepage specifically
        if (window.location.pathname === '/d2l/home') {
            var styleId = "d2lplus-hide-back-home";
            var style = document.getElementById(styleId);
            if (!style) {
                style = document.createElement("style");
                style.id = styleId;
                style.textContent = ".d2lplus-back { display: none !important; }";
                document.head.appendChild(style);
            }
        }
        else {
            ensureBackButton();
        }
        if (!document.querySelector("[data-d2lplus-back]")) {
            setTimeout(ensureBackButton, 1200);
            setTimeout(ensureBackButton, 3000);
        }
    }
    var dynamicObserver = null;
    var debounceTimeout = null;
    function setupDynamicStyleObserver() {
        if (dynamicObserver)
            return; // Already set up
        dynamicObserver = new MutationObserver(function (mutations) {
            // Debounce to avoid excessive re-styling
            if (debounceTimeout)
                clearTimeout(debounceTimeout);
            debounceTimeout = setTimeout(function () {
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
    function getSettings() {
        if (!storageArea)
            return Promise.resolve(__assign({}, DEFAULT_SETTINGS));
        return new Promise(function (resolve) {
            storageArea.get(DEFAULT_SETTINGS, function (items) { return resolve(items); });
        });
    }
    function saveCourseList(courses) {
        if (!storageArea)
            return;
        storageArea.set({ courseList: courses }, function () { });
    }
    function saveCourseOrder(order) {
        if (!storageArea)
            return;
        storageArea.set({ courseOrder: order }, function () { });
    }
    function getCourseListFromStorage() {
        if (!storageArea)
            return Promise.resolve([]);
        return new Promise(function (resolve) {
            storageArea.get({ courseList: [] }, function (items) {
                return resolve(items.courseList || []);
            });
        });
    }
    function getCourseOrderFromStorage() {
        if (!storageArea)
            return Promise.resolve([]);
        return new Promise(function (resolve) {
            storageArea.get({ courseOrder: [] }, function (items) {
                return resolve(items.courseOrder || []);
            });
        });
    }
    function applyCourseOrder(courses, order) {
        if (!order.length)
            return courses;
        var map = new Map(courses.map(function (c) { return [c.id, c]; }));
        var ordered = [];
        for (var _i = 0, order_1 = order; _i < order_1.length; _i++) {
            var id = order_1[_i];
            var course = map.get(id);
            if (course)
                ordered.push(course);
        }
        for (var _a = 0, courses_1 = courses; _a < courses_1.length; _a++) {
            var course = courses_1[_a];
            if (!order.includes(course.id))
                ordered.push(course);
        }
        return ordered;
    }
    function getAllPageHeightFromStorage() {
        if (!storageArea)
            return Promise.resolve(null);
        return new Promise(function (resolve) {
            storageArea.get({ allPageHeight: null }, function (items) {
                return resolve(items.allPageHeight);
            });
        });
    }
    function saveAllPageHeight(height) {
        if (!storageArea)
            return;
        storageArea.set({ allPageHeight: height }, function () { });
    }
    function openExtensionPage(page) {
        var url = new URL(window.location.href);
        url.pathname = "/d2l/home";
        url.searchParams.set("d2lplus", page.replace(".html", ""));
        window.location.href = url.toString();
    }
    function observeLegacyNav(hide) {
        var _this = this;
        if (!hide) {
            var navObserver = window.d2lPlusNavObserver;
            if (navObserver)
                navObserver.disconnect();
            var wrapperObserver = window.d2lPlusNavWrapperObserver;
            if (wrapperObserver)
                wrapperObserver.disconnect();
            document.querySelectorAll("[data-d2lplus-hidden-nav]").forEach(function (node) {
                node.style.removeProperty("display");
                node.removeAttribute("data-d2lplus-hidden-nav");
            });
            return;
        }
        var hiddenLabels = [
            "email",
            "eportfolio",
            "self registration",
            "spls tasks",
            "help"
        ];
        var normalizeLabel = function (value) {
            return value.toLowerCase().replace(/[^a-z0-9]+/g, " ").trim();
        };
        var isHiddenLabel = function (value) {
            var normalized = normalizeLabel(value);
            if (!normalized)
                return false;
            return hiddenLabels.some(function (label) {
                return normalized === label ||
                    normalized.startsWith("".concat(label, " ")) ||
                    normalized.endsWith(" ".concat(label));
            });
        };
        var hiddenHrefParts = [
            "/d2l/lms/email/",
            "/d2l/ep/",
            "/d2l/lms/legacy/selfregistration",
            "quicklink/quicklink.d2l",
            "help.d2l.msu.edu"
        ];
        var isQuickLinkElement = function (element) {
            return Boolean(element.closest("[data-d2lplus-link], [data-d2lplus-page-link], [data-d2lplus-dropdown]"));
        };
        var getHref = function (element) {
            return (element.getAttribute("href") ||
                element.href ||
                element.getAttribute("data-href") ||
                "").toLowerCase();
        };
        var isHiddenHref = function (href) {
            return hiddenHrefParts.some(function (part) { return href.includes(part); });
        };
        var queryAllDeep = function (root, selector, results) {
            if (results === void 0) { results = []; }
            var rootNode = root;
            results.push.apply(results, Array.from(rootNode.querySelectorAll(selector)));
            var elements = Array.from(rootNode.querySelectorAll("*"));
            for (var _i = 0, elements_3 = elements; _i < elements_3.length; _i++) {
                var el = elements_3[_i];
                var shadowRoot = el.shadowRoot;
                if (shadowRoot) {
                    queryAllDeep(shadowRoot, selector, results);
                }
            }
            if (root.shadowRoot) {
                queryAllDeep(root.shadowRoot, selector, results);
            }
            return results;
        };
        var getNavRoots = function () {
            var navHosts = Array.from(document.querySelectorAll("d2l-navigation, d2l-navigation-main, d2l-navigation-main-header, d2l-navigation-s, d2l-navigation-dropdown, d2l-navigation-s-dropdown, nav, header[role='navigation']"));
            return navHosts;
        };
        var getLabel = function (element) {
            return (element.getAttribute("text") ||
                element.getAttribute("aria-label") ||
                element.getAttribute("title") ||
                element.textContent ||
                "").trim();
        };
        var markHidden = function (element) {
            var htmlTarget = element;
            htmlTarget.style.display = "none";
            htmlTarget.setAttribute("data-d2lplus-hidden-nav", "true");
        };
        var shouldSkipItem = function (item) {
            return item.hasAttribute("data-d2lplus-link") ||
                item.hasAttribute("data-d2lplus-page-link") ||
                item.hasAttribute("data-d2lplus-dropdown") ||
                Boolean(item.querySelector("[data-d2lplus-link],[data-d2lplus-page-link],[data-d2lplus-dropdown]"));
        };
        var hideItemsInWrapper = function (wrapper) {
            var navItems = Array.from(wrapper.querySelectorAll(".d2l-navigation-s-item"));
            for (var _i = 0, navItems_1 = navItems; _i < navItems_1.length; _i++) {
                var item = navItems_1[_i];
                if (shouldSkipItem(item)) {
                    var htmlItem = item;
                    htmlItem.style.removeProperty("display");
                    htmlItem.removeAttribute("data-d2lplus-hidden-nav");
                    continue;
                }
                var anchor = item.querySelector("a");
                var label = anchor ? getLabel(anchor) : getLabel(item);
                var href = anchor ? getHref(anchor) : getHref(item);
                if (isHiddenLabel(label) || isHiddenHref(href)) {
                    markHidden(item);
                }
            }
            var moreWrapper = wrapper.querySelector(".d2l-navigation-s-more");
            if (moreWrapper) {
                var menuItems = Array.from(moreWrapper.querySelectorAll("d2l-menu-item-link, d2l-menu-item"));
                for (var _a = 0, menuItems_1 = menuItems; _a < menuItems_1.length; _a++) {
                    var element = menuItems_1[_a];
                    var label = getLabel(element);
                    var href = getHref(element);
                    if (!isHiddenLabel(label) && !isHiddenHref(href))
                        continue;
                    markHidden(element);
                }
                var remaining = moreWrapper.querySelectorAll("d2l-menu-item-link:not([data-d2lplus-hidden-nav]), d2l-menu-item:not([data-d2lplus-hidden-nav])");
                if (!remaining.length) {
                    markHidden(moreWrapper);
                }
            }
        };
        var hideItems = function () {
            var wrappers = Array.from(document.querySelectorAll(".d2l-navigation-s-main-wrapper"));
            if (wrappers.length) {
                wrappers.forEach(hideItemsInWrapper);
                return;
            }
            var roots = getNavRoots();
            if (!roots.length)
                return;
            var candidates = [];
            for (var _i = 0, roots_1 = roots; _i < roots_1.length; _i++) {
                var root = roots_1[_i];
                queryAllDeep(root, ".d2l-navigation-s-main-wrapper", candidates);
            }
            if (candidates.length) {
                candidates.forEach(hideItemsInWrapper);
            }
        };
        var hideWhenWrapperReady = function () { return __awaiter(_this, void 0, void 0, function () {
            var wrapper, existing, wrapperObserver;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getNavigationWrapper()];
                    case 1:
                        wrapper = _a.sent();
                        if (!wrapper)
                            return [2 /*return*/];
                        hideItemsInWrapper(wrapper);
                        existing = window.d2lPlusNavWrapperObserver;
                        if (existing)
                            existing.disconnect();
                        wrapperObserver = new MutationObserver(function () {
                            requestAnimationFrame(function () { return hideItemsInWrapper(wrapper); });
                        });
                        wrapperObserver.observe(wrapper, { childList: true, subtree: true });
                        window.d2lPlusNavWrapperObserver = wrapperObserver;
                        return [2 /*return*/];
                }
            });
        }); };
        var hideWhenNavReady = function () { return __awaiter(_this, void 0, void 0, function () {
            var nav, navigationRoot, navigationShadow, navigationMainFooter;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        hideItems();
                        nav = document.querySelector("nav.d2l-navigation-s");
                        if (nav) {
                            hideItems();
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, waitForElement("d2l-navigation", 15000)];
                    case 1:
                        navigationRoot = _a.sent();
                        if (!navigationRoot)
                            return [2 /*return*/];
                        return [4 /*yield*/, waitForShadowRoot(navigationRoot, 15000)];
                    case 2:
                        navigationShadow = _a.sent();
                        if (!navigationShadow)
                            return [2 /*return*/];
                        navigationMainFooter = navigationShadow.querySelector("d2l-navigation-main-footer");
                        if (!navigationMainFooter) return [3 /*break*/, 4];
                        return [4 /*yield*/, waitForShadowRoot(navigationMainFooter, 15000)];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        hideItems();
                        return [2 /*return*/];
                }
            });
        }); };
        // Run immediately
        hideItems();
        setTimeout(hideItems, 800);
        setTimeout(hideItems, 2000);
        hideWhenNavReady();
        hideWhenWrapperReady();
        // And observe for changes (handling dynamic loading)
        var observer = new MutationObserver(function () {
            requestAnimationFrame(hideItems);
        });
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
        // Store observer globally to potentially manage lifecycle
        window.d2lPlusNavObserver = observer;
    }
    function getCourseSelectorPath() {
        var courseSelector = document.querySelector('[data-prl*="courseSelector"]');
        var prl = courseSelector === null || courseSelector === void 0 ? void 0 : courseSelector.getAttribute("data-prl");
        if (prl)
            return prl;
        return null;
    }
    (_f = (_e = ext === null || ext === void 0 ? void 0 : ext.runtime) === null || _e === void 0 ? void 0 : _e.onMessage) === null || _f === void 0 ? void 0 : _f.addListener(function (request) {
        if ((request === null || request === void 0 ? void 0 : request.action) === "D2LPlusSettingsUpdated" && (request === null || request === void 0 ? void 0 : request.settings)) {
            applySettings(request.settings);
        }
    });
    getSettings().then(applySettings);
    // Code preview feature
    var PREVIEW_BUTTON = "< slot class=\"PreviewButton\" > <d2l-button class=\"preview-btn\" primary = \"\" type = \"button\" style = \"margin-left:auto; margin-right:auto\" > Preview < /d2l-button></slot > ";
    var lastPress = new Date().getTime();
    var lastPressLimit = 2 * 1000;
    setTimeout(function () {
        var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t, _u, _v;
        var LZString;
        (function () { return __awaiter(_this, void 0, void 0, function () {
            var src;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        src = ext.runtime.getURL("src/lz-string-default.min.js");
                        return [4 /*yield*/, import(src)];
                    case 1:
                        LZString = (_a.sent()).default;
                        return [2 /*return*/];
                }
            });
        }); })();
        try {
            var gradeList = (_r = (_q = (_p = (_o = (_m = (_l = (_k = (_j = (_h = (_g = (_f = (_e = (_d = (_c = (_b = (_a = document.querySelector('d2l-consistent-evaluation[class="d2l-token-receiver"]')) === null || _a === void 0 ? void 0 : _a.shadowRoot) === null || _b === void 0 ? void 0 : _b.querySelector('d2l-consistent-evaluation-page[activity-type="assignmentActivity"]')) === null || _c === void 0 ? void 0 : _c.shadowRoot) === null || _d === void 0 ? void 0 : _d.querySelector('d2l-template-primary-secondary')) === null || _e === void 0 ? void 0 : _e.querySelector('div[slot="primary"]')) === null || _f === void 0 ? void 0 : _f.querySelector('d2l-consistent-evaluation-left-panel[activity-type="assignmentActivity"]')) === null || _g === void 0 ? void 0 : _g.shadowRoot) === null || _h === void 0 ? void 0 : _h.querySelector('d2l-consistent-evaluation-evidence-assignment')) === null || _j === void 0 ? void 0 : _j.shadowRoot) === null || _k === void 0 ? void 0 : _k.querySelector('d2l-consistent-evaluation-assignments-submissions-page')) === null || _l === void 0 ? void 0 : _l.shadowRoot) === null || _m === void 0 ? void 0 : _m.querySelector('.d2l-consistent-evaluation-submission-list-view')) === null || _o === void 0 ? void 0 : _o.querySelector('d2l-list[separators="between"]')) === null || _p === void 0 ? void 0 : _p.querySelector('d2l-consistent-evaluation-assignments-submission-item')) === null || _q === void 0 ? void 0 : _q.shadowRoot) === null || _r === void 0 ? void 0 : _r.querySelector('d2l-list[aria-role="list"][separators="all"]');
            if (!gradeList) {
                return;
            }
            var items = Array.from(gradeList.children);
            var _loop_1 = function (i) {
                try {
                    if (items[i].getAttribute("role")) {
                        var item_1 = items[i];
                        var file_element = (_t = (_s = item_1.querySelector('d2l-dropdown-menu')) === null || _s === void 0 ? void 0 : _s.querySelector("d2l-menu")) === null || _t === void 0 ? void 0 : _t.querySelector("d2l-menu-item");
                        var file_link = (_v = (_u = item_1.querySelector('div[class = "d2l-submission-attachment-list-item-flexbox"]')) === null || _u === void 0 ? void 0 : _u.querySelector("d2l-list-item-content")) === null || _v === void 0 ? void 0 : _v.querySelector('a[class="truncate"]');
                        if (!file_link) {
                            return "continue";
                        }
                        var file_name_1 = file_link.innerText;
                        var url_1 = file_element === null || file_element === void 0 ? void 0 : file_element.getAttribute("data-href");
                        var file_extension_1 = file_element === null || file_element === void 0 ? void 0 : file_element.getAttribute("data-extension");
                        item_1.innerHTML += PREVIEW_BUTTON;
                        var getFile = function () { return __awaiter(_this, void 0, void 0, function () {
                            var response, file_contents, previewButton;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, fetch(url_1)];
                                    case 1:
                                        response = _b.sent();
                                        return [4 /*yield*/, response.text()];
                                    case 2:
                                        file_contents = _b.sent();
                                        previewButton = (_a = item_1.querySelector("slot[class=PreviewButton]")) === null || _a === void 0 ? void 0 : _a.querySelector('d2l-button[class="preview-btn"]');
                                        if (!previewButton)
                                            return [2 /*return*/];
                                        previewButton.onclick = function () {
                                            if ((new Date().getTime() - lastPress) < lastPressLimit)
                                                return;
                                            lastPress = new Date().getTime();
                                            ext.runtime.sendMessage({
                                                action: "openPopup",
                                                lang: file_extension_1,
                                                code: LZString.compressToEncodedURIComponent(file_contents),
                                                file_name: file_name_1
                                            });
                                        };
                                        return [2 /*return*/];
                                }
                            });
                        }); };
                        getFile();
                    }
                }
                catch (_x) { }
            };
            for (var i = 0; i < items.length; i++) {
                _loop_1(i);
            }
        }
        catch (_w) { }
    }, 3000);
    function waitForElement(selector_1) {
        return __awaiter(this, arguments, void 0, function (selector, timeout) {
            var startTime;
            if (timeout === void 0) { timeout = 30000; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startTime = Date.now();
                        _a.label = 1;
                    case 1:
                        if (!(document.querySelector(selector) === null)) return [3 /*break*/, 3];
                        if (Date.now() - startTime > timeout)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, new Promise(function (resolve) { return requestAnimationFrame(resolve); })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, document.querySelector(selector)];
                }
            });
        });
    }
    function waitForShadowElement(parent_1, selector_1) {
        return __awaiter(this, arguments, void 0, function (parent, selector, timeout) {
            var startTime;
            if (timeout === void 0) { timeout = 30000; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startTime = Date.now();
                        _a.label = 1;
                    case 1:
                        if (!(parent.shadowRoot === null || parent.shadowRoot.querySelector(selector) === null)) return [3 /*break*/, 3];
                        if (Date.now() - startTime > timeout)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, new Promise(function (resolve) { return requestAnimationFrame(resolve); })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, parent.shadowRoot.querySelector(selector)];
                }
            });
        });
    }
    function waitForShadowRoot(parent_1) {
        return __awaiter(this, arguments, void 0, function (parent, timeout) {
            var startTime;
            if (timeout === void 0) { timeout = 30000; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startTime = Date.now();
                        _a.label = 1;
                    case 1:
                        if (!(parent.shadowRoot === null)) return [3 /*break*/, 3];
                        if (Date.now() - startTime > timeout)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, new Promise(function (resolve) { return requestAnimationFrame(resolve); })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, parent.shadowRoot];
                }
            });
        });
    }
    function waitForChildElement(parent_1, selector_1) {
        return __awaiter(this, arguments, void 0, function (parent, selector, timeout) {
            var startTime;
            if (timeout === void 0) { timeout = 30000; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startTime = Date.now();
                        _a.label = 1;
                    case 1:
                        if (!(parent.querySelector(selector) === null)) return [3 /*break*/, 3];
                        if (Date.now() - startTime > timeout)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, new Promise(function (resolve) { return requestAnimationFrame(resolve); })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, parent.querySelector(selector)];
                }
            });
        });
    }
    function waitForAnyShadowElement(parent_1, selectors_1) {
        return __awaiter(this, arguments, void 0, function (parent, selectors, timeout) {
            var startTime, _i, selectors_2, selector;
            if (timeout === void 0) { timeout = 30000; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        startTime = Date.now();
                        _a.label = 1;
                    case 1:
                        if (!(Date.now() - startTime < timeout)) return [3 /*break*/, 3];
                        for (_i = 0, selectors_2 = selectors; _i < selectors_2.length; _i++) {
                            selector = selectors_2[_i];
                            if (parent.shadowRoot && parent.shadowRoot.querySelector(selector)) {
                                return [2 /*return*/, parent.shadowRoot.querySelector(selector)];
                            }
                        }
                        return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 100); })];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 1];
                    case 3: return [2 /*return*/, null];
                }
            });
        });
    }
    var QUICK_LINK_ATTR = "data-d2lplus-link";
    var QUICK_DROPDOWN_ATTR = "data-d2lplus-dropdown";
    var PAGE_LINK_ATTR = "data-d2lplus-page-link";
    var ALL_PAGE_ATTR = "data-d2lplus-allpage";
    function removeQuickLinks() {
        document.querySelectorAll("[".concat(QUICK_LINK_ATTR, "]")).forEach(function (node) { return node.remove(); });
        document.querySelectorAll("[".concat(QUICK_DROPDOWN_ATTR, "]")).forEach(function (node) { return node.remove(); });
        document.querySelectorAll("[".concat(PAGE_LINK_ATTR, "]")).forEach(function (node) { return node.remove(); });
        document.querySelectorAll("[".concat(ALL_PAGE_ATTR, "]")).forEach(function (node) { return node.remove(); });
        document.documentElement.classList.remove("d2lplus-allpage-active");
    }
    function getNavigationWrapper() {
        return __awaiter(this, void 0, void 0, function () {
            var nav, labsNav, labsFooter, slotMainDiv_1, navigationRoot, navigationShadow, navigationMainFooter, footerShadow, slotMainDiv;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, waitForElement('nav.d2l-navigation-s')];
                    case 1:
                        nav = _c.sent();
                        if (nav) {
                            labsNav = nav.querySelector('d2l-labs-navigation');
                            if (!labsNav)
                                return [2 /*return*/, null];
                            labsFooter = labsNav.querySelector('d2l-labs-navigation-main-footer');
                            if (!labsFooter)
                                return [2 /*return*/, null];
                            slotMainDiv_1 = labsFooter.querySelector('div[slot="main"]');
                            return [2 /*return*/, (_a = slotMainDiv_1 === null || slotMainDiv_1 === void 0 ? void 0 : slotMainDiv_1.querySelector('div.d2l-navigation-s-main-wrapper')) !== null && _a !== void 0 ? _a : null];
                        }
                        return [4 /*yield*/, waitForElement('d2l-navigation')];
                    case 2:
                        navigationRoot = _c.sent();
                        if (!navigationRoot)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, waitForShadowRoot(navigationRoot)];
                    case 3:
                        navigationShadow = _c.sent();
                        if (!navigationShadow)
                            return [2 /*return*/, null];
                        navigationMainFooter = navigationShadow.querySelector('d2l-navigation-main-footer');
                        if (!navigationMainFooter)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, waitForShadowRoot(navigationMainFooter)];
                    case 4:
                        footerShadow = _c.sent();
                        if (!footerShadow)
                            return [2 /*return*/, null];
                        slotMainDiv = footerShadow.querySelector('div[slot="main"]');
                        return [2 /*return*/, (_b = slotMainDiv === null || slotMainDiv === void 0 ? void 0 : slotMainDiv.querySelector('div.d2l-navigation-s-main-wrapper')) !== null && _b !== void 0 ? _b : null];
                }
            });
        });
    }
    function getCourseOrgUnitId() {
        return __awaiter(this, void 0, void 0, function () {
            var element, selectors, href, match;
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, waitForElement('.d2l-body.d2l-typography.vui-typography.d2l-tiles-container.daylight .d2l-page-main.d2l-max-width.d2l-min-width .d2l-page-main-padding .d2l-homepage .homepage-container .homepage-row .homepage-col-8 .d2l-widget.d2l-tile[role="region"]')];
                    case 1:
                        element = _b.sent();
                        if (!element)
                            return [2 /*return*/, null];
                        element = element.querySelector('d2l-expand-collapse-content');
                        element = (_a = element === null || element === void 0 ? void 0 : element.querySelector('div.d2l-widget-content-padding d2l-my-courses')) !== null && _a !== void 0 ? _a : null;
                        if (!element)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, waitForShadowElement(element, 'd2l-my-courses-container')];
                    case 2:
                        element = _b.sent();
                        if (!element)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, waitForShadowElement(element, 'd2l-tabs d2l-tab-panel')];
                    case 3:
                        element = _b.sent();
                        if (!element)
                            return [2 /*return*/, null];
                        element = element.querySelector('d2l-my-courses-content');
                        if (!element)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, waitForShadowElement(element, 'd2l-my-courses-card-grid')];
                    case 4:
                        element = _b.sent();
                        if (!element)
                            return [2 /*return*/, null];
                        selectors = [
                            'div.course-card-grid.columns-2 d2l-enrollment-card:not([disabled]):not([closed])',
                            'div.course-card-grid.columns-1 d2l-enrollment-card:not([disabled]):not([closed])',
                            'div.course-card-grid.columns-3 d2l-enrollment-card:not([disabled]):not([closed])'
                        ];
                        return [4 /*yield*/, waitForAnyShadowElement(element, selectors)];
                    case 5:
                        element = _b.sent();
                        if (!element)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, waitForShadowElement(element, 'd2l-card')];
                    case 6:
                        element = _b.sent();
                        if (!element)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, waitForShadowElement(element, '.d2l-card-container')];
                    case 7:
                        element = _b.sent();
                        if (!element)
                            return [2 /*return*/, null];
                        return [4 /*yield*/, waitForChildElement(element, 'a[href]')];
                    case 8:
                        element = _b.sent();
                        if (!element)
                            return [2 /*return*/, null];
                        href = element.getAttribute('href');
                        if (!href)
                            return [2 /*return*/, null];
                        match = href.match(/\/d2l\/home\/(\d+)/);
                        return [2 /*return*/, match ? match[1] : null];
                }
            });
        });
    }
    function cleanCourseName(raw) {
        var name = raw.replace(/\s+/g, " ").trim();
        if (!name)
            return name;
        if (/ends\s+\w+/i.test(name)) {
            var commaIndex = name.indexOf(",");
            if (commaIndex !== -1) {
                name = name.slice(0, commaIndex).trim();
            }
            else {
                name = name.replace(/,?\s*ends\s.*$/i, "").trim();
            }
        }
        return name;
    }
    function getCourseList() {
        return __awaiter(this, void 0, void 0, function () {
            var element, cards, results, _i, cards_2, card, cardShadow, innerCard, innerCardShadow, link, href, match, rawName, name_1;
            var _a, _b;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0: return [4 /*yield*/, waitForElement('.d2l-body.d2l-typography.vui-typography.d2l-tiles-container.daylight .d2l-page-main.d2l-max-width.d2l-min-width .d2l-page-main-padding .d2l-homepage .homepage-container .homepage-row .homepage-col-8 .d2l-widget.d2l-tile[role="region"]')];
                    case 1:
                        element = _c.sent();
                        if (!element)
                            return [2 /*return*/, []];
                        element = element.querySelector('d2l-expand-collapse-content');
                        element = (_a = element === null || element === void 0 ? void 0 : element.querySelector('div.d2l-widget-content-padding d2l-my-courses')) !== null && _a !== void 0 ? _a : null;
                        if (!element)
                            return [2 /*return*/, []];
                        return [4 /*yield*/, waitForShadowElement(element, 'd2l-my-courses-container')];
                    case 2:
                        element = _c.sent();
                        if (!element)
                            return [2 /*return*/, []];
                        return [4 /*yield*/, waitForShadowElement(element, 'd2l-tabs d2l-tab-panel')];
                    case 3:
                        element = _c.sent();
                        if (!element)
                            return [2 /*return*/, []];
                        element = element.querySelector('d2l-my-courses-content');
                        if (!element)
                            return [2 /*return*/, []];
                        return [4 /*yield*/, waitForShadowElement(element, 'd2l-my-courses-card-grid')];
                    case 4:
                        element = _c.sent();
                        if (!element || !element.shadowRoot)
                            return [2 /*return*/, []];
                        cards = Array.from(element.shadowRoot.querySelectorAll('d2l-enrollment-card'));
                        results = [];
                        for (_i = 0, cards_2 = cards; _i < cards_2.length; _i++) {
                            card = cards_2[_i];
                            if (card.hasAttribute("disabled") || card.hasAttribute("closed"))
                                continue;
                            cardShadow = card.shadowRoot;
                            innerCard = cardShadow === null || cardShadow === void 0 ? void 0 : cardShadow.querySelector('d2l-card');
                            innerCardShadow = innerCard === null || innerCard === void 0 ? void 0 : innerCard.shadowRoot;
                            link = innerCardShadow === null || innerCardShadow === void 0 ? void 0 : innerCardShadow.querySelector('.d2l-card-container a[href*="/d2l/home/"]');
                            href = link === null || link === void 0 ? void 0 : link.getAttribute("href");
                            match = href === null || href === void 0 ? void 0 : href.match(/\/d2l\/home\/(\d+)/);
                            if (!match)
                                continue;
                            rawName = ((_b = link === null || link === void 0 ? void 0 : link.textContent) === null || _b === void 0 ? void 0 : _b.trim()) ||
                                card.getAttribute("title") ||
                                card.getAttribute("course-name") ||
                                "Course ".concat(match[1], " ");
                            name_1 = cleanCourseName(rawName);
                            results.push({ id: match[1], name: name_1 });
                        }
                        return [2 /*return*/, results];
                }
            });
        });
    }
    function createDropdown(label, items, hrefBuilder) {
        var wrapper = document.createElement("div");
        wrapper.className = "d2l-navigation-s-item d2lplus-quicklinks";
        wrapper.setAttribute(QUICK_DROPDOWN_ATTR, label.toLowerCase());
        var details = document.createElement("details");
        details.className = "d2lplus-dropdown";
        var summary = document.createElement("summary");
        summary.className = "d2l-navigation-s-link d2lplus-dropdown__summary";
        summary.textContent = label;
        var list = document.createElement("div");
        list.className = "d2lplus-dropdown__list";
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var item = items_1[_i];
            var link = document.createElement("a");
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
    function addQuickLinks() {
        return __awaiter(this, arguments, void 0, function (attempt) {
            var orgUnitId, navigationWrapper, templateItem, calendarId, clone, anchor, clone, anchor, clone, anchor, clone, anchor, courses;
            if (attempt === void 0) { attempt = 0; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, getCourseOrgUnitId()];
                    case 1:
                        orgUnitId = _a.sent();
                        if (!orgUnitId) {
                            if (attempt < 5) {
                                setTimeout(function () { return addQuickLinks(attempt + 1); }, 1200);
                                return [2 /*return*/];
                            }
                            console.warn("D2L+ quick links: org unit not found");
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, getNavigationWrapper()];
                    case 2:
                        navigationWrapper = _a.sent();
                        if (!navigationWrapper) {
                            console.warn("D2L+ quick links: navigation wrapper not found");
                            return [2 /*return*/];
                        }
                        templateItem = Array.from(navigationWrapper.querySelectorAll('.d2l-navigation-s-item'))
                            .find(function (item) { return item.querySelector('a'); });
                        if (!templateItem) {
                            console.warn("D2L+ quick links: template item not found");
                            return [2 /*return*/];
                        }
                        calendarId = "calendar";
                        if (!navigationWrapper.querySelector("[".concat(QUICK_LINK_ATTR, "=\"").concat(calendarId, "\"]"))) {
                            clone = templateItem.cloneNode(true);
                            anchor = clone.querySelector('a');
                            if (anchor) {
                                anchor.href = "https://d2l.msu.edu/d2l/le/calendar/".concat(orgUnitId);
                                anchor.textContent = "Calendar";
                                clone.setAttribute(QUICK_LINK_ATTR, calendarId);
                                navigationWrapper.appendChild(clone);
                            }
                        }
                        if (!navigationWrapper.querySelector("[".concat(PAGE_LINK_ATTR, "=\"grades\"]"))) {
                            clone = templateItem.cloneNode(true);
                            anchor = clone.querySelector('a');
                            if (anchor) {
                                anchor.href = "#";
                                anchor.textContent = "All Grades";
                                anchor.addEventListener("click", function (event) {
                                    event.preventDefault();
                                    openExtensionPage("grades.html");
                                });
                                clone.setAttribute(PAGE_LINK_ATTR, "grades");
                                navigationWrapper.appendChild(clone);
                            }
                        }
                        if (!navigationWrapper.querySelector("[".concat(PAGE_LINK_ATTR, "=\"assignments\"]"))) {
                            clone = templateItem.cloneNode(true);
                            anchor = clone.querySelector('a');
                            if (anchor) {
                                anchor.href = "#";
                                anchor.textContent = "All Assignments";
                                anchor.addEventListener("click", function (event) {
                                    event.preventDefault();
                                    openExtensionPage("assignments.html");
                                });
                                clone.setAttribute(PAGE_LINK_ATTR, "assignments");
                                navigationWrapper.appendChild(clone);
                            }
                        }
                        if (!navigationWrapper.querySelector("[".concat(PAGE_LINK_ATTR, "=\"courses\"]"))) {
                            clone = templateItem.cloneNode(true);
                            anchor = clone.querySelector('a');
                            if (anchor) {
                                anchor.href = "/d2l/home";
                                anchor.textContent = "Home";
                                clone.setAttribute(PAGE_LINK_ATTR, "courses");
                                navigationWrapper.insertBefore(clone, navigationWrapper.firstChild);
                            }
                        }
                        return [4 /*yield*/, getCourseList()];
                    case 3:
                        courses = _a.sent();
                        if (!courses.length) {
                            if (attempt < 5) {
                                setTimeout(function () { return addQuickLinks(attempt + 1); }, 1200);
                            }
                            return [2 /*return*/];
                        }
                        saveCourseList(courses);
                        return [2 /*return*/];
                }
            });
        });
    }
    var injectFrameDarkStyles = function (doc) {
        if (doc.getElementById("d2lplus-frame-dark"))
            return;
        var parentStyles = getComputedStyle(document.documentElement);
        var bgPrimary = parentStyles.getPropertyValue("--d2lplus-bg-primary").trim() || "#0f141b";
        var bgSecondary = parentStyles.getPropertyValue("--d2lplus-bg-secondary").trim() || "#111827";
        var bgTertiary = parentStyles.getPropertyValue("--d2lplus-bg-tertiary").trim() || "#1f2937";
        var textPrimary = parentStyles.getPropertyValue("--d2lplus-text-primary").trim() || "#e5e7eb";
        var link = parentStyles.getPropertyValue("--d2lplus-link").trim() || "#93c5fd";
        doc.documentElement.style.setProperty("--d2lplus-bg-primary", bgPrimary);
        doc.documentElement.style.setProperty("--d2lplus-bg-secondary", bgSecondary);
        doc.documentElement.style.setProperty("--d2lplus-bg-tertiary", bgTertiary);
        doc.documentElement.style.setProperty("--d2lplus-text-primary", textPrimary);
        doc.documentElement.style.setProperty("--d2lplus-link", link);
        var style = doc.createElement("style");
        style.id = "d2lplus-frame-dark";
        style.textContent = "\n                :root, body {\n                    background: var(--d2lplus-bg-secondary, #111827) !important;\n                    color: var(--d2lplus-text-primary, #e5e7eb) !important;\n                }\n            .dco, .dco_c, form,\n            #d_content, #d_content_inner, #d_content_r, #d_content_r_c1, #d_content_r_c2, #d_content_r_p {\n                background: var(--d2lplus-bg-secondary, #111827) !important;\n                color: var(--d2lplus-text-primary, #e5e7eb) !important;\n            }\n            [style*=\"background-color:#FFF\"],\n            [style*=\"background-color: #FFF\"],\n            [style*=\"background-color:#fff\"],\n            [style*=\"background-color: #fff\"],\n            [style*=\"background-color:#ffffff\"],\n            [style*=\"background-color: #ffffff\"],\n            [style*=\"background-color: rgb(255, 255, 255)\"],\n            [style*=\"background-color: rgb(255,255,255)\"] {\n                background-color: var(--d2lplus-bg-secondary, #111827) !important;\n            }\n            [style*=\"color\"] {\n                color: var(--d2lplus-text-primary, #e5e7eb) !important;\n            }\n                a {\n                    color: var(--d2lplus-link, #93c5fd) !important;\n                }\n                .ddl_li_c:hover,\n                .ddl_li_b:hover,\n                .ddl_li_b:focus,\n                .ddl_li_b:focus-within,\n                .ddl_li_b:active {\n                    background: var(--d2lplus-bg-tertiary, #1f2937) !important;\n                }\n                .ddl_li_b,\n                .ddl_li_c {\n                    background: transparent !important;\n                }\n                .vui-list > .d2l-list-item-action-hover,\n                .vui-list > .d2l-list-item-action-focus,\n                .vui-list > .d2l-list-item-action-hover > .ddl_li_c,\n                .vui-list > .d2l-list-item-action-focus > .ddl_li_c {\n                    background: var(--d2lplus-bg-tertiary, #1f2937) !important;\n                }\n            ";
        doc.head.appendChild(style);
    };
    var applyIframeDarkStyles = function (root) {
        var frames = Array.from(root.querySelectorAll("iframe"));
        var _loop_2 = function (frame) {
            var applyToFrame = function () {
                try {
                    var doc = frame.contentDocument;
                    if (!doc)
                        return;
                    injectFrameDarkStyles(doc);
                }
                catch (_a) { }
            };
            frame.addEventListener("load", applyToFrame, { once: true });
            applyToFrame();
        };
        for (var _i = 0, frames_1 = frames; _i < frames_1.length; _i++) {
            var frame = frames_1[_i];
            _loop_2(frame);
        }
    };
    function renderAllPage(mode, courses) {
        return __awaiter(this, void 0, void 0, function () {
            var nav, navHeight, container, header, titleWrap, title, subtitle, actions, editMode, homeBtn, editBtn, refreshBtn, setEditMode, grid, removeCourseMetadata, _loop_3, _i, courses_2, course, resizeHandle, savedHeight, resizing, startY, startHeight, startResize, moveResize, endResize, draggingId;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (document.querySelector("[".concat(ALL_PAGE_ATTR, "]")))
                            return [2 /*return*/];
                        document.documentElement.classList.add("d2lplus-allpage-active");
                        nav = document.querySelector("nav.d2l-navigation-s");
                        if (nav) {
                            navHeight = Math.max(nav.getBoundingClientRect().height, 60);
                            document.documentElement.style.setProperty("--d2lplus-nav-height", "".concat(navHeight, "px"));
                        }
                        container = document.createElement("div");
                        container.className = "d2lplus-allpage";
                        container.setAttribute(ALL_PAGE_ATTR, "true");
                        header = document.createElement("div");
                        header.className = "d2lplus-allpage__header";
                        titleWrap = document.createElement("div");
                        title = document.createElement("div");
                        title.className = "d2lplus-allpage__title";
                        title.textContent = mode === "grades" ? "All Grades" : "All Assignments";
                        subtitle = document.createElement("div");
                        subtitle.className = "d2lplus-allpage__subtitle";
                        subtitle.textContent = "Click a course to expand";
                        titleWrap.appendChild(title);
                        titleWrap.appendChild(subtitle);
                        header.appendChild(titleWrap);
                        actions = document.createElement("div");
                        actions.className = "d2lplus-allpage__actions";
                        editMode = false;
                        homeBtn = document.createElement("button");
                        homeBtn.className = "d2lplus-allpage__btn";
                        homeBtn.textContent = "Home";
                        homeBtn.addEventListener("click", function () {
                            window.location.href = "https://d2l.msu.edu/d2l/home";
                        });
                        editBtn = document.createElement("button");
                        editBtn.className = "d2lplus-allpage__btn";
                        editBtn.textContent = "Edit order";
                        editBtn.setAttribute("aria-pressed", "false");
                        refreshBtn = document.createElement("button");
                        refreshBtn.className = "d2lplus-allpage__btn";
                        refreshBtn.textContent = "Refresh courses";
                        refreshBtn.addEventListener("click", function () { return __awaiter(_this, void 0, void 0, function () {
                            var updated, order, ordered;
                            var _a;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0: return [4 /*yield*/, getCourseList()];
                                    case 1:
                                        updated = _b.sent();
                                        if (!updated.length) return [3 /*break*/, 3];
                                        saveCourseList(updated);
                                        return [4 /*yield*/, getCourseOrderFromStorage()];
                                    case 2:
                                        order = _b.sent();
                                        ordered = applyCourseOrder(updated, order);
                                        (_a = document.querySelector("[".concat(ALL_PAGE_ATTR, "]"))) === null || _a === void 0 ? void 0 : _a.remove();
                                        renderAllPage(mode, ordered);
                                        _b.label = 3;
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); });
                        setEditMode = function (enabled) {
                            editMode = enabled;
                            container.classList.toggle("d2lplus-allpage--edit", enabled);
                            editBtn.textContent = enabled ? "Done" : "Edit order";
                            editBtn.setAttribute("aria-pressed", enabled ? "true" : "false");
                            grid.querySelectorAll(".d2lplus-allpage__summary").forEach(function (node) {
                                node.setAttribute("draggable", enabled ? "true" : "false");
                            });
                        };
                        editBtn.addEventListener("click", function () {
                            setEditMode(!editMode);
                        });
                        actions.appendChild(homeBtn);
                        actions.appendChild(editBtn);
                        actions.appendChild(refreshBtn);
                        header.appendChild(actions);
                        grid = document.createElement("div");
                        grid.className = "d2lplus-allpage__grid";
                        removeCourseMetadata = function (container, courseName) {
                            var nameLower = courseName.toLowerCase();
                            var nodes = Array.from(container.querySelectorAll("*"));
                            for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
                                var node = nodes_1[_i];
                                if (node.children.length)
                                    continue;
                                var text = (node.textContent || "").replace(/\s+/g, " ").trim();
                                if (!text)
                                    continue;
                                if (text.length < 60)
                                    continue;
                                var lower = text.toLowerCase();
                                if (!lower.includes(nameLower))
                                    continue;
                                if (!/ends\s+[a-z]/i.test(text))
                                    continue;
                                node.remove();
                            }
                        };
                        _loop_3 = function (course) {
                            var details = document.createElement("details");
                            details.className = "d2lplus-allpage__item";
                            details.setAttribute("data-course-id", course.id);
                            var summary = document.createElement("summary");
                            summary.className = "d2lplus-allpage__summary";
                            summary.setAttribute("draggable", "false");
                            var handle = document.createElement("span");
                            handle.className = "d2lplus-allpage__handle";
                            var label = document.createElement("span");
                            label.textContent = course.name;
                            summary.appendChild(handle);
                            summary.appendChild(label);
                            var body = document.createElement("div");
                            body.className = "d2lplus-allpage__frame";
                            body.setAttribute("data-src", mode === "grades"
                                ? "https://d2l.msu.edu/d2l/lms/grades/my_grades/main.d2l?ou=".concat(course.id)
                                : "https://d2l.msu.edu/d2l/lms/dropbox/user/folders_list.d2l?ou=".concat(course.id));
                            body.textContent = "Loading...";
                            details.addEventListener("toggle", function () {
                                if (details.open && !body.getAttribute("data-loaded")) {
                                    var url = body.getAttribute("data-src") || "";
                                    fetch(url, { credentials: "include" })
                                        .then(function (res) { return res.text(); })
                                        .then(function (html) {
                                        var doc = new DOMParser().parseFromString(html, "text/html");
                                        var candidate = doc.querySelector(".d2l-grid-container") ||
                                            doc.querySelector("d2l-table-wrapper") ||
                                            doc.querySelector(".d2l-page-main") ||
                                            doc.body;
                                        body.innerHTML = candidate ? candidate.innerHTML : "<div>No data found.</div>";
                                        removeCourseMetadata(body, course.name);
                                        applyIframeDarkStyles(body);
                                        body.setAttribute("data-loaded", "true");
                                    })
                                        .catch(function () {
                                        body.innerHTML = "<div>Failed to load.</div>";
                                    });
                                }
                            });
                            details.appendChild(summary);
                            details.appendChild(body);
                            grid.appendChild(details);
                        };
                        for (_i = 0, courses_2 = courses; _i < courses_2.length; _i++) {
                            course = courses_2[_i];
                            _loop_3(course);
                        }
                        container.appendChild(header);
                        container.appendChild(grid);
                        resizeHandle = document.createElement("div");
                        resizeHandle.className = "d2lplus-allpage__resize";
                        container.appendChild(resizeHandle);
                        document.body.appendChild(container);
                        if (!document.querySelector("[data-d2lplus-back]")) {
                            ensureBackButton();
                        }
                        return [4 /*yield*/, getAllPageHeightFromStorage()];
                    case 1:
                        savedHeight = _a.sent();
                        if (savedHeight) {
                            document.documentElement.style.setProperty("--d2lplus-allpage-height", "".concat(savedHeight, "px"));
                        }
                        resizing = false;
                        startY = 0;
                        startHeight = 0;
                        startResize = function (clientY) {
                            resizing = true;
                            startY = clientY;
                            startHeight = container.getBoundingClientRect().height;
                        };
                        moveResize = function (clientY) {
                            if (!resizing)
                                return;
                            var delta = clientY - startY;
                            var next = Math.max(300, startHeight + delta);
                            document.documentElement.style.setProperty("--d2lplus-allpage-height", "".concat(next, "px"));
                        };
                        endResize = function () {
                            if (!resizing)
                                return;
                            resizing = false;
                            var height = container.getBoundingClientRect().height;
                            saveAllPageHeight(height);
                        };
                        resizeHandle.addEventListener("mousedown", function (event) {
                            event.preventDefault();
                            startResize(event.clientY);
                        });
                        resizeHandle.addEventListener("touchstart", function (event) {
                            var touch = event.touches[0];
                            if (!touch)
                                return;
                            startResize(touch.clientY);
                        }, { passive: true });
                        window.addEventListener("mousemove", function (event) { return moveResize(event.clientY); });
                        window.addEventListener("touchmove", function (event) {
                            var touch = event.touches[0];
                            if (!touch)
                                return;
                            moveResize(touch.clientY);
                        }, { passive: true });
                        window.addEventListener("mouseup", endResize);
                        window.addEventListener("touchend", endResize);
                        draggingId = null;
                        grid.addEventListener("dragstart", function (event) {
                            var _a, _b;
                            if (!editMode)
                                return;
                            var target = event.target;
                            var item = target === null || target === void 0 ? void 0 : target.closest("[data-course-id]");
                            if (item) {
                                draggingId = item.getAttribute("data-course-id");
                                (_a = event.dataTransfer) === null || _a === void 0 ? void 0 : _a.setData("text/plain", draggingId || "");
                                var img = document.createElement("canvas");
                                img.width = 1;
                                img.height = 1;
                                (_b = event.dataTransfer) === null || _b === void 0 ? void 0 : _b.setDragImage(img, 0, 0);
                                item.classList.add("is-dragging");
                            }
                        });
                        grid.addEventListener("drop", function (event) {
                            var _a;
                            event.preventDefault();
                            if (!editMode)
                                return;
                            if (!draggingId)
                                return;
                            var target = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest("[data-course-id]");
                            var draggingEl = grid.querySelector("[data-course-id=\"".concat(draggingId, "\"]"));
                            if (target && draggingEl && target !== draggingEl) {
                                grid.insertBefore(draggingEl, target);
                            }
                            var items = Array.from(grid.querySelectorAll("[data-course-id]"));
                            var order = items.map(function (item) { return item.getAttribute("data-course-id") || ""; }).filter(Boolean);
                            saveCourseOrder(order);
                            draggingEl === null || draggingEl === void 0 ? void 0 : draggingEl.classList.remove("is-dragging");
                            draggingId = null;
                        });
                        grid.addEventListener("dragover", function (event) {
                            var _a;
                            event.preventDefault();
                            if (!editMode)
                                return;
                            var target = (_a = event.target) === null || _a === void 0 ? void 0 : _a.closest("[data-course-id]");
                            grid.querySelectorAll(".is-over").forEach(function (el) { return el.classList.remove("is-over"); });
                            if (target)
                                target.classList.add("is-over");
                        });
                        grid.addEventListener("dragleave", function () {
                            if (!editMode)
                                return;
                            grid.querySelectorAll(".is-over").forEach(function (el) { return el.classList.remove("is-over"); });
                        });
                        return [2 /*return*/];
                }
            });
        });
    }
    function maybeRenderAllPage() {
        return __awaiter(this, arguments, void 0, function (attempt) {
            var url, mode, courses, order, ordered;
            if (attempt === void 0) { attempt = 0; }
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = new URL(window.location.href);
                        mode = url.searchParams.get("d2lplus");
                        if (mode !== "grades" && mode !== "assignments")
                            return [2 /*return*/];
                        return [4 /*yield*/, getCourseListFromStorage()];
                    case 1:
                        courses = _a.sent();
                        if (!!courses.length) return [3 /*break*/, 3];
                        return [4 /*yield*/, getCourseList()];
                    case 2:
                        courses = _a.sent();
                        _a.label = 3;
                    case 3:
                        if (!courses.length) {
                            if (attempt < 5) {
                                setTimeout(function () { return maybeRenderAllPage(attempt + 1); }, 1200);
                            }
                            return [2 /*return*/];
                        }
                        courses = courses.map(function (course) { return (__assign(__assign({}, course), { name: cleanCourseName(course.name) })); });
                        saveCourseList(courses);
                        return [4 /*yield*/, getCourseOrderFromStorage()];
                    case 4:
                        order = _a.sent();
                        ordered = applyCourseOrder(courses, order);
                        renderAllPage(mode, ordered);
                        return [2 /*return*/];
                }
            });
        });
    }
    maybeRenderAllPage();
    function ensureBackButton() {
        // Only add back button to the main window, not iframes/widgets
        if (window !== window.top)
            return;
        if (!document.body)
            return;
        if (document.querySelector("[data-d2lplus-back]"))
            return;
        var button = document.createElement("button");
        button.className = "d2lplus-back";
        button.setAttribute("data-d2lplus-back", "true");
        button.textContent = "Back";
        button.addEventListener("click", function () { return history.back(); });
        document.body.appendChild(button);
    }
})();

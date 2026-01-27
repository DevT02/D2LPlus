(() => {
    type D2LPlusSettings = {
        enabled: boolean;
        darkMode: boolean; // legacy
        theme: 'system' | 'light' | 'dark';
        animations: boolean;
        quickLinks: boolean;
        focusView: boolean;
        hideLegacyNav: boolean;
    };

    const DEFAULT_SETTINGS: D2LPlusSettings = {
        enabled: true,
        darkMode: true,
        theme: 'dark',
        animations: true,
        quickLinks: true,
        focusView: false,
        hideLegacyNav: true, // User requested this default
    };

    const ext = (globalThis as any).browser ?? (globalThis as any).chrome;
    const storageArea = ext?.storage?.sync ?? ext?.storage?.local;

    function getSettings(): Promise<D2LPlusSettings> {
        if (!storageArea) return Promise.resolve({ ...DEFAULT_SETTINGS });
        return new Promise((resolve) => {
            storageArea.get(DEFAULT_SETTINGS, (items: D2LPlusSettings) => resolve(items));
        });
    }

    function setSettings(settings: D2LPlusSettings): Promise<void> {
        if (!storageArea) return Promise.resolve();
        return new Promise((resolve) => {
            storageArea.set(settings, () => resolve());
        });
    }

    async function updateActiveTab(settings: D2LPlusSettings) {
        if (!ext?.tabs?.query) return;
        ext.tabs.query({ active: true, currentWindow: true }, (tabs: any[]) => {
            if (!tabs?.length || !tabs[0]?.id) return;
            ext.tabs.sendMessage(tabs[0].id, {
                action: "D2LPlusSettingsUpdated",
                settings,
            });
        });
    }

    function bindToggle(id: keyof D2LPlusSettings, settings: D2LPlusSettings) {
        const input = document.getElementById(id) as HTMLInputElement | null;
        if (!input) return;
        input.checked = settings[id] as boolean;
        input.addEventListener("change", async () => {
            (settings as any)[id] = input.checked;
            await setSettings(settings);
            updateActiveTab(settings);
        });
    }

    function bindThemeSelector(settings: D2LPlusSettings) {
        const selector = document.getElementById("theme") as HTMLSelectElement | null;
        if (!selector) return;
        selector.value = settings.theme;
        selector.addEventListener("change", async () => {
            settings.theme = selector.value as 'system' | 'light' | 'dark';
            // Keep legacy darkMode in sync for backward compatibility
            settings.darkMode = settings.theme === 'dark';
            await setSettings(settings);
            updateActiveTab(settings);
        });
    }

    async function init() {
        const settings = await getSettings();

        // Migration: if theme is not set but darkMode is, migrate
        if (!settings.theme && settings.darkMode !== undefined) {
            settings.theme = settings.darkMode ? 'dark' : 'light';
            await setSettings(settings);
        }

        bindThemeSelector(settings);
        bindToggle("enabled", settings);
        bindToggle("animations", settings);
        bindToggle("quickLinks", settings);
        bindToggle("focusView", settings);
        bindToggle("hideLegacyNav", settings);

        const reset = document.getElementById("reset");
        reset?.addEventListener("click", async () => {
            const fresh = { ...DEFAULT_SETTINGS };
            await setSettings(fresh);
            updateActiveTab(fresh);
            // Rebind all controls
            const themeSelect = document.getElementById("theme") as HTMLSelectElement | null;
            if (themeSelect) themeSelect.value = fresh.theme;
            bindToggle("enabled", fresh);
            bindToggle("animations", fresh);
            bindToggle("quickLinks", fresh);
            bindToggle("focusView", fresh);
            bindToggle("hideLegacyNav", fresh);
        });
    }

    document.addEventListener("DOMContentLoaded", init);
})();

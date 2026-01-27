// background.js
(function () {
    var _a;
    var ext = (_a = globalThis.browser) !== null && _a !== void 0 ? _a : globalThis.chrome;
    ext.runtime.onMessage.addListener(function (request, sender, sendResponse) {
        if (request.action === "openPopup") {
            ext.tabs.create({ url: "".concat(ext.runtime.getURL('preview.html'), "?lang=").concat(request.lang, "&code=").concat(request.code, "&filename=").concat(request.file_name), active: true });
        }
        if (request.action === "openTab" && request.page) {
            ext.tabs.create({ url: ext.runtime.getURL(request.page), active: true });
        }
    });
})();

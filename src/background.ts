// background.js
(() => {
    var ext = (globalThis as any).browser ?? (globalThis as any).chrome;

    ext.runtime.onMessage.addListener(function(request, sender, sendResponse) {
        if (request.action === "openPopup") {
            ext.tabs.create({url: `${ext.runtime.getURL('preview.html')}?lang=${request.lang}&code=${request.code}&filename=${request.file_name}`, active:true});
        }
        if (request.action === "openTab" && request.page) {
            ext.tabs.create({ url: ext.runtime.getURL(request.page), active: true });
        }
    });
})();

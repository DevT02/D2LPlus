// background.js
chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === "openPopup") {
        chrome.tabs.create({ url: "".concat(chrome.runtime.getURL('preview.html'), "?lang=").concat(request.lang, "&code=").concat(request.code, "&filename=").concat(request.file_name), active: true });
    }
});

// background.js

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "openPopup") {
        chrome.tabs.create({url: `${chrome.runtime.getURL('preview.html')}?lang=${request.lang}&code=${request.code}&filename=${request.file_name}`, active:true});
    }
});

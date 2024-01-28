// background.js
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.action === "openPopup") {
        chrome.tabs.create({url:chrome.runtime.getURL('Preview.html'),active:true});
    }
});

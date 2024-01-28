const PREVIEW_BUTTON = `<slot class="PreviewButton"><d2l-button class="preview-btn" primary="" type="button" style="margin-left:auto; margin-right:auto">Preview</d2l-button></slot>`
let lastPress = new Date().getTime()
let lastPressLimit = 2 * 1000

setTimeout(() => {
    let LZString

    (async () => {
        const src = chrome.runtime.getURL("src/lz-string-default.min.js");
        LZString = (await import(src)).default;
    })();


    try {
        let gradeList = document.querySelector('d2l-consistent-evaluation[class="d2l-token-receiver"]').shadowRoot.querySelector('d2l-consistent-evaluation-page[activity-type="assignmentActivity"]').shadowRoot.querySelector('d2l-template-primary-secondary').querySelector('div[slot="primary"]').querySelector('d2l-consistent-evaluation-left-panel[activity-type="assignmentActivity"]').shadowRoot.querySelector('d2l-consistent-evaluation-evidence-assignment').shadowRoot.querySelector('d2l-consistent-evaluation-assignments-submissions-page').shadowRoot.querySelector('.d2l-consistent-evaluation-submission-list-view').querySelector('d2l-list[separators="between"]').querySelector('d2l-consistent-evaluation-assignments-submission-item').shadowRoot.querySelector('d2l-list[aria-role="list"][separators="all"]')

        for (let i = 0; i < gradeList.childNodes.length; i++) {
            try {
                if (gradeList.childNodes.item(i).getAttribute("role")) {
                    let item = gradeList.childNodes.item(i)

                    let file_element = (item.querySelector('d2l-dropdown-menu').querySelector("d2l-menu").querySelector("d2l-menu-item"))
                    let file_name = (item.querySelector('div[class = "d2l-submission-attachment-list-item-flexbox"]').querySelector("d2l-list-item-content").querySelector('a[class="truncate"]').innerText)
                    let url = file_element.getAttribute("data-href")
                    let file_extension = file_element.getAttribute("data-extension")

                    item.innerHTML += PREVIEW_BUTTON

                    let getFile  = async () => {
                        let response = await fetch(url)
                        let file_contents = await response.text()

                        item.querySelector(`slot[class=PreviewButton]`).querySelector(`d2l-button[class="preview-btn"]`).onclick = function () {
                            if ((new Date().getTime() - lastPress) < lastPressLimit) return
                            lastPress = new Date().getTime();
                            chrome.runtime.sendMessage({
                                action: "openPopup",
                                lang: file_extension,
                                code: LZString.compressToEncodedURIComponent(file_contents),
                                file_name: file_name
                            });
                        }
                    }

                    getFile()
                }
            }
            catch {}
        }
    }
    catch {}
}, 3000)

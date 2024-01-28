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


// Calender Button
setTimeout(() => {
    let elementVal = document.querySelector('.d2l-body.d2l-typography.vui-typography.d2l-tiles-container.daylight .d2l-page-main.d2l-max-width.d2l-min-width .d2l-page-main-padding .d2l-homepage .homepage-container .homepage-row .homepage-col-8 .d2l-widget.d2l-tile[role="region"]').querySelector('d2l-expand-collapse-content').querySelector('div.d2l-widget-content-padding d2l-my-courses').shadowRoot.querySelector('d2l-my-courses-container').shadowRoot.querySelector('d2l-tabs d2l-tab-panel').querySelector('d2l-my-courses-content').shadowRoot.querySelector('d2l-my-courses-card-grid').shadowRoot.querySelector('div.course-card-grid.columns-2 d2l-enrollment-card:not([disabled]):not([closed])').shadowRoot.querySelector('d2l-card').shadowRoot.querySelector('.d2l-card-container').querySelector('a[href]').getAttribute('href')


    var regex = /\/d2l\/home\/(\d+)/; // Regular expression to capture numbers after '/d2l/home/'

    var match = elementVal.match(regex);
    var numbers = match ? match[1] : null; // Extract the first captured group
    var finalLink = "https://d2l.msu.edu/d2l/le/calendar/"

    if (numbers) {
        finalLink += numbers
    }


    let items = document.querySelector('.d2l-body.d2l-typography.vui-typography.d2l-tiles-container.daylight nav.d2l-navigation-s d2l-navigation').querySelector('d2l-navigation-main-footer').querySelector('div[slot="main"]').querySelector('div.d2l-navigation-s-main-wrapper').querySelectorAll('.d2l-navigation-s-item');
    var secondToLastItem = items[items.length - 2];

    var clone = secondToLastItem.cloneNode(true);

    var anchor = clone.querySelector('a');
    if (anchor) {
        anchor.href = finalLink; // Set the new href value here
        anchor.textContent = "Calendar";
    }

    var mainWrapper = document.querySelector('div.d2l-navigation-s-main-wrapper');

    mainWrapper.appendChild(clone);
}, 6000)

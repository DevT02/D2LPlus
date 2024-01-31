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


async function waitForElement(selector) {
    while (document.querySelector(selector) === null) {
        await new Promise(resolve => requestAnimationFrame(resolve));
    }
    console.log(document.querySelector(selector))
    return document.querySelector(selector);
}

async function waitForShadowElement(parent, selector) {
    while (parent.shadowRoot === null || parent.shadowRoot.querySelector(selector) === null) {
        await new Promise(resolve => requestAnimationFrame(resolve));
    }
    return parent.shadowRoot.querySelector(selector);
}

async function waitForChildElement(parent, selector) {
    while (parent.querySelector(selector) === null) {
        await new Promise(resolve => requestAnimationFrame(resolve));
    }
    return parent.querySelector(selector);
}

async function waitForAnyShadowElement(parent, selectors, timeout = 30000) {
    let startTime = Date.now();
    while (Date.now() - startTime < timeout) {
        for (let selector of selectors) {
            if (parent.shadowRoot && parent.shadowRoot.querySelector(selector)) {
                return parent.shadowRoot.querySelector(selector);
            }
        }
        await new Promise(resolve => setTimeout(resolve, 100)); // Check every 100ms
    }
    return null; // Timeout reached without finding elements
}



//Calender Button: NOTE (FIRST CLASS IS THE ONE THAT IS USED, ENSURE IT IS NOT CLOSED.)
(async () => {
        let element = await waitForElement('.d2l-body.d2l-typography.vui-typography.d2l-tiles-container.daylight .d2l-page-main.d2l-max-width.d2l-min-width .d2l-page-main-padding .d2l-homepage .homepage-container .homepage-row .homepage-col-8 .d2l-widget.d2l-tile[role="region"]');
        element = element.querySelector('d2l-expand-collapse-content');
        element = element.querySelector('div.d2l-widget-content-padding d2l-my-courses');
        console.log(element)
        element = await waitForShadowElement(element, 'd2l-my-courses-container');
        element = await waitForShadowElement(element, 'd2l-tabs d2l-tab-panel');
        element = element.querySelector('d2l-my-courses-content');
        console.log(element)
        element = await waitForShadowElement(element, 'd2l-my-courses-card-grid');
        const selectors = [
            'div.course-card-grid.columns-2 d2l-enrollment-card:not([disabled]):not([closed])',
            'div.course-card-grid.columns-1 d2l-enrollment-card:not([disabled]):not([closed])',
            'div.course-card-grid.columns-3 d2l-enrollment-card:not([disabled]):not([closed])'
        ];
        
        element = await waitForAnyShadowElement(element, selectors);
        element = await waitForShadowElement(element, 'd2l-card');
        element = await waitForShadowElement(element, '.d2l-card-container');
        console.log(element)
        element = await waitForChildElement(element, 'a[href]');
        element = element.getAttribute('href');
        console.log(element)
        let regex = /\/d2l\/home\/(\d+)/; // Regular expression to capture numbers after '/d2l/home/'

        let match = element.match(regex);
        let numbers = match ? match[1] : null; // Extract the first captured group
        let finalLink = "https://d2l.msu.edu/d2l/le/calendar/"
    
        if (numbers) {
            finalLink += numbers
        }
    

        let navigationParent = await waitForElement('.d2l-body.d2l-typography.vui-typography.d2l-tiles-container.daylight nav.d2l-navigation-s d2l-navigation');
        let navigationMainFooter = navigationParent.querySelector('d2l-navigation-main-footer');
        let slotMainDiv = navigationMainFooter.querySelector('div[slot="main"]');
        let navigationWrapper = slotMainDiv.querySelector('div.d2l-navigation-s-main-wrapper');
    
        let items = navigationWrapper.querySelectorAll('.d2l-navigation-s-item');
    
        if (items.length >= 2) {
            let secondToLastItem = items[items.length - 2];
            let clone = secondToLastItem.cloneNode(true);
    
            let anchor = clone.querySelector('a');
            if (anchor) {
                anchor.href = finalLink; // Set the new href value here
                anchor.textContent = "Calendar";
            }
    
            navigationWrapper.appendChild(clone);
        }
            
})();



function injectAndRemoveElement() {
    // Create a new div element
    const newDiv = document.createElement('div');

    // Generate a unique identifier
    const uniqueId = 'div-' + Date.now() + '-' + Math.random().toString(36).substr(2, 9);

    // Set properties for the new div
    newDiv.id = uniqueId;
    newDiv.className = 'unique-temporary-div';
    newDiv.innerHTML = 'This is a unique temporary div';
    newDiv.style.cssText = `
        position: fixed;
        right: 0;
        top: 50%;
        background-color: lightblue;
        padding: 10px;
        z-index: 1000;
        border: 2px dashed red;
    `;

    // Append the new div to the body
    document.body.appendChild(newDiv);

    // Set a timeout to remove the div
    setTimeout(() => {
        const divToRemove = document.getElementById(uniqueId);
        if (divToRemove) {
            divToRemove.remove();
        }
    }, 5000); // Remove the div after 5 seconds
}


// Call the function to inject the element

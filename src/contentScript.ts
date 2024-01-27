const PREVIEW_BUTTON = `<slot><d2l-button primary="" type="button" style="margin-left:auto; margin-right:auto">Preview</d2l-button></slot>`


setTimeout(() => {
    let test = document.querySelector('d2l-consistent-evaluation[class="d2l-token-receiver"]').shadowRoot.querySelector('d2l-consistent-evaluation-page[activity-type="assignmentActivity"]').shadowRoot.querySelector('d2l-template-primary-secondary').querySelector('div[slot="primary"]').querySelector('d2l-consistent-evaluation-left-panel[activity-type="assignmentActivity"]').shadowRoot.querySelector('d2l-consistent-evaluation-evidence-assignment').shadowRoot.querySelector('d2l-consistent-evaluation-assignments-submissions-page').shadowRoot.querySelector('.d2l-consistent-evaluation-submission-list-view').querySelector('d2l-list[separators="between"]').querySelector('d2l-consistent-evaluation-assignments-submission-item').shadowRoot.querySelector('d2l-list[aria-role="list"][separators="all"]')

    for (let i = 0; i < test.childNodes.length; i++) {
        try {
            if (test.childNodes.item(i).getAttribute("role")) {
                let item = test.childNodes.item(i)

                let file_element = (item.querySelector('d2l-dropdown-menu').querySelector("d2l-menu").querySelector("d2l-menu-item"))
                let file_name = (item.querySelector('div[class = "d2l-submission-attachment-list-item-flexbox"]').querySelector("d2l-list-item-content").querySelector('a[class="truncate"]').innerText)
                let url = file_element.getAttribute("data-href")
                let file_extension = file_element.getAttribute("data-extension")

                item.innerHTML += PREVIEW_BUTTON

                let getFile  = async () => {
                    let response = await fetch(url)
                    let file_contents = await response.text()

                    console.log(`${file_name}.${file_extension}:\n${file_contents}`)
                }

                getFile()
            }
        }
        catch {}
    }
}, 3000)

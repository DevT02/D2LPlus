function escapeHTML(str) {
    return str.replace(/[&<>"']/g, function (match) {
        return {
            '&': '&amp;',
            '<': '&lt;',
            '>': '&gt;',
            '"': '&quot;',
            "'": '&#39;'
        }[match];
    });
}

var url_string = location.toString();
var url = new URL(url_string);
var lang = url.searchParams.get("lang");
var filename = url.searchParams.get("filename");
var code = LZString.decompressFromEncodedURIComponent(url.searchParams.get("code"));


document.getElementById("code-viewer").setAttribute("class", `hljs language-${lang}`)
document.getElementById("code-viewer").textContent = code || ""
document.getElementById("filename").innerText = `${filename}.${lang}`

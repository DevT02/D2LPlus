var url_string = location.toString();
var url = new URL(url_string);
var lang = url.searchParams.get("lang");
var filename = url.searchParams.get("filename");
var code = LZString.decompressFromBase64(url.searchParams.get("code"));

document.getElementById("code-viewer").innerHTML = code
document.getElementById("filename").innerText = `${filename}.${lang}`
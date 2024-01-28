let previewCode = `#include <stdio.h>
#define PI 3.14

int main(void) {
  float r;
  float v;

  printf("Input radius of circle:\\n");
  scanf("%f", &r);

  v = (4.0/3.0) * PI * r * r * r;

  printf("Volume of sphere is: %f\\n", v);

  return 0;
}`

var compressed = LZString.compressToBase64(previewCode);
var url_string = location.toString();
var url = new URL(url_string);
var lang = url.searchParams.get("lang");
var code = LZString.decompressFromBase64(url.searchParams.get("code"));
console.log(lang)
document.getElementById("code-viewer").innerHTML = LZString.decompressFromBase64(compressed)
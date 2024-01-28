var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var PREVIEW_BUTTON = "<slot class=\"PreviewButton\"><d2l-button class=\"preview-btn\" primary=\"\" type=\"button\" style=\"margin-left:auto; margin-right:auto\">Preview</d2l-button></slot>";
var lastPress = new Date().getTime();
var lastPressLimit = 2 * 1000;
setTimeout(function () {
    var LZString;
    (function () { return __awaiter(_this, void 0, void 0, function () {
        var src;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    src = chrome.runtime.getURL("src/lz-string-default.min.js");
                    return [4 /*yield*/, import(src)];
                case 1:
                    LZString = (_a.sent())["default"];
                    return [2 /*return*/];
            }
        });
    }); })();
    try {
        var gradeList = document.querySelector('d2l-consistent-evaluation[class="d2l-token-receiver"]').shadowRoot.querySelector('d2l-consistent-evaluation-page[activity-type="assignmentActivity"]').shadowRoot.querySelector('d2l-template-primary-secondary').querySelector('div[slot="primary"]').querySelector('d2l-consistent-evaluation-left-panel[activity-type="assignmentActivity"]').shadowRoot.querySelector('d2l-consistent-evaluation-evidence-assignment').shadowRoot.querySelector('d2l-consistent-evaluation-assignments-submissions-page').shadowRoot.querySelector('.d2l-consistent-evaluation-submission-list-view').querySelector('d2l-list[separators="between"]').querySelector('d2l-consistent-evaluation-assignments-submission-item').shadowRoot.querySelector('d2l-list[aria-role="list"][separators="all"]');
        var _loop_1 = function (i) {
            try {
                if (gradeList.childNodes.item(i).getAttribute("role")) {
                    var item_1 = gradeList.childNodes.item(i);
                    var file_element = (item_1.querySelector('d2l-dropdown-menu').querySelector("d2l-menu").querySelector("d2l-menu-item"));
                    var file_name_1 = (item_1.querySelector('div[class = "d2l-submission-attachment-list-item-flexbox"]').querySelector("d2l-list-item-content").querySelector('a[class="truncate"]').innerText);
                    var url_1 = file_element.getAttribute("data-href");
                    var file_extension_1 = file_element.getAttribute("data-extension");
                    item_1.innerHTML += PREVIEW_BUTTON;
                    var getFile = function () { return __awaiter(_this, void 0, void 0, function () {
                        var response, file_contents;
                        return __generator(this, function (_a) {
                            switch (_a.label) {
                                case 0: return [4 /*yield*/, fetch(url_1)];
                                case 1:
                                    response = _a.sent();
                                    return [4 /*yield*/, response.text()];
                                case 2:
                                    file_contents = _a.sent();
                                    item_1.querySelector("slot[class=PreviewButton]").querySelector("d2l-button[class=\"preview-btn\"]").onclick = function () {
                                        if ((new Date().getTime() - lastPress) < lastPressLimit)
                                            return;
                                        lastPress = new Date().getTime();
                                        chrome.runtime.sendMessage({
                                            action: "openPopup",
                                            lang: file_extension_1,
                                            code: LZString.compressToEncodedURIComponent(file_contents),
                                            file_name: file_name_1
                                        });
                                    };
                                    return [2 /*return*/];
                            }
                        });
                    }); };
                    getFile();
                }
            }
            catch (_b) { }
        };
        for (var i = 0; i < gradeList.childNodes.length; i++) {
            _loop_1(i);
        }
    }
    catch (_a) { }
}, 3000);
// Calender Button
setTimeout(function () {
    var elementVal = document.querySelector('.d2l-body.d2l-typography.vui-typography.d2l-tiles-container.daylight .d2l-page-main.d2l-max-width.d2l-min-width .d2l-page-main-padding .d2l-homepage .homepage-container .homepage-row .homepage-col-8 .d2l-widget.d2l-tile[role="region"]').querySelector('d2l-expand-collapse-content').querySelector('div.d2l-widget-content-padding d2l-my-courses').shadowRoot.querySelector('d2l-my-courses-container').shadowRoot.querySelector('d2l-tabs d2l-tab-panel').querySelector('d2l-my-courses-content').shadowRoot.querySelector('d2l-my-courses-card-grid').shadowRoot.querySelector('div.course-card-grid.columns-2 d2l-enrollment-card:not([disabled]):not([closed])').shadowRoot.querySelector('d2l-card').shadowRoot.querySelector('.d2l-card-container').querySelector('a[href]').getAttribute('href');
    var regex = /\/d2l\/home\/(\d+)/; // Regular expression to capture numbers after '/d2l/home/'
    var match = elementVal.match(regex);
    var numbers = match ? match[1] : null; // Extract the first captured group
    var finalLink = "https://d2l.msu.edu/d2l/le/calendar/";
    if (numbers) {
        finalLink += numbers;
    }
    var items = document.querySelector('.d2l-body.d2l-typography.vui-typography.d2l-tiles-container.daylight nav.d2l-navigation-s d2l-navigation').querySelector('d2l-navigation-main-footer').querySelector('div[slot="main"]').querySelector('div.d2l-navigation-s-main-wrapper').querySelectorAll('.d2l-navigation-s-item');
    var secondToLastItem = items[items.length - 2];
    var clone = secondToLastItem.cloneNode(true);
    var anchor = clone.querySelector('a');
    if (anchor) {
        anchor.href = finalLink; // Set the new href value here
        anchor.textContent = "Calendar";
    }
    var mainWrapper = document.querySelector('div.d2l-navigation-s-main-wrapper');
    mainWrapper.appendChild(clone);
}, 6000);

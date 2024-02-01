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
function waitForElement(selector) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(document.querySelector(selector) === null)) return [3 /*break*/, 2];
                    return [4 /*yield*/, new Promise(function (resolve) { return requestAnimationFrame(resolve); })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 0];
                case 2:
                    console.log(document.querySelector(selector));
                    return [2 /*return*/, document.querySelector(selector)];
            }
        });
    });
}
function waitForShadowElement(parent, selector) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(parent.shadowRoot === null || parent.shadowRoot.querySelector(selector) === null)) return [3 /*break*/, 2];
                    return [4 /*yield*/, new Promise(function (resolve) { return requestAnimationFrame(resolve); })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 0];
                case 2: return [2 /*return*/, parent.shadowRoot.querySelector(selector)];
            }
        });
    });
}
function waitForChildElement(parent, selector) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!(parent.querySelector(selector) === null)) return [3 /*break*/, 2];
                    return [4 /*yield*/, new Promise(function (resolve) { return requestAnimationFrame(resolve); })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 0];
                case 2: return [2 /*return*/, parent.querySelector(selector)];
            }
        });
    });
}
function waitForAnyShadowElement(parent, selectors, timeout) {
    if (timeout === void 0) { timeout = 30000; }
    return __awaiter(this, void 0, void 0, function () {
        var startTime, _i, selectors_1, selector;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    startTime = Date.now();
                    _a.label = 1;
                case 1:
                    if (!(Date.now() - startTime < timeout)) return [3 /*break*/, 3];
                    for (_i = 0, selectors_1 = selectors; _i < selectors_1.length; _i++) {
                        selector = selectors_1[_i];
                        if (parent.shadowRoot && parent.shadowRoot.querySelector(selector)) {
                            return [2 /*return*/, parent.shadowRoot.querySelector(selector)];
                        }
                    }
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 100); })];
                case 2:
                    _a.sent(); // Check every 100ms
                    return [3 /*break*/, 1];
                case 3: return [2 /*return*/, null]; // Timeout reached without finding elements
            }
        });
    });
}
//Calender Button: NOTE (FIRST CLASS IS THE ONE THAT IS USED, ENSURE IT IS NOT CLOSED.)
(function () { return __awaiter(_this, void 0, void 0, function () {
    var element, selectors, regex, match, numbers, finalLink, navigationParent, navigationMainFooter, slotMainDiv, navigationWrapper, items, secondToLastItem, clone, anchor;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, waitForElement('.d2l-body.d2l-typography.vui-typography.d2l-tiles-container.daylight .d2l-page-main.d2l-max-width.d2l-min-width .d2l-page-main-padding .d2l-homepage .homepage-container .homepage-row .homepage-col-8 .d2l-widget.d2l-tile[role="region"]')];
            case 1:
                element = _a.sent();
                element = element.querySelector('d2l-expand-collapse-content');
                element = element.querySelector('div.d2l-widget-content-padding d2l-my-courses');
                console.log(element);
                return [4 /*yield*/, waitForShadowElement(element, 'd2l-my-courses-container')];
            case 2:
                element = _a.sent();
                return [4 /*yield*/, waitForShadowElement(element, 'd2l-tabs d2l-tab-panel')];
            case 3:
                element = _a.sent();
                element = element.querySelector('d2l-my-courses-content');
                console.log(element);
                return [4 /*yield*/, waitForShadowElement(element, 'd2l-my-courses-card-grid')];
            case 4:
                element = _a.sent();
                selectors = [
                    'div.course-card-grid.columns-2 d2l-enrollment-card:not([disabled]):not([closed])',
                    'div.course-card-grid.columns-1 d2l-enrollment-card:not([disabled]):not([closed])',
                    'div.course-card-grid.columns-3 d2l-enrollment-card:not([disabled]):not([closed])'
                ];
                return [4 /*yield*/, waitForAnyShadowElement(element, selectors)];
            case 5:
                element = _a.sent();
                return [4 /*yield*/, waitForShadowElement(element, 'd2l-card')];
            case 6:
                element = _a.sent();
                return [4 /*yield*/, waitForShadowElement(element, '.d2l-card-container')];
            case 7:
                element = _a.sent();
                console.log(element);
                return [4 /*yield*/, waitForChildElement(element, 'a[href]')];
            case 8:
                element = _a.sent();
                element = element.getAttribute('href');
                console.log(element);
                regex = /\/d2l\/home\/(\d+)/;
                match = element.match(regex);
                numbers = match ? match[1] : null;
                finalLink = "https://d2l.msu.edu/d2l/le/calendar/";
                if (numbers) {
                    finalLink += numbers;
                }
                return [4 /*yield*/, waitForElement('.d2l-body.d2l-typography.vui-typography.d2l-tiles-container.daylight nav.d2l-navigation-s d2l-navigation')];
            case 9:
                navigationParent = _a.sent();
                navigationMainFooter = navigationParent.querySelector('d2l-navigation-main-footer');
                slotMainDiv = navigationMainFooter.querySelector('div[slot="main"]');
                navigationWrapper = slotMainDiv.querySelector('div.d2l-navigation-s-main-wrapper');
                items = navigationWrapper.querySelectorAll('.d2l-navigation-s-item');
                if (items.length >= 2) {
                    secondToLastItem = items[items.length - 2];
                    clone = secondToLastItem.cloneNode(true);
                    anchor = clone.querySelector('a');
                    if (anchor) {
                        anchor.href = finalLink; // Set the new href value here
                        anchor.textContent = "Calendar";
                    }
                    navigationWrapper.appendChild(clone);
                }
                return [2 /*return*/];
        }
    });
}); })();
// Call the function to inject the element

"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var styled_1 = require("@emotion/styled");
exports.Root = styled_1.default.span(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  display: inline-block;\n  min-width: 20px;\n  height: 20px;\n  border-radius: ", "px;\n  background: var(--red, #d94227);\n  transform: rotate(", "deg);\n  color: #fff;\n  font-size: 12px;\n  line-height: 20px;\n  text-align: center;\n  strong {\n    text-decoration: underline;\n  }\n"], ["\n  display: inline-block;\n  min-width: 20px;\n  height: 20px;\n  border-radius: ", "px;\n  background: var(--red, #d94227);\n  transform: rotate(", "deg);\n  color: #fff;\n  font-size: 12px;\n  line-height: 20px;\n  text-align: center;\n  strong {\n    text-decoration: underline;\n  }\n"])), function (_a) {
    var value = _a.value;
    return value;
}, function (_a) {
    var value = _a.value;
    return value;
});
exports.BigRoot = styled_1.default(exports.Root)(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  height: 30px;\n  min-width: 30px;\n  line-height: 30px;\n"], ["\n  height: 30px;\n  min-width: 30px;\n  line-height: 30px;\n"])));
var templateObject_1, templateObject_2;

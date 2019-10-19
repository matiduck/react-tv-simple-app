"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var Badge_elements_1 = require("./Badge.elements");
var rootSizes = {
    normal: function (value) { return <Badge_elements_1.Root value={value}>{value}</Badge_elements_1.Root>; },
    big: function (value) { return <Badge_elements_1.BigRoot value={value}>{value}</Badge_elements_1.BigRoot>; },
};
exports.Badge = function (_a) {
    var value = _a.value, _b = _a.size, size = _b === void 0 ? 'normal' : _b;
    return rootSizes[size](value);
};

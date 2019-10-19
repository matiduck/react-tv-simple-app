"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var react_helmet_1 = require("react-helmet");
exports.withTitle = function (PageComponent, title) { return function () { return (<>
    <react_helmet_1.default>
      <title>{title}</title>
    </react_helmet_1.default>

    <PageComponent />
  </>); }; };

webpackHotUpdate("static/development/pages/xoh.js",{

/***/ "./pages/xoh.js":
/*!**********************!*\
  !*** ./pages/xoh.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectDestructuringEmpty.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime-corejs2/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next-server/dynamic */ "./node_modules/next-server/dynamic.js");
/* harmony import */ var next_server_dynamic__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_server_dynamic__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next-server/head */ "./node_modules/next-server/head.js");
/* harmony import */ var next_server_head__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_server_head__WEBPACK_IMPORTED_MODULE_5__);


var _jsxFileName = "/Users/Chris/somm-demo/pages/xoh.js";

function _templateObject() {
  var data = Object(_babel_runtime_corejs2_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_1__["default"])(["\n  body {\n    margin: 0;\n    padding: 0;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}






var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["createGlobalStyle"])(_templateObject());
var SommWidget = next_server_dynamic__WEBPACK_IMPORTED_MODULE_4___default()(function () {
  return __webpack_require__.e(/*! import() */ 1).then(__webpack_require__.bind(null, /*! ../components/SommWidget */ "./components/SommWidget.jsx"));
}, {
  ssr: false,
  loadableGenerated: {
    webpack: function webpack() {
      return [/*require.resolve*/(/*! ../components/SommWidget */ "./components/SommWidget.jsx")];
    },
    modules: ['../components/SommWidget']
  }
});
var DemoWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "xoh__DemoWrapper",
  componentId: "sc-107wagd-0"
})(["width:100vw;heght:100%;overflow:hidden;position:relative;"]);
var DemoBanner = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "xoh__DemoBanner",
  componentId: "sc-107wagd-1"
})(["position:absolute;top:0;right:0;left:0;height:64px;background:#1f1f1f;padding:0 48px;box-sizing:border-box;display:flex;align-items:center;justify-content:space-between;color:#fff;font-weight:bold;& a{display:inline-flex;height:48px;background:#f94343;color:#fff;text-decoration:none;font-weight:bold;border-radius:4px;align-items:center;justify-content:center;padding:0 16px;margin-left:8px;}"]);
var IFrameWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div.withConfig({
  displayName: "xoh__IFrameWrapper",
  componentId: "sc-107wagd-2"
})(["width:100vw;height:100%;min-height:100vh;display:flex;& iframe{width:100%;height:100%;min-height:100vh;}"]);

var XOHDemo = function XOHDemo(_ref) {
  Object(_babel_runtime_corejs2_helpers_esm_objectDestructuringEmpty__WEBPACK_IMPORTED_MODULE_0__["default"])(_ref);

  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DemoWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(GlobalStyle, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(next_server_head__WEBPACK_IMPORTED_MODULE_5___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "The Exchange on Hollis | Somm Demo"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("meta", {
    name: "viewport",
    content: "minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(DemoBanner, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, "This is a custom demo of Somm.", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Like what you see?", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: "mailto: chris@somm.ca",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, "Send Chris an email"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(IFrameWrapper, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("iframe", {
    src: "https://xoh.ca",
    frameBorder: "0",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(SommWidget, {
    username: "xoh",
    icon: "rounded",
    iconColor: "#be713c",
    backgroundColor: "#fff",
    position: "right",
    message: "Check out our menu \uD83D\uDC47",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (XOHDemo);

/***/ })

})
//# sourceMappingURL=xoh.js.aa5489ad6986f4e56ec1.hot-update.js.map
exports.ids = [0];
exports.modules = {

/***/ "./components/SommWidget.jsx":
/*!***********************************!*\
  !*** ./components/SommWidget.jsx ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/extends */ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-pose */ "react-pose");
/* harmony import */ var react_pose__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_pose__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var vh_check__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! vh-check */ "vh-check");
/* harmony import */ var vh_check__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(vh_check__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var is_mobile__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! is-mobile */ "is-mobile");
/* harmony import */ var is_mobile__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(is_mobile__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_emoji_render__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-emoji-render */ "react-emoji-render");
/* harmony import */ var react_emoji_render__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_emoji_render__WEBPACK_IMPORTED_MODULE_12__);






var _jsxFileName = "/Users/Chris/somm-demo/components/SommWidget.jsx";







var WidgetContainer = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div.withConfig({
  displayName: "SommWidget__WidgetContainer",
  componentId: "i7qmkt-0"
})(["position:fixed;", ":", ";bottom:16px;z-index:8;"], function (props) {
  return props.position;
}, function (props) {
  return props.position == "left" ? '64px' : '16px';
});
var PosedWidgetToggle = react_pose__WEBPACK_IMPORTED_MODULE_8___default.a.div({
  enter: {
    scale: 1,
    opacity: 1
  },
  exit: {
    scale: 0,
    opacity: 0
  },
  init: {
    scale: 0,
    opacity: 0
  }
});
var WidgetToggle = styled_components__WEBPACK_IMPORTED_MODULE_9___default()(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PosedWidgetToggle, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: this
  }));
}).withConfig({
  displayName: "SommWidget__WidgetToggle",
  componentId: "i7qmkt-1"
})(["width:48px;height:48px;background:", ";box-shadow:0 2px 16px -2px rgba(0,0,0,0.32);border-radius:8px;position:absolute;bottom:0;right:0;display:flex;align-items:center;justify-content:center;cursor:pointer;"], function (props) {
  return props.background;
});
var WidgetFrame = react_pose__WEBPACK_IMPORTED_MODULE_8___default.a.div({
  enter: {
    scale: 1,
    opacity: 1
  },
  exit: {
    scale: 0,
    opacity: 0
  },
  init: {
    scale: 0,
    opacity: 0
  }
});
var StyledWidgetFrame = styled_components__WEBPACK_IMPORTED_MODULE_9___default()(WidgetFrame).withConfig({
  displayName: "SommWidget__StyledWidgetFrame",
  componentId: "i7qmkt-2"
})(["width:calc(100vw - 32px);max-width:360px;height:", ";max-height:600px;display:block;border:0;appearance:none;background:#FFFFFF;box-shadow:0 2px 16px -2px rgba(0,0,0,0.32);border-radius:8px;overflow:hidden;position:absolute;bottom:64px;", ":", ";scale:1;opacity:1;transform-origin:bottom ", ";"], function (props) {
  return "calc(".concat(props.viewportHeight, "px - 32px - 64px)");
}, function (props) {
  return props.position;
}, function (props) {
  return props.position == "left" ? '-48px' : '0';
}, function (props) {
  return props.position;
});
var WidgetToggleIcon = react_pose__WEBPACK_IMPORTED_MODULE_8___default.a.div({
  enter: {
    scale: 1,
    opacity: 1
  },
  exit: {
    scale: 0,
    opacity: 0
  },
  init: {
    scale: 0,
    opacity: 0
  }
});
var StyledWidgetToggleIcon = styled_components__WEBPACK_IMPORTED_MODULE_9___default()(WidgetToggleIcon).withConfig({
  displayName: "SommWidget__StyledWidgetToggleIcon",
  componentId: "i7qmkt-3"
})(["width:24px;height:24px;display:flex;align-items:center;justify-content:center;opacity:1;& svg{fill:", ";transform:", ";}"], function (props) {
  return props.iconColor;
}, function (props) {
  return props.role === "close" ? 'scale(1.1)' : 'scale(1.2)';
});
var spinnerAnimation = Object(styled_components__WEBPACK_IMPORTED_MODULE_9__["keyframes"])(["0%{top:28px;left:28px;width:0;height:0;opacity:1;}100%{top:-1px;left:-1px;width:58px;height:58px;opacity:0;}"]);
var SpinnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div.withConfig({
  displayName: "SommWidget__SpinnerWrapper",
  componentId: "i7qmkt-4"
})(["width:100%;height:100%;position:absolute;display:flex;align-items:center;justify-content:center;z-index:1;top:0;right:0;bottom:0;left:0;-webkit-overflow-scrolling:touch;overflow-y:", ";border-radius:8px;& iframe{border-radius:8px;}"], is_mobile__WEBPACK_IMPORTED_MODULE_11___default()() ? 'scroll' : 'hidden');
var Spinner = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.div.withConfig({
  displayName: "SommWidget__Spinner",
  componentId: "i7qmkt-5"
})(["display:inline-flex;position:relative;width:64px;height:64px;& div{position:absolute;border:4px solid ", ";opacity:1;border-radius:50%;animation:", " 1.5s cubic-bezier(0,0.2,0.8,1) infinite}& div:nth-child(2){animation-delay:-0.5s;}"], function (props) {
  return props.color;
}, spinnerAnimation);
var PosedWidgetMessage = react_pose__WEBPACK_IMPORTED_MODULE_8___default.a.div({
  enter: {
    scale: 1,
    opacity: 1,
    delay: 1000
  },
  exit: {
    scale: 0,
    opacity: 0
  },
  init: {
    scale: 0,
    opacity: 0
  }
});
var WidgetMessage = styled_components__WEBPACK_IMPORTED_MODULE_9___default()(function (props) {
  return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(PosedWidgetMessage, Object(_babel_runtime_corejs2_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_5__["default"])({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 183
    },
    __self: this
  }));
}).withConfig({
  displayName: "SommWidget__WidgetMessage",
  componentId: "i7qmkt-6"
})(["width:auto;max-width:224px;display:block;border:0;appearance:none;background:#FFFFFF;box-shadow:0 2px 16px -2px rgba(0,0,0,0.32);border-radius:8px;overflow:hidden;position:absolute;bottom:64px;right:0;scale:1;opacity:1;transform-origin:bottom right;padding:16px;box-sizing:border-box;display:flex;align-items:center;font-family:'Montserrat',sans-serif;font-weight:700;color:#1f1f1f;font-size:1rem;white-space:pre;"]);
var WidgetToggleIconEmoji = styled_components__WEBPACK_IMPORTED_MODULE_9___default.a.span.withConfig({
  displayName: "SommWidget__WidgetToggleIconEmoji",
  componentId: "i7qmkt-7"
})(["font-size:1.75rem;line-height:1.5rem;padding-top:4px;"]);

var Widget =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(Widget, _Component);

  function Widget(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Widget);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Widget).call(this, props));
    _this.state = {
      open: false,
      hasOpened: false,
      messageVisible: _this.props.message ? true : false
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Widget, [{
    key: "handleToggle",
    value: function handleToggle() {}
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var test = vh_check__WEBPACK_IMPORTED_MODULE_10___default()();
      console.log(test);
      console.log(is_mobile__WEBPACK_IMPORTED_MODULE_11___default()());
      return react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(WidgetContainer, {
        position: this.props.position,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 238
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_8__["PoseGroup"], {
        animateOnMount: true,
        preEnterPose: "init",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 239
        },
        __self: this
      }, this.state.messageVisible && !this.state.hasOpened && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(WidgetMessage, {
        key: "1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 241
        },
        __self: this
      }, this.props.message)), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_8__["PoseGroup"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 246
        },
        __self: this
      }, this.state.open && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(StyledWidgetFrame, {
        key: "0",
        viewportHeight: test.windowHeight,
        position: this.props.position,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 248
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(SpinnerWrapper, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 249
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("iframe", {
        style: {
          zIndex: 8,
          position: 'absolute',
          top: 0,
          left: 0,
          background: 'transparent',
          display: 'block'
        },
        src: "https://app.somm.ca/".concat(this.props.username),
        sandbox: "allow-same-origin allow-scripts allow-popups allow-top-navigation",
        width: "100%",
        height: "100%",
        frameBorder: "0",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 250
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(Spinner, {
        color: this.props.iconColor,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 258
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 259
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 260
        },
        __self: this
      }))))), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_pose__WEBPACK_IMPORTED_MODULE_8__["PoseGroup"], {
        animateOnMount: true,
        preEnterPose: "init",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 267
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(WidgetToggle, {
        key: "-1",
        background: this.props.backgroundColor,
        onClick: function onClick() {
          return _this2.setState({
            open: !_this2.state.open,
            hasOpened: true
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 268
        },
        __self: this
      }, this.state.open ? react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(StyledWidgetToggleIcon, {
        iconColor: this.props.iconColor,
        role: "close",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 271
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        fill: this.props.iconColor,
        width: "18px",
        height: "18px",
        viewBox: "0 0 16 16",
        version: "1.1",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 272
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "Page-4",
        stroke: "none",
        strokeWidth: "1",
        fill: "none",
        fillRule: "evenodd",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 273
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "Search",
        transform: "translate(-46.000000, -45.000000)",
        fill: this.props.iconColor,
        fillRule: "nonzero",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 274
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "Group",
        transform: "translate(32.000000, 32.000000)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 275
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("g", {
        id: "Group-2",
        transform: "translate(14.000000, 11.000000)",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 276
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("polygon", {
        id: "Shape",
        points: "15.5555556 3.56666667 13.9888889 2 7.77777778 8.21111111 1.56666667 2 0 3.56666667 6.21111111 9.77777778 0 15.9888889 1.56666667 17.5555556 7.77777778 11.3444444 13.9888889 17.5555556 15.5555556 15.9888889 9.34444444 9.77777778",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 277
        },
        __self: this
      }))))))) : react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(StyledWidgetToggleIcon, {
        iconColor: this.props.iconColor,
        role: "open",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 285
        },
        __self: this
      }, this.props.icon === "rounded" && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        width: "24",
        height: "24",
        viewBox: "0 0 24 24",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 287
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "none",
        d: "M0 0h24v24H0V0z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 288
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M8.1 13.34l2.83-2.83-6.19-6.18c-.48-.48-1.31-.35-1.61.27-.71 1.49-.45 3.32.78 4.56l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L4.4 19.17c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0L12 14.41l6.18 6.18c.39.39 1.02.39 1.41 0 .39-.39.39-1.02 0-1.41L13.41 13l1.47-1.47z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 289
        },
        __self: this
      })), this.props.icon === "sharp" && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("svg", {
        width: "24px",
        height: "24px",
        viewBox: "0 0 24 24",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 293
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        fill: "none",
        d: "M0 0h24v24H0V0z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 294
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement("path", {
        d: "M8.1 13.34l2.83-2.83L3.91 3.5c-1.56 1.56-1.56 4.09 0 5.66l4.19 4.18zm6.78-1.81c1.53.71 3.68.21 5.27-1.38 1.91-1.91 2.28-4.65.81-6.12-1.46-1.46-4.2-1.1-6.12.81-1.59 1.59-2.09 3.74-1.38 5.27L3.7 19.87l1.41 1.41L12 14.41l6.88 6.88 1.41-1.41L13.41 13l1.47-1.47z",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 295
        },
        __self: this
      })), this.props.icon === "emoji" && react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(WidgetToggleIconEmoji, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(react_emoji_render__WEBPACK_IMPORTED_MODULE_12___default.a, {
        text: "\uD83C\uDF7D",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 299
        },
        __self: this
      }))))));
    }
  }]);

  return Widget;
}(react__WEBPACK_IMPORTED_MODULE_6__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Widget);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-prototype-of */ "core-js/library/fn/object/get-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js":
/*!********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/set-prototype-of */ "core-js/library/fn/object/set-prototype-of");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _assertThisInitialized; });
function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _classCallCheck; });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _createClass; });
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");
/* harmony import */ var _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0__);


function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;

    _core_js_object_define_property__WEBPACK_IMPORTED_MODULE_0___default()(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/extends.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");
/* harmony import */ var _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_assign__WEBPACK_IMPORTED_MODULE_0__);

function _extends() {
  _extends = _core_js_object_assign__WEBPACK_IMPORTED_MODULE_0___default.a || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _getPrototypeOf; });
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/get-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-prototype-of.js");
/* harmony import */ var _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1__);


function _getPrototypeOf(o) {
  _getPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_1___default.a ? _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a : function _getPrototypeOf(o) {
    return o.__proto__ || _core_js_object_get_prototype_of__WEBPACK_IMPORTED_MODULE_0___default()(o);
  };
  return _getPrototypeOf(o);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inherits; });
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");
/* harmony import */ var _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_create__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js");


function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = _core_js_object_create__WEBPACK_IMPORTED_MODULE_0___default()(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object(_setPrototypeOf__WEBPACK_IMPORTED_MODULE_1__["default"])(subClass, superClass);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _possibleConstructorReturn; });
/* harmony import */ var _helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../helpers/esm/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js");
/* harmony import */ var _assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");


function _possibleConstructorReturn(self, call) {
  if (call && (Object(_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(call) === "object" || typeof call === "function")) {
    return call;
  }

  return Object(_assertThisInitialized__WEBPACK_IMPORTED_MODULE_1__["default"])(self);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js":
/*!***************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/setPrototypeOf.js ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _setPrototypeOf; });
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/object/set-prototype-of */ "./node_modules/@babel/runtime-corejs2/core-js/object/set-prototype-of.js");
/* harmony import */ var _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0__);

function _setPrototypeOf(o, p) {
  _setPrototypeOf = _core_js_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_0___default.a || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/esm/typeof.js ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _typeof; });
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");
/* harmony import */ var _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");
/* harmony import */ var _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_core_js_symbol__WEBPACK_IMPORTED_MODULE_1__);



function _typeof2(obj) { if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && typeof _core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && _typeof2(_core_js_symbol_iterator__WEBPACK_IMPORTED_MODULE_0___default.a) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a === "function" && obj.constructor === _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a && obj !== _core_js_symbol__WEBPACK_IMPORTED_MODULE_1___default.a.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

/***/ })

};;
//# sourceMappingURL=0.js.map
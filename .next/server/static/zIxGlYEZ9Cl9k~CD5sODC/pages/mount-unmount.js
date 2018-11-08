module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 13);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: ./components/PageHeader/PageHeader.scss
var PageHeader = __webpack_require__(4);

// CONCATENATED MODULE: ./components/PageHeader/PageHeader.js


function PageHeader_PageHeader(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return external_react_default.a.createElement("header", {
    className: "page-header"
  }, title && external_react_default.a.createElement("h1", null, title), children);
}
// EXTERNAL MODULE: external "next/link"
var link_ = __webpack_require__(2);
var link_default = /*#__PURE__*/__webpack_require__.n(link_);

// EXTERNAL MODULE: ./components/BackBar/BackBar.scss
var BackBar = __webpack_require__(5);

// CONCATENATED MODULE: ./components/BackBar/BackBar.js



function BackBar_BackBar() {
  return external_react_default.a.createElement("nav", {
    className: "backbar"
  }, external_react_default.a.createElement(link_default.a, {
    href: "/index"
  }, external_react_default.a.createElement("a", null, "\xAB Back")));
}
// EXTERNAL MODULE: ./components/TheBox/TheBox.scss
var TheBox = __webpack_require__(6);

// CONCATENATED MODULE: ./components/TheBox/TheBox.js


function TheBox_TheBox() {
  return external_react_default.a.createElement("div", {
    className: "the-box"
  }, "THE BOX");
}
// EXTERNAL MODULE: ./components/TransitionContainer/TransitionContainer.scss
var TransitionContainer = __webpack_require__(7);

// CONCATENATED MODULE: ./components/TransitionContainer/TransitionContainer.js


function TransitionContainer_TransitionContainer(_ref) {
  var title = _ref.title,
      children = _ref.children;
  return external_react_default.a.createElement("article", {
    className: "transition-container"
  }, title && external_react_default.a.createElement("h2", null, title), external_react_default.a.createElement("div", {
    className: "transition-container__inner"
  }, children));
}
// EXTERNAL MODULE: ./components/ControlContainer/ControlContainer.scss
var ControlContainer = __webpack_require__(8);

// CONCATENATED MODULE: ./components/ControlContainer/ControlContainer.js


function ControlContainer_ControlContainer(_ref) {
  var children = _ref.children;
  return external_react_default.a.createElement("div", {
    className: "control-container"
  }, children);
}
// CONCATENATED MODULE: ./components/index.js
/* concated harmony reexport PageHeader */__webpack_require__.d(__webpack_exports__, "c", function() { return PageHeader_PageHeader; });
/* concated harmony reexport BackBar */__webpack_require__.d(__webpack_exports__, "a", function() { return BackBar_BackBar; });
/* concated harmony reexport TheBox */__webpack_require__.d(__webpack_exports__, "d", function() { return TheBox_TheBox; });
/* concated harmony reexport TransitionContainer */__webpack_require__.d(__webpack_exports__, "e", function() { return TransitionContainer_TransitionContainer; });
/* concated harmony reexport ControlContainer */__webpack_require__.d(__webpack_exports__, "b", function() { return ControlContainer_ControlContainer; });






/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-spring");

/***/ }),
/* 4 */
/***/ (function(module, exports) {



/***/ }),
/* 5 */
/***/ (function(module, exports) {



/***/ }),
/* 6 */
/***/ (function(module, exports) {



/***/ }),
/* 7 */
/***/ (function(module, exports) {



/***/ }),
/* 8 */
/***/ (function(module, exports) {



/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14);


/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MountUnmount; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_spring__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var MountUnmount =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(MountUnmount, _PureComponent);

  function MountUnmount() {
    var _this;

    _classCallCheck(this, MountUnmount);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(MountUnmount).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "toggle", function () {
      _this.setState({
        show: !_this.state.show
      });
    });

    _this.state = {
      show: false
    };
    return _this;
  }

  _createClass(MountUnmount, [{
    key: "render",
    value: function render() {
      var show = this.state.show;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("main", {
        className: "container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__[/* PageHeader */ "c"], {
        title: "Mount / Unmount"
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__[/* BackBar */ "a"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__[/* ControlContainer */ "b"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "button-primary",
        onClick: this.toggle
      }, show ? 'Hide' : 'Release', " the box!")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__[/* TransitionContainer */ "e"], {
        title: "Multistage the box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["Transition"], {
        native: true,
        items: show,
        from: {
          opacity: 0,
          height: 0
        },
        enter: {
          opacity: 1,
          height: 'auto'
        },
        leave: {
          opacity: 0,
          height: 0
        }
      }, function (show) {
        return show && function (props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
            style: props
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__[/* TheBox */ "d"], {
            props: props
          }));
        };
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__[/* TransitionContainer */ "e"], {
        title: "Fade the box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["Transition"], {
        native: true,
        items: show,
        from: {
          opacity: 0
        },
        enter: {
          opacity: 1
        },
        leave: {
          opacity: 0
        }
      }, function (show) {
        return show && function (props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
            style: props
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__[/* TheBox */ "d"], {
            props: props
          }));
        };
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__[/* TransitionContainer */ "e"], {
        title: "Slide the box"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["Transition"], {
        native: true,
        items: show,
        from: {
          transform: 'translate3d(-100%,0,0)'
        },
        enter: {
          transform: 'translate3d(0,0,0)'
        },
        leave: {
          transform: 'translate3d(-500%,0,0)'
        }
      }, function (show) {
        return show && function (props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
            style: props
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components__WEBPACK_IMPORTED_MODULE_2__[/* TheBox */ "d"], {
            props: props
          }));
        };
      })));
    }
  }]);

  return MountUnmount;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);



/***/ })
/******/ ]);
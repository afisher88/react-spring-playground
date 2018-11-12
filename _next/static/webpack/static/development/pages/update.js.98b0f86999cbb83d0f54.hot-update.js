webpackHotUpdate("static\\development\\pages\\update.js",{

/***/ "./components/TableWithSidepane/Sidepane.js":
/*!**************************************************!*\
  !*** ./components/TableWithSidepane/Sidepane.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Sidepane; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_spring__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-spring */ "./node_modules/react-spring/dist/web.js");
var _jsxFileName = "C:\\Users\\Anthony.Fisher\\Dev Sandbox\\react-spring-playground\\components\\TableWithSidepane\\Sidepane.js";


var openConfigEnter = {
  opacity: 1
};
var openConfigLeave = {
  opacity: 0
};
var updateConfigEnter = {
  transform: 'translate3d(0,0,0)'
};
var updateConfigLeave = {
  transform: 'translate3d(-100%,0,0)'
};
function Sidepane(_ref) {
  var activeRowIndex = _ref.activeRowIndex,
      tableData = _ref.tableData;
  var enter = updateConfigEnter;
  var leave = updateConfigLeave;

  if (typeof activeRowIndex !== 'number') {
    enter = openConfigEnter;
    leave = openConfigLeave;
  }

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["Transition"], {
    native: true,
    items: activeRowIndex,
    from: leave,
    enter: enter,
    leave: leave,
    config: react_spring__WEBPACK_IMPORTED_MODULE_1__["config"].slow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, function (activeRowIndex) {
    return typeof activeRowIndex === 'number' && function (props) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
        className: "sidepane-animation-container",
        style: props,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: "sidepane",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 31
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 32
        },
        __self: this
      }, tableData[activeRowIndex].name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }, "".concat(tableData[activeRowIndex].name, " is a ").concat(tableData[activeRowIndex].age, " year old ").concat(tableData[activeRowIndex].job, " living in ").concat(tableData[activeRowIndex].location, "."))));
    };
  });
}

/***/ })

})
//# sourceMappingURL=update.js.98b0f86999cbb83d0f54.hot-update.js.map
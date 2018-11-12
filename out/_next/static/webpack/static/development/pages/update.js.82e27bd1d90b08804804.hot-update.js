webpackHotUpdate("static\\development\\pages\\update.js",{

/***/ "./components/TableWithSidepane/TableWithSidepane.js":
/*!***********************************************************!*\
  !*** ./components/TableWithSidepane/TableWithSidepane.js ***!
  \***********************************************************/
/*! exports provided: TableWithSidepane */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TableWithSidepane", function() { return TableWithSidepane; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _TableData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TableData */ "./components/TableWithSidepane/TableData.js");
/* harmony import */ var _Sidepane__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Sidepane */ "./components/TableWithSidepane/Sidepane.js");
/* harmony import */ var _Sidepane_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Sidepane.scss */ "./components/TableWithSidepane/Sidepane.scss");
/* harmony import */ var _Sidepane_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Sidepane_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "C:\\Users\\Anthony.Fisher\\Dev Sandbox\\react-spring-playground\\components\\TableWithSidepane\\TableWithSidepane.js";

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

 // import { capitalize } from 'lodash-es';




var TableWithSidepane =
/*#__PURE__*/
function (_PureComponent) {
  _inherits(TableWithSidepane, _PureComponent);

  function TableWithSidepane() {
    var _this;

    _classCallCheck(this, TableWithSidepane);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(TableWithSidepane).call(this));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "setActiveRowIndex", function (rowIndex) {
      _this.setState({
        activeRowIndex: rowIndex
      });
    });

    _this.state = {
      activeRowIndex: null
    };
    return _this;
  }

  _createClass(TableWithSidepane, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var activeRowIndex = this.state.activeRowIndex;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
        className: "table-with-sidepane",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 26
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "table-with-sidepane__main",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("table", {
        className: "u-full-width",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 30
        },
        __self: this
      }, _TableData__WEBPACK_IMPORTED_MODULE_1__["default"].map(function (row, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("th", {
          key: "table-heading-".concat(i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 33
          },
          __self: this
        }, Object.keys(row)[i]);
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }, _TableData__WEBPACK_IMPORTED_MODULE_1__["default"].map(function (row, i) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("tr", {
          key: "table-row-".concat(i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 41
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        }, row.name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 43
          },
          __self: this
        }, row.job), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "button",
          onClick: _this2.setActiveRowIndex.bind(_this2, i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 44
          },
          __self: this
        }, "Show more info for ", row.name)));
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Sidepane__WEBPACK_IMPORTED_MODULE_2__["default"], {
        activeRowIndex: activeRowIndex,
        tableData: _TableData__WEBPACK_IMPORTED_MODULE_1__["default"],
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }));
    }
  }]);

  return TableWithSidepane;
}(react__WEBPACK_IMPORTED_MODULE_0__["PureComponent"]);

/***/ })

})
//# sourceMappingURL=update.js.82e27bd1d90b08804804.hot-update.js.map
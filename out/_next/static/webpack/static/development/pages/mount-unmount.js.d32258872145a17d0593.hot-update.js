webpackHotUpdate("static\\development\\pages\\mount-unmount.js",{

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

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var Sidepane =
/*#__PURE__*/
function (_Component) {
  _inherits(Sidepane, _Component);

  function Sidepane() {
    var _this;

    _classCallCheck(this, Sidepane);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Sidepane).call(this));
    _this.openConfigEnter = {
      transform: 'translate3d(0,0,0)'
    };
    _this.openConfigLeave = {
      transform: 'translate3d(100%,0,0)'
    };
    _this.updateConfigEnter = [{
      opacity: 0,
      transform: 'translate3d(0,0,0)'
    }, {
      opacity: 1,
      transform: 'translate3d(0,0,0)'
    }];
    _this.updateConfigLeave = [{
      opacity: 0,
      transform: 'translate3d(0,0,0)'
    }];
    return _this;
  }

  _createClass(Sidepane, [{
    key: "render",
    value: function render() {
      var enter = updateConfigEnter;
      var leave = updateConfigLeave;

      if (!hasUpdated) {
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
          lineNumber: 28
        },
        __self: this
      }, function (activeRowIndex) {
        return typeof activeRowIndex === 'number' && function (props) {
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_spring__WEBPACK_IMPORTED_MODULE_1__["animated"].div, {
            className: "sidepane-animation-container",
            style: props,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 38
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
            className: "sidepane",
            __source: {
              fileName: _jsxFileName,
              lineNumber: 39
            },
            __self: this
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 40
            },
            __self: this
          }, tableData[activeRowIndex].name), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
            __source: {
              fileName: _jsxFileName,
              lineNumber: 41
            },
            __self: this
          }, "".concat(tableData[activeRowIndex].name, " is a ").concat(tableData[activeRowIndex].age, " year old ").concat(tableData[activeRowIndex].job, " living in ").concat(tableData[activeRowIndex].location, "."))));
        };
      });
    }
  }]);

  return Sidepane;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]); // const openConfigEnter = { transform: 'translate3d(0,0,0)' };
// const openConfigLeave = { transform: 'translate3d(100%,0,0)' };
// const updateConfigEnter = [{ opacity: 0, transform: 'translate3d(0,0,0)' }, { opacity: 1, transform: 'translate3d(0,0,0)' }];
// const updateConfigLeave = [{ opacity: 0, transform: 'translate3d(0,0,0)' }];
// export default function Sidepane({ activeRowIndex, tableData, hasUpdated }) {
//   let enter = updateConfigEnter;
//   let leave = updateConfigLeave;
//   if (!hasUpdated) {
//     enter = openConfigEnter;
//     leave = openConfigLeave;
//   }
//   return (
//     <Transition
//       native
//       items={activeRowIndex}
//       from={leave}
//       enter={enter}
//       leave={leave}
//       config={config.slow}
//     >
//       {activeRowIndex =>
//         typeof activeRowIndex === 'number' && (props => (
//           <animated.div className="sidepane-animation-container" style={props}>
//             <article className="sidepane">
//               <h2>{tableData[activeRowIndex].name}</h2>
//               <p>{`${tableData[activeRowIndex].name} is a ${tableData[activeRowIndex].age} year old ${tableData[activeRowIndex].job} living in ${tableData[activeRowIndex].location}.`}</p>
//             </article>
//           </animated.div>)
//         )
//       }
//     </Transition>
//   )
// }




/***/ })

})
//# sourceMappingURL=mount-unmount.js.d32258872145a17d0593.hot-update.js.map
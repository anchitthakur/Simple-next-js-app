webpackHotUpdate("static\\development\\pages\\ApiPages.js",{

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_actions_pageAction_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/actions/pageAction.js */ "./components/actions/pageAction.js");
var _jsxFileName = "C:\\Users\\im\\Desktop\\New folder\\components\\Search.js";






var Search = function Search(props) {
  var handleSubmit = function handleSubmit(e) {
    e.preventDefault();
    props.changePage(props.search);
  };

  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
    className: "form-inline my-2 my-lg-0",
    onSubmit: handleSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
    className: "form-control mr-sm-2",
    type: "text",
    placeholder: props.search,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
    className: "btn btn-secondary my-2 my-sm-0",
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: this
  }, "Search"));
};

Search.Proptypes = {
  changePage: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.func.isRequired,
  search: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string.isRequired
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    search: state.page.search
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_1__["connect"])(mapStateToProps, {
  changePage: _components_actions_pageAction_js__WEBPACK_IMPORTED_MODULE_3__["changePage"]
})(Search));

/***/ })

})
//# sourceMappingURL=ApiPages.js.93208f8e49e8671539cd.hot-update.js.map
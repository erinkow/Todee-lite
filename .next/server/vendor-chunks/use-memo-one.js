"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/use-memo-one";
exports.ids = ["vendor-chunks/use-memo-one"];
exports.modules = {

/***/ "(ssr)/./node_modules/use-memo-one/dist/use-memo-one.esm.js":
/*!************************************************************!*\
  !*** ./node_modules/use-memo-one/dist/use-memo-one.esm.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useCallback: () => (/* binding */ useCallback),\n/* harmony export */   useCallbackOne: () => (/* binding */ useCallbackOne),\n/* harmony export */   useMemo: () => (/* binding */ useMemo),\n/* harmony export */   useMemoOne: () => (/* binding */ useMemoOne)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction areInputsEqual(newInputs, lastInputs) {\n  if (newInputs.length !== lastInputs.length) {\n    return false;\n  }\n\n  for (var i = 0; i < newInputs.length; i++) {\n    if (newInputs[i] !== lastInputs[i]) {\n      return false;\n    }\n  }\n\n  return true;\n}\n\nfunction useMemoOne(getResult, inputs) {\n  var initial = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(function () {\n    return {\n      inputs: inputs,\n      result: getResult()\n    };\n  })[0];\n  var isFirstRun = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);\n  var committed = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initial);\n  var useCache = isFirstRun.current || Boolean(inputs && committed.current.inputs && areInputsEqual(inputs, committed.current.inputs));\n  var cache = useCache ? committed.current : {\n    inputs: inputs,\n    result: getResult()\n  };\n  (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(function () {\n    isFirstRun.current = false;\n    committed.current = cache;\n  }, [cache]);\n  return cache.result;\n}\nfunction useCallbackOne(callback, inputs) {\n  return useMemoOne(function () {\n    return callback;\n  }, inputs);\n}\nvar useMemo = useMemoOne;\nvar useCallback = useCallbackOne;\n\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvdXNlLW1lbW8tb25lL2Rpc3QvdXNlLW1lbW8tb25lLmVzbS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBb0Q7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixzQkFBc0I7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQiwrQ0FBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSCxtQkFBbUIsNkNBQU07QUFDekIsa0JBQWtCLDZDQUFNO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGdEQUFTO0FBQ1g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFNEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXdfdG9kbzIvLi9ub2RlX21vZHVsZXMvdXNlLW1lbW8tb25lL2Rpc3QvdXNlLW1lbW8tb25lLmVzbS5qcz80MTA5Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlLCB1c2VSZWYsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gYXJlSW5wdXRzRXF1YWwobmV3SW5wdXRzLCBsYXN0SW5wdXRzKSB7XG4gIGlmIChuZXdJbnB1dHMubGVuZ3RoICE9PSBsYXN0SW5wdXRzLmxlbmd0aCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbmV3SW5wdXRzLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKG5ld0lucHV0c1tpXSAhPT0gbGFzdElucHV0c1tpXSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiB1c2VNZW1vT25lKGdldFJlc3VsdCwgaW5wdXRzKSB7XG4gIHZhciBpbml0aWFsID0gdXNlU3RhdGUoZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiB7XG4gICAgICBpbnB1dHM6IGlucHV0cyxcbiAgICAgIHJlc3VsdDogZ2V0UmVzdWx0KClcbiAgICB9O1xuICB9KVswXTtcbiAgdmFyIGlzRmlyc3RSdW4gPSB1c2VSZWYodHJ1ZSk7XG4gIHZhciBjb21taXR0ZWQgPSB1c2VSZWYoaW5pdGlhbCk7XG4gIHZhciB1c2VDYWNoZSA9IGlzRmlyc3RSdW4uY3VycmVudCB8fCBCb29sZWFuKGlucHV0cyAmJiBjb21taXR0ZWQuY3VycmVudC5pbnB1dHMgJiYgYXJlSW5wdXRzRXF1YWwoaW5wdXRzLCBjb21taXR0ZWQuY3VycmVudC5pbnB1dHMpKTtcbiAgdmFyIGNhY2hlID0gdXNlQ2FjaGUgPyBjb21taXR0ZWQuY3VycmVudCA6IHtcbiAgICBpbnB1dHM6IGlucHV0cyxcbiAgICByZXN1bHQ6IGdldFJlc3VsdCgpXG4gIH07XG4gIHVzZUVmZmVjdChmdW5jdGlvbiAoKSB7XG4gICAgaXNGaXJzdFJ1bi5jdXJyZW50ID0gZmFsc2U7XG4gICAgY29tbWl0dGVkLmN1cnJlbnQgPSBjYWNoZTtcbiAgfSwgW2NhY2hlXSk7XG4gIHJldHVybiBjYWNoZS5yZXN1bHQ7XG59XG5mdW5jdGlvbiB1c2VDYWxsYmFja09uZShjYWxsYmFjaywgaW5wdXRzKSB7XG4gIHJldHVybiB1c2VNZW1vT25lKGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gY2FsbGJhY2s7XG4gIH0sIGlucHV0cyk7XG59XG52YXIgdXNlTWVtbyA9IHVzZU1lbW9PbmU7XG52YXIgdXNlQ2FsbGJhY2sgPSB1c2VDYWxsYmFja09uZTtcblxuZXhwb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZUNhbGxiYWNrT25lLCB1c2VNZW1vLCB1c2VNZW1vT25lIH07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/use-memo-one/dist/use-memo-one.esm.js\n");

/***/ })

};
;
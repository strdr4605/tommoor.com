/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/posts/[...slug]",{

/***/ "./theme.ts":
/*!******************!*\
  !*** ./theme.ts ***!
  \******************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"spacing\": function() { return /* binding */ spacing; },\n/* harmony export */   \"colors\": function() { return /* binding */ colors; },\n/* harmony export */   \"typography\": function() { return /* binding */ typography; }\n/* harmony export */ });\n/* module decorator */ module = __webpack_require__.hmd(module);\nvar spacing = {\n  small: \"8px\",\n  medium: \"16px\",\n  large: \"32px\",\n  xlarge: \"48px\"\n};\nvar colors = {\n  primary: \"#328aff\",\n  white: \"#FFFFFF\",\n  almostBlack: \"#181A1B\",\n  black: \"#000\",\n  grey: \"#E8EBED\",\n  greyMid: \"#C5CCD3\",\n  text: \"#181A1B\",\n  textSecondary: \"#5E6573\",\n  textTertiary: \"#E8EBED\"\n};\nvar typography = {\n  fontFamily: \"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif\",\n  fontFamilyMono: \"Roboto Mono, Menlo, monospace\"\n};\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdGhlbWUudHM/Zjc3ZiJdLCJuYW1lcyI6WyJzcGFjaW5nIiwic21hbGwiLCJtZWRpdW0iLCJsYXJnZSIsInhsYXJnZSIsImNvbG9ycyIsInByaW1hcnkiLCJ3aGl0ZSIsImFsbW9zdEJsYWNrIiwiYmxhY2siLCJncmV5IiwiZ3JleU1pZCIsInRleHQiLCJ0ZXh0U2Vjb25kYXJ5IiwidGV4dFRlcnRpYXJ5IiwidHlwb2dyYXBoeSIsImZvbnRGYW1pbHkiLCJmb250RmFtaWx5TW9ubyJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFPLElBQU1BLE9BQU8sR0FBRztBQUNyQkMsT0FBSyxFQUFFLEtBRGM7QUFFckJDLFFBQU0sRUFBRSxNQUZhO0FBR3JCQyxPQUFLLEVBQUUsTUFIYztBQUlyQkMsUUFBTSxFQUFFO0FBSmEsQ0FBaEI7QUFPQSxJQUFNQyxNQUFNLEdBQUc7QUFDcEJDLFNBQU8sRUFBRSxTQURXO0FBRXBCQyxPQUFLLEVBQUUsU0FGYTtBQUdwQkMsYUFBVyxFQUFFLFNBSE87QUFJcEJDLE9BQUssRUFBRSxNQUphO0FBS3BCQyxNQUFJLEVBQUUsU0FMYztBQU1wQkMsU0FBTyxFQUFFLFNBTlc7QUFPcEJDLE1BQUksRUFBRSxTQVBjO0FBUXBCQyxlQUFhLEVBQUUsU0FSSztBQVNwQkMsY0FBWSxFQUFFO0FBVE0sQ0FBZjtBQVlBLElBQU1DLFVBQVUsR0FBRztBQUN4QkMsWUFBVSxFQUNSLG1JQUZzQjtBQUd4QkMsZ0JBQWMsRUFBRTtBQUhRLENBQW5CIiwiZmlsZSI6Ii4vdGhlbWUudHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc3BhY2luZyA9IHtcbiAgc21hbGw6IFwiOHB4XCIsXG4gIG1lZGl1bTogXCIxNnB4XCIsXG4gIGxhcmdlOiBcIjMycHhcIixcbiAgeGxhcmdlOiBcIjQ4cHhcIixcbn07XG5cbmV4cG9ydCBjb25zdCBjb2xvcnMgPSB7XG4gIHByaW1hcnk6IFwiIzMyOGFmZlwiLFxuICB3aGl0ZTogXCIjRkZGRkZGXCIsXG4gIGFsbW9zdEJsYWNrOiBcIiMxODFBMUJcIixcbiAgYmxhY2s6IFwiIzAwMFwiLFxuICBncmV5OiBcIiNFOEVCRURcIixcbiAgZ3JleU1pZDogXCIjQzVDQ0QzXCIsXG4gIHRleHQ6IFwiIzE4MUExQlwiLFxuICB0ZXh0U2Vjb25kYXJ5OiBcIiM1RTY1NzNcIixcbiAgdGV4dFRlcnRpYXJ5OiBcIiNFOEVCRURcIixcbn07XG5cbmV4cG9ydCBjb25zdCB0eXBvZ3JhcGh5ID0ge1xuICBmb250RmFtaWx5OlxuICAgIFwiLWFwcGxlLXN5c3RlbSwgQmxpbmtNYWNTeXN0ZW1Gb250LCBTZWdvZSBVSSwgUm9ib3RvLCBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLCBzYW5zLXNlcmlmXCIsXG4gIGZvbnRGYW1pbHlNb25vOiBcIlJvYm90byBNb25vLCBNZW5sbywgbW9ub3NwYWNlXCIsXG59O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./theme.ts\n");

/***/ })

});
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/blllld.js":
/*!***********************!*\
  !*** ./lib/blllld.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return b__d; });\n/* harmony import */ var _syntaxParse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./syntaxParse */ \"./lib/syntaxParse.js\");\n\r\n\r\n/* for method */\r\nclass b__d {\r\n    constructor(syntax) {\r\n        this.syntax = syntax;\r\n        this.resolve()\r\n    }\r\n    resolve(){\r\n       this.resolved = Object(_syntaxParse__WEBPACK_IMPORTED_MODULE_0__[\"syntaxParse\"])(this.syntax)\r\n    }\r\n}\n\n//# sourceURL=webpack:///./lib/blllld.js?");

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blllld__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blllld */ \"./lib/blllld.js\");\n\r\n\r\nif (!window.b__d) {\r\n    Object.defineProperty(window, 'b__d', {\r\n        configurable: false,\r\n        writable: false,\r\n        value: _blllld__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\r\n    })\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    b__d: _blllld__WEBPACK_IMPORTED_MODULE_0__[\"default\"],\r\n});\n\n//# sourceURL=webpack:///./lib/index.js?");

/***/ }),

/***/ "./lib/jugemenet.js":
/*!**************************!*\
  !*** ./lib/jugemenet.js ***!
  \**************************/
/*! exports provided: startAtLetter, findEndBreacket */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"startAtLetter\", function() { return startAtLetter; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"findEndBreacket\", function() { return findEndBreacket; });\n/**\r\n * 以字母开头\r\n * @param {string} letter \r\n */\r\nconst startAtLetter = letter => /^[a-zA-Z]/.test(letter)\r\n\r\nconst findEndBreacket = (str, start = 0, left, right) => {\r\n    let i = start;\r\n    let bleft = 0;\r\n    for (; i < str.length; i++) {\r\n        bleft += str[i] === left ? 1 :\r\n            str[i] === right ? -1 : 0\r\n        if (bleft === 0) {\r\n            return i;\r\n        }\r\n    }\r\n    return -1;\r\n}\n\n//# sourceURL=webpack:///./lib/jugemenet.js?");

/***/ }),

/***/ "./lib/syntaxParse.js":
/*!****************************!*\
  !*** ./lib/syntaxParse.js ***!
  \****************************/
/*! exports provided: syntaxParse */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"syntaxParse\", function() { return syntaxParse; });\n/* harmony import */ var _jugemenet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./jugemenet */ \"./lib/jugemenet.js\");\n\r\n\r\n// div.container{@text}\r\n\r\nconst syntaxParse = function (syntax) {\r\n    return syntaxSpliter(syntax)\r\n}\r\n\r\n/**\r\n * 按照class，id，attr，props语句拆分\r\n * @param {string} syntax \r\n */\r\nconst syntaxSpliter = function (syntax) {\r\n    const _syntax = Array.prototype.slice.call(syntax)\r\n    const spliter = {\r\n        id: null,\r\n        className: [],\r\n        attr: [],\r\n        text: null,\r\n        tag: null\r\n    };\r\n    for (let i = 0; i < _syntax.length;) {\r\n        let element = _syntax[i];\r\n        if (i === 0 && Object(_jugemenet__WEBPACK_IMPORTED_MODULE_0__[\"startAtLetter\"])(element)) {\r\n            // 以字母开头则当前可能是一个html标签\r\n            let matchLetter = syntax.match(/^[a-zA-Z][\\w]*/)[0];\r\n            spliter.tag = matchLetter;\r\n            _syntax.splice(0, matchLetter.length);\r\n            // 将修改后的文字重新归纳\r\n            syntax = _syntax.join(\"\");\r\n            i = 0\r\n            continue;\r\n        }\r\n        if (element === '.') {\r\n            // 从当前元素向后的内容为class名称\r\n            let matchLetter = syntax.match(/^\\.([a-zA-Z_][\\w\\-_]*)/);\r\n            if(matchLetter === null){\r\n                console.log('class start at dot but got ' + syntax[0])\r\n            }\r\n            spliter.className.push(matchLetter[1]);\r\n            _syntax.splice(i, matchLetter[0].length);\r\n            // 将修改后的文字重新归纳\r\n            syntax = _syntax.join(\"\");\r\n            i = 0\r\n            continue;\r\n        }\r\n        if (element === '#') {\r\n            // 从当前元素向后的内容为class名称\r\n            let matchLetter = syntax.match(/^#([a-zA-Z_][\\w\\-_]*)/);\r\n            spliter.id = matchLetter[1];\r\n            _syntax.splice(i, matchLetter[0].length);\r\n            // 将修改后的文字重新归纳\r\n            syntax = _syntax.join(\"\");\r\n            i = 0\r\n            continue;\r\n        }\r\n        if (element === '[') {\r\n            // 从当前元素向后的内容为class名称\r\n            let endBreacketIndex = Object(_jugemenet__WEBPACK_IMPORTED_MODULE_0__[\"findEndBreacket\"])(syntax, i, '[', ']');\r\n            let breack = _syntax.splice(i, endBreacketIndex + 1);\r\n            breack.pop();\r\n            breack.shift();\r\n            spliter.attr.push(breack.join(\"\"));\r\n            // 将修改后的文字重新归纳\r\n            syntax = _syntax.join(\"\");\r\n            i = 0\r\n            continue;\r\n        }\r\n        if (element === '{') {\r\n            // 从当前元素向后的内容为class名称\r\n            let endBreacketIndex = Object(_jugemenet__WEBPACK_IMPORTED_MODULE_0__[\"findEndBreacket\"])(syntax, i, '{', '}');\r\n            let breack = _syntax.splice(i, endBreacketIndex + 1);\r\n            breack.pop();\r\n            breack.shift();\r\n            spliter.text = breack.join(\"\");\r\n            // 将修改后的文字重新归纳\r\n            syntax = _syntax.join(\"\");\r\n            i = 0\r\n            continue;\r\n        }\r\n        i++\r\n    }\r\n    return spliter;\r\n}\n\n//# sourceURL=webpack:///./lib/syntaxParse.js?");

/***/ })

/******/ });
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createContact: () => (/* binding */ createContact)\n/* harmony export */ });\n\n\n// Clean up the Website, make it blank.\n\n// Add contact information here\n\n// Phone\n\n// Email\n\n// Address\n\n// Maybe a picture\n\nfunction createContact() {\n    const content = document.querySelector(\"#content\");\n\n    const pageContent = document.createElement(\"div\");\n    pageContent.textContent = \"Contact\";\n    pageContent.classList.add('page-content');\n    content.appendChild(pageContent);\n}\n\n//# sourceURL=webpack://ls/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomePage: () => (/* binding */ createHomePage)\n/* harmony export */ });\n\n\n\n// Clean up the Website, make it blank.\n\n// Add Picture Here\n\n// Add Content on how Great the Pizzeria is\n\n// Hours\n\nfunction createHomePage() {\n    const content = document.querySelector(\"#content\");\n    \n\n    const pageContent = document.createElement(\"div\");\n    pageContent.textContent = \"Best Pizza In Town!\";\n    pageContent.classList.add('page-content');\n    pageContent.classList.add('homeStyle')\n    content.appendChild(pageContent);\n}\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://ls/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.js */ \"./src/home.js\");\n/* harmony import */ var _menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu.js */ \"./src/menu.js\");\n/* harmony import */ var _contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact.js */ \"./src/contact.js\");\n\n\n\n\n// Create Header Here\nfunction createHeader() {\n    const content = document.querySelector(\"#content\");\n    const header = document.createElement(\"h1\");\n    header.classList.add('header');\n    header.textContent = \"Gomitolo's Pizza\";\n    content.appendChild(header);\n}\ncreateHeader();\n\n\n// Create Tabs Here\nfunction createTabs() {\n    const content = document.querySelector(\"#content\");\n    const tabContainer = document.createElement(\"div\");\n    tabContainer.classList.add('tab-container');\n\n\n    const homeTab = document.createElement(\"div\");\n    homeTab.textContent = \"Home\";\n    tabContainer.appendChild(homeTab);\n    homeTab.addEventListener('click', () => {\n        clearContent();\n        (0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHomePage)()\n    });\n    \n    const menuTab = document.createElement(\"div\");\n    menuTab.textContent = \"Menu\";\n    tabContainer.appendChild(menuTab);\n    menuTab.addEventListener('click', () => {\n        clearContent();\n        (0,_menu_js__WEBPACK_IMPORTED_MODULE_1__.createMenu)();\n    });\n    \n    const contactTab = document.createElement(\"div\");\n    contactTab.textContent = \"Contact\";\n    tabContainer.appendChild(contactTab);\n    contactTab.addEventListener('click', () => {\n        clearContent();\n        (0,_contact_js__WEBPACK_IMPORTED_MODULE_2__.createContact)();\n    });\n    content.appendChild(tabContainer);\n}\ncreateTabs();\n\n// Load the Home Page Here\n(0,_home_js__WEBPACK_IMPORTED_MODULE_0__.createHomePage)();\n\nfunction clearContent() {\n    const content = document.querySelector(\"#content\");\n    const pageContent = document.querySelector(\".page-content\");\n    if (pageContent) {\n        content.removeChild(pageContent);\n    }\n}\n\n\n//# sourceURL=webpack://ls/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* binding */ createMenu)\n/* harmony export */ });\n\n\n// Clean up the Website, make it blank.\n\n// 12 Pizza Header, solely wood fired\n\n\n// Make the Menu out of 5 items with the Pizza, description and price.\n\n\nfunction createMenu() {\n    const content = document.querySelector(\"#content\");\n    \n\n    const pageContent = document.createElement(\"div\");\n    pageContent.textContent = \"Menu\";\n    pageContent.classList.add('page-content');\n    content.appendChild(pageContent);\n}\n\n//# sourceURL=webpack://ls/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
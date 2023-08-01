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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createHomePage: () => (/* binding */ createHomePage)\n/* harmony export */ });\n\n\n\n// Clean up the Website, make it blank.\n\n// Add Picture Here\n\n// Add Content on how Great the Pizzeria is\n\n// Hours\n\nfunction createHomePage() {\n    const content = document.querySelector(\"#content\");\n    const pageContent = document.createElement(\"div\");\n    pageContent.classList.add('page-content');\n                 \n\n    const homeImage = document.createElement(\"img\");\n    homeImage.src = `images/pizza-restaraunt.jpg`\n    homeImage.alt = `Pizza on Table`\n    homeImage.classList.add('home-image');\n    pageContent.appendChild(homeImage);\n\n    const caption = document.createElement('div');\n    caption.textContent = \"Best Pizza In Town!\";\n    caption.classList.add('caption');\n    pageContent.appendChild(caption);\n\n    const hours = document.createElement('div');\n    hours.classList.add('hours');\n    hours.innerHTML = `<h3>Hours</h3>\n                        <p>Sunday: 12pm - 10pm</p>\n                        <p>Monday: 12pm - 8pm</p>\n                        <p>Tuesday: 12pm - 8pm</p>\n                        <p>Wednesday: 12pm - 8pm</p>\n                        <p>Thursday: 12pm - 10pm</p>\n                        <p>Friday: 12pm - 10pm</p>\n                        <p>Saturday: 12pm - 10pm</p>\n                        `;\n    \n    pageContent.appendChild(hours);\n\n\n    // pageContent.textContent = \"Best Pizza In Town!\";\n    \n    // pageContent.classList.add('homeStyle')\n    \n    content.appendChild(pageContent);\n\n\n}\n\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://ls/./src/home.js?");

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createMenu: () => (/* binding */ createMenu)\n/* harmony export */ });\n\n\n// Clean up the Website, make it blank.\n\n// 12 Pizza Header, solely wood fired\n\n\n// Make the Menu out of 5 items with the Pizza, description and price.\n\n\nfunction createMenu() {\n    const content = document.querySelector(\"#content\");\n    const pageContent = document.createElement(\"div\");\n    pageContent.classList.add('page-content');\n\n    const menu = document.createElement('div');\n    menu.classList.add('menu');\n    \n    const menuTitle = document.createElement('h2');\n    menuTitle.textContent = '12\" Pizza: Solely Wood Fired'\n    menu.appendChild(menuTitle);\n\n    const cheese = document.createElement('div');\n    const cheeseTitle = document.createElement('h3');\n    cheeseTitle.textContent = \"Cheese\";\n    cheese.appendChild(cheeseTitle);\n\n    const cheeseDescription = document.createElement(\"p\");\n    cheeseDescription.textContent = \"sauce, mozzarella\";\n    cheese.appendChild(cheeseDescription);\n\n    const cheesePrice = document.createElement(\"p\");\n    cheesePrice.textContent = \"$12\";\n    cheese.appendChild(cheesePrice);\n\n    menu.appendChild(cheese);\n\n    const pepperoni = document.createElement('div');\n    const pepperoniTitle = document.createElement('h3');\n    pepperoniTitle.textContent = \"Pepperoni\";\n    pepperoni.appendChild(pepperoniTitle);\n\n    const pepperoniDescription = document.createElement(\"p\");\n    pepperoniDescription.textContent = \"sauce, mozzarella, pepperoni\";\n    pepperoni.appendChild(pepperoniDescription);\n\n    const pepperoniPrice = document.createElement(\"p\");\n    pepperoniPrice.textContent = \"$14\";\n    pepperoni.appendChild(pepperoniPrice);\n\n    menu.appendChild(pepperoni);\n\n    const margherita = document.createElement('div');\n    const margheritaTitle = document.createElement('h3');\n    margheritaTitle.textContent = \"Margherita\";\n    margherita.appendChild(margheritaTitle);\n\n    const margheritaDescription = document.createElement(\"p\");\n    margheritaDescription.textContent = \"sauce, mozzarella, basil, olive oil\";\n    margherita.appendChild(margheritaDescription);\n\n    const margheritaPrice = document.createElement(\"p\");\n    margheritaPrice.textContent = \"$16\";\n    margherita.appendChild(margheritaPrice);\n\n    menu.appendChild(margherita);\n\n    const tartufata = document.createElement('div');\n    const tartufataTitle = document.createElement('h3');\n    tartufataTitle.textContent = \"Tartufata\";\n    tartufata.appendChild(tartufataTitle);\n\n    const tartufataDescription = document.createElement(\"p\");\n    tartufataDescription.textContent = \"mozzarella, porcini mushroom, truffle oil\";\n    tartufata.appendChild(tartufataDescription);\n\n    const tartufataPrice = document.createElement(\"p\");\n    tartufataPrice.textContent = \"$18\";\n    tartufata.appendChild(tartufataPrice);\n\n    menu.appendChild(tartufata);\n\n    menu.appendChild(margherita);\n\n    const diavola = document.createElement('div');\n    const diavolaTitle = document.createElement('h3');\n    diavolaTitle.textContent = \"Diavola\";\n    diavola.appendChild(diavolaTitle);\n\n    const diavolaDescription = document.createElement(\"p\");\n    diavolaDescription.textContent = \"sauce, mozzarella, spicy salami\";\n    diavola.appendChild(diavolaDescription);\n\n    const diavolaPrice = document.createElement(\"p\");\n    diavolaPrice.textContent = \"$18\";\n    diavola.appendChild(diavolaPrice);\n\n    menu.appendChild(diavola);\n\n\n    \n    pageContent.appendChild(menu);\n    content.appendChild(pageContent);\n}\n\n//# sourceURL=webpack://ls/./src/menu.js?");

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
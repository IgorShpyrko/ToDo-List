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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("document.addEventListener(\"DOMContentLoaded\", ready);\n\nfunction ready() {\n\n\tvar input = document.createElement(\"input\");\n\tinput.placeholder = \"Enter A ToDo\";\n\n\tdocument.body.appendChild(input);\n\n\tfunction createButton(name, className) {\n\n\t\tlet button = document.createElement(\"button\");\n\t\t\n\t\tbutton.innerHTML = name;\n\t\tbutton.className = className;\n\t\tdocument.body.appendChild(button);\n\t}\n\n\tcreateButton(\"Add ToDo\", \"add-btn\");\n\tcreateButton(\"Delete ToDo\", \"del-btn\");\n\t\n\tvar buttonAdd = document.querySelector('.add-btn');\n\tbuttonAdd.addEventListener(\"click\", createToDo);\n\n\tvar buttonDel = document.querySelector('.del-btn');\n\tbuttonDel.addEventListener(\"click\", deleteToDo);\n\n\tvar wrapper = document.createElement(\"div\");\n\n\tdocument.body.appendChild(wrapper);\n\n\tfunction createToDo() {\n\t\tvar todo;\n\n\t\tif (input.value === \"\") {\n\t\t\ttodo = \"empty ToDo\";\n\t\t} else {\n\t\t\ttodo = input.value;\n\t\t\tinput.value = \"\";\n\t\t}\n\t\tvar label = document.createElement(\"label\");\n\t\tlabel.innerHTML = \"<input type='checkbox'>\" + todo + \"</input></br>\";\n\n\t\twrapper.appendChild(label);\n\t}\n\n\tfunction deleteToDo() {\n\t\tvar labels = wrapper.querySelectorAll('label');\n\n\t\tfor (var i = 0; i < labels.length; i++) {\n\t\t\tif (labels[i].children[0].checked == true) {\n\t\t\t\tlabels[i].remove();\n\t\t\t};\n\t\t}\n\t}\n}\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ })

/******/ });
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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./cypress/e2e/pages/login_page.js":
/*!*****************************************!*\
  !*** ./cypress/e2e/pages/login_page.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.LoginPage = void 0;

class LoginPage {
  //export keyword to make the class importable
  enterUsername(username) {
    cy.get(':nth-child(1) > .form-control').type(username);
  }

  enterPassword(password) {
    cy.get('#loginDatapwd').type(password);
  }

  clickLogin() {
    cy.get('.btn').click();
  }

}

exports.LoginPage = LoginPage;

/***/ }),

/***/ "./cypress/e2e/pomdemo.cy.js":
/*!***********************************!*\
  !*** ./cypress/e2e/pomdemo.cy.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _login_page = __webpack_require__(/*! ./pages/login_page */ "./cypress/e2e/pages/login_page.js");

//pages folder is one level up from the current class, so need to give one dot after the slash to access it.
const loginpage = new _login_page.LoginPage();
it('POM Demo', () => {
  cy.visit('http://localhost:4200/#/login');
  Cypress.on('uncaught:exception', (err, runnable) => {
    return false;
  }); //Turning uncought exception off for localhost

  loginpage.enterUsername('swaroop_uat@doqfy.in');
  loginpage.enterPassword('Swaroop@2022');
  loginpage.clickLogin();
});

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./cypress/e2e/pomdemo.cy.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Projects\CypressProject\cypress\e2e\pomdemo.cy.js */"./cypress/e2e/pomdemo.cy.js");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vY3lwcmVzcy9lMmUvcGFnZXMvbG9naW5fcGFnZS5qcyIsIndlYnBhY2s6Ly8vLi9jeXByZXNzL2UyZS9wb21kZW1vLmN5LmpzIl0sIm5hbWVzIjpbIkxvZ2luUGFnZSIsImVudGVyVXNlcm5hbWUiLCJ1c2VybmFtZSIsImN5IiwiZ2V0IiwidHlwZSIsImVudGVyUGFzc3dvcmQiLCJwYXNzd29yZCIsImNsaWNrTG9naW4iLCJjbGljayIsImxvZ2lucGFnZSIsIml0IiwidmlzaXQiLCJDeXByZXNzIiwib24iLCJlcnIiLCJydW5uYWJsZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsRk8sTUFBTUEsU0FBTixDQUFlO0FBQUU7QUFHeEJDLGVBQWEsQ0FBQ0MsUUFBRCxFQUFVO0FBQ25CQyxNQUFFLENBQUNDLEdBQUgsQ0FBTywrQkFBUCxFQUF3Q0MsSUFBeEMsQ0FBNkNILFFBQTdDO0FBQ0g7O0FBRURJLGVBQWEsQ0FBQ0MsUUFBRCxFQUFVO0FBQ25CSixNQUFFLENBQUNDLEdBQUgsQ0FBTyxlQUFQLEVBQXdCQyxJQUF4QixDQUE2QkUsUUFBN0I7QUFDSDs7QUFFREMsWUFBVSxHQUFFO0FBQ1JMLE1BQUUsQ0FBQ0MsR0FBSCxDQUFPLE1BQVAsRUFBZUssS0FBZjtBQUNIOztBQWJxQjs7Ozs7Ozs7Ozs7Ozs7OztBQ0F0Qjs7QUFBOEM7QUFFOUMsTUFBTUMsU0FBUyxHQUFHLElBQUlWLHFCQUFKLEVBQWxCO0FBRUFXLEVBQUUsQ0FBQyxVQUFELEVBQWMsTUFBTTtBQUdsQlIsSUFBRSxDQUFDUyxLQUFILENBQVMsK0JBQVQ7QUFDQUMsU0FBTyxDQUFDQyxFQUFSLENBQVcsb0JBQVgsRUFBaUMsQ0FBQ0MsR0FBRCxFQUFNQyxRQUFOLEtBQW1CO0FBQUUsV0FBTyxLQUFQO0FBQWUsR0FBckUsRUFKa0IsQ0FJb0Q7O0FBQ3RFTixXQUFTLENBQUNULGFBQVYsQ0FBd0Isc0JBQXhCO0FBQ0FTLFdBQVMsQ0FBQ0osYUFBVixDQUF3QixjQUF4QjtBQUNBSSxXQUFTLENBQUNGLFVBQVY7QUFHSCxDQVZDLENBQUYsQyIsImZpbGUiOiJwb21kZW1vLmN5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiZXhwb3J0IGNsYXNzIExvZ2luUGFnZXsgLy9leHBvcnQga2V5d29yZCB0byBtYWtlIHRoZSBjbGFzcyBpbXBvcnRhYmxlXHJcblxyXG5cclxuZW50ZXJVc2VybmFtZSh1c2VybmFtZSl7XHJcbiAgICBjeS5nZXQoJzpudGgtY2hpbGQoMSkgPiAuZm9ybS1jb250cm9sJykudHlwZSh1c2VybmFtZSlcclxufVxyXG5cclxuZW50ZXJQYXNzd29yZChwYXNzd29yZCl7XHJcbiAgICBjeS5nZXQoJyNsb2dpbkRhdGFwd2QnKS50eXBlKHBhc3N3b3JkKSAgICBcclxufVxyXG5cclxuY2xpY2tMb2dpbigpe1xyXG4gICAgY3kuZ2V0KCcuYnRuJykuY2xpY2soKVxyXG59XHJcblxyXG5cclxufSIsImltcG9ydCB7TG9naW5QYWdlfSBmcm9tIFwiLi9wYWdlcy9sb2dpbl9wYWdlXCIgIC8vcGFnZXMgZm9sZGVyIGlzIG9uZSBsZXZlbCB1cCBmcm9tIHRoZSBjdXJyZW50IGNsYXNzLCBzbyBuZWVkIHRvIGdpdmUgb25lIGRvdCBhZnRlciB0aGUgc2xhc2ggdG8gYWNjZXNzIGl0LlxyXG5cclxuY29uc3QgbG9naW5wYWdlID0gbmV3IExvZ2luUGFnZSgpXHJcblxyXG5pdCgnUE9NIERlbW8nICwgKCkgPT4ge1xyXG5cclxuICAgIFxyXG4gICAgY3kudmlzaXQoJ2h0dHA6Ly9sb2NhbGhvc3Q6NDIwMC8jL2xvZ2luJykgXHJcbiAgICBDeXByZXNzLm9uKCd1bmNhdWdodDpleGNlcHRpb24nLCAoZXJyLCBydW5uYWJsZSkgPT4geyByZXR1cm4gZmFsc2U7IH0pLy9UdXJuaW5nIHVuY291Z2h0IGV4Y2VwdGlvbiBvZmYgZm9yIGxvY2FsaG9zdFxyXG4gICAgbG9naW5wYWdlLmVudGVyVXNlcm5hbWUoJ3N3YXJvb3BfdWF0QGRvcWZ5LmluJylcclxuICAgIGxvZ2lucGFnZS5lbnRlclBhc3N3b3JkKCdTd2Fyb29wQDIwMjInKVxyXG4gICAgbG9naW5wYWdlLmNsaWNrTG9naW4oKVxyXG5cclxuXHJcbn0pIl0sInNvdXJjZVJvb3QiOiIifQ==
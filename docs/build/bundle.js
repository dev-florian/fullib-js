/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var animation_felix__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! animation-felix */ \"./node_modules/animation-felix/src/js/index.js\");\n\r\n\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.laxAddons)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.cursor)(10, '#000000', '#ffd5ce');\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.button1)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.button3)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.button4)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.button5)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.button6)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.button7)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.button8)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.button9)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.button10)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.button11)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.button12)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.button13)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.button14)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.button15)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.share)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.text1)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.text2)(\"https://static.pexels.com/photos/4827/nature-forest-trees-fog.jpeg\");\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.text3)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.text4)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.text5)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.text6)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.text7)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.reveal1)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.reveal2)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.reveal3)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.reveal4)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.reveal5)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.reveal6)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.reveal7)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.reveal8)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.reveal9)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.parallax1)(2);\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.changeBackground)(\"#ffd5ce\", 'change-background', 'linear');\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.transition1)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.drawsvg)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.menu1)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.menu2)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.menu3)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.menu4)();\r\n(0,animation_felix__WEBPACK_IMPORTED_MODULE_0__.menu5)();\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/animation-felix/src/js/index.js":
/*!******************************************************!*\
  !*** ./node_modules/animation-felix/src/js/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"reveal1\": () => /* binding */ reveal1,\n/* harmony export */   \"reveal2\": () => /* binding */ reveal2,\n/* harmony export */   \"reveal3\": () => /* binding */ reveal3,\n/* harmony export */   \"reveal4\": () => /* binding */ reveal4,\n/* harmony export */   \"reveal5\": () => /* binding */ reveal5,\n/* harmony export */   \"reveal6\": () => /* binding */ reveal6,\n/* harmony export */   \"reveal7\": () => /* binding */ reveal7,\n/* harmony export */   \"reveal8\": () => /* binding */ reveal8,\n/* harmony export */   \"reveal9\": () => /* binding */ reveal9,\n/* harmony export */   \"text1\": () => /* binding */ text1,\n/* harmony export */   \"text2\": () => /* binding */ text2,\n/* harmony export */   \"text3\": () => /* binding */ text3,\n/* harmony export */   \"text4\": () => /* binding */ text4,\n/* harmony export */   \"text5\": () => /* binding */ text5,\n/* harmony export */   \"text6\": () => /* binding */ text6,\n/* harmony export */   \"text7\": () => /* binding */ text7,\n/* harmony export */   \"share\": () => /* binding */ share,\n/* harmony export */   \"button1\": () => /* binding */ button1,\n/* harmony export */   \"button3\": () => /* binding */ button3,\n/* harmony export */   \"button4\": () => /* binding */ button4,\n/* harmony export */   \"button5\": () => /* binding */ button5,\n/* harmony export */   \"button6\": () => /* binding */ button6,\n/* harmony export */   \"button7\": () => /* binding */ button7,\n/* harmony export */   \"button8\": () => /* binding */ button8,\n/* harmony export */   \"button9\": () => /* binding */ button9,\n/* harmony export */   \"button10\": () => /* binding */ button10,\n/* harmony export */   \"button11\": () => /* binding */ button11,\n/* harmony export */   \"button12\": () => /* binding */ button12,\n/* harmony export */   \"button13\": () => /* binding */ button13,\n/* harmony export */   \"button14\": () => /* binding */ button14,\n/* harmony export */   \"button15\": () => /* binding */ button15,\n/* harmony export */   \"menu1\": () => /* binding */ menu1,\n/* harmony export */   \"menu2\": () => /* binding */ menu2,\n/* harmony export */   \"menu3\": () => /* binding */ menu3,\n/* harmony export */   \"menu4\": () => /* binding */ menu4,\n/* harmony export */   \"menu5\": () => /* binding */ menu5,\n/* harmony export */   \"parallax1\": () => /* binding */ parallax1,\n/* harmony export */   \"changeBackground\": () => /* binding */ changeBackground,\n/* harmony export */   \"drawsvg\": () => /* binding */ drawsvg,\n/* harmony export */   \"transition1\": () => /* binding */ transition1,\n/* harmony export */   \"laxAddons\": () => /* binding */ laxAddons,\n/* harmony export */   \"cursor\": () => /* binding */ cursor,\n/* harmony export */   \"addElement\": () => /* binding */ addElement,\n/* harmony export */   \"getOptionLink\": () => /* binding */ getOptionLink,\n/* harmony export */   \"isElementInViewport\": () => /* binding */ isElementInViewport\n/* harmony export */ });\nfunction reveal1() {\r\n    let reveals1 = document.getElementsByClassName('reveal1');\r\n    if (reveals1[0]) {\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_reveal_reveal1_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/reveal/reveal1.css */ \"./node_modules/animation-felix/src/css/reveal/reveal1.css\")).then(({default: reveal1}) => {\r\n            for (let i = 0, len = reveals1.length; i < len; i++) {\r\n                let myElem = reveals1[i];\r\n                if (isElementInViewport(myElem)) {\r\n                    myElem.classList.add('active');\r\n                }\r\n                window.addEventListener('scroll', function () {\r\n                    if (isElementInViewport(myElem)) {\r\n                        myElem.classList.add('active');\r\n                    }\r\n                });\r\n            }\r\n        }).catch(error => 'An error occurred while loading reveal1');\r\n    }\r\n}\r\n\r\nfunction reveal2() {\r\n    let reveal2 = document.getElementsByClassName('reveal2');\r\n    if (reveal2[0]) {\r\n        __webpack_require__.e(/*! import() */ \"node_modules_animation-felix_src_css_reveal_reveal2_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/reveal/reveal2.css */ \"./node_modules/animation-felix/src/css/reveal/reveal2.css\")).then(({default: reveal2}) => {\r\n        }).catch(error => 'An error occurred while loading reveal2');\r\n    }\r\n}\r\n\r\nfunction reveal3() {\r\n    let reveal3 = document.getElementsByClassName('reveal3');\r\n    if (reveal3[0]) {\r\n        __webpack_require__.e(/*! import() */ \"node_modules_animation-felix_src_css_reveal_reveal3_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/reveal/reveal3.css */ \"./node_modules/animation-felix/src/css/reveal/reveal3.css\")).then(({default: reveal3}) => {\r\n        }).catch(error => 'An error occurred while loading reveal3');\r\n    }\r\n}\r\n\r\nfunction reveal4() {\r\n    let reveal4 = document.getElementsByClassName('reveal4');\r\n    if (reveal4[0]) {\r\n        __webpack_require__.e(/*! import() */ \"node_modules_animation-felix_src_css_reveal_reveal4_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/reveal/reveal4.css */ \"./node_modules/animation-felix/src/css/reveal/reveal4.css\")).then(({default: reveal4}) => {\r\n        }).catch(error => 'An error occurred while loading reveal4');\r\n    }\r\n}\r\n\r\nfunction reveal5() {\r\n    let reveal5 = document.getElementsByClassName('reveal5');\r\n    if (reveal5[0]) {\r\n        __webpack_require__.e(/*! import() */ \"node_modules_animation-felix_src_css_reveal_reveal5_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/reveal/reveal5.css */ \"./node_modules/animation-felix/src/css/reveal/reveal5.css\")).then(({default: reveal5}) => {\r\n        }).catch(error => 'An error occurred while loading reveal5');\r\n    }\r\n}\r\n\r\nfunction reveal6() {\r\n    let reveal6 = document.getElementsByClassName('reveal6');\r\n    if (reveal6[0]) {\r\n        for (let i = 0, len = reveal6.length; i < len; i++) {\r\n            let myElem = reveal6[i];\r\n            if (isElementInViewport(myElem)) {\r\n                myElem.classList.add('active');\r\n            }\r\n\r\n            window.addEventListener('scroll', function () {\r\n                if (isElementInViewport(myElem)) {\r\n                    myElem.classList.add('active');\r\n                }\r\n            });\r\n        }\r\n        __webpack_require__.e(/*! import() */ \"node_modules_animation-felix_src_css_reveal_reveal6_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/reveal/reveal6.css */ \"./node_modules/animation-felix/src/css/reveal/reveal6.css\")).then(({default: reveal6}) => {\r\n        }).catch(error => 'An error occurred while loading reveal6');\r\n    }\r\n}\r\n\r\nfunction reveal7() {\r\n    let reveal7 = document.getElementsByClassName('reveal7');\r\n    if (reveal7[0]) {\r\n        for (let i = 0, len = reveal7.length; i < len; i++) {\r\n            let myElem = reveal7[i];\r\n            if (isElementInViewport(myElem)) {\r\n                myElem.classList.add('active');\r\n            }\r\n\r\n            window.addEventListener('scroll', function () {\r\n                if (isElementInViewport(myElem)) {\r\n                    myElem.classList.add('active');\r\n                }\r\n            });\r\n        }\r\n        __webpack_require__.e(/*! import() */ \"node_modules_animation-felix_src_css_reveal_reveal7_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/reveal/reveal7.css */ \"./node_modules/animation-felix/src/css/reveal/reveal7.css\")).then(({default: reveal7}) => {\r\n        }).catch(error => 'An error occurred while loading reveal7');\r\n    }\r\n}\r\n\r\nfunction reveal8() {\r\n    let reveal8 = document.getElementsByClassName('reveal8');\r\n    if (reveal8[0]) {\r\n        for (let i = 0, len = reveal8.length; i < len; i++) {\r\n            let myElem = reveal8[i];\r\n            if (isElementInViewport(myElem)) {\r\n                myElem.classList.add('active');\r\n            }\r\n\r\n            window.addEventListener('scroll', function () {\r\n                if (isElementInViewport(myElem)) {\r\n                    myElem.classList.add('active');\r\n                }\r\n            });\r\n        }\r\n        __webpack_require__.e(/*! import() */ \"node_modules_animation-felix_src_css_reveal_reveal8_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/reveal/reveal8.css */ \"./node_modules/animation-felix/src/css/reveal/reveal8.css\")).then(({default: reveal8}) => {\r\n        }).catch(error => 'An error occurred while loading reveal8');\r\n    }\r\n}\r\n\r\nfunction reveal9() {\r\n    let reveal9 = document.getElementsByClassName('reveal9');\r\n    if (reveal9[0]) {\r\n        for (let i = 0, len = reveal9.length; i < len; i++) {\r\n            let myElem = reveal9[i];\r\n            if (isElementInViewport(myElem)) {\r\n                myElem.classList.add('active');\r\n            }\r\n\r\n            window.addEventListener('scroll', function () {\r\n                if (isElementInViewport(myElem)) {\r\n                    myElem.classList.add('active');\r\n                }\r\n            });\r\n        }\r\n        __webpack_require__.e(/*! import() */ \"node_modules_animation-felix_src_css_reveal_reveal9_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/reveal/reveal9.css */ \"./node_modules/animation-felix/src/css/reveal/reveal9.css\")).then(({default: reveal9}) => {\r\n        }).catch(error => 'An error occurred while loading reveal9');\r\n    }\r\n}\r\n\r\nfunction text1() {\r\n    let text1 = document.getElementsByClassName('text1');\r\n    if (text1[0]) {\r\n        for (let i = 0, len = text1.length; i < len; i++) {\r\n            let myElem = text1[i];\r\n            let textMyElem = myElem.textContent;\r\n            myElem.innerHTML = \"\";\r\n            let letters = 0, lengthLetter = textMyElem.length;\r\n            for (letters; letters < lengthLetter; letters++) {\r\n                if (textMyElem[letters] === \" \") {\r\n                    myElem.innerHTML += \" \";\r\n                } else {\r\n                    myElem.innerHTML += \"<span>\" + textMyElem[letters] + \"</span>\";\r\n                }\r\n            }\r\n        }\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_text_text1_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/text/text1.css */ \"./node_modules/animation-felix/src/css/text/text1.css\")).then(({default: text1}) => {\r\n        }).catch(error => 'An error occurred while loading text1');\r\n    }\r\n}\r\n\r\nfunction text2(url) {\r\n    let text2 = document.getElementsByClassName('text2');\r\n    if (text2[0]) {\r\n        for (let i = 0, len = text2.length; i < len; i++) {\r\n            let myElem = text2[i];\r\n            myElem.style.backgroundImage = \"url('\" + url + \"')\";\r\n\r\n            if (isElementInViewport(myElem)) {\r\n                myElem.classList.add('active');\r\n            }\r\n\r\n            window.addEventListener('scroll', function () {\r\n                if (isElementInViewport(myElem)) {\r\n                    myElem.classList.add('active');\r\n                }\r\n            });\r\n        }\r\n        __webpack_require__.e(/*! import() */ \"node_modules_animation-felix_src_css_text_text2_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/text/text2.css */ \"./node_modules/animation-felix/src/css/text/text2.css\")).then(({default: text2}) => {\r\n        }).catch(error => 'An error occurred while loading text2');\r\n    }\r\n}\r\n\r\nfunction text3() {\r\n    let texts3 = document.getElementsByClassName('text3');\r\n    if (texts3[0]) {\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_text_text3_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/text/text3.css */ \"./node_modules/animation-felix/src/css/text/text3.css\")).then(({default: text3}) => {\r\n        }).catch(error => 'An error occurred while loading text3');\r\n    }\r\n}\r\n\r\nfunction text4() {\r\n    let texts4 = document.getElementsByClassName('text4');\r\n    if (texts4[0]) {\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_text_text4_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/text/text4.css */ \"./node_modules/animation-felix/src/css/text/text4.css\")).then(({default: text4}) => {\r\n        }).catch(error => 'An error occurred while loading text4');\r\n    }\r\n}\r\n\r\nfunction text5() {\r\n    let texts5 = document.getElementsByClassName('text5');\r\n    if (texts5[0]) {\r\n        __webpack_require__.e(/*! import() */ \"node_modules_animation-felix_src_css_text_text5_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/text/text5.css */ \"./node_modules/animation-felix/src/css/text/text5.css\")).then(({default: text5}) => {\r\n            for (let i = 0, len = texts5.length; i < len; i++) {\r\n                let myElem = texts5[i];\r\n                let textMyElem = myElem.textContent;\r\n                myElem.innerHTML = \"\";\r\n                let letters = 0, lengthLetter = textMyElem.length;\r\n                for (letters; letters < lengthLetter; letters++) {\r\n                    if (textMyElem[letters] === \" \") {\r\n                        myElem.innerHTML += \"<span>&nbsp;</span>\";\r\n                    } else {\r\n                        myElem.innerHTML += \"<span>\" + textMyElem[letters] + \"</span>\";\r\n                    }\r\n                }\r\n\r\n                let spans = myElem.children;\r\n                let counter = 1;\r\n                for (let c = 0, lenc = spans.length; c < lenc; c++) {\r\n                    let mySpan = spans[c];\r\n                    mySpan.style.animationDelay = counter * 0.1 + 's';\r\n                    mySpan.style.animationName = \"rampUp\";\r\n                    counter++;\r\n                }\r\n\r\n                if (isElementInViewport(myElem)) {\r\n                    myElem.classList.add('active');\r\n                }\r\n                window.addEventListener('scroll', function () {\r\n                    if (isElementInViewport(myElem)) {\r\n                        myElem.classList.add('active');\r\n                    }\r\n                });\r\n            }\r\n        }).catch(error => 'An error occurred while loading text5');\r\n    }\r\n}\r\n\r\nfunction text6() {\r\n    let texts6 = document.getElementsByClassName('text6');\r\n    if (texts6[0]) {\r\n        __webpack_require__.e(/*! import() */ \"node_modules_animation-felix_src_css_text_text6_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/text/text6.css */ \"./node_modules/animation-felix/src/css/text/text6.css\")).then(({default: text6}) => {\r\n            for (let i = 0, len = texts6.length; i < len; i++) {\r\n                let myElem = texts6[i];\r\n                let textMyElem = myElem.textContent;\r\n                myElem.innerHTML = \"\";\r\n                let letters = 0, lengthLetter = textMyElem.length;\r\n                for (letters; letters < lengthLetter; letters++) {\r\n                    if (textMyElem[letters] === \" \") {\r\n                        myElem.innerHTML += \"<span>&nbsp;</span>\";\r\n                    } else {\r\n                        myElem.innerHTML += \"<span>\" + textMyElem[letters] + \"</span>\";\r\n                    }\r\n                }\r\n\r\n                let spans = myElem.children;\r\n                let counter = 1;\r\n                for (let c = 0, lenc = spans.length; c < lenc; c++) {\r\n                    let mySpan = spans[c];\r\n                    mySpan.style.animationDelay = counter * 0.1 + 's';\r\n                    mySpan.style.animationName = \"rampUpText6\";\r\n                    counter++;\r\n                }\r\n\r\n                if (isElementInViewport(myElem)) {\r\n                    myElem.classList.add('active');\r\n                }\r\n                window.addEventListener('scroll', function () {\r\n                    if (isElementInViewport(myElem)) {\r\n                        myElem.classList.add('active');\r\n                    }\r\n                });\r\n            }\r\n        }).catch(error => 'An error occurred while loading text6');\r\n    }\r\n}\r\n\r\nfunction text7() {\r\n    let texts7 = document.getElementsByClassName('text7');\r\n    if (texts7[0]) {\r\n        __webpack_require__.e(/*! import() */ \"node_modules_animation-felix_src_css_text_text7_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/text/text7.css */ \"./node_modules/animation-felix/src/css/text/text7.css\")).then(({default: text7}) => {\r\n        }).catch(error => 'An error occurred while loading text7');\r\n    }\r\n}\r\n\r\nfunction share() {\r\n    __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_share_share_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/share/share.css */ \"./node_modules/animation-felix/src/css/share/share.css\")).then(({default: share}) => {\r\n    }).catch(error => 'An error occurred while loading share');\r\n\r\n    __webpack_require__.e(/*! import() */ \"node_modules_animation-felix_src_js_share_js\").then(__webpack_require__.t.bind(__webpack_require__, /*! animation-felix/src/js/share.js */ \"./node_modules/animation-felix/src/js/share.js\", 23)).then(({default: sharejs}) => {\r\n    }).catch(error => 'An error occurred while loading sharejs');\r\n}\r\n\r\nfunction button1() {\r\n    let buttons1 = document.getElementsByClassName('button1');\r\n    if (buttons1[0]) {\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_button_button1_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/button/button1.css */ \"./node_modules/animation-felix/src/css/button/button1.css\")).then(({default: button1}) => {\r\n            for (let i = 0, len = buttons1.length; i < len; i++) {\r\n                let myElem = buttons1[i];\r\n                let optionLink = getOptionLink(myElem);\r\n\r\n                let containerButton = addElement('div', 'container-button1', {addTo: myElem.parentNode});\r\n                let aLink = addElement('a', 'button1', {\r\n                    target: optionLink.targetMyElem,\r\n                    href: optionLink.linkMyElem,\r\n                    id: optionLink.idMyElem,\r\n                    rel: optionLink.relMyElem,\r\n                    addTo: containerButton\r\n                });\r\n                let firstSpan = addElement('span', 'circle', {addTo: aLink});\r\n                let secondSpan = addElement('span', ['icon', 'arrow'], {addTo: firstSpan});\r\n                let thirdSpan = addElement('span', 'button-text', {text: optionLink.textMyElem, addTo: aLink});\r\n                myElem.remove();\r\n            }\r\n        }).catch(error => 'An error occurred while loading button1');\r\n    }\r\n}\r\n\r\nfunction button3() {\r\n    let buttons3 = document.getElementsByClassName('button3');\r\n    if (buttons3[0]) {\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_button_button3_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/button/button3.css */ \"./node_modules/animation-felix/src/css/button/button3.css\")).then(({default: button3}) => {\r\n            for (let i = 0, len = buttons3.length; i < len; i++) {\r\n                let myElem = buttons3[i];\r\n                let optionLink = getOptionLink(myElem);\r\n\r\n                let containerButton = addElement('div', 'container-button3', {addTo: myElem.parentNode});\r\n                let aLink = addElement('a', 'button3', {\r\n                    target: optionLink.targetMyElem,\r\n                    href: optionLink.linkMyElem,\r\n                    id: optionLink.idMyElem,\r\n                    rel: optionLink.relMyElem,\r\n                    addTo: containerButton\r\n                });\r\n                let firstSpan = addElement('span', '', {text: optionLink.textMyElem, addTo: aLink});\r\n                let secondDiv = addElement('div', 'd-inline-block', {\r\n                    text: '<svg width=\"13px\" height=\"10px\" viewBox=\"0 0 13 10\"><path d=\"M1,5 L11,5\"></path><polyline points=\"8 1 12 5 8 9\"></polyline></svg>',\r\n                    addTo: aLink\r\n                });\r\n                myElem.remove();\r\n            }\r\n        }).catch(error => 'An error occurred while loading button3');\r\n    }\r\n}\r\n\r\nfunction button4() {\r\n    let buttons4 = document.getElementsByClassName('button4');\r\n    if (buttons4[0]) {\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_button_button4_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/button/button4.css */ \"./node_modules/animation-felix/src/css/button/button4.css\")).then(({default: button4}) => {\r\n            for (let i = 0, len = buttons4.length; i < len; i++) {\r\n                let myElem = buttons4[i];\r\n                let optionLink = getOptionLink(myElem);\r\n\r\n                let containerButton = addElement('div', 'container-button4', {addTo: myElem.parentNode});\r\n                let aLink = addElement('a', 'button4', {\r\n                    target: optionLink.targetMyElem,\r\n                    href: optionLink.linkMyElem,\r\n                    id: optionLink.idMyElem,\r\n                    rel: optionLink.relMyElem,\r\n                    addTo: containerButton,\r\n                    text: optionLink.textMyElem\r\n                });\r\n                myElem.remove();\r\n            }\r\n        }).catch(error => 'An error occurred while loading button4');\r\n    }\r\n}\r\n\r\nfunction button5() {\r\n    let buttons5 = document.getElementsByClassName('button5');\r\n    if (buttons5[0]) {\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_button_button5_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/button/button5.css */ \"./node_modules/animation-felix/src/css/button/button5.css\")).then(({default: button5}) => {\r\n            for (let i = 0, len = buttons5.length; i < len; i++) {\r\n                let myElem = buttons5[i];\r\n                let optionLink = getOptionLink(myElem);\r\n\r\n                let containerButton = addElement('div', 'container-button5', {addTo: myElem.parentNode});\r\n                let aLink = addElement('a', 'button5', {\r\n                    target: optionLink.targetMyElem,\r\n                    href: optionLink.linkMyElem,\r\n                    id: optionLink.idMyElem,\r\n                    rel: optionLink.relMyElem,\r\n                    addTo: containerButton,\r\n                    text: optionLink.textMyElem\r\n                });\r\n                myElem.remove();\r\n            }\r\n        }).catch(error => 'An error occurred while loading button5');\r\n    }\r\n}\r\n\r\nfunction button6() {\r\n    let buttons6 = document.getElementsByClassName('button6');\r\n    if (buttons6[0]) {\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_button_button6_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/button/button6.css */ \"./node_modules/animation-felix/src/css/button/button6.css\")).then(({default: button6}) => {\r\n            for (let i = 0, len = buttons6.length; i < len; i++) {\r\n                let myElem = buttons6[i];\r\n                let optionLink = getOptionLink(myElem);\r\n\r\n                let containerButton = addElement('div', 'container-button6', {addTo: myElem.parentNode});\r\n\r\n                for (let n = 0; n < 10; n++) {\r\n                    addElement('span', 'particles-circle', {addTo: containerButton});\r\n                }\r\n\r\n                let aLink = addElement('a', 'button6', {\r\n                    target: optionLink.targetMyElem,\r\n                    href: optionLink.linkMyElem,\r\n                    id: optionLink.idMyElem,\r\n                    rel: optionLink.relMyElem,\r\n                    addTo: containerButton,\r\n                    text: optionLink.textMyElem\r\n                });\r\n                myElem.remove();\r\n\r\n                aLink.onclick = function (e) {\r\n                    e.preventDefault();\r\n                    containerButton.classList.add('active');\r\n                    setTimeout(function () {\r\n                        containerButton.classList.remove('active');\r\n                    }, 2000);\r\n                };\r\n            }\r\n        }).catch(error => 'An error occurred while loading button6');\r\n    }\r\n}\r\n\r\nfunction button7() {\r\n    let buttons7 = document.getElementsByClassName('button7');\r\n    if (buttons7[0]) {\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_button_button7_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/button/button7.css */ \"./node_modules/animation-felix/src/css/button/button7.css\")).then(({default: button7}) => {\r\n            for (let i = 0, len = buttons7.length; i < len; i++) {\r\n                let myElem = buttons7[i];\r\n                let optionLink = getOptionLink(myElem);\r\n\r\n                let containerButton = addElement('div', 'container-button7', {addTo: myElem.parentNode});\r\n\r\n\r\n                let aLink = addElement('a', 'button7', {\r\n                    target: optionLink.targetMyElem,\r\n                    href: optionLink.linkMyElem,\r\n                    id: optionLink.idMyElem,\r\n                    rel: optionLink.relMyElem,\r\n                    addTo: containerButton,\r\n                    text: optionLink.textMyElem\r\n                });\r\n\r\n                addElement('div', 'horizontal', {addTo: aLink});\r\n                addElement('div', 'vertical', {addTo: aLink});\r\n\r\n                myElem.remove();\r\n            }\r\n        }).catch(error => 'An error occurred while loading button7');\r\n    }\r\n}\r\n\r\nfunction button8() {\r\n    let buttons8 = document.getElementsByClassName('button8');\r\n    if (buttons8[0]) {\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_button_button8_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/button/button8.css */ \"./node_modules/animation-felix/src/css/button/button8.css\")).then(({default: button8}) => {\r\n            for (let i = 0, len = buttons8.length; i < len; i++) {\r\n                let myElem = buttons8[i];\r\n                let optionLink = getOptionLink(myElem);\r\n\r\n                let containerButton = addElement('div', 'container-button8', {addTo: myElem.parentNode});\r\n                let aLink = addElement('a', 'button8', {\r\n                    target: optionLink.targetMyElem,\r\n                    href: optionLink.linkMyElem,\r\n                    id: optionLink.idMyElem,\r\n                    rel: optionLink.relMyElem,\r\n                    addTo: containerButton,\r\n                    text: optionLink.textMyElem\r\n                });\r\n                myElem.remove();\r\n            }\r\n        }).catch(error => 'An error occurred while loading button8');\r\n    }\r\n}\r\n\r\nfunction button9() {\r\n    let buttons9 = document.getElementsByClassName('button9');\r\n    if (buttons9[0]) {\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_button_button9_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/button/button9.css */ \"./node_modules/animation-felix/src/css/button/button9.css\")).then(({default: button9}) => {\r\n            for (let i = 0, len = buttons9.length; i < len; i++) {\r\n                let myElem = buttons9[i];\r\n                let optionLink = getOptionLink(myElem);\r\n\r\n                let containerButton = addElement('div', 'container-button9', {addTo: myElem.parentNode});\r\n                let aLink = addElement('a', 'button9', {\r\n                    target: optionLink.targetMyElem,\r\n                    href: optionLink.linkMyElem,\r\n                    id: optionLink.idMyElem,\r\n                    rel: optionLink.relMyElem,\r\n                    addTo: containerButton\r\n                });\r\n                let firstSpan = addElement('span', '', {text: optionLink.textMyElem, addTo: aLink});\r\n                let secondDiv = addElement('div', 'd-inline-block', {\r\n                    text: '<svg width=\"13px\" height=\"10px\" viewBox=\"0 0 13 10\"><path d=\"M1,5 L11,5\"></path><polyline points=\"8 1 12 5 8 9\"></polyline></svg>',\r\n                    addTo: aLink\r\n                });\r\n                myElem.remove();\r\n            }\r\n        }).catch(error => 'An error occurred while loading button9');\r\n    }\r\n}\r\n\r\n\r\nfunction button10() {\r\n    let buttons10 = document.getElementsByClassName('button10');\r\n    if (buttons10[0]) {\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_button_button10_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/button/button10.css */ \"./node_modules/animation-felix/src/css/button/button10.css\")).then(({default: button10}) => {\r\n            for (let i = 0, len = buttons10.length; i < len; i++) {\r\n                let myElem = buttons10[i];\r\n                let optionLink = getOptionLink(myElem);\r\n\r\n                let containerButton = addElement('div', 'container-button10', {addTo: myElem.parentNode});\r\n                let aLink = addElement('a', 'button10', {\r\n                    target: optionLink.targetMyElem,\r\n                    href: optionLink.linkMyElem,\r\n                    id: optionLink.idMyElem,\r\n                    rel: optionLink.relMyElem,\r\n                    addTo: containerButton,\r\n                    text: optionLink.textMyElem\r\n                });\r\n                myElem.remove();\r\n            }\r\n        }).catch(error => 'An error occurred while loading button10');\r\n    }\r\n}\r\n\r\n\r\nfunction button11() {\r\n    let buttons11 = document.getElementsByClassName('button11');\r\n    if (buttons11[0]) {\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_button_button11_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/button/button11.css */ \"./node_modules/animation-felix/src/css/button/button11.css\")).then(({default: button11}) => {\r\n            for (let i = 0, len = buttons11.length; i < len; i++) {\r\n                let myElem = buttons11[i];\r\n                let optionLink = getOptionLink(myElem);\r\n\r\n                let containerButton = addElement('div', 'container-button11', {addTo: myElem.parentNode});\r\n                let aLink = addElement('a', 'button11', {\r\n                    target: optionLink.targetMyElem,\r\n                    href: optionLink.linkMyElem,\r\n                    id: optionLink.idMyElem,\r\n                    rel: optionLink.relMyElem,\r\n                    addTo: containerButton,\r\n                    text: optionLink.textMyElem\r\n                });\r\n                myElem.remove();\r\n            }\r\n        }).catch(error => 'An error occurred while loading button11');\r\n    }\r\n}\r\n\r\n\r\nfunction button12() {\r\n    let buttons12 = document.getElementsByClassName('button12');\r\n    if (buttons12[0]) {\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_button_button12_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/button/button12.css */ \"./node_modules/animation-felix/src/css/button/button12.css\")).then(({default: button12}) => {\r\n            for (let i = 0, len = buttons12.length; i < len; i++) {\r\n                let myElem = buttons12[i];\r\n                let optionLink = getOptionLink(myElem);\r\n\r\n                let containerButton = addElement('div', 'container-button12', {addTo: myElem.parentNode});\r\n                let aLink = addElement('a', 'button12', {\r\n                    target: optionLink.targetMyElem,\r\n                    href: optionLink.linkMyElem,\r\n                    id: optionLink.idMyElem,\r\n                    rel: optionLink.relMyElem,\r\n                    addTo: containerButton,\r\n                    text: optionLink.textMyElem\r\n                });\r\n                myElem.remove();\r\n            }\r\n        }).catch(error => 'An error occurred while loading button12');\r\n    }\r\n}\r\n\r\nfunction button13() {\r\n    let buttons13 = document.getElementsByClassName('button13');\r\n    if (buttons13[0]) {\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_button_button13_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/button/button13.css */ \"./node_modules/animation-felix/src/css/button/button13.css\")).then(({default: button13}) => {\r\n            for (let i = 0, len = buttons13.length; i < len; i++) {\r\n                let myElem = buttons13[i];\r\n                let optionLink = getOptionLink(myElem);\r\n\r\n                let containerButton = addElement('div', 'container-button13', {addTo: myElem.parentNode});\r\n\r\n\r\n                let aLink = addElement('a', 'button13', {\r\n                    target: optionLink.targetMyElem,\r\n                    href: optionLink.linkMyElem,\r\n                    id: optionLink.idMyElem,\r\n                    rel: optionLink.relMyElem,\r\n                    addTo: containerButton,\r\n                    text: optionLink.textMyElem\r\n                });\r\n\r\n                addElement('div', 'horizontal', {addTo: aLink});\r\n                addElement('div', 'vertical', {addTo: aLink});\r\n\r\n                myElem.remove();\r\n            }\r\n        }).catch(error => 'An error occurred while loading button13');\r\n    }\r\n}\r\n\r\nfunction button14() {\r\n    let buttons14 = document.getElementsByClassName('button14');\r\n    if (buttons14[0]) {\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_button_button14_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/button/button14.css */ \"./node_modules/animation-felix/src/css/button/button14.css\")).then(({default: button14}) => {\r\n        }).catch(error => 'An error occurred while loading button14');\r\n    }\r\n}\r\n\r\nfunction button15() {\r\n    let buttons15 = document.getElementsByClassName('button15');\r\n    if (buttons15[0]) {\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_button_button15_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/button/button15.css */ \"./node_modules/animation-felix/src/css/button/button15.css\")).then(({default: button15}) => {\r\n            for (let i = 0, len = buttons15.length; i < len; i++) {\r\n                let myElem = buttons15[i];\r\n                let textContent = myElem.textContent;\r\n                myElem.textContent = \"\";\r\n                addElement('span', '', {addTo: myElem, text: textContent});\r\n            }\r\n        }).catch(error => 'An error occurred while loading button15');\r\n    }\r\n}\r\n\r\nfunction menu1() {\r\n    let menus1 = document.getElementsByClassName('menu1');\r\n    if (menus1[0]) {\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_menu_menu1_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/menu/menu1.css */ \"./node_modules/animation-felix/src/css/menu/menu1.css\")).then(({default: menu1}) => {\r\n            document.getElementsByClassName('navbar-toggler')[0].onclick = function()\r\n            {\r\n                document.getElementById('main-navigation-nav').classList.toggle('nav-active');\r\n            }\r\n        }).catch(error => 'An error occurred while loading menu1');\r\n    }\r\n}\r\n\r\nfunction menu2() {\r\n    let menus2 = document.getElementsByClassName('menu2');\r\n    if (menus2[0]) {\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_menu_menu2_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/menu/menu2.css */ \"./node_modules/animation-felix/src/css/menu/menu2.css\")).then(({default: menu2}) => {\r\n            document.getElementsByClassName('navbar-toggler')[0].onclick = function()\r\n            {\r\n                document.getElementById('main-navigation-nav').classList.toggle('nav-active');\r\n            }\r\n        }).catch(error => 'An error occurred while loading menu2');\r\n    }\r\n}\r\n\r\nfunction menu3() {\r\n    let menus3 = document.getElementsByClassName('menu3');\r\n    if (menus3[0]) {\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_menu_menu3_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/menu/menu3.css */ \"./node_modules/animation-felix/src/css/menu/menu3.css\")).then(({default: menu3}) => {\r\n            document.getElementsByClassName('navbar-toggler')[0].onclick = function()\r\n            {\r\n                document.getElementById('main-navigation-nav').classList.toggle('nav-active');\r\n            }\r\n        }).catch(error => 'An error occurred while loading menu3');\r\n    }\r\n}\r\n\r\nfunction menu4() {\r\n    let menus4 = document.getElementsByClassName('menu4');\r\n    if (menus4[0]) {\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_menu_menu4_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/menu/menu4.css */ \"./node_modules/animation-felix/src/css/menu/menu4.css\")).then(({default: menu4}) => {\r\n            document.getElementsByClassName('navbar-toggler')[0].onclick = function()\r\n            {\r\n                document.getElementById('main-navigation-nav').classList.toggle('nav-active');\r\n            }\r\n        }).catch(error => 'An error occurred while loading menu4');\r\n    }\r\n}\r\n\r\n\r\nfunction menu5() {\r\n    let menus5 = document.getElementsByClassName('menu5');\r\n    if (menus5[0]) {\r\n        __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_css_menu_menu5_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/menu/menu5.css */ \"./node_modules/animation-felix/src/css/menu/menu5.css\")).then(({default: menu5}) => {\r\n            document.getElementsByClassName('navbar-toggler')[0].onclick = function()\r\n            {\r\n                document.getElementById('main-navigation-nav').classList.toggle('nav-active');\r\n            }\r\n        }).catch(error => 'An error occurred while loading menu4');\r\n    }\r\n}\r\n\r\nfunction parallax1(force) {\r\n    let parallaxs1 = document.getElementsByClassName('parallax1');\r\n    if (parallaxs1[0]) {\r\n        let forceInitial = force;\r\n        let lastScrollTop = 0;\r\n\r\n        for (let i = 0, len = parallaxs1.length; i < len; i++) {\r\n            let myElem = parallaxs1[i];\r\n\r\n            window.addEventListener('scroll', function () {\r\n                let st = window.pageYOffset || document.documentElement.scrollTop; // Credits: \"https://github.com/qeremy/so/blob/master/so.dom.js#L426\"\r\n\r\n                if (isElementInViewport(myElem)) {\r\n                    let yPos = null;\r\n                    if (st > lastScrollTop) {\r\n                        // downscroll code\r\n                        yPos = forceInitial + force;\r\n                    } else {\r\n                        // upscroll code\r\n                        yPos = -forceInitial + force;\r\n                    }\r\n                    force = yPos;\r\n                    let coords = '0% ' + -yPos + 'px';\r\n                    myElem.style.backgroundPosition = coords;\r\n                }\r\n                lastScrollTop = st <= 0 ? 0 : st;\r\n            }, false);\r\n        }\r\n    }\r\n}\r\n\r\nfunction changeBackground(color, className, animation) {\r\n    if (!animation) {\r\n        animation = \"linear\";\r\n    }\r\n    let changeBackgrounds = document.getElementsByClassName(className);\r\n    let body = document.getElementById('body');\r\n    if (changeBackgrounds[0]) {\r\n        for (let i = 0, len = changeBackgrounds.length; i < len; i++) {\r\n            let myElem = changeBackgrounds[i];\r\n            body.style.transition = \"all 1s \" + animation;\r\n\r\n            if (isElementInViewport(myElem)) {\r\n                body.style.backgroundColor = color;\r\n            }\r\n\r\n            window.addEventListener('scroll', function () {\r\n                if (isElementInViewport(myElem)) {\r\n                    body.style.backgroundColor = color;\r\n                } else {\r\n                    body.style.backgroundColor = \"initial\";\r\n                }\r\n            });\r\n        }\r\n    }\r\n}\r\n\r\nfunction drawsvg() {\r\n    let drawsvgs = document.getElementsByClassName('drawsvg');\r\n    if (drawsvgs[0]) {\r\n        __webpack_require__.e(/*! import() */ \"node_modules_animation-felix_src_css_reveal_drawsvg_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/reveal/drawsvg.css */ \"./node_modules/animation-felix/src/css/reveal/drawsvg.css\")).then(({default: drawsvg}) => {\r\n            for (let i = 0, len = drawsvgs.length; i < len; i++) {\r\n                let myElem = drawsvgs[i];\r\n\r\n                if (isElementInViewport(myElem)) {\r\n                    myElem.classList.add('active');\r\n                }\r\n\r\n                window.addEventListener('scroll', function () {\r\n                    if (isElementInViewport(myElem)) {\r\n                        myElem.classList.add('active');\r\n                    }\r\n                });\r\n            }\r\n        }).catch(error => 'An error occurred while loading drawsvg');\r\n    }\r\n}\r\n\r\nfunction transition1() {\r\n    let transitions1 = document.getElementsByClassName('transition1');\r\n    if (transitions1[0]) {\r\n        __webpack_require__.e(/*! import() */ \"node_modules_animation-felix_src_css_transition_transition1_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/transition/transition1.css */ \"./node_modules/animation-felix/src/css/transition/transition1.css\")).then(({default: transition1}) => {\r\n        }).catch(error => 'An error occurred while loading transition1');\r\n    }\r\n}\r\n\r\nfunction laxAddons() {\r\n    __webpack_require__.e(/*! import() */ \"vendors-node_modules_animation-felix_src_js_addonsLax_js\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/js/addonsLax.js */ \"./node_modules/animation-felix/src/js/addonsLax.js\")).then(({default: addonsLax}) => {\r\n    }).catch(error => 'An error occurred while loading addonsLax');\r\n}\r\n\r\nfunction cursor(size, colorFirst, colorSecond = null) {\r\n    if (document.getElementsByClassName('custom-cursor')[0]) {\r\n        __webpack_require__.e(/*! import() */ \"node_modules_animation-felix_src_css_cursor_cursor_css\").then(__webpack_require__.bind(__webpack_require__, /*! animation-felix/src/css/cursor/cursor.css */ \"./node_modules/animation-felix/src/css/cursor/cursor.css\")).then(({default: cursor}) => {\r\n        }).catch(error => 'An error occurred while loading cursor');\r\n\r\n        let cursor1 = addElement('div', ['cursor', 'cursor-follower']);\r\n        let cursor2 = null;\r\n        if (colorSecond) {\r\n            cursor2 = addElement('div', ['cursor', 'cursor-dot']);\r\n        }\r\n\r\n        cursor1.style.width = size + 'px';\r\n        cursor1.style.height = size + 'px';\r\n        cursor1.style.background = colorFirst;\r\n\r\n        if (cursor2) {\r\n            cursor2.style.width = size + 'px';\r\n            cursor2.style.height = size + 'px';\r\n            cursor2.style.background = colorSecond;\r\n        }\r\n\r\n\r\n        let mouseTarget = document.getElementsByClassName('titlezoomcursor');\r\n        for (let i = 0, len = mouseTarget.length; i < len; i++) {\r\n            mouseTarget[i].addEventListener('mouseenter', e => {\r\n                cursor1.classList.add('focus');\r\n                cursor1.style.width = size * 4 + 'px';\r\n                cursor1.style.height = size * 4 + 'px';\r\n\r\n                if (cursor2) {\r\n                    cursor2.classList.add('focus');\r\n                    cursor2.style.width = size * 4 + 'px';\r\n                    cursor2.style.height = size * 4 + 'px';\r\n                }\r\n            })\r\n        }\r\n\r\n        for (let i = 0, len = mouseTarget.length; i < len; i++) {\r\n            mouseTarget[i].addEventListener('mouseleave', e => {\r\n                cursor1.classList.remove('focus');\r\n                cursor1.style.width = size + 'px';\r\n                cursor1.style.height = size + 'px';\r\n\r\n                if (cursor2) {\r\n                    cursor2.classList.remove('focus');\r\n                    cursor2.style.width = size + 'px';\r\n                    cursor2.style.height = size + 'px';\r\n                }\r\n            })\r\n        }\r\n\r\n        let onmousemove = function (e) {\r\n            let xpos = e.pageX;\r\n            let ypos = e.pageY;\r\n            cursor1.style.left = xpos + 'px';\r\n            cursor1.style.top = ypos + 'px';\r\n\r\n            if (colorSecond) {\r\n                cursor2.style.left = xpos + 'px';\r\n                cursor2.style.top = ypos + 'px';\r\n            }\r\n        }\r\n\r\n        document.addEventListener('mousemove', onmousemove);\r\n    }\r\n}\r\n\r\nfunction addElement(type, classes, options = null) {\r\n    let newDiv = document.createElement(type);\r\n\r\n    if (Array.isArray(classes)) {\r\n        newDiv.classList.add(...classes);\r\n    } else {\r\n        if (classes !== '') {\r\n            newDiv.classList.add(classes);\r\n        }\r\n    }\r\n\r\n    if (options && options.text) {\r\n        newDiv.innerHTML = options.text;\r\n    }\r\n\r\n    if (options && options.id) {\r\n        newDiv.setAttribute('id', options.id);\r\n    }\r\n\r\n    if (options && options.href) {\r\n        newDiv.setAttribute('href', options.href);\r\n    }\r\n\r\n    if (options && options.rel) {\r\n        newDiv.setAttribute('rel', options.rel);\r\n    }\r\n\r\n    if (options && options.target) {\r\n        newDiv.setAttribute('target', options.target);\r\n    }\r\n\r\n    if (options && options.addTo) {\r\n        options.addTo.appendChild(newDiv);\r\n    } else {\r\n        document.body.appendChild(newDiv);\r\n    }\r\n\r\n    return newDiv;\r\n}\r\n\r\nfunction getOptionLink(elem) {\r\n    let textMyElem = elem.innerHTML;\r\n    let linkMyElem = elem.getAttribute('href');\r\n    let idMyElem = elem.getAttribute('id');\r\n    let relMyElem = elem.getAttribute('rel');\r\n    let targetMyElem = elem.getAttribute('target');\r\n\r\n    return {\r\n        textMyElem: textMyElem,\r\n        linkMyElem: linkMyElem,\r\n        idMyElem: idMyElem,\r\n        relMyElem: relMyElem,\r\n        targetMyElem: targetMyElem\r\n    }\r\n}\r\n\r\nfunction isElementInViewport(el) {\r\n    let rect = el.getBoundingClientRect();\r\n    let html = document.documentElement;\r\n    return (\r\n        rect.top >= 0 &&\r\n        rect.left >= 0 &&\r\n        rect.bottom <= (window.innerHeight || html.clientHeight) &&\r\n        rect.right <= (window.innerWidth || html.clientWidth)\r\n    );\r\n}\r\n\n\n//# sourceURL=webpack:///./node_modules/animation-felix/src/js/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/create fake namespace object */
/******/ 	(() => {
/******/ 		var getProto = Object.getPrototypeOf ? (obj) => Object.getPrototypeOf(obj) : (obj) => obj.__proto__;
/******/ 		var leafPrototypes;
/******/ 		// create a fake namespace object
/******/ 		// mode & 1: value is a module id, require it
/******/ 		// mode & 2: merge all properties of value into the ns
/******/ 		// mode & 4: return value when already ns object
/******/ 		// mode & 16: return value when it's Promise-like
/******/ 		// mode & 8|1: behave like require
/******/ 		__webpack_require__.t = function(value, mode) {
/******/ 			if(mode & 1) value = this(value);
/******/ 			if(mode & 8) return value;
/******/ 			if(typeof value === 'object' && value) {
/******/ 				if((mode & 4) && value.__esModule) return value;
/******/ 				if((mode & 16) && typeof value.then === 'function') return value;
/******/ 			}
/******/ 			var ns = Object.create(null);
/******/ 			__webpack_require__.r(ns);
/******/ 			var def = {};
/******/ 			leafPrototypes = leafPrototypes || [null, getProto({}), getProto([]), getProto(getProto)];
/******/ 			for(var current = mode & 2 && value; typeof current == 'object' && !~leafPrototypes.indexOf(current); current = getProto(current)) {
/******/ 				Object.getOwnPropertyNames(current).forEach(key => def[key] = () => value[key]);
/******/ 			}
/******/ 			def['default'] = () => value;
/******/ 			__webpack_require__.d(ns, def);
/******/ 			return ns;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference async chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".bundle.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		// data-webpack is not used as build has no uniqueName
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => fn(event));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			;
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => {
/******/ 								installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 							});
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId);
/******/ 						} else installedChunks[chunkId] = 0;
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no deferred startup
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 		
/******/ 		// no deferred startup
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
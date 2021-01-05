/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["threejs_scene_js"],{

/***/ "./threejs/scene.js":
/*!**************************!*\
  !*** ./threejs/scene.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\n\r\nconst scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\r\nconst camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );\r\n\r\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\r\nrenderer.setSize( window.innerWidth, window.innerHeight );\r\ndocument.body.appendChild( renderer.domElement );\r\n\r\nconst geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry();\r\nconst material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial( { color: 0x00ff00 } );\r\nconst cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh( geometry, material );\r\nscene.add( cube );\r\n\r\ncamera.position.z = 5;\r\n\r\nconst animate = function () {\r\n    requestAnimationFrame( animate );\r\n\r\n    cube.rotation.x += 0.01;\r\n    cube.rotation.y += 0.01;\r\n\r\n    renderer.render( scene, camera );\r\n};\r\n\r\nanimate();\n\n//# sourceURL=webpack:///./threejs/scene.js?");

/***/ })

}]);
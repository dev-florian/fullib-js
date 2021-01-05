/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(self["webpackChunk"] = self["webpackChunk"] || []).push([["threejs_cube_js"],{

/***/ "./threejs/cube.js":
/*!*************************!*\
  !*** ./threejs/cube.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n// https://discoverthreejs.com/book/first-steps/first-scene/#create-scene\r\n\r\n\r\n// Get a reference to the container element that will hold our scene\r\nconst container = document.querySelector('#cube-container');\r\n\r\n// create a Scene\r\nconst scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\r\n\r\n// Set the background color\r\nscene.background = new three__WEBPACK_IMPORTED_MODULE_0__.Color('skyblue');\r\n\r\n// Create a camera\r\nconst fov = 35; // AKA Field of View\r\nconst aspect = container.clientWidth / container.clientHeight;\r\nconst near = 0.1; // the near clipping plane\r\nconst far = 100; // the far clipping plane\r\n\r\nconst camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(fov, aspect, near, far);\r\n\r\n// every object is initially created at ( 0, 0, 0 )\r\n// move the camera back so we can view the scene\r\ncamera.position.set(0, 0, 10);\r\n\r\n// create a geometry\r\nconst geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxBufferGeometry(2, 2, 2);\r\n\r\n// create a default (white) Basic material\r\nconst material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({ color: 'purple' });\r\n\r\n// Create a directional light\r\nconst light = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight('white', 8);\r\n// move the light right, up, and towards us\r\nlight.position.set(10, 10, 10);\r\n\r\nconst ambientLight = new three__WEBPACK_IMPORTED_MODULE_0__.HemisphereLight(\r\n    'white', // bright sky color\r\n    'darkslategrey', // dim ground color\r\n    5, // intensity\r\n);\r\n\r\n// create a Mesh containing the geometry and material\r\nconst cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);\r\n\r\n// add the mesh to the scene\r\nscene.add(cube, light,ambientLight,);\r\n\r\n// create the renderer\r\nconst renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer({ antialias: true });\r\n// turn on the physically correct lighting model\r\nrenderer.physicallyCorrectLights = true;\r\n\r\n// next, set the renderer to the same size as our container element\r\nrenderer.setSize(container.clientWidth, container.clientHeight);\r\n\r\n// finally, set the pixel ratio so that our scene will look good on HiDPI displays\r\nrenderer.setPixelRatio(window.devicePixelRatio);\r\n\r\n// add the automatically created <canvas> element to the page\r\ncontainer.append(renderer.domElement);\r\n\r\n// render, or 'create a still image', of the scene\r\nrenderer.render(scene, camera);\r\n\r\ndocument.getElementById('changeview').onclick = function(){\r\n    cube.rotation.x += 0.1;\r\n    cube.rotation.y += 0.1;\r\n    renderer.render(scene, camera);\r\n};\r\n\n\n//# sourceURL=webpack:///./threejs/cube.js?");

/***/ })

}]);
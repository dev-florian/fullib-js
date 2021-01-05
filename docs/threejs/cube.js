// https://discoverthreejs.com/book/first-steps/first-scene/#create-scene
import * as THREE from 'three';

// Get a reference to the container element that will hold our scene
const container = document.querySelector('#cube-container');

// create a Scene
const scene = new THREE.Scene();

// Set the background color
scene.background = new THREE.Color('skyblue');

// Create a camera
const fov = 35; // AKA Field of View
const aspect = container.clientWidth / container.clientHeight;
const near = 0.1; // the near clipping plane
const far = 100; // the far clipping plane

const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);

// every object is initially created at ( 0, 0, 0 )
// move the camera back so we can view the scene
camera.position.set(0, 0, 10);

// create a geometry
const geometry = new THREE.BoxBufferGeometry(2, 2, 2);

// create a default (white) Basic material
const material = new THREE.MeshStandardMaterial({ color: 'purple' });

// Create a directional light
const light = new THREE.DirectionalLight('white', 8);
// move the light right, up, and towards us
light.position.set(10, 10, 10);

const ambientLight = new THREE.HemisphereLight(
    'white', // bright sky color
    'darkslategrey', // dim ground color
    5, // intensity
);

// create a Mesh containing the geometry and material
const cube = new THREE.Mesh(geometry, material);

// add the mesh to the scene
scene.add(cube, light,ambientLight,);

// create the renderer
const renderer = new THREE.WebGLRenderer({ antialias: true });
// turn on the physically correct lighting model
renderer.physicallyCorrectLights = true;

// next, set the renderer to the same size as our container element
renderer.setSize(container.clientWidth, container.clientHeight);

// finally, set the pixel ratio so that our scene will look good on HiDPI displays
renderer.setPixelRatio(window.devicePixelRatio);

// add the automatically created <canvas> element to the page
container.append(renderer.domElement);

// render, or 'create a still image', of the scene
renderer.render(scene, camera);

document.getElementById('changeview').onclick = function(){
    cube.rotation.x += 0.1;
    cube.rotation.y += 0.1;
    renderer.render(scene, camera);
};

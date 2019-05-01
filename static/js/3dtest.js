import * as THREE from "./threejs/three.module.js"

window.THREE = THREE || {}; 

import { OrbitControls } from "./threejs/OrbitControls.js"
import { GLTFLoader } from "./threejs/GLTFLoader.js"

const CANVAS_WIDTH = 400;
const CANVAS_HEIGHT = 400;

var scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

var camera = new THREE.PerspectiveCamera( 70, CANVAS_WIDTH/CANVAS_HEIGHT, 0.1, 1000 );
camera.position.set(0, 1, 2);
camera.lookAt(scene.position);

var renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setClearColor(0xEEEEEE, 1.0);
renderer.setSize( CANVAS_WIDTH, CANVAS_HEIGHT );

var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshNormalMaterial();
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );

// var loader = new GLTFLoader();
// loader.load("../3d/FortressBotLogo.gltf", function(gltf){
//     scene.add(gltf.scene);
// }, undefined, function(error){
//     console.error(error);
// });

var controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.3;
controls.minPolarAngle = Math.PI / 2;
controls.maxPolarAngle = Math.PI / 2;
// controls.enablePan = false;
// controls.enableZoom = false;
controls.update();

var canvas = document.getElementById('spatial-canvas');
canvas.appendChild( renderer.domElement );
// document.body.appendChild( renderer.domElement );

var animate = function () {
    requestAnimationFrame( animate );

    controls.update();
    // cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render( scene, camera );
};

animate();

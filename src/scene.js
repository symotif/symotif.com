import * as THREE from 'three';

// creating the scene
const scene = new THREE.Scene();

// creating a camera - orthographic camera?
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// creating a renderer
const renderer = new THREE.WebGLRenderer({
	canvas: document.querySelector('#bg'),
})

const geometry = new THREE.BoxGeometry(); // adding a cube

const material = new THREE.MeshStandardMaterial({
	color: 0x00ff00,
	metalness: 0.13
});

const axesHelper = new THREE.axesHelper(5);
scene.add(axesHelper);

const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

const directionalLight = new THREE.DirectionalLight(0x9090aa);
directionalLight.position.set(-10, 10, -10).normalize();
scene.add(directionalLight);

const hemisphereLight = new THREE.HemisphereLight(0xffffff, 0x444444);
hemisphereLight.position.set(1, 1, 1);
scene.add(hemisphereLight);

const renderer;

const animate = () => {
	requestAnimationFrame(animate);
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render(scene, camera);
};

const resize = () => {
	renderer.setSize(window.innerWidth, window.innerHeight);
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
};

export const createScene = (el) => {
	renderer = new THREE.WebGLRenderer({ antialias: true, canvas: el });
	resize();
	animate();
};

window.addEventListener('resize', resize);
<script>
	// import * as Threlte from '@threlte/core';
	// import { onMount } from 'svelte';
	// import { createScene } from '../scene.js';

	// let el;

	// onMount(() => { createScene(el); });

	// import * as THREE from 'three';
	// import { onMount } from 'svelte';
	// import OrbitControls from 'three-orbitcontrols';

	// let canvas;

	// onMount(() => {
	//     const scene = new THREE.Scene();
	//     const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
	//     const renderer = new THREE.WebGLRenderer({ canvas });

	//     const controls = new OrbitControls(camera, renderer.domElement);
	//     controls.enableDamping = true;

	//     renderer.setSize(window.innerWidth, window.innerHeight);
	//     camera.position.z = 5;

	//     // Add lights
	//     const light = new THREE.PointLight(0xffffff, 1);
	//     light.position.set(5, 5, 5);
	//     scene.add(light);

	//     // Add the hexasphericon
	//     const hexasphericon = createHexasphericon();
	//     scene.add(hexasphericon);

	//     // Add the metallic style
	//     const material = new THREE.MeshPhysicalMaterial({
	//         color: 0x8888ff,
	//         metalness: 0.9,
	//         roughness: 0.1,
	//         envMapIntensity: 1.0, // Add environment map if you want reflections
	//     });

	//     // Add animation loop
	//     const animate = () => {
	//         requestAnimationFrame(animate);
	//         hexasphericon.rotation.x += 0.01;
	//         hexasphericon.rotation.y += 0.01;
	//         renderer.render(scene, camera);
	//     };
	//     animate();

	//     // Handle resizing
	//     window.addEventListener('resize', () => {
	//         renderer.setSize(window.innerWidth, window.innerHeight);
	//         camera.aspect = window.innerWidth / window.innerHeight;
	//         camera.updateProjectionMatrix();
	//     });
	// });

	// function createHexasphericon() {
	//     const geometry = new THREE.CylinderGeometry(1, 1, 2, 32);
	//     // Modify to match a hexasphericon if needed
	//     const material = new THREE.MeshStandardMaterial({ color: 0xaaaaaa, metalness: 1, roughness: 0.5 });
	//     return new THREE.Mesh(geometry, material);
	// }

	let isHovered = false;
</script>

<html lang="svelte">
	<!-- <canvas id="bg"></canvas> -->
	<!-- <canvas bind:this={canvas}></canvas> -->
    <div class="scene" class:is-hovered={isHovered}>
        <div class="logo">
            <h1 on:mouseover={() => isHovered = true}
				on:mouseout={() => isHovered = false}>
				symotif
			</h1>
    
            <!-- symotif word -->
            <!-- <svg width="500" height="500" viewBox="0 0 500 500">
                <path id="curve" d="M 100,250 A 150,150 0 1,1 400,250" fill="transparent" />
                <text>
                    <textPath xlink:href="#curve" startOffset="50%" text-anchor="middle">
                    symotif
                    </textPath>
                </text>
            </svg> -->
        </div>
    
        <footer>
            <ul>
                <li><a href="https://www.rchart.dev">rchart</a></li>
                <li><a href="https://www.vejove.app">vejove</a></li>
                <!-- <li><a href="#philosophy">Philosophy</a></li>
                <li><a href="#contact">Contact</a></li> -->
            </ul>
            <p>&copy; 2024 Symotif, LLC</p>
        </footer>
    </div>
</html>

<style lang="postcss">
	/* :global(html) {
        background-color: theme(colors.gray.100);
    } */
	*,
	html {
		color: #d5ecd5;
		font-family: "Kanit", sans-serif;
		user-select: none;
    }
    
    .scene {
        margin: 0;
		height: 100vh;
		background: radial-gradient(
			circle,
			rgba(38, 84, 38, 1) 0%,
			rgba(128, 198, 128, 1) 40%,
			rgba(38, 84, 38, 1) 80%,
			rgba(19, 42, 19, 1) 100%
		);
		background-size: 100% 100%;
        background-position: center;
		animation: waveEffect 8s ease infinite;
    }
    
	.scene.is-hovered {
		animation: pulseEffect 2s ease infinite;
	}

	
	h1 {
		color: #ABD9AB;
	}

	.scene.is-hovered h1 {
		color: #d5ecd5;
	}

	@keyframes waveEffect {
		0% {
			background-size: 100% 100%;
		}
		40% {
			background-size: 700% 700%;
		}
		60% {
			background-size: 125% 125%;
		}
		72% {
			background-size: 150% 150%;
		}
		80% {
			background-size: 100% 100%;
		}
		90% {
			background-size: 175% 175%;
		}
		100% {
			background-size: 100% 100%;
		}
	}

	@keyframes pulseEffect {
		0% {
			background-size: 100% 100%;
		}
		30% {
			background-size: 150% 150%;
		}
		100% {
			background-size: 100% 100%;
		}
	}

	.logo {
		position: absolute;
		top: 50%;
		left: 50%;
		text-align: center;
		transform: translate(-50%, -50%);
		font-size: 5rem;
        font-family: "Kanit", sans-serif;
        font-weight: 400;
        font-style: normal;
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	footer ul {
		font-size: 4rem;
		list-style: none;
		padding: 0;
		display: flex;
		justify-content: center;
		gap: 3rem;
		position: absolute;
		margin: 0;
		bottom: 3rem;
		left: 3rem;
	}

	footer ul li {
		display: inline;
	}

	footer ul li a {
		font-weight: bold;
		transition: color 0.3s;
	}

	a:hover {
		color: #90cd8e;
		text-decoration: none;
		cursor: pointer;
	}

	footer p {
		position: absolute;
		margin: 0;
		bottom: 3rem;
		right: 3rem;
		font-size: 1.5rem;
	}
</style>

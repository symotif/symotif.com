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
		<header>
			<div class="icon">
				<img src="symotif.svg" alt="symotif" />
			</div>

			<ul>
				<!-- <li><a href="#mission">Mission</a></li>
				<li><a href="#jobs">Jobs</a></li>
                <li><a href="#contact">Contact</a></li> -->
				<li>
					<a href="https://github.com/symotif" target="_blank">
						<img src="github.svg" alt="github" /></a
					>
				</li>

				<li>
					<a href="https://x.com/symotifhealth" target="_blank"> <img src="x.svg" alt="x" /></a>
				</li>
			</ul>
		</header>

		<div class="logo">
			<h1
				on:mouseover={() => (isHovered = true)}
				on:focus={() => (isHovered = true)}
				on:mouseout={() => (isHovered = false)}
				on:blur={() => (isHovered = false)}
				on:touchstart={() => (isHovered = true)}
				on:touchend={() => (isHovered = false)}
			>
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
			<div class="flexing">
				<ul>
					<li><a href="https://www.rchart.dev">rchart</a></li>
					<li><a href="https://www.vejove.com">vejove</a></li>
					<li><a href="https://www.runthelist.app">runthelist</a></li>
				</ul>
			</div>

			<p>&copy; 2024 Symotif, LLC</p>
		</footer>
	</div>
</html>

<style lang="postcss">
	:root {
		--base-font-size: 1.5rem;
		--bar-font-size: 4rem;
		--logo-font-size: 5rem;
	}
	*,
	html {
		color: #d5ecd5;
		font-family: 'Kanit', sans-serif;
		user-select: none;
	}

	*::selection {
		background-color: #9bd49b; /* Greenish highlight */
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
		animation: waveEffect 10s ease infinite;
	}

	/* if the logo text is hovered */
	.scene.is-hovered {
		animation: pulseEffect 2s ease infinite;
	}

	h1 {
		color: #d5ecd5;
	}

	.scene.is-hovered h1,
	h1:active,
	h1:focus,
	h1:hover {
		color: #f1f9f1;
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
		70% {
			background-size: 150% 150%;
		}
		80% {
			background-size: 125% 125%;
		}
		90% {
			background-size: 150% 150%;
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
		font-size: var(--logo-font-size);
		font-family: 'Kanit', sans-serif;
		font-weight: 400;
		font-style: normal;
	}

	footer {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	footer ul {
		font-size: var(--bar-font-size);
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
		color: #f1f9f1;
		text-decoration: none;
		cursor: pointer;
	}

	footer p {
		position: absolute;
		margin: 0;
		bottom: 3rem;
		right: 3rem;
		font-size: var(--base-font-size);
	}

	header {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	header .icon {
		position: absolute;
		top: 1rem;
		left: 2rem;
		width: var(--bar-font-size);
		height: var(--bar-font-size);
	}

	header ul img {
		width: var(--bar-font-size);
		height: var(--bar-font-size);
		filter: invert(97%) sepia(4%) saturate(935%) hue-rotate(58deg) brightness(94%) contrast(96%);
	}

	header ul img:hover {
		filter: invert(88%) sepia(2%) saturate(452%) hue-rotate(70deg) brightness(111%) contrast(97%);
	}

	header ul {
		font-size: var(--bar-font-size);
		list-style: none;
		display: flex;
		justify-content: center;
		gap: 3rem;
		position: absolute;
		margin: 0;
		padding: 0;
		top: 1rem;
		right: 3rem;
	}

	header ul li {
		display: inline;
	}

	header ul li a {
		font-weight: bold;
		transition: color 0.3s;
	}

	/* media queries for mobile */
	@media (max-width: 1110px) {
		:root {
			--logo-font-size: 4rem;
		}

		footer ul {
			font-size: 3rem;
			gap: 0rem;
			flex-direction: column; /* Stack items vertically */
			justify-content: left; /* Center vertically */
			align-items: left; /* Center horizontally */
		}

		footer p {
			font-size: 0.8rem; /* Make the font smaller */
			position: absolute; /* Keep it fixed in the bottom-right */
			bottom: 0.5rem;
			right: 0.5rem;
			margin: 0;
		}
	}

	@media (max-width: 768px) {
		:root {
			--logo-font-size: 3rem;
		}

		footer ul {
			font-size: 2rem;
		}
		footer p {
			font-size: 0.8rem; /* Make the font smaller */
			position: absolute; /* Keep it fixed in the bottom-right */
			bottom: 0.5rem;
			right: 0.5rem;
			margin: 0;
		}
	}

	@media (max-width: 480px) {
		:root {
			--logo-font-size: 2.5rem;
			--bar-font-size: 3rem;
		}

		h1 {
			text-align: center;
		}

		footer ul {
			font-size: 1.5rem;
		}

		footer p {
			font-size: 0.8rem; /* Make the font smaller */
			position: absolute; /* Keep it fixed in the bottom-right */
			bottom: 0.5rem;
			right: 0.5rem;
			margin: 0;
		}

		header ul {
			flex-direction: row;
			justify-content: center; /* Center icons horizontally */
			gap: 1.5rem;
			position: absolute;
			top: 1.5rem;
		}

		header {
			justify-content: center;
		}
	}
</style>

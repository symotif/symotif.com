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
</script>

<html lang="svelte">
    
    <!-- <canvas id="bg"></canvas> -->

    <div>
        
        <h1 class="center">we are symotif</h1>
        <p class="center">and we are building</p>
        <a href="https://www.rchart.app"> rchart</a>
    
    </div>

    <!-- <canvas bind:this={canvas}></canvas> -->

</html>

<style lang="postcss">
    /* :global(html) {
        background-color: theme(colors.gray.100);
    } */
    *, html {
    }

    .center {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    a {
        display: flex;
        align-items: center;
        justify-content: center;
        color: inherit;
    }

    a:hover {
    color:#00A0C6; 
    text-decoration:none; 
    cursor:pointer;  
}
</style>
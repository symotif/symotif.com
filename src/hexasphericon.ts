import * as THREE from 'three';

export function createHexasphericon() {
    const geometry = new THREE.Geometry();
    // Define the vertices and faces for the hexasphericon here
    return new THREE.Mesh(
        geometry,
        new THREE.MeshStandardMaterial({ metalness: 0.8, roughness: 0.2 })
    );
}

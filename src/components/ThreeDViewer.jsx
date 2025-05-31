import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const ThreeDViewer = () => {
    const containerRef = useRef(null);

    useEffect(() => {
        const camera = new THREE.PerspectiveCamera(
            15,
            window.innerWidth / window.innerHeight,
            0.5,
            2000
        );
        camera.position.set(0, 1, 10); // Move the camera further back

        const scene = new THREE.Scene();
        let mixer;

        const loader = new GLTFLoader();
        loader.load('/models/robot_playground.glb',
            function (gltf) {
                const bee = gltf.scene;
                scene.add(bee);

                mixer = new THREE.AnimationMixer(bee);
                mixer.clipAction(gltf.animations[0]).play();
            },
            function (xhr) {},
            function (error) {}
        );

        const renderer = new THREE.WebGLRenderer({ alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        containerRef.current.appendChild(renderer.domElement);

        // Lights
        const ambientLight = new THREE.AmbientLight(0xffffff, 2); // Increase intensity
        scene.add(ambientLight);

        const topLight = new THREE.DirectionalLight(0xffffff, 2);
        topLight.position.set(0, 0, 50); // Adjust position
        scene.add(topLight);

        const reRender3D = () => {
            requestAnimationFrame(reRender3D);
            renderer.render(scene, camera);
            if (mixer) mixer.update(0.01);
        };
        reRender3D();

        const handleResize = () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        };

window.addEventListener('resize', handleResize);

        return () => {
            renderer.dispose();
        };
    }, []);

    return <div id="container3D" ref={containerRef} style={{ width: '100%', height: '100%' }}></div>;
};

export default ThreeDViewer;

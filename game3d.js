// Game of Wilds Explorer - 3D Jungle Adventure Demo
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';

let scene, camera, renderer, player, collectibles = [], particles = [];
let keys = {};
let score = 0;
let missionActive = false;
let currentMission = null;

const MISSIONS = [
    { name: 'Photograph Tiger Tracks', reward: 100, icon: '🐾' },
    { name: 'Collect Jungle Herbs', reward: 75, icon: '🌿' },
    { name: 'Find Temple Artifact', reward: 150, icon: '🏛️' },
    { name: 'Document Bird Species', reward: 50, icon: '🦅' }
];

function init() {
    // Scene
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a3a2a);
    scene.fog = new THREE.Fog(0x1a3a2a, 80, 200);
    
    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 3, 8);
    camera.lookAt(0, 1, 0);

    // Renderer
    const canvas = document.getElementById('game3d-canvas');
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFShadowShadowMap;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0x88aa88, 0.4);
    scene.add(ambientLight);

    const sunLight = new THREE.DirectionalLight(0xffff99, 0.7);
    sunLight.position.set(30, 40, 30);
    sunLight.castShadow = true;
    sunLight.shadow.mapSize.width = 2048;
    sunLight.shadow.mapSize.height = 2048;
    sunLight.shadow.camera.left = -100;
    sunLight.shadow.camera.right = 100;
    sunLight.shadow.camera.top = 100;
    sunLight.shadow.camera.bottom = -100;
    scene.add(sunLight);

    const undergrowthLight = new THREE.HemisphereLight(0x90ee90, 0x2a5a2a, 0.3);
    scene.add(undergrowthLight);

    // Terrain
    createTerrain();

    // Jungle environment
    createJungleEnvironment();

    // Player (Photographer)
    player = createPhotographer();
    scene.add(player);

    // Collectibles
    for (let i = 0; i < 6; i++) {
        createCollectible();
    }

    // UI Setup
    showRandomMission();

    // Events
    window.addEventListener('keydown', (e) => { keys[e.key] = true; });
    window.addEventListener('keyup', (e) => { keys[e.key] = false; });
    window.addEventListener('resize', onWindowResize);

    animate();
}

function createTerrain() {
    // Hillside terrain with noise
    const geometry = new THREE.PlaneGeometry(200, 200, 50, 50);
    const positions = geometry.attributes.position;
    
    for (let i = 0; i < positions.count; i++) {
        const x = positions.getX(i);
        const z = positions.getZ(i);
        const y = Math.sin(x * 0.02) * 3 + Math.sin(z * 0.02) * 3 + Math.random() * 0.5;
        positions.setY(i, y);
    }
    positions.needsUpdate = true;
    geometry.computeVertexNormals();

    const material = new THREE.MeshStandardMaterial({
        color: 0x3d6d3d,
        roughness: 0.9,
        metalness: 0.0
    });

    const terrain = new THREE.Mesh(geometry, material);
    terrain.rotation.x = -Math.PI / 2;
    terrain.receiveShadow = true;
    terrain.position.y = -2;
    scene.add(terrain);
}

function createJungleEnvironment() {
    // Trees
    for (let i = 0; i < 12; i++) {
        const tree = createLowPolyTree();
        tree.position.x = (Math.random() - 0.5) * 140;
        tree.position.z = (Math.random() - 0.5) * 140;
        tree.position.y = 0;
        scene.add(tree);
    }

    // Vegetation patches
    for (let i = 0; i < 15; i++) {
        const bush = createBush();
        bush.position.x = (Math.random() - 0.5) * 120;
        bush.position.z = (Math.random() - 0.5) * 120;
        bush.position.y = 0;
        scene.add(bush);
    }
}

function createLowPolyTree() {
    const group = new THREE.Group();

    // Trunk
    const trunkGeom = new THREE.CylinderGeometry(0.6, 0.8, 6, 8);
    const trunkMat = new THREE.MeshStandardMaterial({ color: 0x5a3a2a });
    const trunk = new THREE.Mesh(trunkGeom, trunkMat);
    trunk.castShadow = true;
    trunk.receiveShadow = true;
    trunk.position.y = 3;
    group.add(trunk);

    // Foliage (cone)
    const foliageGeom = new THREE.ConeGeometry(4, 8, 8);
    const foliageMat = new THREE.MeshStandardMaterial({ color: 0x2d5a2d });
    const foliage = new THREE.Mesh(foliageGeom, foliageMat);
    foliage.castShadow = true;
    foliage.receiveShadow = true;
    foliage.position.y = 7;
    group.add(foliage);

    return group;
}

function createBush() {
    const geometry = new THREE.SphereGeometry(1.5, 6, 6);
    const material = new THREE.MeshStandardMaterial({ color: 0x3d7a3d });
    const bush = new THREE.Mesh(geometry, material);
    bush.castShadow = true;
    bush.receiveShadow = true;
    return bush;
}

function createPhotographer() {
    const group = new THREE.Group();

    // Body
    const bodyGeom = new THREE.CylinderGeometry(0.35, 0.4, 1.2, 8);
    const bodyMat = new THREE.MeshStandardMaterial({ color: 0x8B7355 });
    const body = new THREE.Mesh(bodyGeom, bodyMat);
    body.castShadow = true;
    body.position.y = 0.8;
    group.add(body);

    // Head
    const headGeom = new THREE.SphereGeometry(0.3, 8, 8);
    const headMat = new THREE.MeshStandardMaterial({ color: 0xD4A574 });
    const head = new THREE.Mesh(headGeom, headMat);
    head.castShadow = true;
    head.position.y = 1.6;
    group.add(head);

    // Camera (small cube in front of head)
    const cameraGeom = new THREE.BoxGeometry(0.15, 0.15, 0.2);
    const cameraMat = new THREE.MeshStandardMaterial({ color: 0x1a1a1a });
    const camera = new THREE.Mesh(cameraGeom, cameraMat);
    camera.castShadow = true;
    camera.position.set(0, 1.5, 0.35);
    group.add(camera);

    // Backpack
    const backpackGeom = new THREE.BoxGeometry(0.4, 0.8, 0.3);
    const backpackMat = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
    const backpack = new THREE.Mesh(backpackGeom, backpackMat);
    backpack.castShadow = true;
    backpack.position.set(0, 0.8, -0.25);
    group.add(backpack);

    // Legs
    const legGeom = new THREE.CylinderGeometry(0.15, 0.2, 0.8, 6);
    const legMat = new THREE.MeshStandardMaterial({ color: 0x4a4a4a });
    
    const leftLeg = new THREE.Mesh(legGeom, legMat);
    leftLeg.castShadow = true;
    leftLeg.position.set(-0.2, 0.2, 0);
    group.add(leftLeg);

    const rightLeg = new THREE.Mesh(legGeom, legMat);
    rightLeg.castShadow = true;
    rightLeg.position.set(0.2, 0.2, 0);
    group.add(rightLeg);

    group.position.y = 0;
    return group;
}

function createCollectible() {
    const geometry = new THREE.OctahedronGeometry(0.5, 0);
    const material = new THREE.MeshStandardMaterial({
        color: 0xFFD700,
        metalness: 0.8,
        roughness: 0.2,
        emissive: 0xFF8C00,
        emissiveIntensity: 0.3
    });
    const collectible = new THREE.Mesh(geometry, material);
    
    collectible.position.x = (Math.random() - 0.5) * 100;
    collectible.position.y = 1;
    collectible.position.z = (Math.random() - 0.5) * 100;
    collectible.castShadow = true;
    collectible.collected = false;
    
    scene.add(collectible);
    collectibles.push(collectible);
}

function createParticles(position) {
    const particleCount = 16;
    for (let i = 0; i < particleCount; i++) {
        const geometry = new THREE.IcosahedronGeometry(0.15, 0);
        const material = new THREE.MeshStandardMaterial({
            color: 0xFFD700,
            emissive: 0xFF8C00,
            emissiveIntensity: 0.8
        });
        const particle = new THREE.Mesh(geometry, material);
        
        particle.position.copy(position);
        particle.velocity = new THREE.Vector3(
            (Math.random() - 0.5) * 5,
            Math.random() * 4,
            (Math.random() - 0.5) * 5
        );
        particle.life = 1;
        
        scene.add(particle);
        particles.push(particle);
    }
}

function showRandomMission() {
    if (missionActive) return;
    
    currentMission = MISSIONS[Math.floor(Math.random() * MISSIONS.length)];
    missionActive = true;
    
    const missionUI = document.getElementById('mission-popup');
    if (missionUI) {
        missionUI.innerHTML = `<h3>${currentMission.icon} ${currentMission.name}</h3><p>Reward: ${currentMission.reward} pts</p>`;
        missionUI.style.display = 'block';
    }
}

function completeMission() {
    if (missionActive) {
        score += currentMission.reward;
        updateScore();
        
        const missionUI = document.getElementById('mission-popup');
        if (missionUI) {
            missionUI.innerHTML = `<h3>✅ Mission Complete!</h3><p>+${currentMission.reward} pts</p>`;
        }
        
        missionActive = false;
        setTimeout(() => {
            showRandomMission();
        }, 2000);
    }
}

function animate() {
    requestAnimationFrame(animate);

    // Player movement
    const moveSpeed = 0.25;
    if (keys['ArrowLeft'] || keys['a']) player.position.x -= moveSpeed;
    if (keys['ArrowRight'] || keys['d']) player.position.x += moveSpeed;
    if (keys['ArrowUp'] || keys['w']) player.position.z -= moveSpeed;
    if (keys['ArrowDown'] || keys['s']) player.position.z += moveSpeed;

    // Clamp to map
    player.position.x = Math.max(-80, Math.min(80, player.position.x));
    player.position.z = Math.max(-80, Math.min(80, player.position.z));

    // Animate player (subtle bob)
    player.position.y = Math.sin(Date.now() * 0.003) * 0.1;

    // Camera follow with smooth lerp
    const targetCamX = player.position.x;
    const targetCamZ = player.position.z + 8;
    camera.position.lerp(
        new THREE.Vector3(targetCamX, 4, targetCamZ),
        0.08
    );
    camera.lookAt(player.position.x, 1, player.position.z);

    // Animate collectibles
    collectibles.forEach((collectible, index) => {
        if (!collectible.collected) {
            collectible.rotation.x += 0.02;
            collectible.rotation.y += 0.03;
            collectible.position.y = 1 + Math.sin(Date.now() * 0.002 + index) * 0.4;

            // Collision check
            const distance = player.position.distanceTo(collectible.position);
            if (distance < 1.5) {
                collectible.collected = true;
                scene.remove(collectible);
                createParticles(collectible.position);
                score += 25;
                updateScore();
                completeMission();
                
                setTimeout(() => {
                    createCollectible();
                }, 1000);
            }
        }
    });

    // Update particles
    particles = particles.filter(particle => {
        particle.velocity.y -= 0.12;
        particle.position.add(particle.velocity);
        particle.life -= 0.015;
        particle.material.opacity = particle.life;
        particle.scale.multiplyScalar(0.96);

        if (particle.life <= 0) {
            scene.remove(particle);
            return false;
        }
        return true;
    });

    renderer.render(scene, camera);
}

function updateScore() {
    const scoreDisplay = document.getElementById('game-score');
    if (scoreDisplay) scoreDisplay.textContent = score;
}

function onWindowResize() {
    const canvas = document.getElementById('game3d-canvas');
    const width = canvas.clientWidth;
    const height = canvas.clientHeight;
    
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height);
}

// Start game
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}
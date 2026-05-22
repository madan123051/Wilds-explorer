// 3D Game Demo with Three.js
import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';

let scene, camera, renderer, player, enemies = [], particles = [];
let keys = {};
let score = 0;

function init() {
    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a4d2e);
    scene.fog = new THREE.Fog(0x1a4d2e, 100, 200);

    // Camera
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.set(0, 5, 10);
    camera.lookAt(0, 0, 0);

    // Renderer
    const canvas = document.getElementById('game3d-canvas');
    renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
    renderer.shadowMap.enabled = true;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(10, 20, 10);
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 2048;
    directionalLight.shadow.mapSize.height = 2048;
    directionalLight.shadow.camera.left = -50;
    directionalLight.shadow.camera.right = 50;
    directionalLight.shadow.camera.top = 50;
    directionalLight.shadow.camera.bottom = -50;
    scene.add(directionalLight);

    // Ground
    const groundGeometry = new THREE.PlaneGeometry(100, 100);
    const groundMaterial = new THREE.MeshStandardMaterial({ 
        color: 0x2d6a4f,
        roughness: 0.8
    });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    ground.receiveShadow = true;
    scene.add(ground);

    // Player
    const playerGeometry = new THREE.BoxGeometry(1, 2, 1);
    const playerMaterial = new THREE.MeshStandardMaterial({ color: 0xff6b5b });
    player = new THREE.Mesh(playerGeometry, playerMaterial);
    player.castShadow = true;
    player.receiveShadow = true;
    player.position.y = 1;
    scene.add(player);

    // Create enemies
    for (let i = 0; i < 8; i++) {
        createEnemy();
    }

    // Event listeners
    window.addEventListener('keydown', (e) => { keys[e.key] = true; });
    window.addEventListener('keyup', (e) => { keys[e.key] = false; });
    window.addEventListener('resize', onWindowResize);

    animate();
}

function createEnemy() {
    const geometry = new THREE.OctahedronGeometry(0.7, 0);
    const material = new THREE.MeshStandardMaterial({ 
        color: 0x40e0d0,
        metalness: 0.6,
        roughness: 0.4
    });
    const enemy = new THREE.Mesh(geometry, material);
    
    enemy.position.x = (Math.random() - 0.5) * 80;
    enemy.position.y = 1;
    enemy.position.z = (Math.random() - 0.5) * 80;
    
    enemy.castShadow = true;
    enemy.receiveShadow = true;
    enemy.collected = false;
    
    scene.add(enemy);
    enemies.push(enemy);
}

function createParticles(position) {
    const particleCount = 12;
    for (let i = 0; i < particleCount; i++) {
        const geometry = new THREE.SphereGeometry(0.2, 8, 8);
        const material = new THREE.MeshStandardMaterial({ color: 0x40e0d0 });
        const particle = new THREE.Mesh(geometry, material);
        
        particle.position.copy(position);
        particle.velocity = new THREE.Vector3(
            (Math.random() - 0.5) * 4,
            Math.random() * 3,
            (Math.random() - 0.5) * 4
        );
        particle.life = 0.8;
        
        scene.add(particle);
        particles.push(particle);
    }
}

function animate() {
    requestAnimationFrame(animate);

    // Player movement
    if (keys['ArrowLeft'] || keys['a']) player.position.x -= 0.3;
    if (keys['ArrowRight'] || keys['d']) player.position.x += 0.3;
    if (keys['ArrowUp'] || keys['w']) player.position.z -= 0.3;
    if (keys['ArrowDown'] || keys['s']) player.position.z += 0.3;

    // Clamp player position
    player.position.x = Math.max(-45, Math.min(45, player.position.x));
    player.position.z = Math.max(-45, Math.min(45, player.position.z));

    // Rotate player
    player.rotation.y += 0.05;

    // Camera follow
    camera.position.lerp(
        new THREE.Vector3(player.position.x, player.position.y + 5, player.position.z + 10),
        0.1
    );
    camera.lookAt(player.position);

    // Animate enemies
    enemies.forEach((enemy, index) => {
        if (!enemy.collected) {
            enemy.rotation.x += 0.02;
            enemy.rotation.y += 0.03;
            enemy.position.y = enemy.position.y + Math.sin(Date.now() * 0.001 + index) * 0.01;

            // Check collision
            const distance = player.position.distanceTo(enemy.position);
            if (distance < 2) {
                enemy.collected = true;
                scene.remove(enemy);
                createParticles(enemy.position);
                score += 10;
                updateScore();
                setTimeout(() => createEnemy(), 500);
            }
        }
    });

    // Update particles
    particles = particles.filter(particle => {
        particle.velocity.y -= 0.1; // gravity
        particle.position.add(particle.velocity);
        particle.life -= 0.01;
        particle.material.opacity = particle.life;
        particle.scale.multiplyScalar(0.98);

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

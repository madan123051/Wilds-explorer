// Wilds Explorer - 3D Phone Demo Game
// Matches actual game mechanics: Collect coins, avoid enemies, score system

let scene, camera, renderer;
let player, coins = [], enemies = [];
let score = 0;
let gameContainer;

function initGame3D(containerId) {
    gameContainer = document.getElementById(containerId);
    if (!gameContainer) return;

    // Scene setup
    scene = new THREE.Scene();
    scene.background = new THREE.Color(0x1a472a); // Dark jungle green
    scene.fog = new THREE.Fog(0x1a472a, 50, 200);

    // Camera - top-down view for phone screen
    const width = gameContainer.clientWidth;
    const height = gameContainer.clientHeight;
    camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.set(0, 35, 0);
    camera.lookAt(0, 0, 0);

    // Renderer
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);
    gameContainer.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
    directionalLight.position.set(20, 40, 20);
    scene.add(directionalLight);

    // Ground plane
    const groundGeom = new THREE.PlaneGeometry(50, 50);
    const groundMat = new THREE.MeshLambertMaterial({ color: 0x2d5a3d });
    const ground = new THREE.Mesh(groundGeom, groundMat);
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);

    // Create player (red cube with camera backpack)
    player = createPlayer();
    scene.add(player);

    // Spawn initial coins
    for (let i = 0; i < 6; i++) {
        spawnCoin();
    }

    // Spawn initial enemies
    for (let i = 0; i < 3; i++) {
        spawnEnemy();
    }

    // Input handling
    setupControls();

    // Game loop
    animate();

    // Handle window resize
    window.addEventListener('resize', onWindowResize);
}

function createPlayer() {
    const group = new THREE.Group();

    // Body - red/orange color
    const bodyGeom = new THREE.BoxGeometry(1.5, 2, 1.5);
    const bodyMat = new THREE.MeshStandardMaterial({ 
        color: 0xFF6B6B,
        metalness: 0.3,
        roughness: 0.7
    });
    const body = new THREE.Mesh(bodyGeom, bodyMat);
    body.position.y = 1;
    group.add(body);

    // Head
    const headGeom = new THREE.BoxGeometry(1.2, 1.2, 1.2);
    const headMat = new THREE.MeshStandardMaterial({ 
        color: 0xFF8C8C,
        metalness: 0.2,
        roughness: 0.6
    });
    const head = new THREE.Mesh(headGeom, headMat);
    head.position.y = 2.5;
    group.add(head);

    // Eyes
    const eyeGeom = new THREE.SphereGeometry(0.25, 8, 8);
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const leftEye = new THREE.Mesh(eyeGeom, eyeMat);
    leftEye.position.set(-0.4, 2.8, 0.7);
    group.add(leftEye);

    const rightEye = new THREE.Mesh(eyeGeom, eyeMat);
    rightEye.position.set(0.4, 2.8, 0.7);
    group.add(rightEye);

    // Camera equipment (on back)
    const cameraGeom = new THREE.BoxGeometry(0.8, 1.2, 0.8);
    const cameraMat = new THREE.MeshStandardMaterial({ 
        color: 0x2c2c2c,
        metalness: 0.8,
        roughness: 0.2
    });
    const cameraEquip = new THREE.Mesh(cameraGeom, cameraMat);
    cameraEquip.position.set(0, 1.2, -1);
    group.add(cameraEquip);

    // Camera lens
    const lensGeom = new THREE.CylinderGeometry(0.4, 0.4, 0.3, 16);
    const lensMat = new THREE.MeshStandardMaterial({ 
        color: 0x1a1a1a,
        metalness: 1,
        roughness: 0
    });
    const lens = new THREE.Mesh(lensGeom, lensMat);
    lens.rotation.z = Math.PI / 2;
    lens.position.set(0, 1.2, -1.3);
    group.add(lens);

    // Backpack straps
    const strapGeom = new THREE.BoxGeometry(0.1, 1.5, 0.1);
    const strapMat = new THREE.MeshStandardMaterial({ color: 0x8B4513 });
    const leftStrap = new THREE.Mesh(strapGeom, strapMat);
    leftStrap.position.set(-1, 1.5, -0.8);
    group.add(leftStrap);

    const rightStrap = new THREE.Mesh(strapGeom, strapMat);
    rightStrap.position.set(1, 1.5, -0.8);
    group.add(rightStrap);

    group.position.set(0, 0, 0);
    group.userData = {
        velocity: { x: 0, y: 0, z: 0 },
        speed: 0.5,
        isMoving: false
    };

    return group;
}

function spawnCoin() {
    const coinGeom = new THREE.CylinderGeometry(0.5, 0.5, 0.15, 32);
    const coinMat = new THREE.MeshStandardMaterial({
        color: 0xFFD700,
        metalness: 1,
        roughness: 0.2,
        emissive: 0xFFAA00,
        emissiveIntensity: 0.3
    });
    const coin = new THREE.Mesh(coinGeom, coinMat);

    coin.position.set(
        (Math.random() - 0.5) * 40,
        0.5,
        (Math.random() - 0.5) * 40
    );

    coin.userData = {
        collected: false,
        floatSpeed: 2 + Math.random(),
        floatAmount: 0.3
    };

    // Add glow
    const glowGeom = new THREE.CylinderGeometry(0.6, 0.6, 0.2, 32);
    const glowMat = new THREE.MeshBasicMaterial({
        color: 0xFFAA00,
        transparent: true,
        opacity: 0.3
    });
    const glow = new THREE.Mesh(glowGeom, glowMat);
    glow.position.z = 0.05;
    coin.add(glow);

    scene.add(coin);
    coins.push(coin);
}

function spawnEnemy() {
    const enemyGeom = new THREE.BoxGeometry(1.5, 1.5, 1.5);
    const enemyMat = new THREE.MeshStandardMaterial({
        color: 0x4ECDC4,
        metalness: 0.4,
        roughness: 0.6
    });
    const enemy = new THREE.Mesh(enemyGeom, enemyMat);

    enemy.position.set(
        (Math.random() - 0.5) * 35,
        0.75,
        (Math.random() - 0.5) * 35
    );

    enemy.userData = {
        velocity: {
            x: (Math.random() - 0.5) * 0.3,
            z: (Math.random() - 0.5) * 0.3
        },
        bounds: 23
    };

    // Enemy eyes
    const eyeGeom = new THREE.SphereGeometry(0.3, 8, 8);
    const eyeMat = new THREE.MeshStandardMaterial({ color: 0xffffff });
    const eye1 = new THREE.Mesh(eyeGeom, eyeMat);
    eye1.position.set(-0.5, 0.5, 0.8);
    enemy.add(eye1);

    const eye2 = new THREE.Mesh(eyeGeom, eyeMat);
    eye2.position.set(0.5, 0.5, 0.8);
    enemy.add(eye2);

    scene.add(enemy);
    enemies.push(enemy);
}

function setupControls() {
    const keys = {};
    window.addEventListener('keydown', (e) => {
        keys[e.key.toLowerCase()] = true;
    });
    window.addEventListener('keyup', (e) => {
        keys[e.key.toLowerCase()] = false;
    });

    // Update player position in animation loop
    player.userData.keys = keys;
}

function updatePlayer() {
    const keys = player.userData.keys || {};
    const speed = player.userData.speed;

    // Movement
    let moved = false;
    if (keys['a'] || keys['arrowleft']) {
        player.position.x -= speed;
        moved = true;
    }
    if (keys['d'] || keys['arrowright']) {
        player.position.x += speed;
        moved = true;
    }
    if (keys['w'] || keys['arrowup']) {
        player.position.z -= speed;
        moved = true;
    }
    if (keys['s'] || keys['arrowdown']) {
        player.position.z += speed;
        moved = true;
    }

    // Boundaries
    const boundarySize = 22;
    player.position.x = Math.max(-boundarySize, Math.min(boundarySize, player.position.x));
    player.position.z = Math.max(-boundarySize, Math.min(boundarySize, player.position.z));

    player.userData.isMoving = moved;

    // Rotation animation (bob when moving)
    if (moved) {
        player.rotation.y += 0.02;
    }

    // Check coin collisions
    for (let i = coins.length - 1; i >= 0; i--) {
        const coin = coins[i];
        const dist = player.position.distanceTo(coin.position);

        if (dist < 2) {
            score += 10;
            scene.remove(coin);
            coins.splice(i, 1);
            spawnCoin();
            createParticles(coin.position.x, coin.position.y, coin.position.z, 0xFFD700);
        }
    }

    // Check enemy collisions
    for (let i = enemies.length - 1; i >= 0; i--) {
        const enemy = enemies[i];
        const dist = player.position.distanceTo(enemy.position);

        if (dist < 2) {
            score += 5;
            scene.remove(enemy);
            enemies.splice(i, 1);
            spawnEnemy();
            createParticles(enemy.position.x, enemy.position.y, enemy.position.z, 0x4ECDC4);
        }
    }
}

function updateEnemies() {
    for (const enemy of enemies) {
        // Move
        enemy.position.x += enemy.userData.velocity.x;
        enemy.position.z += enemy.userData.velocity.z;

        // Bounce off boundaries
        const bound = enemy.userData.bounds;
        if (enemy.position.x < -bound || enemy.position.x > bound) {
            enemy.userData.velocity.x *= -1;
        }
        if (enemy.position.z < -bound || enemy.position.z > bound) {
            enemy.userData.velocity.z *= -1;
        }

        // Rotation
        enemy.rotation.x += 0.01;
        enemy.rotation.y += 0.015;
    }
}

function updateCoins() {
    for (const coin of coins) {
        // Float animation
        coin.rotation.x += 0.03;
        coin.rotation.y += 0.05;

        const time = Date.now() * 0.001;
        coin.position.y = 0.5 + Math.sin(time * coin.userData.floatSpeed) * coin.userData.floatAmount;
    }
}

const particles = [];

function createParticles(x, y, z, color) {
    for (let i = 0; i < 12; i++) {
        const angle = (i / 12) * Math.PI * 2;
        const speed = 0.2 + Math.random() * 0.3;
        
        const particle = {
            mesh: createParticleMesh(color),
            life: 50,
            velocity: {
                x: Math.cos(angle) * speed,
                y: Math.random() * 0.3,
                z: Math.sin(angle) * speed
            }
        };

        particle.mesh.position.set(x, y, z);
        scene.add(particle.mesh);
        particles.push(particle);
    }
}

function createParticleMesh(color) {
    const geom = new THREE.BoxGeometry(0.2, 0.2, 0.2);
    const mat = new THREE.MeshStandardMaterial({
        color: color,
        emissive: color,
        emissiveIntensity: 0.5
    });
    return new THREE.Mesh(geom, mat);
}

function updateParticles() {
    for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i];
        
        p.mesh.position.x += p.velocity.x;
        p.mesh.position.y += p.velocity.y;
        p.mesh.position.z += p.velocity.z;
        
        p.velocity.y -= 0.01; // Gravity
        
        p.life--;
        p.mesh.material.opacity = p.life / 50;

        if (p.life <= 0) {
            scene.remove(p.mesh);
            particles.splice(i, 1);
        }
    }
}

function animate() {
    requestAnimationFrame(animate);

    updatePlayer();
    updateEnemies();
    updateCoins();
    updateParticles();

    renderer.render(scene, camera);
}

function onWindowResize() {
    if (!gameContainer) return;

    const width = gameContainer.clientWidth;
    const height = gameContainer.clientHeight;

    camera.aspect = width / height;
    camera.updateProjectionMatrix();

    renderer.setSize(width, height);
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', () => {
    initGame3D('game3d-canvas');
});

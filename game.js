// Wilds Explorer - Demo Canvas Game
// Simple 2D game running on HTML5 Canvas

class WildsGame {
    constructor(canvasId) {
        this.canvas = document.getElementById(canvasId);
        if (!this.canvas) {
            console.error('Canvas element not found!');
            return;
        }
        
        this.ctx = this.canvas.getContext('2d');
        this.width = this.canvas.width;
        this.height = this.canvas.height;
        
        // Player
        this.player = {
            x: this.width / 2,
            y: this.height - 100,
            width: 30,
            height: 40,
            color: '#FF6B6B',
            velocityY: 0,
            isJumping: false
        };
        
        // Input
        this.keys = {};
        this.setupControls();
        
        // Game state
        this.particles = [];
        this.enemies = [];
        this.score = 0;
        this.gameRunning = true;
        
        // Spawn some enemies
        this.spawnEnemy();
        this.spawnEnemy();
        
        // Start game loop
        this.gameLoop();
    }
    
    setupControls() {
        window.addEventListener('keydown', (e) => {
            this.keys[e.key.toLowerCase()] = true;
        });
        
        window.addEventListener('keyup', (e) => {
            this.keys[e.key.toLowerCase()] = false;
        });
    }
    
    spawnEnemy() {
        const enemy = {
            x: Math.random() * (this.width - 40),
            y: Math.random() * (this.height - 200),
            width: 40,
            height: 40,
            color: '#4ECDC4',
            velocityX: (Math.random() - 0.5) * 4,
            velocityY: (Math.random() - 0.5) * 2
        };
        this.enemies.push(enemy);
    }
    
    update() {
        // Player movement
        const speed = 5;
        if (this.keys['a'] || this.keys['arrowleft']) {
            this.player.x -= speed;
        }
        if (this.keys['d'] || this.keys['arrowright']) {
            this.player.x += speed;
        }
        if (this.keys['w'] || this.keys['arrowup']) {
            this.player.y -= speed;
        }
        if (this.keys['s'] || this.keys['arrowdown']) {
            this.player.y += speed;
        }
        
        // Jump with spacebar
        if (this.keys[' '] && !this.player.isJumping) {
            this.player.velocityY = -12;
            this.player.isJumping = true;
        }
        
        // Apply gravity
        this.player.velocityY += 0.6;
        this.player.y += this.player.velocityY;
        
        // Ground collision
        if (this.player.y + this.player.height >= this.height - 10) {
            this.player.y = this.height - this.player.height - 10;
            this.player.velocityY = 0;
            this.player.isJumping = false;
        }
        
        // Boundaries
        if (this.player.x < 0) this.player.x = 0;
        if (this.player.x + this.player.width > this.width) {
            this.player.x = this.width - this.player.width;
        }
        
        // Update enemies
        for (let i = this.enemies.length - 1; i >= 0; i--) {
            const enemy = this.enemies[i];
            enemy.x += enemy.velocityX;
            enemy.y += enemy.velocityY;
            
            // Enemy boundaries
            if (enemy.x <= 0 || enemy.x + enemy.width >= this.width) {
                enemy.velocityX *= -1;
            }
            if (enemy.y <= 0 || enemy.y + enemy.height >= this.height) {
                enemy.velocityY *= -1;
            }
            
            // Collision with player
            if (this.checkCollision(this.player, enemy)) {
                this.enemies.splice(i, 1);
                this.score += 10;
                this.createParticles(enemy.x, enemy.y);
                
                if (this.enemies.length < 3) {
                    this.spawnEnemy();
                }
            }
        }
        
        // Update particles
        for (let i = this.particles.length - 1; i >= 0; i--) {
            const p = this.particles[i];
            p.x += p.vx;
            p.y += p.vy;
            p.life--;
            
            if (p.life <= 0) {
                this.particles.splice(i, 1);
            }
        }
    }
    
    checkCollision(rect1, rect2) {
        return rect1.x < rect2.x + rect2.width &&
               rect1.x + rect1.width > rect2.x &&
               rect1.y < rect2.y + rect2.height &&
               rect1.y + rect1.height > rect2.y;
    }
    
    createParticles(x, y) {
        for (let i = 0; i < 8; i++) {
            const angle = (i / 8) * Math.PI * 2;
            this.particles.push({
                x: x,
                y: y,
                vx: Math.cos(angle) * 3,
                vy: Math.sin(angle) * 3,
                life: 30,
                color: '#FFD93D'
            });
        }
    }
    
    draw() {
        // Clear canvas
        this.ctx.fillStyle = '#1a1a2e';
        this.ctx.fillRect(0, 0, this.width, this.height);
        
        // Draw ground
        this.ctx.fillStyle = '#0f3460';
        this.ctx.fillRect(0, this.height - 20, this.width, 20);
        
        // Draw player
        this.ctx.fillStyle = this.player.color;
        this.ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
        
        // Draw eyes
        this.ctx.fillStyle = '#fff';
        this.ctx.fillRect(this.player.x + 8, this.player.y + 10, 6, 6);
        this.ctx.fillRect(this.player.x + 16, this.player.y + 10, 6, 6);
        
        // Draw enemies
        for (const enemy of this.enemies) {
            this.ctx.fillStyle = enemy.color;
            this.ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
            
            // Enemy eyes
            this.ctx.fillStyle = '#fff';
            this.ctx.fillRect(enemy.x + 10, enemy.y + 12, 5, 5);
            this.ctx.fillRect(enemy.x + 25, enemy.y + 12, 5, 5);
        }
        
        // Draw particles
        for (const p of this.particles) {
            this.ctx.globalAlpha = p.life / 30;
            this.ctx.fillStyle = p.color;
            this.ctx.fillRect(p.x, p.y, 5, 5);
            this.ctx.globalAlpha = 1;
        }
        
        // Draw HUD
        this.ctx.fillStyle = '#fff';
        this.ctx.font = 'bold 20px Arial';
        this.ctx.fillText(`Score: ${this.score}`, 20, 30);
        
        this.ctx.font = '14px Arial';
        this.ctx.fillText('WASD/Arrows: Move | Space: Jump | Click enemies to collect', 20, this.height - 10);
    }
    
    gameLoop = () => {
        this.update();
        this.draw();
        requestAnimationFrame(this.gameLoop);
    }
}

// Initialize game when page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log('🎮 Initializing Wilds Explorer Demo...');
    const game = new WildsGame('gameCanvas');
    console.log('✅ Game running!');
});

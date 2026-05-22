// Game of Wilds Explorer - Demo Animation
// Small interactive preview in landing page header

class GameDemoCanvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId);
    if (!this.canvas) return;
    
    this.ctx = this.canvas.getContext('2d');
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.frameCount = 0;
    
    // Game objects
    this.player = {
      x: this.width * 0.3,
      y: this.height * 0.6,
      width: 20,
      height: 25,
      velocityX: 2
    };
    
    this.coins = [
      { x: 100, y: 80, collected: false, collected_time: 0 },
      { x: 200, y: 60, collected: false, collected_time: 0 },
      { x: 300, y: 90, collected: false, collected_time: 0 },
      { x: 400, y: 70, collected: false, collected_time: 0 },
      { x: 500, y: 85, collected: false, collected_time: 0 },
      { x: 600, y: 75, collected: false, collected_time: 0 }
    ];
    
    this.particles = [];
    this.score = 0;
    this.start();
  }
  
  start() {
    this.animate();
  }
  
  animate() {
    this.update();
    this.draw();
    requestAnimationFrame(() => this.animate());
  }
  
  update() {
    this.frameCount++;
    
    // Player movement (bouncing)
    this.player.x += this.player.velocityX;
    if (this.player.x >= this.width - 40 || this.player.x <= 0) {
      this.player.velocityX *= -1;
    }
    
    // Coin collection detection
    this.coins.forEach((coin, index) => {
      if (!coin.collected) {
        const dx = this.player.x - coin.x;
        const dy = this.player.y - coin.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 30) {
          coin.collected = true;
          coin.collected_time = this.frameCount;
          this.score++;
          
          // Create particles
          for (let i = 0; i < 5; i++) {
            this.particles.push({
              x: coin.x,
              y: coin.y,
              velocityX: (Math.random() - 0.5) * 4,
              velocityY: Math.random() * -3 - 2,
              life: 30,
              maxLife: 30,
              color: '#d4af37'
            });
          }
        }
      }
      
      // Reset coin after 2 seconds
      if (coin.collected && this.frameCount - coin.collected_time > 120) {
        coin.collected = false;
      }
    });
    
    // Update particles
    this.particles = this.particles.filter(p => {
      p.x += p.velocityX;
      p.y += p.velocityY;
      p.velocityY += 0.1; // gravity
      p.life--;
      return p.life > 0;
    });
  }
  
  draw() {
    // Clear with jungle gradient
    const gradient = this.ctx.createLinearGradient(0, 0, 0, this.height);
    gradient.addColorStop(0, '#2d6a4f');
    gradient.addColorStop(1, '#1a472a');
    this.ctx.fillStyle = gradient;
    this.ctx.fillRect(0, 0, this.width, this.height);
    
    // Draw background elements
    this.drawBackgroundElements();
    
    // Draw coins
    this.coins.forEach(coin => {
      this.drawCoin(coin);
    });
    
    // Draw player
    this.drawPlayer();
    
    // Draw particles
    this.particles.forEach(p => {
      this.ctx.globalAlpha = p.life / p.maxLife;
      this.ctx.fillStyle = p.color;
      this.ctx.fillRect(p.x, p.y, 4, 4);
      this.ctx.globalAlpha = 1;
    });
    
    // Draw score
    this.ctx.fillStyle = '#d4af37';
    this.ctx.font = 'bold 14px Arial';
    this.ctx.fillText(`Coins: ${this.score}`, 10, 25);
    
    // Draw info text
    this.ctx.fillStyle = '#e8f5e9';
    this.ctx.font = '12px Arial';
    this.ctx.fillText('Demo Preview - Move & Collect Coins', 10, this.height - 5);
  }
  
  drawBackgroundElements() {
    // Simple trees/plants as background
    const plantPositions = [50, 150, 250, 350, 450, 550];
    
    plantPositions.forEach(x => {
      // Tree
      this.ctx.fillStyle = '#1a472a';
      this.ctx.fillRect(x - 3, this.height - 30, 6, 30);
      
      // Tree foliage
      this.ctx.fillStyle = '#0d2e1f';
      this.ctx.beginPath();
      this.ctx.arc(x, this.height - 35, 8, 0, Math.PI * 2);
      this.ctx.fill();
    });
    
    // Ground
    this.ctx.fillStyle = 'rgba(0, 0, 0, 0.2)';
    this.ctx.fillRect(0, this.height - 15, this.width, 15);
  }
  
  drawPlayer() {
    // Body
    this.ctx.fillStyle = '#f4a460';
    this.ctx.fillRect(this.player.x - 10, this.player.y, this.player.width, this.player.height);
    
    // Head
    this.ctx.fillStyle = '#f4a460';
    this.ctx.beginPath();
    this.ctx.arc(this.player.x, this.player.y - 8, 6, 0, Math.PI * 2);
    this.ctx.fill();
    
    // Backpack (camera)
    this.ctx.fillStyle = '#8b4513';
    this.ctx.fillRect(this.player.x - 12, this.player.y + 5, 8, 10);
    this.ctx.fillRect(this.player.x + 4, this.player.y + 5, 8, 10);
    
    // Camera lens
    this.ctx.fillStyle = '#000';
    this.ctx.beginPath();
    this.ctx.arc(this.player.x - 8, this.player.y + 7, 2, 0, Math.PI * 2);
    this.ctx.fill();
  }
  
  drawCoin(coin) {
    if (coin.collected) {
      // Fade out
      const alpha = 1 - ((this.frameCount - coin.collected_time) / 120);
      this.ctx.globalAlpha = alpha;
    }
    
    // Coin circle
    this.ctx.fillStyle = '#d4af37';
    this.ctx.beginPath();
    this.ctx.arc(coin.x, coin.y, 6, 0, Math.PI * 2);
    this.ctx.fill();
    
    // Coin border
    this.ctx.strokeStyle = '#b8860b';
    this.ctx.lineWidth = 1;
    this.ctx.stroke();
    
    // Coin symbol
    this.ctx.fillStyle = '#b8860b';
    this.ctx.font = 'bold 8px Arial';
    this.ctx.textAlign = 'center';
    this.ctx.textBaseline = 'middle';
    this.ctx.fillText('$', coin.x, coin.y);
    
    this.ctx.globalAlpha = 1;
  }
}

// Initialize when DOM loads
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    new GameDemoCanvas('gameDemo');
  });
} else {
  new GameDemoCanvas('gameDemo');
}

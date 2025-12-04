// script.js - shared functions used on final page

// Create floating hearts (used on final when reveal pressed)
function createHearts() {
  const container = document.getElementById('hearts');
  if (!container) return;
  for (let i = 0; i < 30; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (12 + Math.random() * 24) + 'px';
    heart.style.animationDuration = (3 + Math.random() * 4) + 's';
    heart.style.opacity = Math.random() * 0.9 + 0.2;
    heart.textContent = '💖';
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 7000);
  }
}

// Create simple confetti when reveal button clicked
function createConfetti() {
  const colors = ['#ff66cc','#ff3399','#ffcc33','#33ccff','#66ff66'];
  const container = document.getElementById('hearts');
  if (!container) return;
  
  for(let i=0; i<80; i++){
    const conf = document.createElement('div');
    conf.className = 'heart';
    conf.style.left = Math.random() * 100 + 'vw';
    conf.style.top = '-10px';
    conf.style.fontSize = (12 + Math.random()*20)+'px';
    conf.style.color = colors[Math.floor(Math.random()*colors.length)];
    conf.style.animationDuration = (2+Math.random()*3)+'s';
    conf.textContent = '🎉';
    container.appendChild(conf);
    setTimeout(() => conf.remove(), 5000);
  }
}

// Final page: reveal button & floating hearts + confetti
document.addEventListener('DOMContentLoaded', () => {
  const revealBtn = document.getElementById('reveal-btn');
  const message = document.getElementById('birthday-message');
  if (revealBtn && message) {
    revealBtn.addEventListener('click', () => {
      message.classList.remove('hidden');
      createHearts();
      createConfetti();
      revealBtn.style.display = 'none';
    });
  }

  // Optional: click frog in final page shows alert
  const frog = document.getElementById('frog');
  if (frog) {
    frog.addEventListener('click', () => {
      alert("Ribbit! 🐸 Happy Birthday, Resi!");
    });
  }
});

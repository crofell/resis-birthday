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

// Final page: reveal button & frog click
document.addEventListener('DOMContentLoaded', () => {
  const revealBtn = document.getElementById('reveal-btn');
  const message = document.getElementById('birthday-message');
  if (revealBtn && message) {
    revealBtn.addEventListener('click', () => {
      message.classList.remove('hidden');
      createHearts();
      revealBtn.style.display = 'none';
    });
  }

  const frog = document.getElementById('frog');
  if (frog) {
    frog.addEventListener('click', () => {
      alert("Ribbit! 🐸 Happy Birthday, Resi!");
    });
  }
});

/*-- Navbar--*/

const hamburger = document.getElementById('hamburger');
const overlay = document.getElementById('overlay');
const closeBtn = document.getElementById('close-btn');

hamburger.addEventListener('click', () => {
  overlay.style.transform = 'translateX(0)';
});

closeBtn.addEventListener('click', () => {
  overlay.style.transform = 'translateX(-100%)';
});

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


/* bnt1 */

function downloadPDF() {
  const link = document.createElement("a");
  link.href = "Resume.pdf";  // Path to your PDF file
  link.download = "Jeet Thakur.pdf";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

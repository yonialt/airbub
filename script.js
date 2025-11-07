// === NAVBAR SCROLL EFFECT ===
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.continer');
  if (navbar) {
    if (window.scrollY > 50) {
      navbar.classList.add('small');
    } else {
      navbar.classList.remove('small');
    }
  }
});

// === SIDEBAR TOGGLE ===
const menuIcon = document.querySelector('header .continer-icon'); // select only the header icon
const sideFixed = document.querySelector('.side-fiexd');

// run only if both exist
if (menuIcon && sideFixed) {

  // toggle sidebar open/close
  menuIcon.addEventListener('click', (e) => {
    e.stopPropagation();
    sideFixed.classList.toggle('side-fiexd-open');
  });

  // close sidebar when clicking outside
  window.addEventListener('click', (e) => {
    if (!sideFixed.contains(e.target) && !menuIcon.contains(e.target)) {
      sideFixed.classList.remove('side-fiexd-open');
    }
  });
}

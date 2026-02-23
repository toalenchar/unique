function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
}

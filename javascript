/* Flex container */
.navbar {
    display: flex;
    background-color #333;
    padding: 10px;
}

/*Align items and distribute space */
.navbar {
    justify-content: space-between;
    align-items: center;
}
function toggleMenu() {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.getElementById('navLinks');
  hamburger.classList.toggle('open');
  navLinks.classList.toggle('open');
}
.navbar a {
    color: white;
    text-decoration: none;
    padding: 8px 16px;
}

<div class="navbar">
   <a href="#">Logo</a>
   <a href="#">Home</a>
   <a href="#">About</a>
   <a href="#">Contact</a>
 </div>

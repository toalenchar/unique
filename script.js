// Toggle mobile nav
function toggleMenu() {
    var hamburger = document.querySelector('.hamburger');
    var navLinks = document.getElementById('navLinks');
    hamburger.classList.toggle('active');
    navLinks.classList.toggle('active');
}

// Close nav when clicking outside
document.addEventListener('click', function(e) {
    var nav = document.getElementById('navLinks');
    var hamburger = document.querySelector('.hamburger');
    if (nav.classList.contains('active') &&
        !nav.contains(e.target) &&
        !hamburger.contains(e.target)) {
        nav.classList.remove('active');
        hamburger.classList.remove('active');
    }
});

// Make hero visible immediately
window.addEventListener('load', function() {
    var heroEls = document.querySelectorAll('#hero .fade-in');
    for (var i = 0; i < heroEls.length; i++) {
        (function(el, index) {
            setTimeout(function() {
                el.classList.add('visible');
            }, 200 + index * 150);
        })(heroEls[i], i);
    }
});

// Scroll animations for everything below hero
var observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

window.addEventListener('load', function() {
    var allEls = document.querySelectorAll('.fade-in, .slide-left, .slide-right');
    allEls.forEach(function(el) {
        if (!el.closest('#hero')) {
            observer.observe(el);
        }
    });

    document.querySelectorAll('.project-card').forEach(function(card, i) {
        card.style.transitionDelay = (i * 0.12) + 's';
        observer.observe(card);
    });

    document.querySelectorAll('.skill-block').forEach(function(block, i) {
        block.style.transitionDelay = (i * 0.1) + 's';
        observer.observe(block);
    });
});

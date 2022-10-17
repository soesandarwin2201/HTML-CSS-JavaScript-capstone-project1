const toggle = document.getElementById('toggle');
const closeBtn = document.getElementById('close-btn');
const navMenu = document.getElementById('nav-menu');

toggle.addEventListener('click', () => {
 navMenu.style.transform = 'translateX(0)';
});

closeBtn.addEventListener('click', () => {
 navMenu.style.transform = 'translateX(-100%)';
});
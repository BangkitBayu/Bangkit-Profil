//fitur hamburger menu
const hamburger = document.getElementById('hamburger-menu');
const navmenu = document.getElementById('nav-list')

hamburger.addEventListener('click', function () {
    hamburger.classList.toggle('active');
    navmenu.classList.toggle('active')
});
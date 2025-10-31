const toggleMenu = document.getElementById('menu-toggle');
const sideMenu = document.getElementById('small-screen-menu');
const iconChange = toggleMenu.querySelector('i');

toggleMenu.addEventListener('click', () => {
    sideMenu.classList.toggle('active');

    // change icon bet. bars and x in small screen view
    if (sideMenu.classList.contains('active')) {
        iconChange.classList.replace('fa-bars', 'fa-xmark');
    }
    else {
        iconChange.classList.replace('fa-xmark', 'fa-bars');
    }
});
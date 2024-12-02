
const sideMenu = document.querySelector('#side-menu');
const navBar = document.querySelector('nav');
const navLinks = document.getElementById('menu-1');

// side menu
function openMenu() {
    sideMenu.style.transform = "translateX(-16rem)";
};

function closeMenu() {
    sideMenu.style.transform = "translateX(16rem)";
};


// nav while scrolling
window.addEventListener('scroll', () => {
    if (scrollY > 20) {
        navBar.classList.add('backdrop-blur-md', 'shadow-lg', 'transition', 'duration-500', 'bg-opacity-80');
    } else {
        navBar.classList.remove('backdrop-blur-md', 'shadow-lg', 'bg-opacity-80');
    }
});
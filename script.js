const languageButton = document.getElementById("language-button");
const languagePopup = document.getElementById("language-popup");
const languageOption = document.getElementById("language-option");
const sideMenu = document.querySelector('#side-menu');
const navBar = document.querySelector('nav');
const navLinks = document.getElementById('menu-1');

// language change
let currentLanguage = "Srpski";

languageButton.addEventListener("click", () => {
    languagePopup.classList.toggle("active");
});

languageOption.addEventListener("click", () => {
    if (currentLanguage === "Srpski") {
        languageButton.innerHTML = `
            <img src="images/globe-icon.png" alt="language-change" class="w-8">
            English
        `;
        languageOption.innerHTML = `
            <img src="images/sr-icon.png" alt="Serbian" class="w-6">
            Srpski
        `;
        currentLanguage = "English";
    } else {
        languageButton.innerHTML = `
            <img src="images/globe-icon.png" alt="language-change" class="w-8">
            Srpski
        `;
        languageOption.innerHTML = `
            <img src="images/en-icon.png" alt="English" class="w-6">
            English
        `;
        currentLanguage = "Srpski";
    }
    languagePopup.classList.remove("active");
});

// side menu
function openMenu() {
    sideMenu.style.transform = "translateX(-16rem)";
};

function closeMenu() {
    sideMenu.style.transform = "translateX(16rem)";
};


// nav while scrolling
window.addEventListener('scroll', () => {
    if (scrollY > 50) {
        navBar.classList.add('backdrop-blur-lg', 'shadow-lg', 'transition', 'duration-500', 'bg-opacity-80');
    } else {
        navBar.classList.remove('backdrop-blur-lg', 'shadow-lg', 'bg-opacity-80');
    }
});

// map
document.addEventListener("DOMContentLoaded", () => {
    // Create map centered on the first location
    const map = L.map('googlemap', {
        scrollWheelZoom: false
    }).setView([44.6700, 20.9311], 9);

    // OpenStreetMap tiles
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // locations
    const locations = [
        { name: "Smederevska Palanka", lat: 44.3658, lng: 20.9581 },
        { name: "Slobodna Zona Smederevo", lat: 44.6553, lng: 20.9000 },
        { name: "Mladenovac", lat: 44.4386, lng: 20.6972 },
        { name: "Smederevo", lat: 44.6700, lng: 20.9311 }
    ];

    // Add markers
    locations.forEach(location => {
        L.marker([location.lat, location.lng])
            .addTo(map)
            .bindPopup(`<b>${location.name}</b>`)
            .openPopup();
    });
});
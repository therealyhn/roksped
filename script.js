const languageButton = document.getElementById("language-button");
const languagePopup = document.getElementById("language-popup");
const languageOption = document.getElementById("language-option");
const sideMenu = document.querySelector('#side-menu');


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



// toggle side menu
function openMenu() {
    sideMenu.style.transform = "translateX(-16rem)";
};

function closeMenu() {
    sideMenu.style.transform = "translateX(16rem)";
};


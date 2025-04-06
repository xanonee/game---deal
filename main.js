// Gestion du thème sombre/clair
const themeToggle = document.getElementById('theme-toggle');
const themeCSS = document.getElementById('theme-css');

themeToggle.addEventListener('click', () => {
    const isDark = themeCSS.getAttribute('href').includes('dark.css');
    
    if (isDark) {
        themeCSS.setAttribute('href', 'css/themes/light.css');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        localStorage.setItem('theme', 'light');
    } else {
        themeCSS.setAttribute('href', 'css/themes/dark.css');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        localStorage.setItem('theme', 'dark');
    }
});

// Chargement du thème sauvegardé
if (localStorage.getItem('theme') === 'light') {
    themeCSS.setAttribute('href', 'css/themes/light.css');
    themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
}

// Gestion du menu mobile
const mobileMenuToggle = document.createElement('button');
mobileMenuToggle.innerHTML = '<i class="fas fa-bars"></i>';
mobileMenuToggle.classList.add('mobile-menu-toggle');

// Ajouter le bouton pour mobile (à compléter)

// script.js
document.addEventListener('DOMContentLoaded', () => {
    // 1. Affiche les jeux
    function renderGames(filteredGames = games) {
        const container = document.getElementById('game-library');
        container.innerHTML = filteredGames.map(game => `
            <div class="game-card animate__animated animate__fadeIn">
                ${generateGameHTML(game)}
            </div>
        `).join('');
    }

    // 2. Filtres interactifs
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const platform = btn.dataset.platform;
            const filtered = platform ? games.filter(g => g.platforms.includes(platform)) : games;
            renderGames(filtered);
        });
    });

    // 3. Dark Mode
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    darkModeToggle.addEventListener('click', () => {
        document.body.setAttribute('data-theme', 
            document.body.getAttribute('data-theme') === 'dark' ? 'light' : 'dark');
    });

    renderGames(); // Charge tous les jeux au démarrage
});

function generateGameHTML(game) {
    return `
        <div class="game-media">
            ${game.video ? `
                <div class="video-thumb" onclick="openVideo('${game.video}')">
                    <i class="fas fa-play"></i>
                    <img src="${game.image}" alt="${game.title}">
                </div>
            ` : `<img src="${game.image}" alt="${game.title}">`}
            <div class="price-tag ${game.isFree ? 'free' : ''}">
                ${game.isFree ? 'GRATUIT' : `€${game.price}`}
            </div>
        </div>
        <div class="game-info">
            <h3>${game.title}</h3>
            <div class="meta">
                <span class="rating" style="--rating: ${game.rating}%"></span>
                <span class="developer">${game.developer}</span>
            </div>
            <p class="description">${game.description.substring(0, 100)}...</p>
            <div class="platforms">
                ${game.platforms.map(p => `
                    <span class="${p}" title="${p.toUpperCase()}">
                        <i class="fab fa-${p === 'xbox' ? 'xbox' : p === 'ps5' ? 'playstation' : p === 'switch' ? 'nintendo-switch' : 'windows'}"></i>
                    </span>
                `).join('')}
            </div>
        </div>
    `;
}

function openVideo(youtubeId) {
    window.open(`https://www.youtube.com/watch?v=${youtubeId}`, '_blank');
}

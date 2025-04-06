// games.js
const games = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    price: 29.99,
    originalPrice: 59.99,
    discount: 50,
    isFree: false,
    platforms: ["pc", "ps5", "xbox"],
    developer: "CD Projekt Red",
    releaseDate: "2020-12-10",
    rating: 75,
    description: "Jeu RPG futuriste dans la mégalopole de Night City...",
    video: "LembwpcD1Yg", // ID YouTube du trailer
    image: "assets/cyberpunk.jpg",
    genres: ["RPG", "Action"]
  },
  {
    id: 2,
    title: "Fortnite",
    price: 0,
    originalPrice: 0,
    discount: 0,
    isFree: true,
    platforms: ["pc", "ps5", "xbox", "switch", "mobile"],
    developer: "Epic Games",
    releaseDate: "2017-07-25",
    rating: 78,
    description: "Battle Royale gratuit avec constructions et skins cosmétiques...",
    video: "WJW-bzXZM8M",
    image: "assets/fortnite.jpg",
    genres: ["Battle Royale", "FPS"]
  },
  // ... Ajoutez 100+ jeux selon ce modèle
];

const quotes = [
  "Meow~ you’re my favorite human 💕",
  "Purr… I trust you 😼",
  "I knead you because I love you 🤍",
  "You smell like comfort 😽",
  "If I sit near you, you are special 🐾"
];

const images = [
  "./assets/cat1.jpg",
  "./assets/cat2.jpg",
  "./assets/cat3.jpg"
];

let imgIndex = 0;

const quoteEl = document.getElementById("quote");
const catImg = document.getElementById("catImg");
const btn = document.getElementById("meowBtn");

const meowSound = new Audio("./assets/meow.mp3");
const bgMusic = new Audio("./assets/bg-music.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.4;

btn.addEventListener("click", () => {
  meowSound.currentTime = 0;
  meowSound.play();

  bgMusic.play();

  quoteEl.textContent = quotes[Math.floor(Math.random() * quotes.length)];
  imgIndex = (imgIndex + 1) % images.length;
  catImg.src = images[imgIndex];

  for (let i = 0; i < 5; i++) createHeart();
});

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = "💖";
  heart.style.left = Math.random() * 200 + "px";
  heart.style.bottom = "60px";
  document.querySelector(".container").appendChild(heart);
  setTimeout(() => heart.remove(), 2000);
}

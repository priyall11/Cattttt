const quotes = [
  "Meow! I choose you forever 🐾💖",
  "Purr… your code smells like love 😽",
  "If bugs attack you, I’ll sit on the keyboard 😼",
  "Nine lives, one favorite human 🐱✨"
];

let musicPlaying = false;

function newQuote() {
  const q = document.getElementById("quote");
  const meow = document.getElementById("meowSound");

  meow.currentTime = 0;
  meow.play();

  createHeart();

  q.innerText = quotes[Math.floor(Math.random() * quotes.length)];
}

function toggleDark() {
  document.body.classList.toggle("dark");
}

function toggleMusic() {
  const music = document.getElementById("bgMusic");
  if (!musicPlaying) {
    music.play();
    musicPlaying = true;
  } else {
    music.pause();
    musicPlaying = false;
  }
}

function createHeart() {
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.innerText = "💖";
  heart.style.left = Math.random() * 100 + "vw";
  document.body.appendChild(heart);

  setTimeout(() => heart.remove(), 4000);
             }

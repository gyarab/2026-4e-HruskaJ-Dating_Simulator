const btnNewGame = document.getElementById("btn-new-game");
const btnAbout = document.getElementById("btn-about");
const btnSettings = document.getElementById("btn-settings");
const modal = document.getElementById("modal");
const btnModalClose = document.getElementById("btn-modal-close");

function createParticles() {
  const container = document.getElementById("particles");
  for (let i = 0; i < 20; i++) {
    const p = document.createElement("div");
    p.className = "particle";
    const size = Math.random() * 24 + 10;
    p.style.width = `${size}px`;
    p.style.height = `${size}px`;
    p.style.left = `${Math.random() * 100}%`;
    p.style.animationDelay = `${Math.random() * 6}s`;
    p.style.animationDuration = `${Math.random() * 6 + 6}s`;
    container.appendChild(p);
  }
}

btnAbout.addEventListener("click", () => {
  modal.classList.add("active");
});

btnSettings.addEventListener("click", () => {
  alert("Zde bude menu pro nastaveni hry.");
});

btnModalClose.addEventListener("click", () => {
  modal.classList.remove("active");
});

btnNewGame.addEventListener("click", () => {
  alert("Zde po kliknuti bude herni okno s uvodni animaci.");
});

createParticles();s
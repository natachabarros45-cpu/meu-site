const audio = document.getElementById("bgMusic");
const btn = document.getElementById("soundBtn");
const form = document.querySelector(".banner-form");
const msgOk = document.getElementById("msgOk");

let playing = false;

btn.addEventListener("click", async () => {
  try {
    if (!playing) {
      audio.volume = 0.25;
      await audio.play();
      playing = true;
      btn.textContent = "🔇 Desligar som";
    } else {
      audio.pause();
      playing = false;
      btn.textContent = "🔊 Ativar som";
    }
  } catch (e) {
    alert("O navegador bloqueou o som. Clique novamente.");
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  msgOk.style.display = "block";
  form.reset();
});
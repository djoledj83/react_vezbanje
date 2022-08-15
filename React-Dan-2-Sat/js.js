let sekunde = document.querySelector(".sekunde");
let minuti = document.querySelector(".minuti");
let sati = document.querySelector(".sati");

function setDate() {
  let sada = new Date();

  let seconds = sada.getSeconds();
  let sekundeStepeni = (seconds / 60) * 360 + 90;
  sekunde.style.transform = `rotate(${sekundeStepeni}deg)`;

  let minutes = sada.getMinutes();
  let minutiStepeni = (minutes / 60) * 360 + 90;
  minuti.style.transform = `rotate(${minutiStepeni}deg)`;

  let sat = sada.getHours();
  let satiStepeni = (sat / 12) * 360 + 90;
  sati.style.transform = `rotate(${satiStepeni}deg)`;
}
setInterval(setDate, 1000);

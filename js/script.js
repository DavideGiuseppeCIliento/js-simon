// ##################### ACQUISIZIONI

const countdownEl = document.getElementById("countdown");
const formEl = document.getElementById("answer-form");

// ##################### FUNZIONI

// -------CONTDOWN

let secondsTimer = 30;
const timer = setInterval(() => {
  countdownEl.innerText = secondsTimer;
  console.log(secondsTimer);
  secondsTimer--;

  if (secondsTimer < 0) {
    clearInterval(timer);
    countdownEl.innerText = "⏰ Tempo scaduto!";
    setTimeout(Answerdisplay, 2000);
  }
}, 1000);

// ------- DISPLAY RISPOSTA ON

const Answerdisplay = () => {
  countdownEl.classList.add("d-none");
  formEl.classList.replace("d-none", "d-block");
  return;
};

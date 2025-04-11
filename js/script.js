// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// ##################### FUNZIONI

// ------- ANSWER DISPLAY ON

const Answerdisplay = () => {
  countdownEl.classList.add("d-none");
  formEl.classList.replace("d-none", "d-block");
  textInstructions.innerText = "Vediamo se riesci a ricordarli!";
  return;
};

// ------- RANDOM NUMBER GENERATION

const numberRandom = () => {
  const numberRandomArray = [];
  for (let i = 0; i < 5; i++) {
    numberRandomArray.push(Math.floor(Math.random() * 50) + 1);
  }
  return numberRandomArray;
};

// ------- RANDOM NUMBER STAMP

const stampNumberRandom = (numbers) => {
  for (let i = 0; i < numbers.length; i++) {
    const li = document.createElement("li");
    li.innerText = numbers[i];
    numbersEl.append(li);
  }
};

// ------- ACQUISIZIONE NUMERI UTENTE

const getPlayerNumbers = () => {
  const inputs = document.querySelectorAll("input.form-control");
  console.log(inputs);

  for (let i = 0; i < numbers.length; i++) {
    const playerNumbers = document.querySelectorAll("form-control");
    console.log(playerNumbers);
  }
};

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// ##################### ACQUISIZIONI

const countdownEl = document.getElementById("countdown");
const formEl = document.getElementById("answers-form");
const textInstructions = document.getElementById("instructions");
const numbersEl = document.getElementById("numbers-list");

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// ##################### ALGORITMO

const numbers = numberRandom();
stampNumberRandom(numbers);

// -------CONTDOWN

let secondsTimer = 5;
const timer = setInterval(() => {
  countdownEl.innerText = secondsTimer;

  console.log(numbers);

  secondsTimer--;

  if (secondsTimer < 0) {
    clearInterval(timer);
    countdownEl.innerText = "⏰ Tempo scaduto!";
    numbersEl.classList.add("d-none");
    setTimeout(Answerdisplay, 2000);
  }
}, 1000);

// -------RISPOSTA

const playerNumbers = getPlayerNumbers(numbers);

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

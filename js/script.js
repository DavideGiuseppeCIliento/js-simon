// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// ##################### FUNZIONI

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

// ------- ANSWER DISPLAY ON

const Answerdisplay = () => {
  countdownEl.classList.add("d-none");
  formEl.classList.replace("d-none", "d-block");
  textInstructions.innerText = "Vediamo se riesci a ricordarli!";
  return;
};

// ------- ACQUISIZIONE NUMERI UTENTE

const getPlayerNumbers = () => {
  const inputs = document.querySelectorAll("input.form-control");
  console.log(inputs);
  const numeri = [];

  for (let i = 0; i < inputs.length; i++) {
    const valore = parseInt(inputs[i].value);
    numeri.push(valore);
  }
  console.log(numeri);
  return numeri;
};

// ------- COMPARAZIONE NUMERI

const compareNumber = (playerNumbers, rightNumbers) => {
  let count = 0;
  const okNumbers = [];
  for (i = 0; i < playerNumbers.length; i++) {
    if (rightNumbers.includes(playerNumbers[i])) {
      count++;
      okNumbers.push(playerNumbers[i]);
    }
  }

  return [count, okNumbers];
};

// ------- CALCOLO RISULTATO FINALE
const calcResult = (arrayResult) => {
  const count = arrayResult[0];
  const numberWinner = arrayResult[1];

  if (count === 5) {
    bodyEl.innerHTML = `<h1 class="display-1 text-black">HAI VINTO!</h1>`;
  } else if (count !== 5) {
    resultMessage.innerText = `Hai indovinato solo ${count}: numeri:${numberWinner}.`;
  }
};

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// ##################### ACQUISIZIONI

const countdownEl = document.getElementById("countdown");
const formEl = document.getElementById("answers-form");
const textInstructions = document.getElementById("instructions");
const numbersEl = document.getElementById("numbers-list");
const resultMessage = document.getElementById("message");
const bodyEl = document.querySelectorAll("body");
// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

// ##################### ALGORITMO

const rightNumbers = numberRandom();
stampNumberRandom(rightNumbers);

// -------CONTDOWN

let secondsTimer = 2;
const timer = setInterval(() => {
  countdownEl.innerText = secondsTimer;

  console.log(rightNumbers);

  secondsTimer--;

  if (secondsTimer < 0) {
    clearInterval(timer);
    countdownEl.innerText = "⏰ Tempo scaduto!";
    numbersEl.classList.add("d-none");
    setTimeout(Answerdisplay, 2000);
  }
}, 1000);

// -------RISPOSTA

formEl.addEventListener("submit", function (event) {
  event.preventDefault();
  const playerNumbers = getPlayerNumbers(rightNumbers);
  console.log(playerNumbers);
  const arrayResult = compareNumber(playerNumbers, rightNumbers);
  console.log(arrayResult);
  calcResult();
});

// --------------------------------------------------------------------------------------
// --------------------------------------------------------------------------------------

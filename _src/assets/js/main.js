"use strict";

const testNumberEl = document.querySelector(".test__number");
const testFeedbackEl = document.querySelector(".test__feedback");
const testCounterEl = document.querySelector(".test__counter");
const testButton = document.querySelector(".test__btn");
const froggyEl = document.querySelector(".svg-frog");
const musicEl = document.querySelector(".music");
let aleatoryNumber = getRandomNumber();
let counter = 0;
// console.log("Número aleatorio: " + aleatoryNumber);

function getRandomNumber() {
  return Math.ceil(Math.random() * 100);
}

function handleRestartButtonClick() {
  testNumberEl.value = "";
  counter = 0;
  testCounterEl.innerHTML = counter;
  testFeedbackEl.innerHTML = "Escribe un número y dale a Prueba";
  aleatoryNumber = getRandomNumber();
  // console.log("Nuevo número aleatorio: " + aleatoryNumber);
  testButton.addEventListener("click", handleButtonClick);
  froggyEl.classList.remove("svg-frog__jumping");
  testNumberEl.disabled = false;
  testButton.disabled = true;
  pauseAudio();
}

function feedback(text) {
  testFeedbackEl.innerHTML = text;
}

function win() {
  froggyEl.classList.add("svg-frog__jumping");
  const winButtonEl = document.querySelector(".restart__btn");
  winButtonEl.addEventListener("click", handleRestartButtonClick);
  testNumberEl.disabled = true;
  testButton.disabled = true;
  playAudio();
}

function addFeedbackText() {
  let userNumber = parseFloat(testNumberEl.value);
  if (userNumber === aleatoryNumber) {
    feedback(
      "¡HAS GANADO!" + '<button class="restart__btn">¡Juega otra vez!</button>'
    );
    win();
  } else if (userNumber < 1 || userNumber > 100 || userNumber % 1 !== 0) {
    feedback("Ese número no vale. Prueba con uno del 1 al 100.");
  } else if (userNumber > aleatoryNumber) {
    feedback("Demasiado alto.");
  } else if (userNumber < aleatoryNumber) {
    feedback("Demasiado bajo.");
  } else if (isNaN(userNumber)) {
    feedback("No has puesto ningún número. Prueba con uno del 1 al 100.");
  }
}

function incrementCounter() {
  counter += 1;
  testCounterEl.innerHTML = counter;
  if (parseInt(counter) >= 100) {
    testCounterEl.innerHTML = "+99";
  }
}

function playAudio() {
  musicEl.play();
}

function pauseAudio() {
  musicEl.pause();
}

testButton.addEventListener("click", handleButtonClick);
function handleButtonClick() {
  addFeedbackText();
  incrementCounter();
  testNumberEl.value = "";
}

testNumberEl.addEventListener("keyup", enterKey);
function enterKey(event) {
  if (event.which == 13) {
    handleButtonClick();
  }
}

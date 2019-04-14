'use strict';


// Se trata de un juego que consiste en adivinar un número aleatorio (oculto) del 1 al 100, nos van dando pistas de si es muy bajo o muy alto y hay un contador de intentos que llevamos.
// En la pantalla hay un input para intriducir el número, un botón para probar si he acertado, un espacio para el feedback y un espacio para el contador de intentos.
// Usamos las funciones Math.random y Math.ceil par crear el número aleatorio.


// Recoger input
const testNumberEl = document.querySelector('.test__number');
// Recoger div de feedback
const testFeedbackEl = document.querySelector('.test__feedback');
// Recoger div de contador
const testCounterEl = document.querySelector('.test__counter');
// Recoger botón de prueba
const testButton = document.querySelector('.test__btn');
// Recoger resultado de la función getRandomNumber
let aleatoryNumber = getRandomNumber();
// Recoger rana
const froggyEl = document.querySelector('.svg-frog');

// Generar contador
let counter = 0;

// Comprobar que hasta aquí va bien
// console.log(testNumberEl, testFeedbackEl, testCounterEl, testButton, winButtonEl);
// Me interesa ver el número para hacer pruebas ahora
console.log('Número aleatorio: ' + aleatoryNumber);

// Generar número aleatorio (Math.random y Math.ceil)
function getRandomNumber() {
  return Math.ceil(Math.random() * 100);
}
// Crear handler para el botón de volver a jugar. ARREGLAR!! PONGO EL CONTADOR A CERO PERO SUMA LOS CLICKS DE LA PARTIDA ANTERIOR!!!
function handleRestartButtonClick(){
  testNumberEl.value = '';
  counter = 0;
  testCounterEl.innerHTML = counter;
  testFeedbackEl.innerHTML ='Escribe un número y dale a Prueba';
  aleatoryNumber = getRandomNumber();
  console.log('Nuevo número aleatorio: ' + aleatoryNumber);
  testButton.addEventListener('click', handleButtonClick);
  froggyEl.classList.remove('svg-frog__jumping');
  testNumberEl.disabled = false;
}

function feedback(text){
  testFeedbackEl.innerHTML = text;
}

function win(){
  froggyEl.classList.add('svg-frog__jumping');
  const winButtonEl = document.querySelector('.restart__btn');
  winButtonEl.addEventListener('click', handleRestartButtonClick);
  testNumberEl.disabled = true;
}

function addFeedbackText(){
   // Recoger valor de input en este momento y convertirlo a número
   let userNumber = parseFloat(testNumberEl.value);
  // Si número aleatorio es correcto
  // Escribir  "¡HAS GANADO!" en div de feedback, que salga un botón para volver a jugar y se ejecute la función de ese botón cuando se haga click. Escuchar el click del botón de volver a jugar. Que la rana salte.
  if (userNumber===aleatoryNumber){
    feedback('¡HAS GANADO!' + '<button class="restart__btn">¡Juega otra vez!</button>');
    win();
    
  }
  // Si es mayor de 100 o menor de 1 o decimal que diga que ese número no es válido
  else if(userNumber<1 || userNumber>100 || userNumber % 1 != 0){
    feedback('Ese número no vale. Prueba con uno del 1 al 100.');
  }
  // Si mayor que número aleatorio
  // Escribir  "demasiado alto" en div de feedback
  else if (userNumber>aleatoryNumber){
    feedback('Demasiado alto.');
  }
  // Si no
  //Escribir "demasiado bajo" en div de feedback
  else if(userNumber<aleatoryNumber){
    feedback('Demasiado bajo.');
  }
  // Si no se escrube nada que diga que no se ha puesto ningún número
  else if(isNaN(userNumber)){
    feedback('No has puesto ningún número. Prueba con uno del 1 al 100.');
  }
}

 // Aumentar el contador que sume uno cada vez que se haga click
function incrementCounter(){
  counter += 1;
  testCounterEl.innerHTML = counter;
  // Limitar el contador para que no lleguen a ser tres cifras y a partir de ahí ponga '+99' y así no se salga del spinner
  if (parseInt(counter)>=100){
    testCounterEl.innerHTML = '+99';
  }
}

// Escuchar click en botón Prueba
testButton.addEventListener('click', handleButtonClick);
// Crear handler de click en botón Prueba
function handleButtonClick() {
  addFeedbackText();
  incrementCounter();
  testNumberEl.value = '';
}




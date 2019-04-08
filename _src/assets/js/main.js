'use strict';

// Se trata de un juego que consiste en adivinar un número aleatorio del 1 al 100, nos van dando pistas de si es muy bajo o muy alto y hay un contador de intentos que llevamos.
// En la pantalla hay un input para intriducir el número, un botón para probar si he acertado, un espacio para el feedback y un espacio para el contador de intentos.
// Usamos las funciones Math.random y Math.ceil par crear el número aleatorio.


// Generar número aleatorio (Math.random y Math.ceil)
function getRandomNumber(max) {
    return Math.ceil(Math.random() * 100);  
  } 
const aleatoryNumber = getRandomNumber();
// Comprobar que hasta aquí va bien
console.log(aleatoryNumber);

// Recoger input
const testNumberEl = document.querySelector('.test__number');
// Recoger div de feedback
const testFeedbackEl = document.querySelector('.test__feedback');
// Recoger div de contador
const testCounterEl = document.querySelector('.test__counter');
// Recoger botón de prueba
const testButton = document.querySelector('.test__btn');
// Comprobar que hasta aquí va bien
// console.log(testNumberEl, testFeedbackEl, testCounterEl, testButton);

// Escuchar click en botón
testButton.addEventListener('click', handleButtonClick);
// Crear handler de click en botón
function handleButtonClick(event) {
  event.preventDefault();

// En este punto compruebo
// console.log('CLICK');

    // Si número aleatorio es correcto
     // Escribir  "¡HAS GANADO, CAMPEONA!" en div de feedback
    if (aleatoryNumber===testNumberEl.value){
        testFeedbackEl.innerHTML = 'HAS GANADO, CAMPEONA!';
    }   
    // Si mayor que número aleatorio
        // Escribir  "demasiado alto" en div de feedback
    else if (aleatoryNumber<testNumberEl.value){
        testFeedbackEl.innerHTML = 'Demasiado alto';
    }
    // Si no
        //Escribir "demasiado bajo" en div de feedback
    else {
        testFeedbackEl.innerHTML = 'Demasiado bajo';
    }
}

// Generar contador (for)

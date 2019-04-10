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
const aleatoryNumber = getRandomNumber();
// Generar contador 
let counter = 0;

// Comprobar que hasta aquí va bien
// console.log(testNumberEl, testFeedbackEl, testCounterEl, testButton);
// Me interesa ver el número para hacer pruebas ahora
// console.log(aleatoryNumber);

// Generar número aleatorio (Math.random y Math.ceil)
function getRandomNumber() {
    return Math.ceil(Math.random() * 100);  
  } 

  
// Escuchar click en botón
testButton.addEventListener('click', handleButtonClick);

// Crear handler de click en botón
function handleButtonClick() {
// En este punto compruebo
// console.log('CLICK');

    // Recoger valor de input en este momento y convertirlo a número
    const userNumber = parseInt(testNumberEl.value);

    // Si número aleatorio es correcto
     // Escribir  "¡HAS GANADO, CAMPEONA!" en div de feedback
    if (userNumber===aleatoryNumber){
        testFeedbackEl.innerHTML = 'HAS GANADO, CAMPEONA!';
    }   
    // Si mayor que número aleatorio
        // Escribir  "demasiado alto" en div de feedback
    else if (userNumber>aleatoryNumber){
        testFeedbackEl.innerHTML = 'Demasiado alto';
    }
    // Si no
        //Escribir "demasiado bajo" en div de feedback
    else {
        testFeedbackEl.innerHTML = 'Demasiado bajo';
    }

    // Aumentar el contador que sume uno cada vez que se haga click
    counter += 1;
    testCounterEl.innerHTML = counter;
}



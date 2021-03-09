// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 == true && value2 == true){
  return true;
  }else {
  return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return ((base * height)/2);
}

// Desafio 3
function splitSentence(array) {
  // seu código aqui 
  // desafio 3 realizado com ajuda do https://developer.mozilla.org para o entendimento da função .split
  return array.split(" ");
}

// Desafio 4
function concatName(array) {
  // seu código aqui
let lastString = array.length-1
let firstString = array[lastString] + ', ' + array[0]
return firstString;
}


// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
let winPoints = wins * 3;
let tiesPoints = ties * 1;  
let teamPoints = 0 + tiesPoints + winPoints;

return teamPoints
}


// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
let higher = 0;
let contador = 0;  
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > higher) {
      higher = arrayNumbers[index];
    }
  }  
  for (index = 0; index < arrayNumbers.length; index += 1){
  if (arrayNumbers[index] == higher){
  contador += 1;
  }
  }   
  return contador;
}

// Desafio 7
function catAndMouse(mouse,cat1,cat2,) {
  // seu código aqui
  //desafio 7 realizado com consulta ao material do https://developer.mozilla.org para entender o funcionamento da função Math.abs , e também bastante ajuda dos plantões.
 
 let cat1move = Math.abs(cat1 - mouse);
 let cat2move = Math.abs(cat2 - mouse);

  if (cat1move < cat2move) {
  return 'cat1';
  }
  else if (cat1move > cat2move) {
  return 'cat2'
  }
  else {
  return 'os gatos trombam e o rato foge';
  }
}


// Desafio 8
function fizzBuzz(arrayNumbers) {
  // seu código aqui
  let arrayFizzBuzz = [];
  for (let index = 0; index < arrayNumbers.length; index += 1){
    if (arrayNumbers[index] % 3 == 0 && arrayNumbers[index] % 5 == 0) {
    arrayFizzBuzz[index] = 'fizzBuzz';
    }
    else if (arrayNumbers[index] % 3 == 0 && arrayNumbers[index] % 5 != 0){
    arrayFizzBuzz[index] = 'fizz';
    }
    else if(arrayNumbers[index] % 3 != 0 && arrayNumbers[index] % 5 == 0){
    arrayFizzBuzz[index] = 'buzz';
    }
    else {
    arrayFizzBuzz[index] =  'bug!';  
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(codify) {
  // seu código aqui
  // Desafio 9 realizado com ajuda do https://developer.mozilla.org para o entendimento das funções .join e .split 

  let array = codify.split('');
  
  for (let index = 1; index < codify.length; index += 1){
    if (codify[index] === 'a'){
    array[index] = '1';
    }
    else if (codify[index] === 'e'){
    array[index] = '2';  
    }
    else if (codify[index] === 'i'){
    array[index] = '3';  
    }
    else if (codify[index] === 'o'){
    array[index] = '4';  
    }
    else if (codify[index] === 'u'){
    array[index] = '5';  
    }
    }
return array.join("");
}

function decode(decodefy) {
  // seu código aqui
let arrayN = decodefy.split('');  
  
  for (let index = 1; index < decodefy.length; index += 1){
    if (decodefy[index] === '1'){
    arrayN[index] = 'a';
    }
    else if (decodefy[index] === '2'){
    arrayN[index] = 'e';  
    }
    else if (decodefy[index] === '3'){
    arrayN[index] = 'i';  
    }
    else if (decodefy[index] === '4'){
    arrayN[index] = 'o';  
    }
    else if (decodefy[index] === '5'){
    arrayN[index] = 'u';  
    }
    }

return arrayN.join("");
}


module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

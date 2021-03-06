// Desafio 1
function compareTrue(valor1,valor2) {
  let resultado;
  if (valor1 == true && valor2 == true) {
    resultado = true
 } else {
   resultado = false
 }
 return resultado
}
console.log(compareTrue(true,false))

// Desafio 2
function calcArea(base,height) {
  let resultArea
  resultArea = (base * height) /2
  return resultArea
}
console.log(calcArea(20,20))

// Desafio 3
function splitSentence(stringResult) {
  return stringResult.split(" ");
}
console.log(splitSentence("Go Trybe"))

// Desafio 4
function concatName(array) {
  let concatResult = '';
  let ultimo = array.length - 1
  concatResult = array[ultimo] + ', ' + array[0]
  return concatResult
}
  console.log(concatName(['é o zica', 'espaço', 'ronaldo', 'Juan']))

// Desafio 5
function footballPoints(wins, ties) {
 let vitorias = wins * 3;
 let empates = ties * 1;
 let result = vitorias + empates

 if (wins === true) {
   wins = vitorias
 }
 if (ties === true) {
   ties = empates;
 }
 return result
}
console.log(footballPoints(12,3))

// Desafio 6
function highestCount(arrayNumbers) {
  let numeroMaior = 0;
  let vezesAparece = 0;
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] > numeroMaior) {
      numeroMaior = arrayNumbers[i];
    }
  }
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (arrayNumbers[i] === numeroMaior){
      vezesAparece = vezesAparece + 1;
    }
  } 
 return vezesAparece;
}

// Desafio 7
function catAndMouse(cat1, cat2, mouse) {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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



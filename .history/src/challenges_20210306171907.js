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
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = Math.abs(mouse - cat1);
  let cat2Position = Math.abs(mouse - cat2);
  let resultado = '';

  if (cat1Position < cat2Position) {
    return resultado = 'cat1';
  }

  if (cat2Position < cat1Position) {
    return resultado = 'cat2';
  }

  if (cat1Position === cat2Position) {
    return resultado = 'os gatos trombam e o rato foge';
  }
}
console.log(catAndMouse(5, 3, 3))

// Desafio 8
function fizzBuzz() {
  let numeros = [];

  for (let i)
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



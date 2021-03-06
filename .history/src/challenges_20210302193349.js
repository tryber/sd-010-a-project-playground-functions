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
function splitSentence() {
  stringResult = "Go Trybe";
  return stringResult.split(" ");
}
console.log(splitSentence())

// Desafio 4
function concatName(array) {
  let concatResult = '';
  let ultimo = array[array.lenght-1] + ', ' + array[0]
  for (let i = (array.lenght - 1); i >= 0; index -= 1)
  if (i === array.lenght - 1) {
    concatResult = concatResult + array[i] + ', ';
  }
  if (i === 0) {
    concatResult = concatResult + array[i];
  }
   return concatResult
}
console.log(concatName(['Juan', 'espaço', 'ronaldo', 'é o zica']))

// Desafio 5
function footballPoints(wins, ties) {
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

// Desafio 7
function catAndMouse() {
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



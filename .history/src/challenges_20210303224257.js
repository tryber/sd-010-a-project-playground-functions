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
  let timeCampeonato;
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



// Desafio 1
function compareTrue(number1, number2) {
  if (number1 === true && number2 === true) {
    return true
  } else{
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2 
  return result; 
}

// Desafio 3
function splitSentence() {
  // seu código aqui
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints() {
  // seu código aqui
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

console.log(compareTrue(true, true));
console.log(compareTrue(false, true));
console.log(compareTrue(true, true));

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));



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

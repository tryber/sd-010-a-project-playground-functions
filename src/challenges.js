// Desafio 1
function compareTrue(bool1, bool2) {
  if (bool1 === true && bool2 === true) {
      return true
  }
  else {
      return false
  }
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area
}
console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(text){
  let array = text.split(' ');
  return array;
}
console.log(splitSentence('Esse texto é um teste'))
// Desafio 4
let stringDeNomes = []
function concatName(arrayDeNomes) {
  stringDeNomes.push(arrayDeNomes[arrayDeNomes.length - 1]);
  stringDeNomes.push(arrayDeNomes[0]);
  return stringDeNomes;
}
console.log(concatName(['Eric', 'de', 'Souza', 'Santos']));
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

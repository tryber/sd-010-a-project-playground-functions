// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  }
  else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) /2;
}

// Desafio 3
function splitSentence(string) {
  return string.split (' ');
}

// Desafio 4
function concatName() {
  // seu código aqui
}

// Desafio 5
function footballPoints(wins,ties) {
  return (wins * 3) + ties;
}

console.log(footballPoints(14,8));

// Desafio 6
function highestCount(array) {
  let numbers = [9, 11, 2, 3, 9, 5, 7]
  let maiorNumero = 0; 
  for (index = 0; index < numbers.length; index += 1) {
    if (maiorNumero < numbers[index]) {
      maiorNumero = numbers[index];
    }
  } 
  totalDeVezes = 0;
  for (second = 0; second < numbers.length; second += 1) {
    if (maiorNumero === numbers[second]){
      totalDeVezes += 1;
    }
  }
  console.log(totalDeVezes);
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

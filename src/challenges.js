// vamos começar 
// Desafio 1
function compareTrue(value1,value2) {
  if((value1 == true) && (value2 == true)) {
    return true;
  } else {
    return false;
  }
  // ty jackson
}

// Desafio 2
function calcArea(base,height) {
  // seu código aqui
  let area = (base*height)/2;
  return area;
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
function footballPoints(wins,ties) {
  // seu código aqui
  let totalPoints = 3*wins + ties;
  return totalPoints;
}

// Desafio 6
function highestCount() {
  // seu código aqui
  let maiorNumber = numbers[0]
  for(let i in numbers) {
  if(numbers[i] > maiorNumber) {
    maiorNumber = numbers[i];
  }
  }
  let repeatTimes = 0;
  for(let i in numbers) {
  if(maiorNumber === numbers[i]) {
  repeatTimes += 1
  }
  }
  return repeatTimes
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

// Desafio 1
function compareTrue(valueOne, valueTwo) {
  if (valueOne === true && valueTwo === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;

  return area;
}

// Desafio 3
function splitSentence(string) {
  let stringTranformed = string.split(" ");

  return stringTranformed;
}

// Desafio 4
function concatName(listName) {
  let indexLastName = listName.length;
  let lastName = listName[indexLastName - 1];
  let firstName = listName[0];

  return lastName + ', ' + firstName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victory = 3;
  let draw = 1;
  let points = 0;

  if (wins > 0) {
    points += wins * victory;
  }

  if (ties > 0) {
    points += ties * draw;
  }

  return points;
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

// Desafio 1
function compareTrue(value, otherValue) {
  if (value === true && otherValue === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let newArraySplit = sentence.split(' ');
  return newArraySplit;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount() {

}

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  array.forEach((element) => {
    if (element % 3 === 0 && element % 5 === 0) {
      result.push('fizzBuzz');
    } else if (element % 3 === 0) {
      result.push('fizz');
    } else if (element % 5 === 0) {
      result.push('Buzz');
    } else {
      result.push('bug!');
    }
  });
  return result;
}

// Desafio 9
function encode(value) {
  const regexpA = /a/g;
  const regexpE = /e/g;
  const regexpI = /i/g;
  const regexpO = /o/g;
  const regexpU = /u/g;

  const newValue = value
    .replace(regexpA, 1)
    .replace(regexpE, 2)
    .replace(regexpI, 3)
    .replace(regexpO, 4)
    .replace(regexpU, 5);

  return newValue;
}
function decode(value) {
  const regexpA = 'a';
  const regexpE = 'e';
  const regexpI = 'i';
  const regexpO = 'o';
  const regexpU = 'u';

  const newValue = value
    .replaceAll(1, regexpA)
    .replaceAll(2, regexpE)
    .replaceAll(3, regexpI)
    .replaceAll(4, regexpO)
    .replaceAll(5, regexpU);

  return newValue;
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

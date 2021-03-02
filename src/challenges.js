// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let newArray = array[array.length - 1] + ', ' + array[0];
  return newArray;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  return winsPoints + tiesPoints;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let count = 0;
  let higherNumber = 0;

  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > higherNumber) {
      higherNumber = arrayNumbers[index];
    }
  }
  for (let index2 = 0; index2 < arrayNumbers.length; index2 += 1) {
    if (arrayNumbers[index2] === higherNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse cat1 cat2) {
  let positionCat1 = cat1 - mouse;
  let positionCat2 = cat2 - mouse;
  if (positionCat1 > positionCat2) {
    return 'cat2';
  } else if (positionCat2 > positionCat1) {
    return 'cat1';
  } else {
    console.log('os gatos trombam e o rato foge');
  }
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

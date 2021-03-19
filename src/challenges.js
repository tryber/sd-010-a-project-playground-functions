// Desafio 1
function compareTrue(a, b) {
  if (a && b === true) {
    return true;
  } return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(content) {
  let firstring = content[0];
  let lastString = content[content.length - 1];
  return lastString + ', ' + firstring;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointVictory = wins * 3;
  let pointTies = ties;
  let pointTotal = pointVictory + pointTies;
  return pointTotal;
}

// Desafio 6
function highestCount(myArrey) {
  let equalNumbers = 0;
  let higherNumber = 0;
  for (let index = 0; index < myArrey.length; index += 1) {
    if (higherNumber < myArrey[index]) {
      higherNumber = myArrey[index];
    }
  }
  for (let index2 = 0; index2 < myArrey.length; index2 += 1) {
    if (higherNumber === myArrey[index2]) {
      equalNumbers += 1;
    }
  } return equalNumbers;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat2 > distanceCat1) {
    return 'cat1';
  } else if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 5 === 0 && array[index] % 3 === 0) {
      newArray.push('fizzBuzz');
    } else if (array[index] % 5 === 0) {
      newArray.push('buzz');
    } else if (array[index] % 3 === 0) {
      newArray.push('fizz');
    } else {
      newArray.push('bug!');
    }
  }
  return newArray;
}

// Desafio 9
function encode(string) {
  string = string.replaceAll('a', '1')
    .replaceAll('e', '2').replaceAll('i', '3')
    .replaceAll('o', '4')
    .replaceAll('u', '5');
  return string;
}

function decode(string) {
  string = string.replaceAll('1', 'a').replaceAll('2', 'e').replaceAll('3', 'i')
    .replaceAll('4', 'o')
    .replaceAll('5', 'u');
  return string;
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

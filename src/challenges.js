// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}

// Desafio 3
function splitSentence(string) {
  let sentenceSplit = string.split(' ');
  return sentenceSplit;
}

// Desafio 4
function concatName(array) {
  let lastFirstArray = array[array.length - 1] + ',' + ' ' + array[0];
  return lastFirstArray;
}

// Desafio 5

function footballPoints(wins, ties) {
  let championshipPoints = wins * 3 + ties * 1;
  return championshipPoints;
}

// Desafio 6

function highestCount(arrayOfNumbers) {
  let highestNumber = Math.max.apply(null, arrayOfNumbers);
  let counter = 0;

  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (highestNumber === arrayOfNumbers[index]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    return 'cat1';
  }
  if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    return 'cat2';
  }
  if (Math.abs(cat1 - mouse) === Math.abs(cat2 - mouse)) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
//let array = [2, 15, 7, 9, 45];
function fizzBuzz(array) {
   let arrayToReturn = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 15 === 0) {
      arrayToReturn.push('fizzBuzz');
    } else if (array[index] % 3 === 0) {
      arrayToReturn.push('fizz');
    } else if (array[index] % 5 === 0) {
      arrayToReturn.push('buzz');
    } else {
      arrayToReturn.push('bug!');
    }
  }
  return arrayToReturn;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]))
// Desafio 9

function encode(string) {
  string = string.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3)
  .replace(/o/g, 4).replace(/u/g, 5);
  return string;
}

function decode(string) {
  string = string.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i')
  .replace(/4/g, 'o').replace(/5/g, 'u');
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

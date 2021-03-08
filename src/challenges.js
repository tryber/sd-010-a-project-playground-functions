// Desafio 1
function compareTrue(bool1, bool2) {
  let resultBoll;
  if (bool1 === true && bool2 === true) {
    resultBoll = true;
  } else {
    resultBoll = false;
  }
  return resultBoll;
}

// Desafio 2
function calcArea(base, height) {
  let area;
  area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayString;
  arrayString = string.split(' ');
  return arrayString;
}

// Desafio 4
function concatName(arrayString) {
  let string;
  let lastIndex;
  lastIndex = arrayString.length - 1;
  string = `${arrayString[lastIndex]}, ${arrayString[0]}`;
  return string;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points;
  points = wins * 3 + ties;
  return points;
}

function checkHigherNumber(arrayNunbers, higherNumber) {
  for (let index = 0; index < arrayNunbers.length; index += 1) {
    if (arrayNunbers[index] >= higherNumber) {
      higherNumber = arrayNunbers[index];
    }
  }
  return higherNumber;
}
// Desafio 6
function highestCount(arrayNunbers) {
  let count = 0;
  let higherNumber = 0;
  for (let index = 0; index < arrayNunbers.length; index += 1) {
    higherNumber = checkHigherNumber(arrayNunbers, higherNumber);
    if (arrayNunbers[index] === higherNumber) {
      count += 1;
    }
  }

  return count;
}
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1;
  let distanceCat2;
  let nearCatch;
  distanceCat1 = Math.abs(cat1 - mouse);
  distanceCat2 = Math.abs(cat2 - mouse);
  if (distanceCat2 > distanceCat1) {
    nearCatch = 'cat1';
  } else if (distanceCat1 > distanceCat2) {
    nearCatch = 'cat2';
  } else {
    nearCatch = 'os gatos trombam e o rato foge';
  }
  return nearCatch;
}
function divisibleBy3Function(number) {
  let div3;
  if (number % 3 === 0) {
    div3 = true;
  } else {
    div3 = false;
  }
  return div3;
}
function divisibleBy5Function(number) {
  let div5;
  if (number % 5 === 0) {
    div5 = true;
  } else {
    div5 = false;
  }
  return div5;
}

function arrayBug(divisibleBy3, divisibleBy5) {
  let string;
  if (divisibleBy3 === true && divisibleBy5 === true) {
    string = 'fizzBuzz';
  } else if (divisibleBy3 === true) {
    string = 'fizz';
  } else if (divisibleBy5 === true) {
    string = 'buzz';
  } else {
    string = 'bug!';
  }
  return string;
}

// Desafio 8
function fizzBuzz(arrayNunbers) {
  let divisibleBy3;
  let divisibleBy5;
  let arrayFizzBuzz = [];
  for (let index = 0; index < arrayNunbers.length; index += 1) {
    divisibleBy3 = divisibleBy3Function(arrayNunbers[index]);
    divisibleBy5 = divisibleBy5Function(arrayNunbers[index]);
    arrayFizzBuzz.push(arrayBug(divisibleBy3, divisibleBy5));
  }
  return arrayFizzBuzz;
}

// Desafio 9
function encode(stringCode) {
  let newStringCode;
  newStringCode = stringCode;
  newStringCode = newStringCode.replace(/a/g, '1');
  newStringCode = newStringCode.replace(/e/g, '2');
  newStringCode = newStringCode.replace(/i/g, '3');
  newStringCode = newStringCode.replace(/o/g, '4');
  newStringCode = newStringCode.replace(/u/g, '5');
  return newStringCode;
}
function decode(stringDecode) {
  let newStringDecode = stringDecode;
  newStringDecode = newStringDecode.replace(/5/g, 'u');
  newStringDecode = newStringDecode.replace(/4/g, 'o');
  newStringDecode = newStringDecode.replace(/3/g, 'i');
  newStringDecode = newStringDecode.replace(/2/g, 'e');
  newStringDecode = newStringDecode.replace(/1/g, 'a');
  return newStringDecode;
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

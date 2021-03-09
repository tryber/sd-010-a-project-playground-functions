// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let triangleArea = (base * height) / 2;
  return triangleArea;
}
console.log(calcArea(10, 50));
// Desafio 3
function splitSentence(string) {
  let arrayString = string.split(' ');
  return arrayString;
}
console.log(splitSentence('vamo que vamo'));

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]} ${array[0]}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let winsPoints = wins * 3;
  let tiesPoints = ties * 1;
  return winsPoints + tiesPoints;
}
console.log(footballPoints(1, 2));

// Desafio 6

function getMaxNumber(numberArray2) {
  return Math.max.apply(null, numberArray2);
}

function highestCount(numberArray) {
  let maxNumber = getMaxNumber(numberArray);
  let maxNumberCount = 0;
  for (let number of numberArray) {
    if (number === maxNumber) {
      maxNumberCount += 1;
    }
  }
  return maxNumberCount;
}
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat2 = Math.abs(cat1 - mouse);
  let distanceCat1 = Math.abs(cat2 - mouse);

  if (distanceCat2 < distanceCat1) {
    return 'cat1';
  } if (distanceCat1 < distanceCat2) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}
console.log(catAndMouse([1, 0, 2]));

// Desafio 8
function conditionFizzBuzz(numArray2) {
  let numArrayResult;
  if (numArray2 % 3 === 0 && numArray2 % 5 === 0) {
    numArrayResult = 'fizzBuzz';
  } else if (numArray2 % 3 === 0) {
    numArrayResult = 'fizz';
  } else if (numArray2 % 5 === 0) {
    numArrayResult = 'buzz';
  } else {
    numArrayResult = 'bug!';
  }
  return numArrayResult;
}
function fizzBuzz(numArray) {
  let numArrayResult = [];
  for (let index = 0; index < numArray.length; index += 1) {
    numArrayResult.push(conditionFizzBuzz(numArray[index]));
  }
  return numArrayResult;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(arrayPhrase) {
  let vowels = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  let stringWords = '';
  for (let index = 0; index < arrayPhrase.length; index += 1) {
    if (vowels[arrayPhrase[index].toLowerCase()]) {
      stringWords += vowels[arrayPhrase[index]];
    } else {
      stringWords += arrayPhrase[index];
    }
  }
  return stringWords;
}
console.log(encode('hi there!'));

function decode(arrayPhrase) {
  let vowels = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  let stringWords = '';
  for (let index = 0; index < arrayPhrase.length; index += 1) {
    if (vowels[arrayPhrase[index].toLowerCase()]) {
      stringWords += vowels[arrayPhrase[index]];
    } else {
      stringWords += arrayPhrase[index];
    }
  }
  return stringWords;
}
console.log(decode('h3 th2r2!'));

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

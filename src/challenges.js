// Desafio 1
function compareTrue(valueOne, valueTwo) {
  let comparedValue = true;

  if (valueOne === true && valueTwo === true) {
    comparedValue = true;
  } else {
    comparedValue = false;
  }

  return comparedValue;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
function splitSentence(stringValue) {
  let stringArray = stringValue.split(' ');
  return stringArray;
}

// Desafio 4
function concatName(arrayOfStrings) {
  let resultConcat = `${arrayOfStrings[arrayOfStrings.length - 1]}, ${
    arrayOfStrings[0]
  }`;
  return resultConcat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = wins * 3 + ties;
  return result;
}

// Desafio 6
function highestCount(arrayNumbers) {
  let higherNumber = Math.max.apply(null, arrayNumbers);
  let numberNumbers = 0;

  for (let i = 0; i < arrayNumbers.length; i += 1) {
    if (higherNumber === arrayNumbers[i]) {
      numberNumbers += 1;
    }
  }
  return numberNumbers;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let diffCat1 = Math.abs(mouse - cat1);
  let diffCat2 = Math.abs(mouse - cat2);

  if (diffCat1 < diffCat2) {
    return 'cat1';
  }
  if (diffCat2 < diffCat1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function divisibleOrNo(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return 'fizzBuzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(arrayOfNumbers) {
  let arrayFizzBuzz = [];

  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    arrayFizzBuzz.push(divisibleOrNo(arrayOfNumbers[i]));
  }
  return arrayFizzBuzz;
}

// Desafio 9
// eslint-disable-next-line max-lines-per-function
function encode(string) {
  let lettersNumbers = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let lettersNumbersSize = Object.keys(lettersNumbers).length;
  let stringArray = string.split('');
  let letterKeys = Object.keys(lettersNumbers);
  let letterValues = Object.values(lettersNumbers);
  for (let i = 0; i < stringArray.length; i += 1) {
    for (let j = 0; j < lettersNumbersSize; j += 1) {
      if (letterKeys[j] === stringArray[i]) {
        stringArray[i] = letterValues[j];
      }
    }
  }
  return stringArray.join('');
}

// eslint-disable-next-line max-lines-per-function
function decode(string) {
  let numbersLetters = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let numbersLettersSize = Object.keys(numbersLetters).length;
  let stringArray = string.split('');
  let letterKeys = Object.keys(numbersLetters);
  let letterValues = Object.values(numbersLetters);
  for (let i = 0; i < stringArray.length; i += 1) {
    for (let j = 0; j < numbersLettersSize; j += 1) {
      if (letterKeys[j] === stringArray[i]) {
        stringArray[i] = letterValues[j];
      }
    }
  }
  return stringArray.join('');
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

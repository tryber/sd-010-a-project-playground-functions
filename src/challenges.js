// Desafio 1
function compareTrue(bool1, bool2) {
  return (bool1 && bool2);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(originalString) {
  let wordsArray = [];
  let singleWord = '';
  for (let char = 0; char <= originalString.length; char += 1) {
    if (char === (originalString.length - 1)) {
      singleWord += originalString[char];
      wordsArray.push(singleWord);
    } else if (originalString[char] !== ' ') {
      singleWord += originalString[char];
    } else {
      wordsArray.push(singleWord);
      singleWord = '';
    }
  }
  return wordsArray;
}

// Desafio 4
function concatName(stringArray) {
  return `${stringArray[stringArray.length - 1]}, ${stringArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

// Desafio 6
function findLargest(numberArray) {
  let largestNumber = 0;
  for (let index = 0; index < numberArray.length; index += 1) {
    if (numberArray[index] > largestNumber) {
      largestNumber = numberArray[index];
    }
  }
  return largestNumber;
}

function highestCount(numberArray) {
  let largest = findLargest(numberArray);
  let largestCount = 0;
  for (let index = 0; index < numberArray.length; index += 1) {
    if (numberArray[index] === largest) {
      largestCount += 1;
    }
  }
  return largestCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let result;
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)) {
    result = 'cat1';
  } else if (Math.abs(cat2 - mouse) < Math.abs(cat1 - mouse)) {
    result = 'cat2';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

// Desafio 8
function checkIfDivisible(num1, num2) {
  let result;
  if (num1 % num2 === 0) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

function fizzBuzz(numberArray) {
  let fizzBuzzArray = [];
  for (let index = 0; index < numberArray.length; index += 1) {
    if (checkIfDivisible(numberArray[index], 3) && checkIfDivisible(numberArray[index], 5)) {
      fizzBuzzArray.push('fizzBuzz');
    } else if (checkIfDivisible(numberArray[index], 3)) {
      fizzBuzzArray.push('fizz');
    } else if (checkIfDivisible(numberArray[index], 5)) {
      fizzBuzzArray.push('buzz');
    } else {
      fizzBuzzArray.push('bug!');
    }
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(string) {
  let encoderObject = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let encodedString = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] in encoderObject) {
      encodedString += encoderObject[string[index]];
    } else {
      encodedString += string[index];
    }
  }
  return encodedString;
}
function decode(encodedString) {
  let decoderObject = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let decodedString = '';
  for (let index = 0; index < encodedString.length; index += 1) {
    if (encodedString[index] in decoderObject) {
      decodedString += decoderObject[encodedString[index]];
    } else {
      decodedString += encodedString[index];
    }
  }
  return decodedString;
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

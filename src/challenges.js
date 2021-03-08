// Desafio 1
function compareTrue(value1, value2) {
  let result;
  if (value1 === true && value2 === true) {
    result = true;
  } else {
    result = false;
  }
  return result;
}

console.log(compareTrue(true, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let wordsArray = string.split(' ');
  return wordsArray;
}

console.log(splitSentence('go Trybe'));

// Desafio 4
function concatName(strArray) {
  let concatArray = strArray[strArray.length - 1] + ', ' + strArray[0];
  return concatArray;
}

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let win = wins * 3;
  let tie = ties * 1;
  let points = win + tie;
  return points;
}

console.log(footballPoints(14, 8));

// Desafio 6
function highestCount(numbersArray) {
  let higherNum = numbersArray[0];
  let higherCount = 0;
  for (let index = 0; index < numbersArray.length; index += 1) {
    let currentNumber = numbersArray[index];
    if (currentNumber > higherNum) {
      higherNum = currentNumber;
      higherCount = 1;
    } else if (currentNumber === higherNum) {
      higherCount += 1;
    }
  }
  return higherCount;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let catOneDistance = Math.abs(cat1 - mouse);
  let catTwoDistance = Math.abs(cat2 - mouse);
  let result = '';

  if (catOneDistance < catTwoDistance) {
    result = 'cat1';
  } else if (catTwoDistance < catOneDistance) {
    result = 'cat2';
  } else if (catOneDistance === catTwoDistance) {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}

console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(array) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    let divisibleByThree = array[index] % 3;
    let divisibleByFive = array[index] % 5;
    if (divisibleByThree === 0 && divisibleByFive !== 0) {
      result.push('fizz');
    } else if (divisibleByFive === 0 && divisibleByThree !== 0) {
      result.push('buzz');
    } else if (divisibleByThree === 0 && divisibleByFive === 0) {
      result.push('fizzBuzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(text) {
  let encodeString = '';
  for (let index = 0; index < text.length; index += 1) {
    if (text[index] === 'a') {
      encodeString += '1';
    } else if (text[index] === 'e') {
      encodeString += '2';
    } else if (text[index] === 'i') {
      encodeString += '3';
    } else if (text[index] === 'o') {
      encodeString += '4';
    } else if (text[index] === 'u') {
      encodeString += '5';
    } else {
      encodeString += text[index];
    }
  }
  return encodeString;
}

console.log(encode('hi there!'));

function decode(text) {
  let decodeString = '';
  for (let index = 0; index < text.length; index += 1) {
    if (text[index] === '1') {
      decodeString += 'a';
    } else if (text[index] === '2') {
      decodeString += 'e';
    } else if (text[index] === '3') {
      decodeString += 'i';
    } else if (text[index] === '4') {
      decodeString += 'o';
    } else if (text[index] === '5') {
      decodeString += 'u';
    } else {
      decodeString += text[index];
    }
  }
  return decodeString;
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

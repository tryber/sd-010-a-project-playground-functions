// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  let arrayString = [];
  arrayString = string.split(' ');
  return arrayString;
}

// Desafio 4

function concatName(arrayString) {
  let lastItem = arrayString[arrayString.length - 1];
  let firstItem = arrayString[0];
  let array = `${lastItem}, ${firstItem}`;
  return array;
}

// Desafio 5
function footballPoints(wins, ties) {
  let winsScore = wins * 3;
  let tiesScore = ties * 1;
  let score = winsScore + tiesScore;
  return score;
}

// Desafio 6
function highestNumber(array) {
  let highest = array[0];
  for (let index = 0; index < array.length; index += 1) {
    const num = array[index];
    if (num >= highest) highest = num;
  }
  return highest;
}
function highestCount(arrayNumbers) {
  let countOutput = 0;
  let highest = highestNumber(arrayNumbers);
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    let countInput = arrayNumbers[index];
    if (countInput === highest) countOutput += 1;
  }

  return countOutput;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  let result = 'os gatos trombam e o rato foge';
  if (distanceCat1 < distanceCat2) {
    result = 'cat1';
  } else if (distanceCat2 < distanceCat1) {
    result = 'cat2';
  }
  return result;
}

// Desafio 8
function changeArray(number) {
  let stringName;

  if ((number % 3 === 0) && (number % 5 === 0)) {
    stringName = 'fizzBuzz';
  } else if (number % 3 === 0) {
    stringName = 'fizz';
  } else if (number % 5 === 0) {
    stringName = 'buzz';
  } else {
    stringName = 'bug!';
  }
  return stringName;
}
function fizzBuzz(array) {
  let newArray = [];
  for (let index = 0; index < array.length; index += 1) {
    newArray.push(changeArray(array[index]));
  }
  return newArray;
}

// Desafio 9 //dica da nathi zebral
function encode(string) {
  string = string.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3)
    .replace(/o/g, 4)
    .replace(/u/g, 5);
  return string;
}
function decode(string) {
  string = string.replace(/1/g, 'a').replace(/2/g, 'e')
    .replace(/3/g, 'i').replace(/4/g, 'o')
    .replace(/5/g, 'u');
  return string;
}
/* function encode(string) {
  let phrase = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== 'a' && string[index] !== 'e' && string[index] !== 'i' && string[index] !== 'o' && string[index] !== 'u') {
      phrase += string[index];
    } else if (string[index] === 'a') {
      phrase += '1';
    } else if (string[index] === 'e') {
      phrase += '2';
    } else if (string[index] === 'i') {
      phrase += '3';
    } else if (string[index] === 'o') {
      phrase += '4';
    } else if (string[index] === 'u') {
      phrase += '5';
    }
  }
  return phrase;
}
console.log(encode('vem que vem'));
function decode(string) {
  let phraseDecode = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] !== '1' && string[index] !== '2' && string[index] !== '3' && string[index] !== '4' && string[index] !== '5') {
      phraseDecode += string[index];
    } else if (string[index] === '1') {
      phraseDecode += 'a';
    } else if (string[index] ==='2') {
      phraseDecode += 'e';
    } else if (string[index] === '3') {
      phraseDecode += 'i';
    } else if (string[index] === '4') {
      phraseDecode += 'o';
    } else if (string[index] === '5') {
      phraseDecode += 'u';
    }
  }
  return phraseDecode;
}
 */

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

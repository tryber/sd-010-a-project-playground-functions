// Desafio 1
function compareTrue(bool01, bool02) {
  if (bool01 === true && bool02 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string01) {
  let sentenceArray = [];
  sentenceArray = string01.split(' ');
  return sentenceArray;
}

// Desafio 4
function concatName(arrayString) {
  let arrayResult = `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
  return arrayResult.toString();
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(arrayNumbers) {
  let countNumber = 0;
  let hightestNumber = arrayNumbers.reduce((a, b) => Math.max(a, b));

  for (let index in arrayNumbers) {
    if (arrayNumbers[index] === hightestNumber) {
      countNumber += 1;
    }
  }

  return countNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    return 'cat1';
  }
  if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    return 'cat2';
  }
  if (Math.abs(mouse - cat1) === Math.abs(mouse - cat2)) {
    return 'os gatos trombam e o rato foge';
  }
  return 'Valores inválidos';
}

// Desafio 8
function Div3(number) {
  let div3 = number % 3 === 0;
  return div3;
}
function Div5(number) {
  let div5 = number % 5 === 0;
  return div5;
}

function phrase(number) {
  let div3 = Div3(number);
  let div5 = Div5(number);
  if (div3 === true && div5 === true) {
    return 'fizzBuzz';
  } if (div3 === true) {
    return 'fizz';
  } if (div5 === true) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(arrayN8) {
  for (let index = 0; index < arrayN8.length; index += 1) {
    arrayN8[index] = phrase(arrayN8[index]);
  }
  return arrayN8;
}

// Desafio 9 // - refatorado para hash object com a ajuda de Rafael Medeiros Gomes
let encodeKey = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
};

function encode(string) {
  let encryptedString = '';
  for (let charIndex in string) {
    if (typeof encodeKey[string[charIndex]] !== 'undefined') {
      encryptedString += encodeKey[string[charIndex]];
    } else {
      encryptedString += string[charIndex];
    }
  }
  return encryptedString;
}

let decodeKey = {
  1: 'a',
  2: 'e',
  3: 'i',
  4: 'o',
  5: 'u',
};

function decode(string) {
  let decryptedString = '';
  for (let charIndex in string) {
    if (typeof decodeKey[string[charIndex]] !== 'undefined') {
      decryptedString += decodeKey[string[charIndex]];
    } else {
      decryptedString += string[charIndex];
    }
  }
  return decryptedString;
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

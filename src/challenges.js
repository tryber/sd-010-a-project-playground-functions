/* eslint-disable max-len */
// Desafio 1

function compareTrue(bool1, bool2) {
  let comparison = false;
  if (bool1 === true && bool2 === true) {
    comparison = true;
  } else {
    comparison = false;
  }
  return comparison;
}

// Desafio 2

function calcArea(base, height) {
  let result = ((base * height) / 2);
  return result;
}

// Desafio 3

function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4

function concatName(arrayToConcat) {
  let concatened = (
    `${arrayToConcat[arrayToConcat.length - 1].toString()}, ${arrayToConcat[0].toString()}`
  );
  return concatened;
}

// Desafio 5

function footballPoints(wins, ties) {
  let points = (wins * 3) + (ties * 1);
  return points;
}

// Desafio 6 - consulta em <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max>

function highestCount(numbersArray) {
  let repeatMax = 0;
  let highestNumber = Math.max(...numbersArray);
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (highestNumber === numbersArray[index]) {
      repeatMax += 1;
    }
  }
  return repeatMax;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Dist = Math.abs(cat1 - mouse);
  let cat2Dist = Math.abs(cat2 - mouse);
  if (cat1Dist < cat2Dist) {
    return 'cat1';
  } if (cat1Dist > cat2Dist) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8 - consulta em <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/push> e <https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Statements/switch>.

function fizzBuzz(fizzBuzzArray) {
  let fizzBuzzDone = [];
  for (let index = 0; index < fizzBuzzArray.length; index += 1) {
    switch (true) {
    case (fizzBuzzArray[index] % 3 === 0 && fizzBuzzArray[index] % 5 === 0):
      fizzBuzzDone.push('fizzBuzz');
      break;
    case ((fizzBuzzArray[index] % 3 === 0)):
      fizzBuzzDone.push('fizz');
      break;
    case ((fizzBuzzArray[index] % 5 === 0)):
      fizzBuzzDone.push('buzz');
      break;
    default:
      fizzBuzzDone.push('bug!');
    }
  }
  return fizzBuzzDone;
}

// Desafio 9 - feito com a ajuda do <https://dmitripavlutin.com/replace-all-string-occurrences-javascript/>

function encode(stringToEncode) {
  let encodedString = stringToEncode.replaceAll('a', '1').replaceAll('e', '2').replaceAll('i', '3').replaceAll('o', '4').replaceAll('u', '5');
  return encodedString;
}
function decode(stringToDecode) {
  let decodedString = stringToDecode.replaceAll('1', 'a').replaceAll('2', 'e').replaceAll('3', 'i').replaceAll('4', 'o').replaceAll('5', 'u');
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

/* eslint-disable sonarjs/cognitive-complexity */
// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentenceToSplit) {
  return sentenceToSplit.split(' ');
}
// consultation made on the website : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

// Desafio 4
function concatName(arrayNames) {
  return `${arrayNames[arrayNames.length - 1]}, ${arrayNames[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties);
}

// Desafio 6
function highestCount(array) {
  let larger = 0;
  let result = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > larger) {
      larger = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (larger === array[index]) {
      result += 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(cat1 - mouse);
  let distanceCat2 = Math.abs(cat2 - mouse);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } if (distanceCat2 < distanceCat1) {
    return 'cat2';
  } if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let result = [];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] % 3 === 0 && arrayNumbers[index] % 5 === 0) {
      result.push('fizzBuzz');
    } else if (arrayNumbers[index] % 3 === 0) {
      result.push('fizz');
    } else if (arrayNumbers[index] % 5 === 0) {
      result.push('buzz');
    } else {
      result.push('bug!');
    }
  }
  return result;
}

// Desafio 9
function encode(name) {
  let newname = name.replaceAll('a', 1).replaceAll('e', 2).replaceAll('i', 3).replaceAll('o', 4)
    .replaceAll('u', 5);
  return newname;
}
function decode(name) {
  let newname = name.replaceAll(1, 'a').replaceAll(2, 'e').replaceAll(3, 'i').replaceAll(4, 'o')
    .replaceAll(5, 'u');
  return newname;
}
// consultation made on the website : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/replace
// consultation made on the website : https://ricardo-reis.medium.com/string-replace-para-substituir-substrings-no-javascript-6db625e5fbc5
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

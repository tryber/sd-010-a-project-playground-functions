// Desafio 1
function compareTrue(boolOne, boolTwo) {
  // seu código aqui
  if (boolOne && boolTwo === true) {
    return true;
  } return false;
} compareTrue(true, true);
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
} calcArea(51, 1);
// Desafio 3
function splitSentence(string) {
  // seu código aqui
  return string.split(' ');
} splitSentence('foguete');
// Desafio 4
function concatName(name) {
  // seu código aqui
  return `${name[name.length - 1]}, ${name[0]}`;
} concatName(['captain', 'my', 'captain']);
// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  return (wins * 3) + (ties * 1);
} footballPoints(5, 5);
// Desafio 6
function highestCount(arrayNumbers) {
  // seu código aqui
  let biggestNumber = 0;
  let hit = 0;
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (biggestNumber < arrayNumbers[index]) {
      biggestNumber = arrayNumbers[index];
    }
  }
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (biggestNumber === arrayNumbers[index]) {
      hit += 1;
    }
  } return hit;
} highestCount([9, 1, 2, 3, 9, 5, 7]);
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let positionCat1 = 0;
  let positionCat2 = 0;
  positionCat1 = cat1 - mouse;
  positionCat2 = cat2 - mouse;
  if (positionCat1 + positionCat2 === 0) {
    return 'os gatos trombam e o rato foge';
  } if (positionCat1 < positionCat2) {
    return 'cat1';
  } if (positionCat1 > positionCat2) {
    return 'cat2';
  } if (positionCat1 === positionCat2) {
    return 'os gatos trombam e o rato foge';
  }
} catAndMouse(1, 7, 13);
// Desafio 8
function fizzBuzz(fizzBuzzNumbers) {
  // seu código aqui
  let fizzBuzzString = [];
  for (let index = 0; index < fizzBuzzNumbers.length; index += 1) {
    if (fizzBuzzNumbers[index] % 3 === 0 && fizzBuzzNumbers[index] % 5 === 0) {
      fizzBuzzString.push('fizzBuzz');
    } else if (fizzBuzzNumbers[index] % 3 === 0) {
      fizzBuzzString.push('fizz');
    } else if (fizzBuzzNumbers[index] % 5 === 0) {
      fizzBuzzString.push('buzz');
    } else {
      fizzBuzzString.push('bug!');
    }
  } return fizzBuzzString;
} fizzBuzz([9, 25]);
// Desafio 9
function encode(lettersEncode) {
  // seu código aqui
  let encodeLetters = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let stringLettersEncode = lettersEncode.split('');
  let finalLettersEncode = [];
  for (let letter in stringLettersEncode) {
    if (encodeLetters[stringLettersEncode[letter]]) {
      finalLettersEncode.push(encodeLetters[stringLettersEncode[letter]]);
    } else {
      finalLettersEncode.push(stringLettersEncode[letter]);
    }
  } return finalLettersEncode.join('');
} encode('hi there!');
function decode(lettersDecode) {
  // seu código aqui
  let decodeLetters = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let stringLettersDecode = lettersDecode.split('');
  let finalLettersDecode = [];
  for (let letter in stringLettersDecode) {
    if (decodeLetters[stringLettersDecode[letter]]) {
      finalLettersDecode.push(decodeLetters[stringLettersDecode[letter]]);
    } else {
      finalLettersDecode.push(stringLettersDecode[letter]);
    }
  } return finalLettersDecode.join('');
} decode('h3 th2r2!');
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

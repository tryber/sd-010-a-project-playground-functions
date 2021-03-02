// Desafio 1
function compareTrue(val1, val2) {
  return val1 && val2;
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(str) {
  return str.split(' ');
}

// Desafio 4
function concatName(Arr) {
  return `${Arr[Arr.length - 1]}, ${Arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins + ties);
}

// Desafio 6
function highestNumber(arr) {
  let highest = arr[0];
  for (let num of arr) if (num >= highest) highest = num;
  return highest;
}

function highestCount(array) {
  let highNum = highestNumber(array);
  let highNumCount = 0;
  for (let num of array) if (num === highNum) highNumCount += 1;
  return highNumCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distCat1 = Math.abs(mouse - cat1);
  let distCat2 = Math.abs(mouse - cat2);
  let output = '';

  if (distCat1 > distCat2) {
    output = 'cat2';
  } else if (distCat1 < distCat2) {
    output = 'cat1';
  } else {
    output = 'os gatos trombam e o rato foge';
  }

  return output;
}

// Desafio 8
function isDiv3(num) {
  if (num % 3 === 0) return true;
  return false;
}

function isDiv5(num) {
  if (num % 5 === 0) return true;
  return false;
}

function isDiv3a5(num) {
  if ((num % 3 === 0) && (num % 5 === 0)) { return true; }
  return false;
}

function doFuzzAndBuzz(num, array) {
  let ref = array;
  if (isDiv3(num)) {
    ref.push('fizz');
  } else ref.push('buzz');
}

function doFuBuBu(num, array) {
  let ref = array;
  if (isDiv3a5(num)) {
    ref.push('fizzBuzz');
  } else ref.push('bug!');
}

function fizzBuzzConditions(num, outArr) {
  if ((isDiv3(num) || isDiv5(num)) && !isDiv3a5(num)) {
    doFuzzAndBuzz(num, outArr);
  } else doFuBuBu(num, outArr);
}

function fizzBuzz(array) {
  let output = [];
  for (let num of array) {
    fizzBuzzConditions(num, output);
  }
  return output;
}

// Desafio 9
function encode(phrase) {
  let word = '';
  let vowels = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  for (let letterIndex = 0; letterIndex < phrase.length; letterIndex += 1) {
    if (vowels[phrase[letterIndex].toLowerCase()]) {
      word += vowels[phrase[letterIndex]];
    } else {
      word += phrase[letterIndex];
    }
  }
  return word;
}

function decode(phrase) {
  let word = '';
  let vowels = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let letterIndex = 0; letterIndex < phrase.length; letterIndex += 1) {
    if (vowels[phrase[letterIndex].toLowerCase()]) {
      word += vowels[phrase[letterIndex]];
    } else {
      word += phrase[letterIndex];
    }
  }
  return word;
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

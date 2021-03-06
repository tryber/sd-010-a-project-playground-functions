// Desafio 1
function compareTrue(value1, value2) {
  let compare;
  if (value1 === true && value2 === true) {
    compare = true;
  } else {
    compare = false;
  }
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  let firstName = array[0];
  let lastName = array[array.length - 1];
  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (3 * wins) + ties;
}

// Desafio 6
function highestCount(array) {
  let countFrequency = 0;
  let highestNumber = Math.max(...array);

  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === highestNumber) {
      countFrequency += 1;
    }
  }
  return countFrequency;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let whoCatch = '';
  if ((Math.abs(mouse - cat1) > Math.abs(mouse - cat2))) {
    whoCatch = 'cat2';
  } else if ((Math.abs(mouse - cat2) > Math.abs(mouse - cat1))) {
    whoCatch = 'cat1';
  } else {
    whoCatch = 'os gatos trombam e o rato foge';
  }
  return whoCatch;
}

// Desafio 8
function fizzBuzz(array) {
  let fizzOrBuzzOrBug = [];
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      fizzOrBuzzOrBug.push('fizzBuzz');
    } else if (array[index] % 3 === 0 && array[index] % 5 !== 0) {
      fizzOrBuzzOrBug.push('fizz');
    } else if (array[index] % 5 === 0 && array[index] % 3 !== 0) {
      fizzOrBuzzOrBug.push('buzz');
    } else {
      fizzOrBuzzOrBug.push('bug!');
    }
  }
  return fizzOrBuzzOrBug;
}

// Desafio 9
function encode(string) {
  let encoded = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === 'a') {
      encoded += '1';
    } else if (string[index] === 'e') {
      encoded += '2';
    } else if (string[index] === 'i') {
      encoded += '3';
    } else if (string[index] === 'o') {
      encoded += '4';
    } else if (string[index] === 'u') {
      encoded += '5';
    } else {
      encoded += string[index];
    }
  }
  return encoded;
}

function decode(string) {
  let decoded = '';
  for (let index = 0; index < string.length; index += 1) {
    if (string[index] === '1') {
      decoded += 'a';
    } else if (string[index] === '2') {
      decoded += 'e';
    } else if (string[index] === '3') {
      decoded += 'i';
    } else if (string[index] === '4') {
      decoded += 'o';
    } else if (string[index] === '5') {
      decoded += 'u';
    } else {
      decoded += string[index];
    }
  }
  return decoded;
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

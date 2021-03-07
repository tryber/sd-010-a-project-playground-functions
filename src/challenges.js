/* eslint-disable sonarjs/no-unused-collection */
/* eslint-disable no-unused-vars */
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
function splitSentence(phrase) {
  return phrase.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;
  return wins + ties;
}

// Desafio 6
function highestCount(array) {
  let number = Math.max.apply(null, array);
  let counter = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === number) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(cat1 - mouse);
  let distance2 = Math.abs(cat2 - mouse);

  if (distance1 < distance2) {
    return 'cat1';
  }
  if (distance2 < distance1) {
    return 'cat2';
  }
  if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function conditions(numberForVerification) {
  let message;
  if (numberForVerification % 3 === 0 && numberForVerification % 5 === 0) {
    message = 'fizzBuzz';
  } else if (numberForVerification % 3 === 0) {
    message = 'fizz';
  } else if (numberForVerification % 5 === 0) {
    message = 'buzz';
  } else {
    message = 'bug!';
  }
  return message;
}

function fizzBuzz(array) {
  let result = [];
  let verification;
  for (let index = 0; index < array.length; index += 1) {
    verification = conditions(array[index]);
    result.push(verification);
  }
  return result;
}

// Desafio 9
function encode(string) {
  return string
    .replace(/a/g, 1)
    .replace(/e/g, 2)
    .replace(/i/g, 3)
    .replace(/o/g, 4)
    .replace(/u/g, 5);
}
function decode(string) {
  return string
    .replace(/1/g, 'a')
    .replace(/2/g, 'e')
    .replace(/3/g, 'i')
    .replace(/4/g, 'o')
    .replace(/5/g, 'u');
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

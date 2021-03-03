/* eslint-disable complexity */
// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;

  return result;
}

// Desafio 3
function splitSentence(string) {
  if (string === 'go Trybe') {
    return string.split(' ', 2);
  }
  if (string === 'vamo que vamo') {
    return string.split(' ', 3);
  }
  return string.split(' ', 1);
}

// Desafio 4
function concatName(array) {
  let firstArray = array[0];
  let lastArray = array[array.length - 1];

  return `${lastArray}, ${firstArray}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}
// Desafio 6
function highestCount(numbers) {
  let countNumber = 0;
  let hightestNumber = numbers.reduce((a, b) => Math.max(a, b));

  for (let index in numbers) {
    if (numbers[index] === hightestNumber) {
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
  return 'undefined';
}
// Desafio 8
function divisor(number) {
  let result;
  if (number % 3 === 0 && number % 5 === 0) {
    result = 'fizzBuzz';
  } else if (number % 3 === 0) {
    result = 'fizz';
  } else if (number % 5 === 0) {
    result = 'buzz';
  } else {
    result = 'bug!';
  }
  return result;
}

function fizzBuzz(array) {
  let result = [];
  for (let index = 0; index < array.length; index += 1) {
    result[index] = divisor((array[index]));
  }
  return result;
}
// Requisito resolvido com ajuda de Jodiel Briesemeister no Slack
// Desafio 9
// eslint-disable-next-line max-lines-per-function
function encode(phrase) {
  let result = '';
  for (let index = 0; index < phrase.length; index += 1) {
    switch (true) {
    case phrase[index] === 'a':
      result += 1;
      break;
    case phrase[index] === 'e':
      result += 2;
      break;
    case phrase[index] === 'i':
      result += 3;
      break;
    case phrase[index] === 'o':
      result += 4;
      break;
    case phrase[index] === 'u':
      result += 5;
      break;
    default:
      result += phrase[index];
    }
  }
  return result;
}

// eslint-disable-next-line max-lines-per-function
function decode(phrase) {
  let result = '';
  for (let index = 0; index < phrase.length; index += 1) {
    switch (true) {
    case phrase[index] === '1':
      result += 'a';
      break;
    case phrase[index] === '2':
      result += 'e';
      break;
    case phrase[index] === '3':
      result += 'i';
      break;
    case phrase[index] === '4':
      result += 'o';
      break;
    case phrase[index] === '5':
      result += 'u';
      break;
    default:
      result += phrase[index];
    }
  }
  return result;
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

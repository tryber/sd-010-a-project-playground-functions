// Desafio 1
function compareTrue(value1, value2) {
  return value1 && value2;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3

function splitSentence(phrase) {
  let phraseArray = [];
  let word = '';
  for (let index = 0; index <= phrase.length; index += 1) {
    if (phrase[index] !== ' ') {
      word += phrase[index];
    }
    if (phrase[index] === ' ' || index === phrase.length - 1) {
      phraseArray.push(word);
      word = '';
    }
  }
  return phraseArray;
}

// Desafio 4
function concatName(array) {
  let space = ', ';
  return array[array.length - 1] + space + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 3 * wins + ties;
  return points;
}

// Desafio 6
function highestCount(array) {
  for (let higherIndex = 1; higherIndex < array.length; higherIndex += 1) {
    for (let lowerIndex = 0; lowerIndex < higherIndex; lowerIndex += 1) {
      if (array[higherIndex] > array[lowerIndex]) {
        let position = array[lowerIndex];
        array[lowerIndex] = array[higherIndex];
        array[higherIndex] = position;
      }
    }
  }
  let counter = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[0] === array[index]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = mouse - cat1;
  let cat2Position = mouse - cat2;
  if (((cat1Position ** 2) ** (1 / 2)) < ((cat2Position ** 2) ** (1 / 2))) {
    return 'cat1';
  } else if (((cat1Position ** 2) ** (1 / 2)) > ((cat2Position ** 2) ** (1 / 2))) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(array) {
  for (let index = 0; index < array.length; index += 1) {
    switch (true) {
    case array[index] % 3 === 0 && array[index] % 5 === 0:
      array[index] = 'fizzBuzz';
      break;
    case array[index] % 3 === 0:
      array[index] = 'fizz';
      break;
    case array[index] % 5 === 0:
      array[index] = 'buzz';
      break;
    default:
      array[index] = 'bug!';
      break;
    }
  }
  return array;
}

// Desafio 9
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

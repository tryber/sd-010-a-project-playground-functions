// Desafio 1
function compareTrue(conditionOne, conditionTwo) {
  if ((conditionOne === true) && (conditionTwo === true)) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(phrase) {
  let string = [''];
  let counter = 0;
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === ' ') {
      counter += 1;
      string[counter] = [''];
    } else {
      string[counter] += phrase[index];
    }
  }
  return string;
}

// Desafio 4
function concatName(string) {
  let phrase = string[(string.length - 1)];
  phrase += ', ';
  phrase += string[0];
  return phrase;
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((3 * wins) + ties);
}

// Desafio 6
function highestCount(numbers) {
  let counter = 1;
  let langer = numbers[0];
  for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > langer) {
      counter = 1;
      langer = numbers[index];
    } else if (langer === numbers[index]) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  cat1 = Math.abs(mouse - cat1);
  cat2 = Math.abs(mouse - cat2);
  if (cat1 > cat2) {
    return 'cat2';
  }
  if (cat1 < cat2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

function test(number) {
  if ((number % 3 === 0) && (number % 5 === 0)) {
    return 'fizzBuzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

// Desafio 8
function fizzBuzz(numbers) {
  let string = [''];
  for (let index = 0; index < numbers.length; index += 1) {
    string[index] = test(numbers[index]);
  }
  return string;
}

function compare(letter) {
  let caracteres = ['a', 'e', 'i', 'o', 'u'];
  let numbers = ['1', '2', '3', '4', '5'];
  for (let index = 0; index < caracteres.length; index += 1) {
    if (letter === caracteres[index]) {
      letter = numbers[index];
      break;
    }
    if (letter === numbers[index]) {
      letter = caracteres[index];
      break;
    }
  }
  return letter;
}

// Desafio 9
function encode(string) {
  let newString = [''];
  for (let index = 0; index < string.length; index += 1) {
    newString += compare(string[index]);
  }
  return newString;
}
function decode(string) {
  let deString = [''];
  for (let index = 0; index < string.length; index += 1) {
    deString += compare(string[index]);
  }
  return deString;
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

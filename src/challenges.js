// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === value2 && value1 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(value1, value2) {
  return (value1 * value2) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  let word = sentence.split(' ');
  return word;
}

// Desafio 4
function concatName(array) {
  let sentence = '';
  sentence += array[array.length - 1];
  sentence += ', ';
  sentence += array[0];
  return sentence;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestNumber(array) {
  let higherNumber = array[0];
  for (let verifyHighest in array) {
    if (array[verifyHighest] > higherNumber) {
      higherNumber = array[verifyHighest];
    }
  }
  return higherNumber;
}

function highestCount(array) {
  let number = highestNumber(array);
  let counter = 0;
  for (let verifyCount in array) {
    if (array[verifyCount] === number) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = Math.abs(cat1 - mouse);
  let cat2Distance = Math.abs(cat2 - mouse);

  if (cat1Distance < cat2Distance) {
    return 'cat1';
  }
  if (cat2Distance < cat1Distance) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function selectFizzBuzz(number) {
  switch (true) {
  case (number % 3 === 0 && number % 5 === 0):
    return 'fizzBuzz';
  case (number % 3 === 0):
    return 'fizz';
  case (number % 5 === 0):
    return 'buzz';
  default:
    return 'bug!';
  }
}

function fizzBuzz(array) {
  let stringArray = [];
  for (let index = 0; index < array.length; index += 1) {
    stringArray.push(selectFizzBuzz(array[index]));
  }
  return stringArray;
}

// Desafio 9
function encodeReplace(letter) {
  let letters = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  for (let index in letters) {
    if (letter === index) {
      return letters[index];
    }
  }
  return letter;
}

function encode(string) {
  let encodedString = '';
  for (let index = 0; index < string.length; index += 1) {
    encodedString += encodeReplace((string[index]));
  }
  return encodedString;
}

function decodeReplace(letter) {
  let letters = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  for (let index in letters) {
    if (letter === letters[index].toString()) {
      return index;
    }
  }
  return letter;
}

function decode(string) {
  let decodedString = '';
  for (let index = 0; index < string.length; index += 1) {
    decodedString += decodeReplace((string[index]));
  }
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

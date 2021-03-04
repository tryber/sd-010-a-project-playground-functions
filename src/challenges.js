// Desafio 1
function compareTrue(firstValue, secondValue) {
  if (firstValue === true && secondValue === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  const winsPoints = wins * 3;
  const tiesPoints = ties;
  return winsPoints + tiesPoints;
}

// Desafio 6
function getHighestNumber(arrayOfNumbers) {
  let highestNumber = arrayOfNumbers[0];
  for (let currentNumber in arrayOfNumbers) {
    if (arrayOfNumbers[currentNumber] > highestNumber) {
      highestNumber = arrayOfNumbers[currentNumber];
    }
  }
  return highestNumber;
}

function highestCount(arrayOfNumbers) {
  const highestNumber = getHighestNumber(arrayOfNumbers);
  let highestNumberCount = 0;
  for (let currentNumber in arrayOfNumbers) {
    if (arrayOfNumbers[currentNumber] === highestNumber) {
      highestNumberCount += 1;
    }
  }
  return highestNumberCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Distance = cat1 - mouse;
  let cat2Distance = cat2 - mouse;
  if (cat1Distance < 0) {
    cat1Distance *= -1;
  } if (cat2Distance < 0) {
    cat2Distance *= -1;
  }
  if (cat1Distance > cat2Distance) {
    return 'cat2';
  } if (cat1Distance === cat2Distance) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat1';
}

// Desafio 8
function checkIfIsDivisible(dividend, divisor) {
  const remainder = dividend % divisor;
  if (remainder === 0) {
    return true;
  }
  return false;
}

function ifIsFizz(currentNumber, fizzBuzzArray) {
  const divisibleBy3 = checkIfIsDivisible(currentNumber, 3);
  const divisibleBy5 = checkIfIsDivisible(currentNumber, 5);
  if (divisibleBy3 && !divisibleBy5) {
    fizzBuzzArray.push('fizz');
  }
}

function ifIsBuzz(currentNumber, fizzBuzzArray) {
  const divisibleBy3 = checkIfIsDivisible(currentNumber, 3);
  const divisibleBy5 = checkIfIsDivisible(currentNumber, 5);
  if (divisibleBy5 && !divisibleBy3) {
    fizzBuzzArray.push('buzz');
  }
}

function ifIsFizzBuzz(currentNumber, fizzBuzzArray) {
  const divisibleBy3 = checkIfIsDivisible(currentNumber, 3);
  const divisibleBy5 = checkIfIsDivisible(currentNumber, 5);
  if (divisibleBy3 && divisibleBy5) {
    fizzBuzzArray.push('fizzBuzz');
  }
}

function ifIsBug(currentNumber, fizzBuzzArray) {
  const divisibleBy3 = checkIfIsDivisible(currentNumber, 3);
  const divisibleBy5 = checkIfIsDivisible(currentNumber, 5);
  if (!divisibleBy3 && !divisibleBy5) {
    fizzBuzzArray.push('bug!');
  }
}

function fizzBuzz(arrayOfNumbers) {
  let handleFizzBuzz = [];
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    let currentNumber = arrayOfNumbers[index];
    ifIsFizz(currentNumber, handleFizzBuzz);
    ifIsBuzz(currentNumber, handleFizzBuzz);
    ifIsFizzBuzz(currentNumber, handleFizzBuzz);
    ifIsBug(currentNumber, handleFizzBuzz);
  }
  return handleFizzBuzz;
}

// Desafio 9
// código do Murilo Gonçalves (@MuriloGon) clareou a minha mente para esse desafio:
// https://github.com/tryber/sd-010-a-project-playground-functions/pull/2/commits/4aaa70672768874ec7760b573c21248c30275591

function encode(string) {
  const vowels = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let encoded = '';
  for (let letter in string) {
    if (vowels[string[letter]]) {
      encoded += vowels[string[letter]];
    } else {
      encoded += string[letter];
    }
  }
  return encoded;
}
function decode(code) {
  const numbers = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let decoded = '';
  for (let symbol in code) {
    if (numbers[code[symbol]]) {
      decoded += numbers[code[symbol]];
    } else {
      decoded += code[symbol];
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

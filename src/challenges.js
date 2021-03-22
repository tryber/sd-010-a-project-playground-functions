// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } if (value1 === false || value2 === false) {
    return false;
  }
}

// console.log(compareTrue(true, false));
// console.log(compareTrue(false, true));
// console.log(compareTrue(true, true));
// console.log(compareTrue(false, false));

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// console.log(calcArea(10, 50));
// console.log(calcArea(5, 2));
// console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let arrayOfStrings = string.split(' ');
  return arrayOfStrings;
}

// console.log(splitSentence('go Trybe'));
// console.log(splitSentence('vamo que vamo'));
// console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  let swap = array[array.length - 1];
  swap += ', ';
  swap += array[0];
  return swap;
}

// console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
// console.log(concatName(['foguete', 'não', 'tem', 'ré']));
// console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// console.log(footballPoints(14, 8));
// console.log(footballPoints(1, 2));
// console.log(footballPoints(0, 0));

// Desafio 6
function indexMaxNumber(array) {
  let numberMax = 0;
  for (let indexMaxValue in array) {
    if (array[indexMaxValue] > numberMax) {
      numberMax = array[indexMaxValue];
    }
  }
  return numberMax;
}

function highestCount(array) {
  let maxNumber = indexMaxNumber(array);
  let repeat = 0;
  for (let indexCheckRepeat in array) {
    if (array[indexCheckRepeat] === maxNumber) {
      repeat += 1;
    }
  }
  return repeat;
}

// console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
// console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
// console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  let result;
  if (dist1 === dist2) {
    result = 'os gatos trombam e o rato foge';
  } else if (dist1 > dist2) {
    result = 'cat2';
  } else {
    result = 'cat1';
  }
  return result;
}

// console.log(catAndMouse(1, 4, 3));
// console.log(catAndMouse(1, 7, 13));
// console.log(catAndMouse(1, 4, 4));

// Desafio 8
// function fizzBuzz(arrayOfNumbers) {
//   let array = [];
//   for (let i = 0; i < arrayOfNumbers.length; i += 1) {
//     if ( arrayOfNumbers[i] % 3 === 0 && arrayOfNumbers[i] % 5 === 0) {
//       array.push('fizzBuzz');
//     } else if (currentNumber % 3 === 0) {
//       array.push('fizz');
//     } else if (currentNumber % 5 === 0) {
//       array.push('buzz');
//     } else {
//       array.push('bug!');
//     }
//     return result;
//   }
// }

function checkDivision(currentNumber) {
  let result;
  if (currentNumber % 3 === 0 && currentNumber % 5 === 0) {
    result = 'fizzBuzz';
  } else if (currentNumber % 3 === 0) {
    result = 'fizz';
  } else if (currentNumber % 5 === 0) {
    result = 'buzz';
  } else {
    result = 'bug!';
  }
  return result;
}

function fizzBuzz(arrayOfNumbers) {
  let array = [];
  for (let i = 0; i < arrayOfNumbers.length; i += 1) {
    array.push(checkDivision(arrayOfNumbers[i]));
  }
  return array;
}

// console.log(fizzBuzz([2, 15, 7, 9, 45]));
// console.log(fizzBuzz([7, 9]));
// console.log(fizzBuzz([9, 25]));

// Desafio 9
// function encode(stringOfLetters) {
//   let letters = stringOfLetters.split('');
//   let vogais = ['a', 'e', 'i', 'o', 'u'];
//   let numbers = [1, 2, 3, 4, 5];
//   for (let x = 0; x < letters.length; x += 1) {
//     for (let y = 0; y < letters.length; y += 1) {
//       if (vogais[y] === letters[x]) {
//         letters[x] = numbers[y];
//       }
//     }
//   }
//   return letters.join('');
// }

function encode(stringOfLetters) {
  const lettersAndVogais = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let newString = '';
  for (let letters in stringOfLetters) {
    if (lettersAndVogais[stringOfLetters[letters]]) {
      newString += lettersAndVogais[stringOfLetters[letters]];
    } else {
      newString += stringOfLetters[letters];
    }
  }
  return newString;
}

// console.log(encode("hi there!"));

function decode(stringOfNumbers) {
  let numbersAndLetters = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let newString = '';
  for (let caractere in stringOfNumbers) {
    if (typeof numbersAndLetters[stringOfNumbers[caractere]] === 'undefined') {
      newString += stringOfNumbers[caractere];
    } else {
      newString += numbersAndLetters[stringOfNumbers[caractere]];
    }
  }
  return newString;
}

// console.log(decode("h3 th2r2!"));

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

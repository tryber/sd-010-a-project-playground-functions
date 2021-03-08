// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}
console.log(compareTrue(true, false));
console.log(compareTrue(false, false));
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(shareString) {
  return shareString.split(' ');
}
console.log(splitSentence('go, Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(arrayString) {
  return `${arrayString[arrayString.length - 1]}, ${arrayString[0]}`;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3 + ties);
}

console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(numbers) {
  let maior = 0;
  let count = 0;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maior) {
      maior = numbers[index];
    }
  }

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === maior) {
      count += 1;
    }
  }
  return count;
}

let meuArray = [9, 1, 2, 3, 9, 5, 7];
console.log(highestCount(meuArray));
meuArray = [0, 4, 4, 4, 9, 2, 1];
console.log(highestCount(meuArray));
meuArray = [0, 0, 0];
console.log(highestCount(meuArray));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let res;

  if (Math.abs(mouse - cat1) < Math.abs(mouse - cat2)) {
    res = 'cat1';
  } else if (Math.abs(mouse - cat1) > Math.abs(mouse - cat2)) {
    res = 'cat2';
  } else {
    res = 'os gatos trombam e o rato foge';
  }
  return res;
}
console.log(catAndMouse(1, 4, 3));
console.log(catAndMouse(0, 6, 12));
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(arrayNumber) {
  let number = [];

  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayNumber[index] % 5 === 0 && arrayNumber[index] % 3 === 0) {
      number.push('fizzBuzz');
    } else if (arrayNumber[index] % 5 === 0) {
      number.push('buzz');
    } else if (arrayNumber[index] % 3 === 0) {
      number.push('fizz');
    } else {
      number.push('bug!');
    }
  }
  return number;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));

// Desafio 9
function encode(vowel) {
  let res = '';
  res = vowel.replace(/a/g, '1').replace(/e/g, '2').replace(/i/g, '3').replace(/o/g, '4').replace(/u/g, '5');
  return res;
}
console.log(encode('hi, there'));

function decode(vowel) {
  res = vowel.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
  return res;
}
console.log(encode('hi, there'));

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

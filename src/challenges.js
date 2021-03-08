// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
    return true;
  } return false;
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let triangle = (base * height) / 2;
  return triangle;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(string) {
  let arrayStrings = string.split(' ');
  return arrayStrings;
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  let concatStrings = '';
  for (let index = 0; index < array.length; index += 1) {
    concatStrings = `${array[array.length - 1]}, ${array[0]}`;
  }
  return concatStrings;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

// Desafio 5
function footballPoints(wins, ties) {
  let numberOfPoints = 0;
  let victories = wins * 3;
  let draws = ties * 1;
  numberOfPoints = victories + draws;
  return numberOfPoints;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Desafio 6
function highestCount(array) {
  let higherNumber = 0;
  let countNumber = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > higherNumber) {
      higherNumber = array[index];
    }
  }
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === higherNumber) {
      countNumber += 1;
    }
  }
  return countNumber;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);
  let result = '';
  if (distance1 > distance2) {
    result = 'cat2';
  } else if (distance2 > distance1) {
    result = 'cat1';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
}
console.log(catAndMouse(8, 5, 6));
console.log(catAndMouse(16, 10, 28));
console.log(catAndMouse(8, 3, 3));

// Desafio 8
function fizzBuzz(array) {
  let newArray = [];
  let string = '';
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] % 3 === 0 && array[index] % 5 === 0) {
      string = 'fizzBuzz';
      newArray.push(string)
    } else if (array[index] % 3 === 0) {
      string = 'fizz';
      newArray.push(string);
    } else if (array[index] % 5 === 0) {
      string = 'buzz';
      newArray.push(string)
    } else {
      string = 'bug!';
      newArray.push(string)
    }
  }
  return newArray;
}
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Desafio 9
function encode(string) {
  let encodeString = string.split('');
  let encodeArraySplit = [];
  for (let index = 0; index < encodeString.length; index += 1) {
    if (encodeString[index] === 'a') {
      encodeArraySplit.push(encodeString[index].replace('a', 1));
    } else if (encodeString[index] === 'e') {
      encodeArraySplit.push(encodeString[index].replace('e', 2));
    } else if (encodeString[index] === 'i') {
      encodeArraySplit.push(encodeString[index].replace('i', 3));
    } else if (encodeString[index] === 'o') {
      encodeArraySplit.push(encodeString[index].replace('o', 4));
    } else if (encodeString[index] === 'u') {
      encodeArraySplit.push(encodeString[index].replace('u', 5));
    } else {
      encodeArraySplit.push(encodeString[index]);
    }
  }
  return encodeArraySplit.join('');
}
console.log(encode('hi there!'));

function decode(string) {
  let decodeString = string.split('');
  let decodeArraySplit = [];
  for (let index = 0; index < decodeString.length; index += 1) {
    if (decodeString[index] === '1') {
      decodeArraySplit.push(decodeString[index].replace('1', 'a'));
    } else if (decodeString[index] === '2') {
      decodeArraySplit.push(decodeString[index].replace('2', 'e'));
    } else if (decodeString[index] === '3') {
      decodeArraySplit.push(decodeString[index].replace('3', 'i'));
    } else if (decodeString[index] === '4') {
      decodeArraySplit.push(decodeString[index].replace('4', 'o'));
    } else if (decodeString[index] === '5') {
      decodeArraySplit.push(decodeString[index].replace('5', 'u'));
    } else {
      decodeArraySplit.push(decodeString[index]);
    }
  }
  return decodeArraySplit.join('');
}
console.log(decode('h3 th2r2!'));

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

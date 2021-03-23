// Desafio 1
function compareTrue(value1, value2) {
  let result;
  if (value1 === true && value2 === true) {
    result = true;
  } else { result = false; }
  return result;
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
function concatName(strArray) {
  return `${strArray[strArray.length - 1]}, ${strArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points;
  wins *= 3;
  points = wins + ties;
  return points;
}

// Desafio 6
function highestCount(numbers) {
  let count = 0;
  let highestNumber = Math.max(...numbers);
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distMouseCat1 = Math.abs(mouse - cat1);
  let distMouseCat2 = Math.abs(mouse - cat2);
  if (distMouseCat1 < distMouseCat2) {
    return 'cat1';
  } if (distMouseCat1 > distMouseCat2) {
    return 'cat2';
  } return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numberArray) {
  let output = []
  for (let i = 0; i < numberArray.length; i += 1) {
    if (numberArray[i] % 3 === 0 && numberArray[i] % 5 === 0) {
      output.push('fizzBuzz');
    } else if (numberArray[i] % 5 === 0) {
      output.push('buzz');
    } else if (numberArray[i] % 3 === 0) {
      output.push('fizz');
    } else { output.push('bug!'); }
  }
  return output;
}

// Desafio 9
function encode(encodeString) {
  let splitedString = encodeString.split('');
  for (let index = 0; index < splitedString.length; index += 1) {
    if (splitedString[index] === 'a') {
      splitedString[index] = 1;
    } else if (splitedString[index] === 'e') {
      splitedString[index] = 2;
    } else if (splitedString[index] === 'i') {
      splitedString[index] = 3;
    } else if (splitedString[index] === 'o') {
      splitedString[index] = 4;
    } else if (splitedString[index] === 'u') {
      splitedString[index] = 5;
    } else { }
  }
  return splitedString.join('');
}

function decode(decodeString) {
  let splitedString = decodeString.split('');
  for (let index = 0; index < splitedString.length; index += 1) {
    if (splitedString[index] === '1') {
      splitedString[index] = 'a';
    } else if (splitedString[index] === '2') {
      splitedString[index] = 'e';
    } else if (splitedString[index] === '3') {
      splitedString[index] = 'i';
    } else if (splitedString[index] === '4') {
      splitedString[index] = 'o';
    } else if (splitedString[index] === '5') {
      splitedString[index] = 'u';
    } else { }
  }
  return splitedString.join('');
}

console.log(compareTrue(true, true));

console.log(calcArea(51, 1));

console.log(splitSentence('vamo que vamo'));

console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));

console.log(footballPoints(14, 8));

console.log(highestCount([1, 4, 4, 4]));

console.log(catAndMouse(7, 7, 2));

console.log(fizzBuzz([1, 6, 9]));

console.log(encode('ola para todos'));

console.log(decode('23ck2'));

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

/* Desafio 1
Como a funcoes em js so tem um retorno nao eh necessario colocar um else, pois se entrar no if ao chegar no return tera um break na funcao
pulando assim o resto */

function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, heigh) {
  let area = (base * heigh) / 2;
  return area;
}

// Desafio 3
/* https://www.w3schools.com/jsref/jsref_split.asp#:~:text=The%20split()%20method%20is,not%20change%20the%20original%20string.
Site onde aprendi sobre o metodo .split() */
function splitSentence(sentence) {
  let sentenceArray = sentence.split(' ');
  return sentenceArray;
}

// Desafio 4
function concatName(array) {
  let result = `${array[array.length - 1]}, ${array[0]}`;
  return result;
}

// Desafio 5
function footballPoints(wins, ties) {
  let result = wins * 3 + ties;
  return result;
}

/* Desafio 6
Para aceitar no lint tive que criar uma funcao para achar o maior numero para depois poder contar as repeticoes desse numero */

function highestNumber(array) {
  let highNumber = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > highNumber) {
      highNumber = array[index];
    }
  }
  return highNumber;
}

function highestCount(array) {
  let sum = 0;
  for (let indexCount = 0; indexCount < array.length; indexCount += 1) {
    if (highestNumber(array) === array[indexCount]) {
      sum += 1;
    }
  }
  return sum;
}

// Desafio 7

function highestNumberSubtraction(num1, num2) {
  if (num1 > num2) {
    return num1 - num2;
  } return num2 - num1;
}

function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = highestNumberSubtraction(cat1, mouse);
  let distanceCat2 = highestNumberSubtraction(cat2, mouse);

  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function divisible(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    return 'fizzBuzz';
  } if (num % 3 === 0) {
    return 'fizz';
  } if (num % 5 === 0) {
    return 'buzz';
  } return 'bug!';
}

function fizzBuzz(array) {
  let resultArray = [];
  for (let index = 0; index < array.length; index += 1) {
    resultArray.push(divisible(array[index]));
  }
  return resultArray;
}

// Desafio 9
function encode(string) {
  let newString = '';
  let array = string.split('');
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === 'a') {
      newString += '1';
    } else if (array[index] === 'e') {
      newString += '2';
    } else if (array[index] === 'i') {
      newString += '3';
    } else if (array[index] === 'o') {
      newString += '4';
    } else if (array[index] === 'u') {
      newString += '5';
    } else {
      newString += array[index];
    }
  }
  return newString;
}

function decode(string) {
  let newString = '';
  let array = string.split('');
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === '1') {
      newString += 'a';
    } else if (array[index] === '2') {
      newString += 'e';
    } else if (array[index] === '3') {
      newString += 'i';
    } else if (array[index] === '4') {
      newString += 'o';
    } else if (array[index] === '5') {
      newString += 'u';
    } else {
      newString += array[index];
    }
  }
  return newString;
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

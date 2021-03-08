// Desafio 1
function compareTrue(valueA, valueB) {
  if (valueA === true && valueB === true) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(message) {
  return message.split(' ');
}

// Desafio 4
function concatName(arr) {
  return `${arr[arr.length - 1]}, ${arr[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let points = 0;
  if (wins) {
    points += wins * 3;
  }
  if (ties) {
    points += ties * 1;
  }

  return points;
}

// Desafio 6
function highestCount(numbersArr) {
  let highestNumber = numbersArr[0];

  for (let index = 1; index < numbersArr.length; index += 1) {
    if (numbersArr[index] > highestNumber) {
      highestNumber = numbersArr[index];
    }
  }

  return numbersArr.filter((number) => number === highestNumber).length;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  const distanceCat1 = Math.abs(cat1 - mouse);
  const distanceCat2 = Math.abs(cat2 - mouse);

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }

  if (distanceCat2 < distanceCat1) {
    return 'cat2';
  }

  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function divisibleBy3(number) {
  if (number % 3 === 0) {
    return true;
  }
  return false;
}

function divisibleBy5(number) {
  if (number % 5 === 0) {
    return true;
  }
  return false;
}

function divisibleBy3and5(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return true;
  }
  return false;
}

// Disposição dos if/else inspirada pelo Bernardo no plantão
function fizzBuzzIfElse(number) {
  if (divisibleBy3and5(number)) {
    return 'fizzBuzz';
  }
  if (divisibleBy3(number)) {
    return 'fizz';
  }
  if (divisibleBy5(number)) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(numbersArr) {
  let resultsArr = [];
  for (let index = 0; index < numbersArr.length; index += 1) {
    resultsArr.push(fizzBuzzIfElse(numbersArr[index]));
  }
  return resultsArr;
}

// Desafio 9
function encode(str) {
  const encodedArr = [];
  const encodingObj = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  for (let index = 0; index < str.length; index += 1) {
    if (encodingObj[str[index]]) {
      encodedArr.push(encodingObj[str[index]]);
    } else {
      encodedArr.push(str[index]);
    }
  }

  return encodedArr.join('');
}
function decode(str) {
  const decodedArr = [];
  const decodingObj = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  for (let index = 0; index < str.length; index += 1) {
    if (decodingObj[str[index]]) {
      decodedArr.push(decodingObj[str[index]]);
    } else {
      decodedArr.push(str[index]);
    }
  }

  return decodedArr.join('');
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

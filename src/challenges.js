// Desafio 1
function compareTrue(x, y) {
  if (typeof x === 'boolean' && typeof y === 'boolean') {
    return x && y;
  }
  return false;
}

// Desafio 2
function calcArea(base, heigth) {
  return (base * heigth) / 2;
}

// Desafio 3
function splitSentence(phrase) {
  let words = [];
  let path = 0;
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] !== ' ') {
      if (words[path] !== undefined) {
        words[path] += phrase[index];
      } else {
        words[path] = phrase[index];
      }
    } else {
      path += 1;
    }
  }
  return words;
}

// Desafio 4
function concatName(names) {
  let lastName = names[names.length - 1];
  let firstName = names[0];
  return lastName + ', ' + firstName;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pointsWins = wins * 3;
  let pointsTies = ties * 1;
  let totalPoints = pointsWins + pointsTies;
  return totalPoints;
}

// Desafio 6
function highestCount(randomNumbers) {
  let larger = 0;
  let count = 0;
  for (let index = 0; index < randomNumbers.length; index += 1) {
    if (randomNumbers[index] > larger) {
      larger = randomNumbers[index];
      count = 1;
    } else if (randomNumbers[index] === larger) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = mouse - cat1;
  let distanceCat2 = mouse - cat2;
  if (distanceCat1 < 0) {
    distanceCat1 *= -1;
  }
  if (distanceCat2 < 0) {
    distanceCat2 *= -1;
  }
  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } else if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
    return 'cat1';
}

// Desafio 8
function fizzBuzz(numbersGroup) {
  let numbersGroupResult = [];
  for (let positionIndex = 0; positionIndex < numbersGroup.length; positionIndex += 1) {
    if (numbersGroup[positionIndex] % 3 === 0 && numbersGroup[positionIndex] % 5 === 0) {
      numbersGroupResult[positionIndex] = 'fizzBuzz';
    } else if (numbersGroup[positionIndex] % 3 === 0) {
      numbersGroupResult[positionIndex] = 'fizz';
    } else if (numbersGroup[positionIndex] % 5 === 0) {
      numbersGroupResult[positionIndex] = 'buzz';
    } else {
      numbersGroupResult[positionIndex] = 'bug!';
    }
  }
  return numbersGroupResult;
}

// Desafio 9
function encode(contents) {
  let textEncoded = '';
  for (let indicator = 0; indicator < contents.length; indicator += 1) {
    if (contents[indicator] === 'a') {
      textEncoded += '1';
    } else if (contents[indicator] === 'e') {
      textEncoded += '2';
    } else if (contents[indicator] === 'i') {
      textEncoded += '3';
    } else if (contents[indicator] === 'o') {
      textEncoded += '4';
    } else if (contents[indicator] === 'u') {
      textEncoded += '5';
    } else {
      textEncoded += contents[indicator];
    }
  }
  return textEncoded;
}

function decode(textEncoded) {
  let textDecoded = '';
  for (let indicator = 0; indicator < textEncoded.length; indicator += 1) {
    if (textEncoded[indicator] === '1') {
      textDecoded += 'a';
    } else if (textEncoded[indicator] === '2') {
      textDecoded += 'e';
    } else if (textEncoded[indicator] === '3') {
      textDecoded += 'i';
    } else if (textEncoded[indicator] === '4') {
      textDecoded += 'o';
    } else if (textEncoded[indicator] === '5') {
      textDecoded += 'u';
    } else {
      textDecoded += textEncoded[indicator];
    }
  }
  return textDecoded;
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

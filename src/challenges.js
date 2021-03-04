// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }

  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(setence) {
  return setence.split(' ');
}

// Desafio 4
function concatName(namesArray) {
  let lastIndex = namesArray.length - 1;

  return `${namesArray[lastIndex]}, ${namesArray[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins * 3 + ties;
}

// Desafio 6
function highestCount(numbersArray) {
  let highestNumber = 0;
  let sum = 0;
  for (let numberIndex in numbersArray) {
    if (numbersArray[numberIndex] > highestNumber) {
      highestNumber = numbersArray[numberIndex];
    }
  }

  for (let highestNumberIndex in numbersArray) {
    if (numbersArray[highestNumberIndex] === highestNumber) {
      sum += 1;
    }
  }

  return sum;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = mouse - cat1;
  let distance2 = mouse - cat2;

  if (distance1 < 0) {
    distance1 *= -1;
  }
  if (distance2 < 0) {
    distance2 *= -1;
  }

  if (distance1 < distance2) {
    return 'cat1';
  }
  if (distance2 < distance1) {
    return 'cat2';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz(numbersArray) {
  let stringsArray = [];

  for (let index in numbersArray) {
    if (numbersArray[index] % 3 === 0 && numbersArray[index] % 5 === 0) {
      stringsArray.push('fizzBuzz');
    } else if (numbersArray[index] % 3 === 0) {
      stringsArray.push('fizz');
    } else if (numbersArray[index] % 5 === 0) {
      stringsArray.push('buzz');
    } else {
      stringsArray.push('bug!');
    }
  }

  return stringsArray;
}

// Desafio 9
function encode(string) {
  let splitStringArray = string.split('');

  for (let index in splitStringArray) {
    if (splitStringArray[index] === 'a') {
      splitStringArray[index] = 1;
    } else if (splitStringArray[index] === 'e') {
      splitStringArray[index] = 2;
    } else if (splitStringArray[index] === 'i') {
      splitStringArray[index] = 3;
    } else if (splitStringArray[index] === 'o') {
      splitStringArray[index] = 4;
    } else if (splitStringArray[index] === 'u') {
      splitStringArray[index] = 5;
    }
  }

  return splitStringArray.join('');
}

// Desafio 10
function decode(string) {
  let splitStringArray = string.split('');

  for (let index in splitStringArray) {
    if (splitStringArray[index] === '1') {
      splitStringArray[index] = 'a';
    } else if (splitStringArray[index] === '2') {
      splitStringArray[index] = 'e';
    } else if (splitStringArray[index] === '3') {
      splitStringArray[index] = 'i';
    } else if (splitStringArray[index] === '4') {
      splitStringArray[index] = 'o';
    } else if (splitStringArray[index] === '5') {
      splitStringArray[index] = 'u';
    }
  }

  return splitStringArray.join('');
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

// Desafio 1
function compareTrue(booleanValue1, booleanValue2) {
  if (booleanValue1 === true && booleanValue2 === true) {
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
  return (wins * 3) + ties;
}

// Desafio 6 - Agradecimento especial ao tryber Luan Ramalho que fez toda a diferensa nesse desafio
function highestNumber(arrayNumbers) {
  let highestNumberOfArray = arrayNumbers[0];
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > highestNumberOfArray) {
      highestNumberOfArray = arrayNumbers[index];
    }
  }
  return highestNumberOfArray;
}

function highestCount(arrayNumbers) {
  let highNumber = highestNumber(arrayNumbers);
  let counterOfHighestNumber = 0;
  for (let counter = 0; counter < arrayNumbers.length; counter += 1) {
    if (highNumber === arrayNumbers[counter]) {
      counterOfHighestNumber += 1;
    }
  }
  return counterOfHighestNumber;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  } if (distanceCat1 < distanceCat2) {
    return 'cat1';
  } if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz(arrayOfNumbers) {
  let arrayFizzBuzz = [];
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    if (arrayOfNumbers[index] % 3 === 0 && arrayOfNumbers[index] % 5 === 0) {
      arrayFizzBuzz.push('fizzBuzz');
    } else if (arrayOfNumbers[index] % 3 === 0) {
      arrayFizzBuzz.push('fizz');
    } else if (arrayOfNumbers[index] % 5 === 0) {
      arrayFizzBuzz.push('buzz');
    } else {
      arrayFizzBuzz.push('bug!');
    }
  }
  return arrayFizzBuzz;
}

// Desafio 9
function returnObjectReplace() {
  let codeReplace = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  return codeReplace;
}
function encode(string) {
  let codeReplace = returnObjectReplace();
  let encodeString = string;
  for (let key in codeReplace) {
    let encodeRegexReplace = `${key}`;
    encodeString = encodeString.replace(RegExp(encodeRegexReplace, 'g'), codeReplace[key]);
  }
  return encodeString;
}

function decode(string) {
  let codeReplace = returnObjectReplace();
  let decodeStringReplace = string;
  for (let key in codeReplace) {
    let decodeRegexReplace = codeReplace[key];
    decodeStringReplace = decodeStringReplace.replace(RegExp(decodeRegexReplace, 'g'), `${key}`);
  }
  return decodeStringReplace;
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

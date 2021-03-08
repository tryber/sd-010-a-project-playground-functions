// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2) {
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
  let result = string.split(' ');
  return result;
// metodo split pesquisada no site https://www.w3schools.com/jsref/jsref_split.asp.
}

// Desafio 4
function concatName(arrayStrings) {
  return arrayStrings[arrayStrings.length - 1] + ', ' + arrayStrings[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  wins *= 3;
  ties *= 1;
  let numberOfPoints = wins + ties;
  return numberOfPoints;
}

// Desafio 6
function highestCount(numbers) {
  let maiornumero = Math.max.apply(null, numbers);
  let soma = 0;
  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] === maiornumero) {
      soma += 1;
    }
  } return soma;
} // função math.max coletada do site; https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max//

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(cat1 - mouse);
  let positionCat2 = Math.abs(cat2 - mouse);

  if (positionCat1 < positionCat2) {
    return 'cat1';
  } else if (positionCat2 < positionCat1) {
    return 'cat2';
  } else {
    return 'os gatos trombam e o rato foge';
  }
} // math.abs coletada no site; https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs//

// Desafio 8
function fizzBuzz(arrayNumbers) {
  let arrayReturn = [];
  for (let i = 0; i < arrayNumbers.length; i += 1) {
    
    if (arrayNumbers[i] % 3 === 0 && arrayNumbers[i] % 5 === 0) {
      arrayReturn.push('fizzBuzz');
    } else if (arrayNumbers[i] % 3 === 0) {
      arrayReturn.push('fizz');
    } else if (arrayNumbers[i] % 5 === 0) {
      arrayReturn.push('buzz');
    } else {
      arrayReturn.push('bug!');
    }
  }return arrayReturn;
};

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
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

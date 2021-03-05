// Desafio 1
function compareTrue(a, b) {
  if (a === true && b === true) {
    return true
  } else {
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
};

// Desafio 3
function splitSentence(sentenceToSplit) {
  return sentenceToSplit.split(' ');
}
// Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split //

// Desafio 4
function concatName(stringsArray) {
  return stringsArray[stringsArray.length -1] + ', ' + stringsArray[0];
}
// Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/concat //
// Source: https://masteringjs.io/tutorials/fundamentals/string-concat //

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + ties;
}

// Desafio 6
function highestCount(numberArray) {
  let highestNumber = 0;
  let numberCounter = 0;
  for (let index = 0; index < numberArray.length; index += 1) {
    if (numberArray[index] > highestNumber) {
      highestNumber = numberArray[index];
    }
    for (let index = 0; index < numberArray.length; index += 1) {
      if (numberArray[index] === highestNumber) {
        numberCounter += 1;
      }
    } return numberCounter;
}
}

// Source: https://www.w3schools.com/jsref/jsref_forin.asp //
// Source: discussões no Slack, auxílio do Gabriel Pereira, auxílio do PH //
// Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// Visita ao repositório do João Nasc: https://github.com/tryber/sd-010-a-project-playground-functions/pull/132/commits/e391 //

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = cat1 - mouse;
  let cat2Position = cat2 - mouse;

  if (cat1Position < 0) {
    cat1Position *= -1;
  } if (cat2Position < 0) {
    cat2Position *= -1;
  }

  if (cat1Position > cat2Position) {
    return 'cat2';
  }
  if (cat1Position === cat2Position) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat1';
}

// Consulta ao repositório do João Nasc: https://github.com/tryber/sd-010-a-project-playground-functions/pull/132/commits/e391 //

// Desafio 8
function fizzBuzz(numbersArray) {
let result = [];
  for (let index = 0; index < numbersArray.length; index += 1) {
    if (numbersArray[index] % 3 === 0 && numbersArray[index] % 5 === 0) {
      result.push('fizzBuzz');
    }
    else if (numbersArray[index] % 3 === 0) {
      result.push('fizz');
    }
    else if (numbersArray[index] % 5 === 0) {
      result.push('buzz')
    } else {
      result.push('bug!')
    }
  }
return result;

}

// Consulta ao repositório do Jorge Meyrelles: https://github.com/tryber/sd-010-a-project-playground-functions/tree/jorgemeyrelles-project-playground-functions //

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

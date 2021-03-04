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
  return (base * height) / 2
};

// Desafio 3
function splitSentence(sentenceToSplit) {
  return sentenceToSplit.split(' ')
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
  let highestNum = Math.max.apply(numberArray);
  let numCounter = 0;

  for (let index = 0; index < numberArray.length; index += 1) {
    if (index === highestNum) {
      numCounter += 1;
    }
  }
  return numCounter;
}

// Source: discussões no Slack, auxílio do Gabriel Pereira //
// Source: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
// Visita ao repositório do João Nasc: https://github.com/tryber/sd-010-a-project-playground-functions/pull/132/commits/e391 //

// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

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

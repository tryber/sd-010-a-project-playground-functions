// Desafio 1
function compareTrue(bool1, bool2) {
  return (bool1 && bool2);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(originalString) {
  let wordsArray = [];
  let singleWord = '';
  for (let char = 0; char <= originalString.length; char += 1) {
    if (char === (originalString.length - 1)) {
      singleWord += originalString[char];
      wordsArray.push(singleWord);
    } else if (originalString[char] !== ' ') {
      singleWord += originalString[char];
    } else {
      wordsArray.push(singleWord);
      singleWord = '';
    }
  }
  return wordsArray;
}

// Desafio 4
function concatName(stringArray) {
  return (stringArray[stringArray.length - 1] + ', ' + stringArray[0]);
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']))
// Desafio 5
function footballPoints() {
  // seu código aqui
}

// Desafio 6
function highestCount() {
  // seu código aqui
}

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

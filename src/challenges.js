// Desafio 1
function compareTrue(test1, test2) {
  if (test1 && test2){
    return true
  } else {
    return false;
  }
  // seu código aqui
}

// Desafio 2
function calcArea(base, heigt) {
  // seu código aqui
  return (base*heigt)/2

}

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
  let word = '';
  let sentenceSplited = [];
  for (let index in sentence){ 
    if(sentence[index] !== ' ' ) {
      word += sentence[index];
      index += 1;
    } else if (word !== ''){
      sentenceSplited.push(word);
      word = '';
    }
  }
  return sentenceSplited;
}

// Desafio 4
function concatName() {
  // seu código aqui
}

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

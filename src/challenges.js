// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui.
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}
console.log(compareTrue(false, true));
console.log(compareTrue(false, false));
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let count = base * height;
  let count2 = count / 2;
  return count2;
}
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Desafio 3
function splitSentence(sentence) {
  let splitted = sentence.split(' ');
  return splitted;
}
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Desafio 4
function concatName(array) {
  // seu código aqui
  let lastItem = array.pop();
  let firstItem = array.shift();

  return lastItem + ', ' + firstItem;
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let win = wins * 3;
  let tie = ties * 1;
  let sumPoints = win + tie;
  return sumPoints;
}
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));
// Desafio 6
function highestCount(set) {
  // seu código aqui
  let higherNumber = Math.max(...set);
  let quantity = 0;

  for (let index = 0; index < set.length; index +=1) {
    if (higherNumber === set[index]) {
      quantity+=

    }
  }
  return quantity;
}

console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distanceCat1 = Math.abs(mouse - cat1)
  let distanceCat2 = Math.abs(mouse - cat2)

  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }
  else if (distanceCat2 > distanceCat1) {
    return 'cat1';
  }
  else (distanceCat1 === distanceCat2)
  return 'os gatos trombam e o rato foge';

}
console.log(catAndMouse(0, 3, 2));
console.log(catAndMouse(0, 6, 12));
console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(arrays) {
  // seu código aqui
  let retorno = [];

  for (let index2 = 0; index2 < arrays.length; index2++) {

    if (arrays[index2] % 5 === 0 && arrays[index2] % 3 === 0) {
      retorno.push('fizzBuzz')
    }
    else if (arrays[index2] % 5 === 0) {
      retorno.push('buzz')
    }
    else if (arrays[index2] % 3 === 0) {
      retorno.push('fizz')
    }
    else {
      retorno.push('bug!')
    }
  }
  return retorno;
}

console.log(fizzBuzz([2, 15, 7, 9, 45]))
console.log(fizzBuzz([7, 9]))
console.log(fizzBuzz([9, 25]))
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

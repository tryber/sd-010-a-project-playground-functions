// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(sentence) {
  let splitedWord = sentence.split(' ');
  return splitedWord;
}

// Desafio 4
function concatName(name) {
  let lastItem = name[name.length - 1];
  let firstItem = name[0];
  let ponctuation = ', ';
  return lastItem + ponctuation + firstItem;
}

// Desafio 5
function footballPoints(wins, ties) {
  let score = (wins * 3) + (ties * 1);
  return score;
}

// Desafio 6
function highestCount(sequence) {
  let max = Math.max.apply(null, sequence);
  console.log(max);
  let addRep = 0;
  for (let index = 0; index < sequence.length; index += 1) {
    if (max === sequence[index]) {
      addRep += 1;
    }
  }
  return addRep;
}
console.log(highestCount([10, 10, 9, 8, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  if (dist1 > dist2) {
    return 'cat1';
  } if (dist2 > dist11) {
    return 'cat2';
  } if (dist1 === dist2) {
    return 'os gatos trombam e o rato foge';
  }
}

// Desafio 8
function fizzBuzz() {
% 3 return 'fizz';
% 5 return 'buzz';
% 3 && % 5, return 'fizzBuzz;
else % 3 && % 5 return 'bug!';
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

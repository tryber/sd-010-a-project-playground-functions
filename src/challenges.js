// Desafio 1
function compareTrue(var1, var2) {
  let end = false;
  if (var1 === true && var2 === true) {
    end = true;
  } return end;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(word) {
  let splitted = word.split(' ');
  return splitted;
}

// Desafio 4
function concatName(word) {
  let lastNum = word.length - 1;
  let concatInt = [word[lastNum], word[0]];
  let concat = concatInt.join(', ');
  return (concat);
}

// Desafio 5
function footballPoints(wins, ties) {
  return ((3 * wins) + (1 * ties));
}

// Função hiest para exercico 6
function highest(array) {
  let higherNumber = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > higherNumber) {
      higherNumber = array[index];
    }
  }
  return higherNumber;
}

// Desafio 6
function highestCount(array) {
  let highestNumber = highest(array);
  let count = 0;
  for (let index in array) {
    if (array[index] === highestNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = cat1 - mouse;
  let dist2 = cat2 - mouse;
  let result;
  if (dist1 > dist2) {
    result = 'cat2';
  } else if (dist2 > dist1) {
    result = 'cat1';
  } else {
    result = 'os gatos trombam e o rato foge';
  }
  return result;
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

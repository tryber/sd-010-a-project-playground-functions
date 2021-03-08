// Desafio 1
function compareTrue(value1, value2) {
  let compare;
  if (value1 === true && value2 === true) {
    compare = true;
  } else {
    compare = false;
  }
  return compare;
}

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(sentence) {
  sentence = sentence.split(' ');
  return sentence;
}

// Desafio 4
function concatName(entry) {
  let lastName = entry[entry.length - 1];
  let firstName = entry[0];
  let concat = lastName + ', ' + firstName;
  return concat;
}

// Desafio 5
function footballPoints(wins, ties) {
  let victory = wins * 3;
  return victory + ties;
}

// Desafio 6
function highestCount(numbers) {
  let maxNumber = 0;
  let count = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > maxNumber) {
      maxNumber = numbers[index];
    }
  }
  for (let indexM = 0; indexM < numbers.length; indexM += 1) {
    if (numbers[indexM] === maxNumber) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
// resolução baseada no codigo da pessoa estudante Daniel Ribeiro, onde foi identificado
// a multiplicação dos numeros menores que zero por -1.
// https://github.com/tryber/sd-010-a-project-playground-functions/tree/defauth98-project-playground-functions

function catAndMouse(mouse, cat1, cat2) {
  let dist1 = cat1 - mouse;
  let dist2 = cat2 - mouse;
  if (dist1 < 0) {
    dist1 *= -1;
  }
  if (dist2 < 0) {
    dist2 *= -1;
  }
  if (dist1 < dist2) {
    return 'cat1';
  }
  if (dist2 < dist1) {
    return 'cat2';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
// joão nascimento : nascjoao-project-playground-functions; codigo serviu como base para
// o desenvolvimento desta questão.
function encode(iText) {
  let codVowels = { a: 1, e: 2, i: 3, o: 4, u: 5 };
  let encodeText = '';
  for (let letter in iText) {
    if (codVowels[iText[letter]]) {
      encodeText += codVowels[iText[letter]];
    } else {
      encodeText += iText[letter];
    }
  }
  return encodeText;
}

function decode(codText) {
  let codNumbers = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let decodedText = '';
  for (let number in codText) {
    if (codNumbers[codText[number]]) {
      decodedText += codNumbers[codText[number]];
    } else {
      decodedText += codText[number];
    }
  }
  return decodedText;
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

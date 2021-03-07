// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}

// Desafio 2

function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}

// Desafio 3
function splitSentence(phrase) {
  let separator = ' ';
  let message = phrase.split(separator);

  return message;
}

// Desafio 4
function concatName(listNames) {
  let aux = `${listNames.pop()}, ${listNames.shift()}`;
  return aux;
}

// Desafio 5
function footballPoints(wins, ties) {
  let aux = wins * 3 + ties * 1;
  return aux;
}

// Desafio 6
function highestNumber(listNumbers) {
  let number = Math.max.apply(null, listNumbers);
  return number;
}
highestNumber([9, 1, 2, 3, 9, 5, 7]);
function highestCount(list) {
  let num = highestNumber(list);
  console.log(highestNumber(list));
  let count = 0;

  for (let key in list) {
    if (list[key] === num) {
      count += 1;
    }
  }
  return count;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(mouse - cat1);
  let positionCat2 = Math.abs(mouse - cat2);
  let msg = '';
  if (positionCat1 < positionCat2) {
    msg = 'cat1';
  } else if (positionCat1 === positionCat2) {
    msg = 'os gatos trombam e o rato foge';
  } else msg = 'cat2';

  return msg;
}

// Desafio 8
// eslint-disable-next-line complexity
function fizzBuzz(listNumber) {
  let listString = [];
  for (let key in listNumber) {
    if (listNumber[key] % 3 === 0 && listNumber[key] % 5 === 0) {
      listString.push('fizzBuzz');
    } else if (listNumber[key] % 5 === 0) {
      listString.push('buzz');
    } else if (listNumber[key] % 3 === 0) {
      listString.push('fizz');
    } else listString.push('bug!');
  }
  return listString;
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

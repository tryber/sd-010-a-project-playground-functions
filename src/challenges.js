/* eslint-disable sonarjs/no-one-iteration-loop */
/* eslint-disable complexity */
// Desafio 1
function compareTrue(param1, param2) {
  return param1 === true && param2 === true;
}

// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ');
}

// Desafio 4
function concatName(nomes) {
  let ultimoNome = nomes[nomes.length - 1];
  let primeiroNome = nomes[0];
  return `${ultimoNome}, ${primeiroNome}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let pontos = wins * 3 + ties * 1;
  return pontos;
}

// Desafio 6
function maiorNum(arrayNumbers) {
  let highestNum = -9999;
  for (let index = 0; index <= arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] > highestNum) {
      highestNum = arrayNumbers[index];
    }
  }
  return highestNum;
}

function highestCount(numbers) {
  let repeats = 0;
  const highestNum = maiorNum(numbers);

  for (let index2 = 0; index2 <= numbers.length; index2 += 1) {
    if (highestNum === numbers[index2]) {
      repeats += 1;
    }
  }
  return repeats;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let positionCat1 = Math.abs(mouse - cat1);
  let positionCat2 = Math.abs(mouse - cat2);
  if (positionCat1 > positionCat2) {
    return 'cat2';
  } if (positionCat1 < positionCat2) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function wordsFizzBuss(number) {
  if ((number % 3 === 0) && (number) % 5 === 0) {
    return 'fizzBuzz';
  } if (number % 3 === 0) {
    return 'fizz';
  } if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(arrayNum) {
  let arrayFizzs = [];
  for (let index = 0; index < arrayNum.length; index += 1) {
    arrayFizzs.push(wordsFizzBuss(arrayNum[index]));
  }
  return arrayFizzs;
}

// Desafio 9
function encode(encodeParam) {
  let encodeRel = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  return encodeParam.replace(/[aeiou]/g, (m) => encodeRel[m]);
}

function decode(decodeParam) {
  let decodeRel = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  return decodeParam.replace(/[12345]/g, (m) => decodeRel[m]);
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

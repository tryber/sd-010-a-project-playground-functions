// Desafio 1
function compareTrue(value1, value2) {
  if (value1 && value2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
// Para o exercicio foi utilizada a documentação da função SPLIT disponível em: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split

function splitSentence(phrase) {
  let espace = ' ';
  let splitphrase = phrase.split(espace);
  return splitphrase;
}

// Desafio 4
// Consulta sobre template literals https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals
function concatName(phraseArray) {
  let firstItem = phraseArray[0];
  let lastItem = phraseArray[phraseArray.length - 1];
  let phraseString = `${lastItem}, ${firstItem}`;
  return (phraseString);
}

console.log(concatName(['foguete', 'não', 'tem', 'ré']));

// Desafio 5

function footballPoints(wins, ties) {
  let sumWins = wins * 3;
  let resultPoints = sumWins + ties;
  return resultPoints;
}

// Desafio 6
function highestCount(numberArray) {
  let countRepeat = 0;
  let HighNumber = 0;
  for (let indexH = 0; indexH < numberArray.length; indexH += 1) {
    if (HighNumber < numberArray[indexH]) {
      HighNumber = numberArray[indexH];
    }
  }
  for (let indexR = 0; indexR < numberArray.length; indexR += 1) {
    if (HighNumber === numberArray[indexR]) {
      countRepeat += 1;
    }
  }
  return countRepeat;
}
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let winner;
  let cat1Distance = Math.abs(mouse - cat1);
  let cat2Distance = Math.abs(mouse - cat2);

  if (cat1Distance < cat2Distance) {
    winner = 'cat1';
  } else if (cat2Distance < cat1Distance) {
    winner = 'cat2';
  } else {
    winner = 'os gatos trombam e o rato foge';
  }
  return winner;
}

console.log(catAndMouse(1, 0, 2));

// Desafio 8
function fizzBuzz(imputNumbers) {
  let outputNumbers = [];
  for (let fizzIndex = 0; fizzIndex < imputNumbers.length; fizzIndex += 1) {
    if (imputNumbers[fizzIndex] % 3 === 0 && imputNumbers[fizzIndex] % 5 === 0) {
      outputNumbers[fizzIndex] = 'fizzBuzz';
    } else if (imputNumbers[fizzIndex] % 3 === 0) {
      outputNumbers[fizzIndex] = 'fizz';
    } else if (imputNumbers[fizzIndex] % 5 === 0) {
      outputNumbers[fizzIndex] = 'buzz';
    } else {
      outputNumbers[fizzIndex] = 'bug!';
    }
  }
  return outputNumbers;
}

// Desafio 9
// Consulta em https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176
function encode(stringEncode) {
  // seu código aqui
  let string1 = stringEncode.replace(/a/g, '1');
  let string2 = string1.replace(/e/g, '2');
  let string3 = string2.replace(/i/g, '3');
  let string4 = string3.replace(/o/g, '4');
  let string5 = string4.replace(/u/g, '5');
  return string5;
}console.log(encode('hi there!'));

function decode(stringDecode) {
  // seu código aqui
  let string1 = stringDecode.replace(/1/g, 'a');
  let string2 = string1.replace(/2/g, 'e');
  let string3 = string2.replace(/3/g, 'i');
  let string4 = string3.replace(/4/g, 'o');
  let string5 = string4.replace(/5/g, 'u');
  return string5;
} console.log(decode('h3 th2r2!'));

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

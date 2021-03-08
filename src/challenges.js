// Desafio 1
function compareTrue(gradeProject, goingToLectures) {
  if (gradeProject === true && goingToLectures === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let areaTriangle;
  areaTriangle = (base * height) / 2;
  return areaTriangle;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}
// Para resolução do Desafio 3, consultei os seguintes artigos.

/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
 https://www.codegrepper.com/code-examples/javascript/javascript+split+by+space */

// Desafio 4
function concatName(nameList) {
  let newString = `${nameList[nameList.length - 1]}, ${nameList[0]}`;
  return newString;
}

/* Para a resolução do Desafio 4, consultei a seguinte documentação:
 https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf
 https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 E meus agradecimentos ao colega André Jaques pela dica sobre concatenação (link abaixo):
 https://trybecourse.slack.com/archives/C01L16B9XC7/p1614712885340100 */

// Desafio 5
function footballPoints(wins, ties) {
  let tablePoints = (3 * wins) + ties;
  return tablePoints;
}

// Desafio 6

function highestCount(listOfNumbers) {
  let count = 0;
  let numberMax = Math.max.apply(null, listOfNumbers);
  for (let index = 0; index < listOfNumbers.length; index += 1) {
    if (listOfNumbers[index] === numberMax) {
      count += 1;
    }
  }
  return count;
}
/* Referência utilizada para resolução do Desafio 6:
 https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max */

// Desafio 7

function catAndMouse(mouse, cat1, cat2) {
  let distanceFromCat1 = Math.abs(mouse - cat1);
  let distanceFromCat2 = Math.abs(mouse - cat2);

  if (distanceFromCat1 < distanceFromCat2) {
    return 'cat1';
  } if (distanceFromCat2 < distanceFromCat1) {
    return 'cat2';
  } if (distanceFromCat1 === distanceFromCat2) {
    return 'os gatos trombam e o rato foge';
  }
}
/* Referências consultadas sobre o uso de Math.abs:
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/abs
https://www.devmedia.com.br/matematica-em-javascript-o-objeto-math/27439
*/

// Desafio 8

// Necessário dividir em problemas menores.

// 1 - Função para criar novo array com as strings, segundo cada condição.

function fizzBuzzConvert(number) {
  if (number % 5 === 0 && number % 3 === 0) {
    return 'fizzBuzz';
  }
  if (number % 3 === 0) {
    return 'fizz';
  }
  if (number % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(arrayNumbers) {
  let newArrayNumbers = [];
  for (let key = 0; key < arrayNumbers.length; key += 1) {
    newArrayNumbers.push(fizzBuzzConvert(arrayNumbers[key]));
  }
  return newArrayNumbers;
}

/* Referências consultadas para resolução do Desafio 8:
 https://developer.mozilla.org/pt-BR/docs/conflicting/Web/JavaScript/Reference/Operators
 https://developer.mozilla.org/pt-BR/docs/Learn/JavaScript/Building_blocks/Looping_code */

// Desafio 9

function encode(phrase) {
  let encodeConversionTable = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let newPhrase;
  newPhrase = phrase.replace(/a|e|i|o|u/g, function (match) {
    return encodeConversionTable[match];
  });
  return newPhrase;
}

function decode(phrase) {
  let decodeConversionTable = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let newPhrase;
  newPhrase = phrase.replace(/1|2|3|4|5/g, function (match) {
    return decodeConversionTable[match];
  });
  return newPhrase;
}
/* Para a resolução do desafio 9, foi consultada a seguinte documentação:
https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call#:~:text=If%20you%20want%20to%20replace%20multiple%20characters%20you%20can%20call,will%20use%20in%20that%20function.
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match
https://www.w3schools.com/jsref/jsref_replace.asp
https://www.devmedia.com.br/javascript-replace-substituindo-valores-em-uma-string/39176#:~:text=Em%20caso%20de%20mais%20de,express%C3%A3o%20regular%20no%20primeiro%20par%C3%A2metro.
https://www.alura.com.br/artigos/javascript-replace-manipulando-strings-e-regex
https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/match
Deixo também meus agradecimentos ao colega Luciano Amâncio, que postou link para um vídeo ensinando o replace, e aos colegas Renzo e Rafael Medeiros (sobre o uso de objetos), segue link da thread no Slack:
https://trybecourse.slack.com/archives/C01L16B9XC7/p1614871138144700
Link para vídeo sobre uso do Replace no Javascript:  https://www.youtube.com/watch?v=UShV_TFxs_A */

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

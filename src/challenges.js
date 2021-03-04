// Desafio 1
function compareTrue(valueOne, ValueTwo) {
  if (valueOne === true && ValueTwo === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(string) {
  /**
   * Me basei um pouco no código do Rich Rhinoceros, link do repositório: https://www.codegrepper.com/code-examples/javascript/javascript+split+string+by+space
   */
  const array = string.split(' ');

  return array;
}

// Desafio 4
function concatName(array) {
  let firstItem = array[0];
  /**
   * Para pegar o último elemento de um array segui de acordo com o código do LINQ,
   * segue o link do StackOverFlow: https://pt.stackoverflow.com/questions/87416/como-retornar-o-%C3%BAltimo-registro-de-um-array-com-javascript-ou-jquery
   */
  let lastItem = array[array.length - 1];

  return `${lastItem}, ${firstItem}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
/**
 * Com base no código de outros colegas vi que o Patrick Moroes criou outra função para deixar
 * o código mais organizado, achei interessante fazer mesma coisa, ou seja, delegar uma função
 * para achar o maior numero e outra função para contar quantas vezes esse numero se repete,
 * link do github: https://github.com/tryber/sd-010-a-project-playground-functions/blob/patrickmoraisn-project-playground-functions/src/challenges.js
 */
function highestNumber(array) {
  let highestValue = 0;

  for (let index = 0; index < array.length; index += 1) {
    if (highestValue < array[index]) {
      highestValue = array[index];
    }
  }
  return highestValue;
}

function highestCount(array) {
  let highestValueCount = 0;
  let highestValue = highestNumber(array);

  for (let index = 0; index < array.length; index += 1) {
    if (highestValue === array[index]) {
      highestValueCount += 1;
    }
  }
  return highestValueCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  /**
   * Com base no código de outros colegas vi que o Patrick Moroes usou função modular
   * para se ter o valor absoluto de um numero, resolvi implentar essa função do js,
   * devido a alguns testes que falharam retornando um numero negativo
   * link do github dele: https://github.com/tryber/sd-010-a-project-playground-functions/blob/patrickmoraisn-project-playground-functions/src/challenges.js
   */
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);

  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }

  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }

  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function ifFizzBuzz(number) {
  if (number % 3 === 0 && number % 5 === 0) {
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

function fizzBuzz(array) {
  let fizzBuzzArray = [];

  for (let index = 0; index < array.length; index += 1) {
    fizzBuzzArray.push(ifFizzBuzz(array[index]));
  }
  return fizzBuzzArray;
}

// Desafio 9
function encode(string) {
  /**
   * Usei como base o código do Voicu, segue abaixo o link do StackOveFlow:
   * https://stackoverflow.com/questions/16576983/replace-multiple-characters-in-one-replace-call
   */
  let encodeString = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };

  string = string.replace(/[aeiou]/g, ((m) => encodeString[m]));
  return string;
}

function decode(string) {
  let decodeString = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };

  string = string.replace(/[12345]/g, ((m) => decodeString[m]));
  return string;
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

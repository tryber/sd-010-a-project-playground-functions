// Desafio 1
function compareTrue(value1, value2) {
  return (value1 && value2);
}

// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(setence) {
  return setence.match(/\w+/g);
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 6
function highestCount(array) {
  let highestNumber = array.reduce((a, b) => Math.max(a, b));
  let numberOfRepetitions = array.filter((item) => (highestNumber === item)).length;
  return numberOfRepetitions;
}

// Desafio 7
// Math.abs adicionado por dica do @Bernardo Salgueiro. Bernardo
// disse que havia uma função do Math que retornaria o valor absoluto.
// Outra dica fornecida por ele, é que "havia um detalhe no código para
// prestar atenção",que me fez notar que o gato de menor distância é o que
// captura o rato, antes estava focado no maior valor.

function catAndMouse(mouse, cat1, cat2) {
  const distanceCat1 = Math.abs(cat1 - mouse);
  const distanceCat2 = Math.abs(cat2 - mouse);
  let result = '';
  if (distanceCat1 === distanceCat2) {
    result = 'os gatos trombam e o rato foge';
  } else if (distanceCat1 < distanceCat2) {
    result = 'cat1';
  } else result = 'cat2';
  return result;
}

// Desafio 8
function fizzBuzz(array) {
  const result = array.map((number) => {
    let message = '';
    if (number % 3 === 0 && number % 5 === 0) {
      message = 'fizzBuzz';
    } else if (number % 3 === 0) {
      message = 'fizz';
    } else if (number % 5 === 0) {
      message = 'buzz';
    } else {
      message = 'bug!';
    }
    return message;
  });
  return result;
}

// Desafio 9
// Resolução baseada no artigo disponível no site:
// https://blog.betrybe.com/javascript/javascript-replace/#:~:text=O%20JavaScript%20replace%20faz%20parte,uma%20string%20por%20outro%20conte%C3%BAdo.
// Eu peguei apenas o esqueleto do algoritmo e a compreensão da função e adaptei a minha necessidade na questão.

function encode(string) {
  let vowelNumber = { a: '1', e: '2', i: '3', o: '4', u: '5' };
  let vowelForNumber = string.replace(/[aeiou]/g, function (key) {
    let valueVowelNumber = vowelNumber[key];
    return valueVowelNumber;
  });
  return vowelForNumber;
}

function decode(string) {
  let numberVowel = { 1: 'a', 2: 'e', 3: 'i', 4: 'o', 5: 'u' };
  let numberForVowel = string.replace(/[12345]/g, function (key) {
    let valueNumberVowel = numberVowel[key];
    return valueNumberVowel;
  });
  return numberForVowel;
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

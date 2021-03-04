/* eslint-disable sonarjs/no-one-iteration-loop */
// Desafio 1
function compareTrue(firstValue, secondValue) {
  if (firstValue === true && secondValue === true) {
    return true;
  }
  return false;
// Nesse exercício contei com a colaboração do Luan Ramalho da turma 10A, meu cógdigo não estava passando no Evaluator por um simples erro e ele me ajudou a descobrir.
}

// Desafio 2
function calcArea(base, height) {
  let result = (base * height) / 2;
  return result;
}

// Desafio 3
// Consultei a página seguinte para me ajudar com esse desafio: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
function splitSentence(string) {
  let separatedArray = string.split(' ');
  return separatedArray;
}

// Desafio 4
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
// Precisei consultar a respeito de Template Literals para conseguir desenvolver essa parte do código e ser aprovado no lint: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Template_literals
}

// Desafio 5
function footballPoints(wins, ties) {
  let winpoint = 3;
  let tiepoint = 1;
  let result;

  wins *= winpoint;
  ties *= tiepoint;
  result = wins + ties;

  return result;
}

// Desafio 6
function highestCount(_array) {
  let highestNumber = Math.max(..._array);
  // Acessei esse conteúdo para compreender melhor o conceito de Math.max():
  // https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
  // Acessei esse conteúdo para conhecer um pouco a respeito de spread e me ajudar na resolução do exercício:
  // https://developer.mozilla.org/pt-BR/docs/conflicting/Web/JavaScript/Reference/Operators/Spread_syntax
  let result = 0;
  for (let index = 0; index <= _array.length; index += 1) {
    if (_array[index] === highestNumber) {
      result += 1;
    }
  }
  return result;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let winnerCat;
  let cat1Difference = Math.max(cat1 - mouse);
  let cat2Difference = Math.max(cat2 - mouse);

  if (cat1Difference < cat2Difference) {
    winnerCat = 'cat1';
  } if (cat2Difference < cat1Difference) {
    winnerCat = 'cat2';
  } else {
    winnerCat = 'os gatos trombam e o rato foge';
  }

  return winnerCat;
}

// Desafio 8
function compareNumber(arrayValue) {
  let text;

  if (arrayValue % 3 === 0 && arrayValue % 5 === 0) {
    text = 'fizzBuzz';
  } else if (arrayValue % 3 === 0) {
    text = 'fizz';
  } else if (arrayValue % 5 === 0) {
    text = 'buzz';
  } else {
    text = 'bug';
  }

  return text;
}
// // Para esse exercício foi necessária a ajuda (via thread) do colega Gabriel Pereira,
// da turma 10A, pois o exercicio estava correto mas ainda não estava dividido em duas funções,
// por isso não estava passando.
function fizzBuzz(array) {
  let stringsArray = [];

  for (let index = 0; index < array.length; index += 1) {
    stringsArray.push(compareNumber(array[index]));
  }

  return stringsArray;
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

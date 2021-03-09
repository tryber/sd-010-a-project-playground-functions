// Desafio 1
function compareTrue(value1, value2) {
  return value1 === true && value2 === true;
}

// Desafio 2
function calcArea(base, height) {
  return ((base * height) / 2);
}

// Desafio 3
function splitSentence(phrase) {
  let word = '';
  let words = [];
  for (let index = 0; index < phrase.length; index += 1) {
    if (phrase[index] === ' ') {
      words.push(word);
      word = '';
    } else if (index === phrase.length - 1) {
      word += phrase[index];
      words.push(word);
    } else {
      word += phrase[index];
    }
  }
  return words;
}

// Desafio 4
function concatName(value) {
  // Recomendação do lint https://eslint.org/docs/rules/prefer-template
  return `${value[value.length - 1]}, ${value[0]}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function highestCount(numbers) {
  let counter = 0;
  let biggestNumber = numbers[0];
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] > biggestNumber) {
      biggestNumber = numbers[index];
    }
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] === biggestNumber) {
      counter += 1;
    }
  }
  return counter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  //Utilizando valores absolutos para calcular a distância entre os gatos e os ratos https://www.w3schools.com/jsref/jsref_abs.asp
  let distanceCat1 = Math.abs(mouse - cat1);
  let distanceCat2 = Math.abs(mouse - cat2);
  if (distanceCat1 < distanceCat2) {
    return 'cat1';
  }
  if (distanceCat1 === distanceCat2) {
    return 'os gatos trombam e o rato foge';
  }
  if (distanceCat1 > distanceCat2) {
    return 'cat2';
  }
}

// Desafio 8
function fizzBuzz(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    if ((numbers[index] % 3 === 0) && (numbers[index] % 5 === 0)) {
      numbers[index] = 'fizzBuzz';
    } else if ((numbers[index] % 5 === 0)) {
      numbers[index] = 'buzz';
    } else if (numbers[index] % 3 === 0) {
      numbers[index] = 'fizz';
    } else {
      numbers[index] = 'bug!';
    }
  }
  return numbers;
}

// Desafio 9
function encode(value) {
  let result = [];
  for (let index = 0; index < value.length; index += 1) {
    if (value[index] === 'a') {
      result[index] = '1';
    } else if (value[index] === 'e') {
      result[index] = '2';
    } else if (value[index] === 'i') {
      result[index] = '3';
    } else if (value[index] === 'o') {
      result[index] = '4';
    } else if (value[index] === 'u') {
      result[index] = '5';
    } else {
      result[index] = value[index];
    }
  }
  return result.join('');
}
function decode(value) {
  let result = [];
  for (let index = 0; index < value.length; index += 1) {
    if (value[index] === '1') {
      result[index] = 'a';
    } else if (value[index] === '2') {
      result[index] = 'e';
    } else if (value[index] === '3') {
      result[index] = 'i';
    } else if (value[index] === '4') {
      result[index] = 'o';
    } else if (value[index] === '5') {
      result[index] = 'u';
    } else {
      result[index] = value[index];
    }
  }
  // Referência para converter um array em string: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/join
  return result.join('');
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

// Testando a função compareTrue
console.log(compareTrue(false, true));
console.log(compareTrue(false, false));
console.log(compareTrue(true, true));

// Testando a função calcArea
console.log(calcArea(10, 50));
console.log(calcArea(5, 2));
console.log(calcArea(51, 1));

// Testando a função concatName
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));
console.log(concatName(['foguete', 'não', 'tem', 'ré']));
console.log(concatName(['captain', 'my', 'captain']));

// Testando a função footballPoints
console.log(footballPoints(14, 8));
console.log(footballPoints(1, 2));
console.log(footballPoints(0, 0));

// Testando a função highestCount
console.log(highestCount([9, 1, 2, 3, 9, 5, 7]));
console.log(highestCount([0, 4, 4, 4, 9, 2, 1]));
console.log(highestCount([0, 0, 0]));

// Testando a função catAndMouse
console.log(catAndMouse(30, 33, 32));
console.log(catAndMouse(30, 24, 18));
console.log(catAndMouse(30, 35, 25));

// Testando a função fizzBuzz
console.log(fizzBuzz([2, 15, 7, 9, 45]));
console.log(fizzBuzz([7, 9]));
console.log(fizzBuzz([9, 25]));

// Testando a função splitSentence
console.log(splitSentence('go Trybe'));
console.log(splitSentence('vamo que vamo'));
console.log(splitSentence('foguete'));

// Testando a função encode
console.log(encode('hi there!'));
// Testando a função encode
console.log(decode('h3 th2r2!'));

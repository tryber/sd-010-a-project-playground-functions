// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  } return false;
}
// Desafio 2
function calcArea(base, height) {
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(sentence) {
  return sentence.split(' ');
}

// Desafio 4 Credits: https://pt.stackoverflow.com/questions/231359/qual-a-forma-correta-de-concatenar-strings-em-javascript
function concatName(names) {
  let lastName = names[names.length - 1];
  let firstName = names[0];
  return `${lastName}, ${firstName}`;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function findWhichIsBigger(numbers) {
  let bigger = 0;
  for (let key in numbers) {
    if (numbers[key] > bigger) {
      bigger = numbers[key];
    }
  }
  return bigger;
}

function highestCount(numbers) {
  let selecTheBigger = findWhichIsBigger(numbers);
  let couter = 0;
  for (let key in numbers) {
    if (selecTheBigger === numbers[key]) {
      couter += 1;
    }
  }
  return couter;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = Math.abs(mouse - cat1);
  let cat2Position = Math.abs(mouse - cat2);
  if (cat1Position > cat2Position) {
    return 'cat2';
  } if (cat1Position < cat2Position) {
    return 'cat1';
  }
  return 'os gatos trombam e o rato foge';
}

// Desafio 8
function findOutFizzBuzz(fizzBuzzBug) {
  if (fizzBuzzBug % 3 === 0 && fizzBuzzBug % 5 === 0) {
    return 'fizzBuzz';
  } if (fizzBuzzBug % 3 === 0) {
    return 'fizz';
  } if (fizzBuzzBug % 5 === 0) {
    return 'buzz';
  }
  return 'bug!';
}

function fizzBuzz(numbers) {
  let arrayOfWords = [];
  for (let index = 0; index < numbers.length; index += 1) {
    arrayOfWords.push(findOutFizzBuzz(numbers[index]));
  }
  return arrayOfWords;
}

// Desafio 9

function encode(frase) {
  let vowelsToNumbers = {
    a: 1,
    e: 2,
    i: 3,
    o: 4,
    u: 5,
  };
  let getCode = '';
  for (let index in frase) {
    if (vowelsToNumbers[frase[index]]) {
      getCode += vowelsToNumbers[frase[index]];
    } else {
      getCode += frase[index];
    }
  }
  return getCode;
}

function decode(mensageWithCode) {
  let numbersToVowels = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let getTheMassage = '';
  for (let index in mensageWithCode) {
    if (numbersToVowels[mensageWithCode[index]]) {
      getTheMassage += numbersToVowels[mensageWithCode[index]];
    } else {
      getTheMassage += mensageWithCode[index];
    }
  }
  return getTheMassage;
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

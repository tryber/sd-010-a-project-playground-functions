// Desafio 1
function compareTrue(valueBoolean1, valueBoolean2) {
  if (valueBoolean1 === true && valueBoolean2 === true) {
    return true;
  }
  return false;
}

// Desafio 2
function calcArea(base, height) {
  let totalArea = (base * height) / 2;
  return totalArea;
}

// Desafio 3
function splitSentence(string) {
  let splitedString = string.split(' '); // Fui estudar sobre métodos e achei no MDN sobre a split, onde ela divide o parâmetro recebido de acordo com seu valor em ().
  return splitedString;
}

// Desafio 4
function concatName(string) {
  let firstIndex = string[0];
  let lastIndex = string[string.length - 1];
  let nameConcatened = `${lastIndex}, ${firstIndex}`;
  return nameConcatened;
}

// Desafio 5
function footballPoints(wins, ties) {
  let totalPoints = (wins * 3) + (ties * 1);
  return totalPoints;
}

// Desafio 6
function highestNumber(value) {
  let number = 0;
  for (let index = 0; index < value.length; index += 1) {
    if (number < value[index]) {
      number = value[index];
    }
  }
  return number;
}

function highestCount(numbers) {
  let numbersCount = 0;
  let checkNumber = highestNumber(numbers);
  for (let key in numbers) { // Usei esse formato por ser menor e, acho eu, que computa em menos tempo que um for normal
    if (checkNumber === numbers[key]) {
      numbersCount += 1;
    }
  }
  return numbersCount;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let mouseToCat1 = Math.abs(cat1 - mouse);
  let mouseToCat2 = Math.abs(cat2 - mouse);

  if (mouseToCat1 < mouseToCat2) {
    return 'cat1';
  } if (mouseToCat1 === mouseToCat2) {
    return 'os gatos trombam e o rato foge';
  }
  return 'cat2';
}

// Desafio 8
function fizzBuzzCheck(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0 && numbers[index] % 5 === 0) {
      numbers[index] = 'fizzBuzz';
    }
  }
  return numbers;
}

function fizzCheck(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 3 === 0) {
      numbers[index] = 'fizz';
    }
  }
  return numbers;
}

function buzzCheck(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 5 === 0) {
      numbers[index] = 'buzz';
    }
  }
  return numbers;
}

function bugCheck(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] >= 0) {
      numbers[index] = 'bug!';
    }
  }
  return numbers;
}

function fizzBuzz(numbers) {
  let changeArray = [];
  changeArray = fizzBuzzCheck(numbers);
  changeArray = fizzCheck(changeArray);
  changeArray = buzzCheck(changeArray);
  changeArray = bugCheck(changeArray);
  return changeArray;
}

// Desafio 9

function changeLettersA(value) {
  return value.replace(/a/g, '1');
}

function changeLettersE(value) {
  return value.replace(/e/g, '2');
}

function changeLettersI(value) {
  return value.replace(/i/g, '3');
}

function changeLettersO(value) {
  return value.replace(/o/g, '4');
}

function changeLettersU(value) {
  return value.replace(/u/g, '5');
}

function changeNumbers1(value) {
  return value.replace(/1/g, 'a');
}

function changeNumbers2(value) {
  return value.replace(/2/g, 'e');
}

function changeNumbers3(value) {
  return value.replace(/3/g, 'i');
}

function changeNumbers4(value) {
  return value.replace(/4/g, 'o');
}

function changeNumbers5(value) {
  return value.replace(/5/g, 'u');
}

function encode(string) {
  let changeString = string;
  for (let index = 0; index < changeString.length; index += 1) {
    changeString = changeLettersA(changeString);
    changeString = changeLettersE(changeString);
    changeString = changeLettersI(changeString);
    changeString = changeLettersO(changeString);
    changeString = changeLettersU(changeString);
  }
  return changeString;
}
function decode(string) {
  let changeString = string;
  for (let index = 0; index < changeString.length; index += 1) {
    changeString = changeNumbers1(changeString);
    changeString = changeNumbers2(changeString);
    changeString = changeNumbers3(changeString);
    changeString = changeNumbers4(changeString);
    changeString = changeNumbers5(changeString);
  }
  return changeString;
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

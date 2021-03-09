// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  }
  if (value1 === false || value2 === false) {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2;
}

// Desafio 3
function splitSentence(expression) {
  // seu código aqui
  let splitExpression = new Array(0);
  splitExpression = (expression.split(' '));
  return splitExpression;
}

// Desafio 4
function concatName(nameArray) {
  // seu código aqui
  let lastAndFirst;
  lastAndFirst = nameArray[nameArray.length - 1];
  lastAndFirst += ', ';
  lastAndFirst += nameArray[0];
  return lastAndFirst;
}

// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let total = 3 * wins + ties;
  return total;
}

// Desafio 6
function highest(listOfIntegers) {
  let maxNumber = 0;

  for (let numbersIndex = 0; numbersIndex < listOfIntegers.length; numbersIndex += 1) {
    if (maxNumber <= listOfIntegers[numbersIndex]) {
      maxNumber = listOfIntegers[numbersIndex];
    }
  }
  return maxNumber;
}

function highestCount(numbers) {
  let highestNumber = highest(numbers);
  let cont = 0;

  for (let numbersIndex = 0; numbersIndex < numbers.length; numbersIndex += 1) {
    if (highestNumber === numbers[numbersIndex]) {
      cont += 1;
    }
  }
  return cont;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);

  if (distance1 === distance2) {
    return 'os gatos trombam e o rato foge';
  }
  if (distance1 < distance2) {
    return 'cat1';
  }
  if (distance2 < distance1) {
    return 'cat2';
  }
}

// Desafio 8
function checkDivideByBoth(list) {
  let n = list.length;
  let divisibleByThreeAndFive = new Array(n);

  for (let index = 0; index < list.length; index += 1) {
    if (list[index] % 3 === 0 && list[index] % 5 === 0) {
      divisibleByThreeAndFive[index] = 'fizzBuzz';
    } else {
      divisibleByThreeAndFive[index] = list[index];
    }
  }

  return divisibleByThreeAndFive;
}

function checkDivideByThree(list) {
  let divisibleByThree = checkDivideByBoth(list);

  for (let index = 0; index < list.length; index += 1) {
    if (typeof (divisibleByThree[index]) === 'number' && divisibleByThree[index] % 3 === 0) {
      divisibleByThree[index] = 'fizz';
    }
  }

  return divisibleByThree;
}

function checkDivideByFive(list) {
  let divisibleByFive = checkDivideByThree(list);

  for (let index = 0; index < list.length; index += 1) {
    if (typeof (divisibleByFive[index]) === 'number' && divisibleByFive[index] % 5 === 0) {
      divisibleByFive[index] = 'buzz';
    }
  }

  return divisibleByFive;
}

function checkNoDivideByThreeAndFive(list) {
  let noDivisibleByThreeAndFive = checkDivideByFive(list);

  for (let index = 0; index < list.length; index += 1) {
    if (list[index] % 3 !== 0 && list[index] % 5 !== 0) {
      noDivisibleByThreeAndFive[index] = 'bug!';
    }
  }

  return noDivisibleByThreeAndFive;
}

function fizzBuzz(list) {
  // seu código aqui
  return checkNoDivideByThreeAndFive(list);
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

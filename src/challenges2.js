// Desafio 10
function techList(techNames, personName) {
  let techNamesSorted;
  let techObjects;
  if (techNames.length !== 0) {
    techObjects = [];
    techNamesSorted = techNames.sort();
    for (let index = 0; index < techNamesSorted.length; index += 1) {
      let techObject = { tech: techNamesSorted[index], name: personName };

      techObjects.push(techObject);
    }
  } else {
    techObjects = 'Vazio!';
  }
  return techObjects;
}

// Desafio 11
function checkLength(numbers) {
  if (numbers.length !== 11) {
    return true;
  }
}

function checkNumberRange(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return true;
    }
  }
}

function checkRepeatThreeTimes(numbers) {
  for (let index = 0; index < numbers.length; index += 1) {
    let count = 0;
    let number = numbers[index];
    for (let innerIndex = 0; innerIndex < numbers.length; innerIndex += 1) {
      if (numbers[innerIndex] === number) {
        count += 1;
      }
    }
    if (count >= 3) {
      return true;
    }
  }
}

function checkError(numbers) {
  switch (true) {
  case checkLength(numbers):
    return 'Array com tamanho incorreto.';
  case checkNumberRange(numbers) || checkRepeatThreeTimes(numbers):
    return 'não é possível gerar um número de telefone com esses valores';
  default:
    return '';
  }
}

function phoneNumberStandard(numbers) {
  let phoneNumber = '(';
  for (let index = 0; index < 2; index += 1) {
    /** Source: https://www.w3schools.com/jsref/jsref_tostring_number.asp */
    phoneNumber += numbers[index].toString();
  }
  phoneNumber += ') ';
  for (let index = 2; index < 7; index += 1) {
    phoneNumber += numbers[index].toString();
  }
  phoneNumber += '-';
  for (let index = 7; index < 11; index += 1) {
    phoneNumber += numbers[index].toString();
  }

  return phoneNumber;
}

function generatePhoneNumber(numbers) {
  let errorInfo = '';
  let finalMessage = '';
  errorInfo = checkError(numbers);
  if (errorInfo === '') {
    finalMessage = phoneNumberStandard(numbers);
  } else {
    finalMessage = errorInfo;
  }
  return finalMessage;
}

// Desafio 12
function lessThanSum(number1, number2, number3) {
  return number1 < number2 + number3;
}
function checkTriangleBySum(lineA, lineB, lineC) {
  return lessThanSum(lineA, lineB, lineC) && lessThanSum(lineB, lineA, lineC) && lessThanSum(lineC, lineB, lineA);
}

function greaterThanDifference(number1, number2, number3) {
  let isGreater = false;
  if (number2 > number3) {
    isGreater = number1 > number2 - number3;
  } else {
    isGreater = number1 > number3 - number2;
  }
  return isGreater;
}

function checkTriangleByDifference(lineA, lineB, lineC) {
  return greaterThanDifference(lineA, lineB, lineC) && greaterThanDifference(lineB, lineA, lineC) && greaterThanDifference(lineC, lineB, lineA);
}

function triangleCheck(lineA, lineB, lineC) {
  let existTriangle = false;
  let sum = checkTriangleBySum(lineA, lineB, lineC);
  let difference = checkTriangleByDifference(lineA, lineB, lineC);
  if (sum && difference) {
    existTriangle = true;
  } else {
    existTriangle = false;
  }

  return existTriangle;
}

// Desafio 13
function hydrate(order) {
  /** Source: https://stackoverflow.com/questions/30607419/return-only-numbers-from-string */
  let drinks = order.replace(/\D/g, '');
  let glassOfWater = 0;
  let answer = '';

  for (let index = 0; index < drinks.length; index += 1) {
    glassOfWater += Number(drinks[index]);
  }
  if (glassOfWater > 1) {
    answer = `${glassOfWater.toString()} copos de água`;
  } else {
    answer = `${glassOfWater.toString()} copo de água`;
  }
  return answer;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

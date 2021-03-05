// Desafio 10
function techList(techsArray, username) {
  if (techsArray[0] === undefined) {
    return 'Vazio!';
  }
  let techsArraySorted = techsArray.sort();
  let arrayObjectTechs = [];
  for (let index = 0; index < techsArraySorted.length; index += 1) {
    let objectTechs = {
      tech: techsArraySorted[index],
      name: username,
    };
    arrayObjectTechs.push(objectTechs);
  }
  return arrayObjectTechs;
}

function isRepeatedMoreThan3(phoneNumber) {
  let result = false;
  let repeatedNumbers = {};
  for (let number of phoneNumber) {
    repeatedNumbers[number] = 0;
  }
  for (let number of phoneNumber) {
    repeatedNumbers[number] += 1;
  }
  for (let number in repeatedNumbers) {
    if (repeatedNumbers[number] >= 3) {
      result = true;
    }
  }
  return result;
}

function isNegative(phoneNumber) {
  for (let index = 0; index < phoneNumber.length; index += 1) {
    if (phoneNumber[index] < 0) {
      return true;
    }
  }
}

function isHigherThan9(phoneNumber) {
  for (let index = 0; index < phoneNumber.length; index += 1) {
    if (phoneNumber[index] > 9) {
      return true;
    }
  }
}

function validatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return false;
  } if (isNegative(phoneNumber) || isHigherThan9(phoneNumber) || isRepeatedMoreThan3(phoneNumber)) {
    return 'valores errados';
  }
  return true;
}

function phoneGenerator(arrayPhoneNumber, num1, num2) {
  let phoneNumber = [];
  for (let index = num1; index < num2; index += 1) {
    phoneNumber.push(arrayPhoneNumber[index]);
  }
  return phoneNumber;
}

function phoneConcatenate(arrayPhoneNumber) {
  let phoneOne = phoneGenerator(arrayPhoneNumber, 0, 2).join('');
  let phoneTwo = phoneGenerator(arrayPhoneNumber, 2, 7).join('');
  let phoneThree = phoneGenerator(arrayPhoneNumber, 7, 11).join('');
  return `(${phoneOne}) ${phoneTwo}-${phoneThree}`;
}

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if (validatePhoneNumber(phoneNumber) === true) {
    let phone = phoneConcatenate(phoneNumber);
    return phone;
  } if (validatePhoneNumber(phoneNumber) === 'valores errados') {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return 'Array com tamanho incorreto.';
}
console.log(generatePhoneNumber([7, 7, 7, 2, 3, 4, 5, 6, 7, 8, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let distanceOne = Math.abs(lineA - lineB);
  let distanceTwo = lineA + lineB;
  if (lineC > distanceOne && lineC < distanceTwo) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(phrase) {
  let numbers = phrase.replace(/\D/g, '');
  let sum = 0;
  let result;
  for (let index = 0; index < numbers.length; index += 1) {
    sum += parseInt(numbers[index], 0);
  }
  if (sum === 1) {
    result = '1 copo de água';
  } else result = `${sum} copos de água`;
  return result;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

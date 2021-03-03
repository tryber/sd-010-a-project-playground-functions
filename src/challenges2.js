// Desafio 10
function techList(tech, name) {
  let newList = [];
  tech = tech.sort();
  for (let index = 0; index < tech.length; index += 1) {
    newList.push({
      tech: tech[index],
      name,
    });
  }
  if (tech.length === 0) {
    return 'Vazio!';
  }
  return newList;
}

// Desafio 11

function generatePhoneNumber(arrayOfNumbers) {
  if (arrayOfNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < arrayOfNumbers.length; index += 1) {
    let repeatedNumbersIndex = 0;
    for (let indexOfRepetitions = 0; indexOfRepetitions < arrayOfNumbers.length; indexOfRepetitions += 1) {
      if (arrayOfNumbers[index] === arrayOfNumbers[indexOfRepetitions]) {
        repeatedNumbersIndex += 1;
      }
      if (arrayOfNumbers[indexOfRepetitions] < 0 || arrayOfNumbers[indexOfRepetitions] > 9) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
    if (repeatedNumbersIndex >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  let phoneNumber = '';
  for (let indexOfNumber = 0; indexOfNumber < arrayOfNumbers.length; indexOfNumber += 1) {
    switch (true) {
    case indexOfNumber === 0:
      phoneNumber += ('(' + arrayOfNumbers[indexOfNumber]);
      break;

    case indexOfNumber === 2:
      phoneNumber += (') ' + arrayOfNumbers[indexOfNumber]);
      break;

    case indexOfNumber === 7:
      phoneNumber += ('-' + arrayOfNumbers[indexOfNumber]);
      break;

    default:
      phoneNumber += arrayOfNumbers[indexOfNumber];
      break;
    }
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC) && lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC) && lineC < (lineB + lineA) && lineC > Math.abs(lineB - lineA));
}

// Desafio 13
function hydrate(string) {
  let result = 0;
  for (let index = 0; index < string.length; index += 1) {
    switch (true) {
    case string[index] == 1:
      result += 1;
      break;

    case string[index] == 2:
      result += 2;
      break;

    case string[index] == 3:
      result += 3;
      break;

    case string[index] == 4:
      result += 4;
      break;

    case string[index] == 5:
      result += 5;
      break;

    case string[index] == 6:
      result += 6;
      break;

    case string[index] == 7:
      result += 7;
      break;

    case string[index] == 8:
      result += 8;
      break;

    case string[index] == 9:
      result += 9;
      break;
    }
  }
  if (result == 1) {
    result += ' copo de água';
  } else {
    result += ' copos de água';
  }
  return result;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

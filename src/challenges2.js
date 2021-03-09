// Desafio 10
function techList(arrayTechs, name) {
  let finalList = [];

  if (arrayTechs.length <= 0) {
    finalList = 'Vazio!';
  } else {
    arrayTechs.sort();
    for (let i = 0; i < arrayTechs.length; i += 1) {
      finalList.push(
        {
          tech: arrayTechs[i],
          name,
        },
      );
    }
  }
  return finalList;
}

// Desafio 11
function phoneNumberOutput(arrayPhone) {
  let firstSector = arrayPhone[0].toString() + arrayPhone[1].toString();
  let secondSector = '';
  let thirdSector = '';

  for (let i = 2; i <= 6; i += 1) {
    secondSector += arrayPhone[i].toString();
  }

  for (let j = 7; j <= 10; j += 1) {
    thirdSector += arrayPhone[j].toString();
  }
  return `(${firstSector}) ${secondSector}-${thirdSector}`;
}

function countRepeat(arrayPhone, numberPhone) {
  let timesNumber = 0;
  for (let i = 0; i < arrayPhone.length; i += 1) {
    if (arrayPhone[i] === numberPhone) {
      timesNumber += 1;
    }
  }
  return timesNumber;
}

function lessThanZero(numberPhone) {
  let result = false;
  for (let i = 0; i < numberPhone.length; i += 1) {
    if (numberPhone[i] < 0) {
      result = true;
    }
  }
  return result;
}

function biggerThanNine(numberPhone) {
  let result = false;
  for (let i = 0; i < numberPhone.length; i += 1) {
    if (numberPhone[i] > 9) {
      result = true;
    }
  }
  return result;
}

function generatePhoneNumber(arrayPhone) {
  if (arrayPhone.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  if (biggerThanNine(arrayPhone) || lessThanZero(arrayPhone) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  for (let i = 0; i < arrayPhone.length; i += 1) {
    if (countRepeat(arrayPhone, arrayPhone[i]) >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return phoneNumberOutput(arrayPhone);
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

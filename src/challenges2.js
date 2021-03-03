// Done with the help of the amazing https://developer.mozilla.org/ documentation
// Desafio 10
function createObj(string1, string2) {
  let obj = {
    tech: string1,
    name: string2,
  };
  return obj;
}

function techList(arrayOfStrings, string) {
  if (arrayOfStrings.length === 0) {
    return 'Vazio!';
  }
  arrayOfStrings.sort();
  let objects = [];
  for (let index = 0; index < arrayOfStrings.length; index += 1) {
    objects.push(createObj(arrayOfStrings[index], string));
  }
  return objects;
}

// Desafio 11
function generatePhoneNumber(arrayOfNumbers) {
  if (arrayOfNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let countNumberRepetition = {};
  for (let index in arrayOfNumbers) {
    if (typeof countNumberRepetition[arrayOfNumbers[index]] === 'undefined') {
      countNumberRepetition[arrayOfNumbers[index]] = 1;
    } else {
      countNumberRepetition[arrayOfNumbers[index]] += 1;
    }
  }
  for (let key in countNumberRepetition) {
    if (key < 0 || key > 9 || countNumberRepetition[key] >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return `(${arrayOfNumbers[0]}${arrayOfNumbers[1]}) ${arrayOfNumbers[2]}${arrayOfNumbers[3]}${arrayOfNumbers[4]}${arrayOfNumbers[5]}${arrayOfNumbers[6]}-${arrayOfNumbers[7]}${arrayOfNumbers[8]}${arrayOfNumbers[9]}${arrayOfNumbers[10]}`;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return lineA < lineB + lineC && lineA > Math.abs(lineB - lineC);
}

// Desafio 13
function checkIfCharIsNumber(char) {
  return char - '0' >= 0 && '9' - char >= 0;
}
function parseCharToNumber(char) {
  return char - '0';
}
function hydrate(string) {
  let splitedString = string.split(' ');
  let count = 0;
  for (let index in splitedString) {
    if (checkIfCharIsNumber(splitedString[index])) {
      count += parseCharToNumber(splitedString[index]);
    }
  }
  if (count === 1) {
    return `${count} copo de água`;
  }
  return `${count} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

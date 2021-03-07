// Desafio 10
function techList(array, yourName) {
  let result = [];
  let object = {
    tech: '',
    name: yourName,
  };
  if (array.length === 0) {
    return 'Vazio!';
  }
  array.sort();
  for (let index = 0; index < array.length; index += 1) {
    object = {
      tech: array[index],
      name: yourName,
    };
    result.push(object);
  }
  return result;
}

// Desafio 11
function invalidNumbers(arrayNumbers) {
  for (let number of arrayNumbers) {
    if (number < 0 || number > 9) {
      return true;
    }
  }
}
// função retirada desse link https://pt.stackoverflow.com/questions/484146/como-contar-ocorr%C3%AAncias-de-um-valor-dentro-de-um-array
function repeatedNumbers(array) {
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    let quantidadeElementos = array.filter((x) => x === element).length;
    if (quantidadeElementos >= 3) {
      return true;
    }
  }
}

function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (invalidNumbers(phoneNumber) === true || repeatedNumbers(phoneNumber) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${phoneNumber[0]}${phoneNumber[1]}) ${phoneNumber[2]}${phoneNumber[3]}${phoneNumber[4]}${phoneNumber[5]}${phoneNumber[6]}-${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}${phoneNumber[10]}`;
}

// Desafio 12
function sumCheck(lineA, lineB, lineC) {
  if (lineA + lineB > lineC || lineA + lineC > lineB || lineB + lineC > lineA) {
    return false;
  }
  return true;
}

function diferenceCheck(lineA, lineB, lineC) {
  if (Math.abs(lineA - lineB) > lineC || Math.abs(lineA - lineC) > lineB || Math.abs(lineB - lineC) > lineA) {
    return false;
  }
  return true;
}

function triangleCheck(lineA, lineB, lineC) {
  if (sumCheck(lineA, lineB, lineC) === false && diferenceCheck(lineA, lineB, lineC) === false) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(drinks) {
  let amount = drinks.match(/[0-9]/g).map(Number);
  let sum = amount.reduce((acumulador, index) => acumulador + index);
  if (sum > 1) {
    return `${sum} copos de água`;
  }
  return `${sum} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

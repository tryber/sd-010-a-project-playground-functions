// Desafio 10
function techList(techs, name) {
  const resultArr = [];

  if (techs.length === 0) return 'Vazio!';

  for (let tech in techs.sort()) {
    if (techs[tech]) {
      resultArr.push({ tech: techs[tech], name });
    }
  }

  return resultArr;
}

// Desafio 11
function invalidNumber(numbers) {
  let isInvalid = false;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      isInvalid = true;
    }
  }

  return isInvalid;
}

function invalidRepetition(numbers) {
  let isInvalid = false;

  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers.filter((number) => number === numbers[index]).length >= 3) {
      isInvalid = true;
    }
  }

  return isInvalid;
}

function firstPart(numbers) {
  let output = '';

  for (let index = 0; index < numbers.length; index += 1) {
    if (index >= 2 && index < 7) {
      output += numbers[index];
    }
  }

  return output;
}
function secondPart(numbers) {
  let output = '';

  for (let index = 0; index < numbers.length; index += 1) {
    if (index >= 7) {
      output += numbers[index];
    }
  }

  return output;
}

function generatePhoneNumber(numbers) {
  if (numbers.length !== 11) return 'Array com tamanho incorreto.';
  if (invalidNumber(numbers) || invalidRepetition(numbers)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  const ddd = `${numbers[0]}${numbers[1]}`;

  return `(${ddd}) ${firstPart(numbers)}-${secondPart(numbers)}`;
}

// Desafio 12
function lineACheck(lineA, lineB, lineC) {
  let output = false;
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    output = true;
  }

  return output;
}

function lineBCheck(lineA, lineB, lineC) {
  let output = false;
  if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)) {
    output = true;
  }

  return output;
}

function lineCCheck(lineA, lineB, lineC) {
  let output = false;
  if (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB)) {
    output = true;
  }

  return output;
}

function triangleCheck(lineA, lineB, lineC) {
  let output = false;

  if (
    lineACheck(lineA, lineB, lineC)
    && lineBCheck(lineA, lineB, lineC)
    && lineCCheck(lineA, lineB, lineC)
  ) {
    output = true;
  }

  return output;
}

// Desafio 13
// Função replace e parâmetros retirados do Stackoverflow(https://stackoverflow.com/questions/30607419/return-only-numbers-from-string) combinado com documentação do MDN
/*
function hydrate(drinks) {
  let glassesOfWater = 0;
  const numbers = drinks.replace(/\D/g, '').split('');

  for (let number of numbers) {
    glassesOfWater += Number(number);
  }

  return `${glassesOfWater} copo${glassesOfWater > 1 ? 's' : ''} de água`;
}
*/

// Refazendo com filter por estar inseguro com "/\D/g"
// Verificação Number.isNaN retirada da doc do MDN https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/NaN
function hydrate(drinks) {
  let glassesOfWater = 0;
  const numbers = drinks
    .replace(/ /g, '')
    .split('')
    .filter((character) => !Number.isNaN(Number(character)));

  for (let number of numbers) {
    glassesOfWater += Number(number);
  }

  return `${glassesOfWater} copo${glassesOfWater > 1 ? 's' : ''} de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

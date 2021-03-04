// Desafio 10
// Com adições sugeridas por Lucas Pedroso - Turma 10 - Tribo A
function techList(technology, name) {
  if (technology.length === 0) {
    return 'Vazio!';
  }
  // let devTechnology = { tech: techs, name };
  let test = technology.sort();
  let devTechs = [];
  for (let index = 0; index < technology.length; index += 1) {
    let devTechnology = { tech: test[index], name };
    devTechs.push(devTechnology);
  }
  return devTechs;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
// Organiza os números do telefone
// Com incrementos sugeridos por Lucas Pedroso - Turma 10 - Tribo A
function cellPhoneOrganizer(phoneNumberArrenge) {
  for (let index = 0; index < phoneNumberArrenge.length; index += 1) {
    if (index === 0) {
      phoneNumberArrenge[index] = `(${phoneNumberArrenge[index]}`;
    } else if (index === 1) {
      phoneNumberArrenge[index] = `${phoneNumberArrenge[index]}) `;
    } else if (index === 6) {
      phoneNumberArrenge[index] = `${phoneNumberArrenge[index]}-`;
    }
  }
  return phoneNumberArrenge.join('');
}

// Conta os números repetidos
function numbersRepeatCounter(repeatedNumbers) {
  for (let index = 0; index < repeatedNumbers.length; index += 1) {
    if (repeatedNumbers.filter((x) => x === repeatedNumbers[index]).length >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return cellPhoneOrganizer(repeatedNumbers);
}

// Confere se os números atendem a algumas exigências
function numbersCheck(numbers) {
  if (numbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] < 0 || numbers[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return numbersRepeatCounter(numbers);
}

// Gera o número do telefone
function generatePhoneNumber(phoneNumber) {
  return numbersCheck(phoneNumber);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (Math.abs(lineA < lineB + lineC) && Math.abs(lineB < lineA + lineC)
    && Math.abs(lineC < lineA + lineB)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(string) {
  // let number = /\d/g;
  let number = string.match(/\d/g);
  let sumNumber = 0;
  for (let index = 0; index < number.length; index += 1) {
    sumNumber += Number.parseInt(number[index], 10);
  }
  if (sumNumber <= 1) {
    return `${sumNumber} copo de água`;
  }
  return `${sumNumber} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

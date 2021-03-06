// Desafio 10
function techList(techs, name) {
  if (!techs || techs.length === 0) {
    return 'Vazio!';
  }

  techs = techs.sort();
  let list = [];
  for (let tech of techs) {
    list.push(
      {
        tech,
        name,
      },
    );
  }
  return list;
}

// Desafio 11
function generatePhoneNumber(numbers) {
  const isLengthValid = numbers.length === 11;
  const isNumbersValid = !numbers.find((number) => number < 0 | number > 9);
  // const repeatedNumber = numbers.find((element) => element === element );
  if (!isLengthValid) {
    return 'Array com tamanho incorreto.';
  }

  let phoneNumber = [];

  for (let index in numbers) {
    let number = numbers[index];

    const hasThreeRepeatedNumber = numbers.filter((element) => element === number).length >= 3;

    if (!isNumbersValid | hasThreeRepeatedNumber) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    switch (Number(index)) {
    case 0:
      phoneNumber.push('(', number);
      break;
    case 1:
      phoneNumber.push(number, ')', ' ');
      break;
    case 6:
      phoneNumber.push(number, '-');
      break;
    default:
      phoneNumber.push(number);
    }
  }

  return phoneNumber.join('');
}

// Desafio 12
function verifyTriangleLine(currentLine, line1, line2) {
  return currentLine < line1 + line2 && currentLine > Math.abs(line1 - line2);
}
function triangleCheck(lineA, lineB, lineC) {
  let islineAValid = verifyTriangleLine(lineA, lineB, lineC);
  let islineBValid = verifyTriangleLine(lineB, lineA, lineC);
  let islineCValid = verifyTriangleLine(lineC, lineA, lineB);

  if (islineAValid === islineBValid === islineCValid === true) {
    return true;
  }

  return false;
}

// Desafio 13
function hydrate(string) {
  string = string.split(' ');
  let arrayOfDrinks = string.filter((element) => element > 0).map((value) => Number(value));
  let numberOfDrinks = arrayOfDrinks.reduce((currentValue, total) => currentValue + total);

  if (numberOfDrinks === 1) {
    return `${numberOfDrinks} copo de água`;
  }
  return `${numberOfDrinks} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

// Desafio 10
function techList(arrayTech, string) {
  arrayTech.sort();
  let techOrder = [];
  if (arrayTech.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < arrayTech.length; index += 1) {
    techOrder.push(
      {
        tech: arrayTech[index],
        name: string,
      },
    );
  }
  return techOrder;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Diego'));

// Desafio 11

function conditionsPhoneNumber(arrayPhoneNumber) {
  if (arrayPhoneNumber.length !== 11) {
    return 'Array com tamanho incorreto';
  } if (arrayPhoneNumber < 0 || arrayPhoneNumber > 9) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
}
function countPhoneNumber(arrayNumber) {
  let count = 0;
  for (let index in arrayNumber) {
    if (arrayNumber[index] === arrayNumber) {
      count += 1;
    } else if (count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
}
function generateNumber(arrayNumber) {
  let arrayPhone = [];
  for (let index = 0; index < arrayNumber.length; index += 1) {
    if (arrayPhone[index] === arrayNumber[index]) {
      return arrayPhone[index];
    }
  }
}
function allFunctionsPhone(conditionsPhoneNumber, countPhoneNumber, generateNumber) {
  conditionsPhoneNumber;
  countPhoneNumber;
  generateNumber;
}
function generatePhoneNumber(arrayPhone) {
  let phone = allFunctionsPhone;
  phone = `(${arrayPhone[0]}${arrayPhone[1]})`;
  phone += `${arrayPhone[2]}${arrayPhone[3]}${arrayPhone[4]}${arrayPhone[5]}${arrayPhone[6]}`;
  phone += `-${arrayPhone[7]}${arrayPhone[8]}${arrayPhone[9]}${arrayPhone[10]}`;
    return phone;
}
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

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

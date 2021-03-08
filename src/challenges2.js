// Desafio 10
function techList(currentTech, name) {
  let techName = {};
  let arrayTechName = [];
  currentTech.sort();
  if (currentTech.length === 0) {
    return ('Vazio!');
  }
  for (let index = 0; index < currentTech.length; index += 1) {
    techName = {
      name,
      tech: currentTech[index],
    };
    arrayTechName.push(techName);
  }
  return arrayTechName;
}
function checkphoneNumber3(number, check) {
  let checkNumber = {
    zero: 0,
    um: 0,
    dois: 0,
    tres: 0,
    quatro: 0,
    cinco: 0,
    seis: 0,
    sete: 0,
    oito: 0,
    nove: 0,
  };
}
function checkPhoneNumber2(number, check) {
  for (let index = 0; index < number.length; index += 1) {
    if (number[index] < 0 || number[index] > 9) {
      check = false;
    }
  }
  return check;
}
function checkPhoneNumber1(number, check) {
  if (number.length !== 11) {
    check = false;
  }
  return check;
}
function writingMessage(check1, check2, check3) {
  let message;
  if (check1 === false) {
    message = 'Array com tamanho incorreto.';
  } else if (check2 === false || check3 === false) {
    message = 'não é possível gerar um número de telefone com esses valores';
  }
  return message;
}
function generateDDD(number) {
  let phoneNumber = '(';
  for (let index = 0; index < number.length; index += 1) {
    if (index === 0) {
      phoneNumber += number[index];
    }
    if (index === 1) {
      phoneNumber += number[index];
      phoneNumber += ')';
    }
    
  }
  return phoneNumber;
}
function firstPartNumber(number, phoneNumber) {
  for (let index = 0; index < number.length; index += 1) {
    if (index >= 2 && index <= 6) {
      phoneNumber += number[index];
    } else if (index === 7) {
      phoneNumber += '-';
    }
  }
  return phoneNumber;
}
function secondPartNumber(number, phoneNumber) {
  for (let index = 0; index < number.length; index += 1) {
    if (index >= 7) {
      phoneNumber += number[index];
    }
  }
  return phoneNumber;
}
// Desafio 11
function generatePhoneNumber(phoneNumber) {
  let check1;
  let check2;
  let check3;
  let message;
  let number;
  check1 = checkPhoneNumber1(phoneNumber, check1);
  check2 = checkPhoneNumber2(phoneNumber, check2);
  check3 = checkphoneNumber3(phoneNumber, check3);
  message = writingMessage(check1, check2, check3);
  if (check1 === false || check2 === false || check3 === false) {
    return message;
  }
  number = generateDDD(phoneNumber);
  number += ' ';
  number = firstPartNumber(phoneNumber, number);
  number = secondPartNumber(phoneNumber, number);
  return number;
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate() {
  // seu código aqui
}
let a = [0, 2, 3, 4, 4, 2, 7, 8, 9, 9, 4];
console.log(generatePhoneNumber(a));
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

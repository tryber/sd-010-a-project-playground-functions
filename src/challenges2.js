// Desafio 10
function techList(nomeTech, name) {
  let listNomeTechOrdenada = nomeTech.sort();
  let myObjectList = [];
  let myObject = {};

  for (let index = 0; index < listNomeTechOrdenada.length; index += 1) {
    myObject.tech = listNomeTechOrdenada[index];
    myObject.name = name;
    myObjectList[index] = myObject;
    myObject = {};
  }

  if (myObjectList.length > 0) {
    return myObjectList;
  }
  return 'Vazio!';
}

// Desafio 11
function testListPhoneRepete(listNumber) {
  let contRepete = 0;
  let numberRepet = 0;
  for (let index = 0; index < listNumber.length; index += 1) {
    for (let indexTwo in listNumber) {
      if (listNumber[index] === listNumber[indexTwo]) {
        contRepete += 1;
      }
    }
    if (contRepete > numberRepet) {
      numberRepet = contRepete;
    }
    contRepete = 0;
  }
  if (numberRepet >= 3) {
    return true;
  }
  return false;
}
function testListPhoneBig(listNumber) {
  let bigNumber = false;
  for (let index = 0; index < listNumber.length; index += 1) {
    if (listNumber[index] > 9) {
      bigNumber = true;
    }
  }
  if (bigNumber === true) {
    return true;
  }
  return false;
}
function testListPhoneZero(listNumber) {
  let menorQueZero = false;
  for (let indexOne = 0; indexOne < listNumber.length; indexOne += 1) {
    if (listNumber[indexOne] < 0) {
      menorQueZero = true;
    }
  }
  if (menorQueZero === true) {
    return true;
  }
  return false;
}
function testListPhone(listNumber) {
  if (testListPhoneRepete(listNumber) === true || testListPhoneBig(listNumber) === true || testListPhoneZero(listNumber) === true) {
    return true;
  }
  return false;
}
function phoneDDDNumber(listNumber) {
  let listDDDPhone = ['(', '0', '0', ')'];
  for (let index = 0; index < 2; index += 1) {
    listDDDPhone[index + 1] = listNumber[index];
  }
  return listDDDPhone.join('');
}
function phoneFirstNumber(listNumber) {
  let listFirstPhone = [];
  for (let index = 2; index < 7; index += 1) {
    listFirstPhone.push(listNumber[index]);
  }
  return listFirstPhone.join('');
}
function phoneLastNumber(listNumber) {
  let listLastPhone = [];
  for (let index = 7; index < listNumber.length; index += 1) {
    listLastPhone.push(listNumber[index]);
  }
  return listLastPhone.join('');
}
function generatePhoneNumber(listNumber) {
  if (listNumber.length > 11 || listNumber.length < 11) {
    return 'Array com tamanho incorreto.';
  } if (testListPhone(listNumber) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `${phoneDDDNumber(listNumber)} ${phoneFirstNumber(listNumber)}-${phoneLastNumber(listNumber)}`;
}
// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let somaBC = lineB + lineC;
  let valueAbs = Math.abs(lineB - lineC);

  if (lineA < somaBC && lineA > valueAbs) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(myDrink) {
  let arrayDrink = myDrink.match(/\d/g); // .replace(/\D/g, ' ');
  let contGlass = 0;
  let myGlassH20 = '';

  for (let index = 0; index < arrayDrink.length; index += 1) {
    contGlass += parseInt(arrayDrink[index]);
  }

  if (contGlass === 1) {
    myGlassH20 += `${contGlass} copo de água`;
  } else if (contGlass > 0) {
    myGlassH20 += `${contGlass} copos de água`;
  }

  return myGlassH20;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

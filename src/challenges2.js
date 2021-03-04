// Desafio 10
function techList(techArray, studantName) {
  let listOfTechs = [];
  if (techArray.length === 0) {
    listOfTechs = 'Vazio!';
  } else {
    for (let index = 0; index < techArray.sort().length; index += 1) {
      const techItem = {
        tech: techArray[index],
        name: studantName,
      };
      listOfTechs.push(techItem);
    }
  }
  return listOfTechs;
}

// Esta função retorna o número vezes aparece que um número repete em um array de números.
function manyRepete(arrayNumbers, numberAvalided) {
  let countRepete = 0;
  for (let index2 = 0; index2 < arrayNumbers.length; index2 += 1) {
    if (arrayNumbers[index2] === numberAvalided) {
      countRepete += 1;
    }
  }
  return countRepete;
}

// Esta função retorna o número vezes aparece o número que mais se repete no arrayNumber
function howManyRepetions(arrayNumbers) {
  let count = 0;
  let maxRepetions = 0;
  for (let index1 = 0; index1 < arrayNumbers.length; index1 += 1) {
    count = manyRepete(arrayNumbers, arrayNumbers[index1]);
    if (count > maxRepetions) {
      maxRepetions = count;
    }
  }
  return maxRepetions;
}

// Esta função realiza os testes se o número é válido e retorna true se for e false se não for
function testValid(phoneNumberArray) {
  let isValid = true;
  const testedArray = phoneNumberArray;
  for (let index = 0; index < phoneNumberArray.length; index += 1) {
    if (phoneNumberArray[index] < 0 || phoneNumberArray[index] > 9) {
      isValid = false;
      index = phoneNumberArray.length;
    }
  }
  if (howManyRepetions(testedArray) >= 3) {
    isValid = false;
  }
  return isValid;
}

// Esta função recebe um array com 11 números e retorna uma string com os números no formato (12) 34567-89AB
function mountPhoneNumber(phoneNumberArray) {
  let mensage = '(';
  for (let index = 0; index < phoneNumberArray.length; index += 1) {
    if (index === 2) {
      mensage += ') ';
    }
    if (index === 7) {
      mensage += '-';
    }
    mensage += phoneNumberArray[index];
  }
  return mensage;
}

// Desafio 11
function generatePhoneNumber(phoneNumberArray) {
  let mensage = '';
  if (phoneNumberArray.length !== 11) {
    mensage = 'Array com tamanho incorreto.';
  } else if (testValid(phoneNumberArray)) {
    mensage = mountPhoneNumber(phoneNumberArray);
  } else {
    mensage = 'não é possível gerar um número de telefone com esses valores';
  }
  return mensage;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return (lineA + lineB) > lineC && Math.abs(lineA - lineB) < lineC;
}

// Desafio 13
function hydrate(drinks) {
  let count = 0;
  let mensage = '';
  for (let index = 0; index < drinks.length; index += 1) {
    let test = parseInt(drinks[index], 10);
    if (!(Number.isNaN(test))) {
      count += test;
    }
  }
  if (count > 1) {
    mensage = `${count.toString(10)} copos de água`;
  } else {
    mensage = `${count.toString(10)} copo de água`;
  }
  return mensage;
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

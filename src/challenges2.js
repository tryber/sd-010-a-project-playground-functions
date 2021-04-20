// Desafio 10
function techList(techNames, name) {
  let listTech = [];
  if (techNames.length === 0) {
    return 'Vazio!';
  } else {
    for (let index in techNames.sort()) {
      let techObject = {
        tech: techNames[index],
        name: name,
      }
      listTech.push(techObject);
    }
    return listTech;
  }
}

function correctNumber(numero) {
  let finalNumber = `(${numero[0]}${numero[1]}) `;
  for (let index = 2; index < 7; index += 1) {
    finalNumber += numero[index];
  }
  finalNumber += '-';
  for (let index2 = 7; index2 < numero.length; index2 += 1) {
    finalNumber += numero[index2];
  }
  return finalNumber;
}

const checkSize = (phoneNumber) => {
  for (let index in phoneNumber) {
    if (phoneNumber[index] < 0 || phoneNumber[index] > 9) return 'error';
  }
};

const checkRepited = (phoneNumber) => {
  for (let index in phoneNumber) {
    const repited = phoneNumber.filter((num) => num === phoneNumber[index]);
    if (repited.length > 2) return 'error';
  };
};

// Desafio 11
function generatePhoneNumber(phoneNumber) {
  if (phoneNumber.length !== 11) return 'Array com tamanho incorreto.';

  if (checkSize(phoneNumber) === 'error' || checkRepited(phoneNumber) === 'error') {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return correctNumber(phoneNumber);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  // seu código aqui
  if ((lineA > lineB + lineC) || (lineA < Math.abs(lineB - lineC))) return false;
  if ((lineB > lineA + lineC) || (lineB < Math.abs(lineA - lineC))) return false;
  if ((lineC > lineB + lineA) || (lineC < Math.abs(lineB - lineA))) return false;

  return true;
}

// Desafio 13
function hydrate(drinks) {
  // seu código aqui
  const totalDrinks = drinks.split(/, | e /).reduce((acc, crr) =>
    acc + parseInt(crr[0]), 0);

  return totalDrinks > 1 ? `${totalDrinks} copos de água` : `${totalDrinks} copo de água`;
}

console.log(hydrate('1 coca, 1 chopp e 2 refris'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

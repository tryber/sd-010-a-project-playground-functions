// Desafio 10
function techList(techListArray, name) {
  const listTechObj = [];
  const OrdenedTechListArray = techListArray.sort();

  if (techListArray.length === 0) {
    return 'Vazio!';
  }

  for (let index in OrdenedTechListArray) {
    // Referencia: https://eslint.org/docs/rules/guard-for-in
    if (Object.prototype.hasOwnProperty.call(OrdenedTechListArray, index)) {
      listTechObj.push({
        tech: OrdenedTechListArray[index],
        name,
      });
    }
  }

  return listTechObj;
}

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  let count = 0;

  if (arrayNumbers.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let num in arrayNumbers) {
    for (let index in arrayNumbers) {
      if (arrayNumbers[num] === arrayNumbers[index]) {
        count += 1;
      }
    }

    if (count >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }

    count = 0;

    if (arrayNumbers[num] < 0 || arrayNumbers[num] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  if (count >= 3) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  let number = `(${arrayNumbers[0]}${arrayNumbers[1]}) `;
  number += `${arrayNumbers[2]}${arrayNumbers[3]}${arrayNumbers[4]}${arrayNumbers[5]}${arrayNumbers[6]}`;
  number += `-${arrayNumbers[7]}${arrayNumbers[8]}${arrayNumbers[9]}${arrayNumbers[10]}`;
  return number;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let sumAB = Math.abs(parseInt(lineA) + parseInt(lineB));
  let sumAC = Math.abs(parseInt(lineA) + parseInt(lineC));
  let sumBC = Math.abs(parseInt(lineB) + parseInt(lineC));

  if (lineA < sumBC && lineB < sumAC && lineC < sumAB) {
    return true;
  } else {
    return false;
  }
}

// Desafio 13
function hydrate(drinks) {
  // Referencia: https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
  let numbers = drinks.match(/\d+/g);
  let sum = 0;

  for (let num in numbers) {
    sum += parseInt(numbers[num]);
  }

  if (sum === 1) {
    return '1 copo de água';
  }

  return `${sum} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

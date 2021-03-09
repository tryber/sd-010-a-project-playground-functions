// Desafio 10
function techList(array, name) {
  array = array.sort();
  let techlist = [];
  for (let index = 0; index < array.length; index += 1) {
    techlist.push(
      {
        tech: array[index],
        name,
      },
    );
  }
  if (array.length === 0) {
    return 'Vazio!'
  }
  return techlist;
}

// Desafio 11 - 
function generatePhoneNumber(array) {
  let phoneNumber = [];
  let repeatCounter = 0;
  for (let key in array) {
    if (array.length < 10 || array.length > 11) {
      return 'Array com tamanho incorreto.';
    }
    if (array[key] < 0 || array[key] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  for (let key in array) {
    if (array[key] === array[key += 1]) {
      repeatCounter += 1;
      if (repeatCounter > 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  for (let key in array) {
    phoneNumber.push(array[key]);
  }

  for (let key in phoneNumber) {
    return `(${phoneNumber[0]}${phoneNumber[1]}) ${phoneNumber[2]}${phoneNumber[3]}${phoneNumber[4]}${phoneNumber[5]}${phoneNumber[6]}-${phoneNumber[7]}${phoneNumber[8]}${phoneNumber[9]}${phoneNumber[10]}`;
  }
  return phoneNumber;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let lineACheck = (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC));
  let lineBCheck = (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC));
  let lineCCheck = (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB));
  if (lineACheck && lineBCheck && lineCCheck) {
    return true;
  } return false;
}


// Desafio 13
function hydrate(array) {
  let drinkCount = array.match(/\d+/g).map(Number); // Source https://codereview.stackexchange.com/questions/115885/extract-numbers-from-a-string-javascript
  // /\d - encontra um ou mais números;
  // /g - pega todos os números encontrados;
  // .map() - retorna uma nova array com o resultado dos comandos ateriores - função callback;
  let drinkTotal = 0;
  for (let key in drinkCount) {
    drinkTotal += drinkCount[key];
  }
  if (drinkTotal <= 1 && drinkTotal > 0) {
    return drinkTotal + ' copo de água';
  }
  return drinkTotal + ' copos de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

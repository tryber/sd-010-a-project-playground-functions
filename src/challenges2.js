// Desafio 10
function techList(array, studentName) {
  let object = [];
  if (array.length === 0) {
    object = 'Vazio!';
  }
  for (let index = 0; index < array.sort().length; index += 1) {
    let techRefer = { tech: array[index], name: studentName };
    object.push(techRefer);
  }
  return object;
}

function indexBiggerLower(array) {
  let indexBigger = 9;
  let indexLower = 0;
  let result = false;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] > indexBigger || array[index] < indexLower) {
      result = true;
    }
  }
  return result;
}

function checkEqual(array) {
  let result = false;
  for (let index = 0; index < array.length; index += 1) {
    let isEqual = 0;
    for (let index1 = 0; index1 < array.length; index1 += 1) {
      if (array[index] === array[index1]) {
        isEqual += 1;
      }
      if (isEqual >= 3) {
        result = true;
      }
    }
  }
  return result;
}

function createNumber(array) { // consultado método splice em: https://www.youtube.com/watch?v=SpCqm9y3mTc
  let result = '';
  array.unshift('(');
  array.splice(3, 0, ')');
  array.splice(4, 0, ' ');
  array.splice(10, 0, '-');
  for (let index = 0; index < array.length; index += 1) {
    result += `${array[index]}`;
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(array) {
  let result = '';
  if (array.length !== 11) return 'Array com tamanho incorreto.';

  if (indexBiggerLower(array) === true || checkEqual(array) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  result += createNumber(array);
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let triangleArray = [10, 20, 50];
  triangleArray.push(lineA, lineB, lineC);
  let isTriangle = true;
  for (let index = 0; index < 2; index += 1) {
    let position1 = triangleArray[index];
    let position2 = triangleArray[index + 1];
    if (triangleArray[index] > triangleArray[index + 1]) {
      triangleArray[index + 1] = position1;
      triangleArray[index] = position2;
    }
  }
  if (triangleArray[0] > Math.abs(triangleArray[1] - triangleArray[2])) {
    isTriangle = true;
  } else {
    isTriangle = false;
  }
  return isTriangle;
}

// Desafio 13
function hydrate(string) {
  let agua = '';
  let filterString = /\d+/g; // consultado uso do regex em https://www.youtube.com/watch?v=pfkkdzeyx6U&t=232s
  let strindFiltred = string.match(filterString);
  let resultFinal = 0;
  for (let index = 0; index < strindFiltred.length; index += 1) {
    resultFinal += parseInt(strindFiltred[index], 10);
  }
  let waterDrink = ' copo de água';
  if (resultFinal > 1) {
    waterDrink = ' copos de água';
  }
  resultFinal = `${resultFinal}`;
  agua += resultFinal + waterDrink;
  return agua;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

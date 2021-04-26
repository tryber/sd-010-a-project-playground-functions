// Desafio 10
function techList(techName, name) {
  if (techName.length === 0) {
    return 'Vazio!';
  }
  let list = [];
  techName.sort(); // ordenar;
  for (let index = 0; index < techName.length; index += 1) {
    list.push({ tech: techName[index], name }); // empurrar dentro do array
  } // name - propriedade do JS: https://www.w3schools.com/js/js_objects.asp
  return list;
}
// console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function countNumber(numArray, number) {
  let count = 0;
  for (let index = 0; index < numArray.length; index += 1) {
    if (numArray[index] === number) {
      count += 1;
    }
  }
  return count;
}

function verifyNumber(numArray) {
  let result = false;
  for (let index = 0; index < numArray.length; index += 1) {
    if (numArray[index] < 0 || numArray[index] > 9) {
      result = true;
    }
  }
  return result;
}

function numberRepeat(numArray) {
  let total;
  let result = false;
  for (let index = 0; index < numArray.length; index += 1) {
    total = countNumber(numArray, numArray[index]);
    if (total >= 3) {
      result = true;
    }
  }
  return result;
}
// nativa
function generatePhoneNumber(numArray) {
  if (numArray.length !== 11) return 'Array com tamanho incorreto.';
  if (verifyNumber(numArray) || numberRepeat(numArray)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  const createNumber = numArray.join('');
  let DDD = createNumber.slice(0, 2);
  let prefix = createNumber.slice(2, 7);
  let sufix = createNumber.slice(7, 11);
  let phoneNumber = `(${DDD}) ${prefix}-${sufix}`;
  return phoneNumber;
}

// console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 9, 9, 9, 9]));

// Desafio 12
// function triangleCheck(lineA, lineB, lineC) {
function sideOne(lineA, lineB, lineC) {
  let side1 = false;
  if ((lineA > (lineB - lineC)) && (lineA < Math.abs(lineB + lineC))) {
    side1 = true;
  }
  return side1;
}
function sideTwo(lineA, lineB, lineC) {
  let side2 = false;
  if ((lineA > (lineB - lineC)) && (lineA < Math.abs(lineB + lineC))) {
    side2 = true;
  }
  return side2;
}
function sideThree(lineA, lineB, lineC) {
  let side3 = false;
  if ((lineC > (lineA - lineB)) && (lineC < Math.abs(lineA + lineB))) {
    side3 = true;
  }
  return side3;
}
function triangleCheck(lineA, lineB, lineC) {
  let value1 = sideOne(lineA, lineB, lineC);
  let value2 = sideTwo(lineA, lineB, lineC);
  let value3 = sideThree(lineA, lineB, lineC);
  if (value1 && value2 && value3) {
    return true;
  }
  return false;
}
// console.log(triangleCheck(10, 14, 15));

// Desafio 13
function hydrate(string) {
  let expReg = /\d+/g;
  let numbers = string.match(expReg);
  let sum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    sum += parseInt(numbers[index], 10);
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}

// console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

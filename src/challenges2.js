// Desafio 10
function techList(tech, name) {
  let techSort = tech.sort();
  let techObj = [];
  let realName = name;

  if (tech.length === 0) {
    return 'Vazio!';
  }

  for (let index = 0; index < techSort.length; index += 1) {
    techObj.push(
      {
        tech: techSort[index],
        name: realName,
      },
    );
  }
  return techObj;
}

// Desafio 11
function numFormat(num) {
  return `(${num[0]}${num[1]}) ${num[2]}${num[3]}${num[4]}${num[5]}`
  + `${num[6]}-${num[7]}${num[8]}${num[9]}${num[10]}`;
}

function checkNumber(num) {
  let result = false;
  for (let index = 0; index < num.length; index += 1) {
    if (num[index] > 9 || num[index] < 0) {
      result = true;
    }
  }
  return result;
}

function countRepeat(array, number) {
  let repeat = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] === number) {
      repeat += 1;
    }
  }
  return repeat;
}

function generatePhoneNumber(tel) {
  if (tel.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let index = 0; index < tel.length; index += 1) {
    if (countRepeat(tel, tel[index]) >= 3 || checkNumber(tel) === true) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }
  return numFormat(tel);
}

// Desafio 12
function checkSub(lineA, lineB, lineC) {
  let result = false;
  let operations = {
    subAB: Math.abs(lineA - lineB),
    subBC: Math.abs(lineB - lineC),
    subAC: Math.abs(lineA - lineC),
  };
  if (lineC > operations.subAB && lineB > operations.subAC && lineA > operations.subBC) {
    result = true;
  }
  return result;
}

function checkSum(lineA, lineB, lineC) {
  let result = false;
  let operations = {
    sumAB: lineA + lineB,
    sumAC: lineA + lineC,
    sumBC: lineB + lineC,
  };
  if (lineC < operations.sumAB && lineB < operations.sumAC && lineA < operations.sumBC) {
    result = true;
  }
  return result;
}

function triangleCheck(lineA, lineB, lineC) {
  return checkSum(lineA, lineB, lineC) && checkSub(lineA, lineB, lineC);
}

// Desafio 13
function hydrate(string) {
  let numbers = string.toString('').match(/\d+/g).join('');
  let sum = 0;
  for (let index = 0; index < numbers.length; index += 1) {
    sum += +numbers[index];
  }
  if (sum === 1) {
    return `${sum} copo de água`;
  }
  return `${sum} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

// Desafio 10
function techList(arr, name) {
  let nam = name;
  let orgarr = arr.sort();
  let techsNames = [];
  for (let index = 0; index < orgarr.length; index += 1) {
    techsNames.push(
      {
        tech: orgarr[index],
        name: nam,
      },
    );
  }

  if (arr.length === 0) {
    return 'Vazio!';
  }
  return techsNames;
}

// Desafio 11
function phonenumberValid(arr) {
  for (let index = 0; index < arr.length; index += 1) {
    if (arr[index] > 9 || arr[index] < 0) {
      return false;
    }
  }
  return true;
}

function countNum(arr) {
  let countArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    let count = 0;
    for (let i = 0; i < arr.length; i += 1) {
      if (arr[index] === arr[i]) {
        count += 1;
      }
    }
    countArr.push(count);
  }
  return countArr;
}

function repeatCheck(arr) {
  for (let index = 0; index < arr.length; index += 1) {
    if (countNum(arr)[index] >= 3) {
      return false;
    }
  }
}

function generatePhoneNumber(a) {
  if (a.length > 11 || a.length < 11) {
    return 'Array com tamanho incorreto.';
  }
  if (phonenumberValid(a) === false || repeatCheck(a) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let phone = `(${a[0]}${a[1]}) ${a[2]}${a[3]}${a[4]}${a[5]}${a[6]}-${a[7]}${a[8]}${a[9]}${a[10]}`;
  return phone;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA >= lineB + lineC) {
    return false;
  }
  if (lineB >= lineA + lineC) {
    return false;
  }
  if (lineC >= lineA + lineB) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(str) {
  let waterCups = 0;
  let beverages = str.split(' ');
  for (let index = 0; index < beverages.length; index += 1) {
    if (parseInt(beverages[index], 10)) {
      waterCups += parseInt(beverages[index], 10);
    }
  }
  if (waterCups > 1) {
    return `${waterCups} copos de água`;
  }
  return `${waterCups} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

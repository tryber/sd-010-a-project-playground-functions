// Desafio 10
function techList(list, name) {
  let result;
  if (list.length === 0) {
    result = 'Vazio!';
  } else {
    list = list.sort();
    result = [];
    for (let index = 0; index < list.length; index += 1) {
      let tech = list[index];
      let item = {
        tech,
        name,
      };
      result.push(item);
    }
  }
  return result;
}
// função auxiliar exercico 11
function repeat3Times(array) {
  let count = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
  let result = false;
  for (let index = 0; index < array.length; index += 1) {
    count[array[index]] += 1;
  }
  for (let index = 0; index < count.length; index += 1) {
    if (count[index] >= 3) {
      result = true;
    }
  }
  return result;
}

// função auxiliar exercicio 11
function checkRange(array) {
  let result = true;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9) {
      result = false;
    }
  }
  return result;
}

// função auxiliar exercicio 11 visto no w3school o slice
function createPhone(array) {
  let str1 = '(';
  let str2 = ') ';
  let str3 = '-';
  let part1 = array.slice(0, 2);
  let part2 = array.slice(2, 7);
  let part3 = array.slice(7, 11);
  let num1 = part1.join('');
  let num2 = part2.join('');
  let num3 = part3.join('');
  return str1.concat(num1, str2, num2, str3, num3);
}

// auxiliar desafio 11, primeiro if com 3 verificacoes, transformado em funcao para diminuir complexidade
function checkFIrstIf(array) {
  let result = false;
  if (array.length === 11 && checkRange(array) === true && repeat3Times(array) === false) {
    result = true;
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(array) {
  let result;
  if (checkFIrstIf(array) === true) {
    result = createPhone(array);
  } else if (array.length !== 11) {
    result = 'Array com tamanho incorreto.';
  } else if (checkRange(array) === false || repeat3Times(array) === true) {
    result = 'não é possível gerar um número de telefone com esses valores';
  }
  return result;
}

// função auxiliar exercicio 12 verifica se um lado é menor do que a soma dos outro dois
function verifySum(lineA, lineB, lineC) {
  let result = false;
  if (lineA < (lineB + lineC)) {
    result = true;
  }
  return result;
}

// função auxiliar verifia se a soma dos dois lados é maior do que a diferenca em valor absoluto
function verifyDiff(lineA, lineB, lineC) {
  let result = false;
  if (lineA > Math.abs(lineB - lineC)) {
    result = true;
  }
  return result;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = false;
  let diff = verifyDiff(lineA, lineB, lineC);
  let sum = verifySum(lineA, lineB, lineC);
  if (diff === true && sum === true) {
    result = true;
  }
  return result;
}

// auxiliar desafio 13 recebe uma string, trnasforma em array e conta os numeros
function sumWater(string) {
  let array = string.split('');
  let sum = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] >= 0 && array[index] <= 9) {
      let int = Math.abs(array[index]);
      sum += int;
    }
  }
  return sum;
}

// Desafio 13
function hydrate(string) {
  let sum = sumWater(string);
  let result;
  if (sum === 1) {
    result = '1 copo de água';
  } else if (sum > 1) {
    let num = sum.toString();
    result = num.concat(' copos de água');
  }
  return result;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

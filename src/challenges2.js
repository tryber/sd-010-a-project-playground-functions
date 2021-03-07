// Desafio 10
function techList(array, nome) {
  let array2 = array.sort();
  let retorno = [];
  if (array2.length > 0) {
    for (let index in array2) {
      let objeto = {
        tech: '',
        name: nome,
      };
      objeto.tech = array2[index];
      retorno[index] = objeto;
    }
  } else {
    return 'Vazio!';
  }
  return retorno;
}

// Desafio 11
function generatePhoneNumber(array) {
  let count = 0;
  let number = '(';
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < array.length; i += 1) {
    if (array[i] > 9 || array[i] < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    count = 0;
    for (let j = 1; j < array.length; j += 1) {
      if (array[j] === array[i]) {
        count += 1;
        if (count >= 3) {
          return 'não é possível gerar um número de telefone com esses valores';
        }
      }
    }
  }
  for (let k = 0; k < array.length; k += 1) {
    if (k === 2) {
      number += ') ';
    } else if (k === 7) {
      number += '-';
    }
    number += array[k];
  }
  return number;
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineB < lineA + lineC && lineC < lineA + lineB
    && lineA > Math.abs(lineB - lineC)
    && lineB > Math.abs(lineA - lineC) && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  return false;
}

// Desafio 13  //faltaaaaaa a questão 13
function hydrate(string) {
  let values = string.match(/\d+/gm);
  let arrarNumbers = [];
  let sum = 0;
  for (let i = 0; i < values.length; i += 1) {
    arrarNumbers[i] = +values[i];
  }
  for (let j = 0; j < values.length; j += 1) {
    sum += arrarNumbers[j];
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

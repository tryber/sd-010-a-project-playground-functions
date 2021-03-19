// Desafio 10
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let object = {};
  let arrayObject = [];
  let arrayOrder = array.sort();
  for (let index = 0; index < arrayOrder.length; index += 1) {
    object.tech = arrayOrder[index];
    object.name = name;
    arrayObject.push(object);
    object = {};
  }
  return arrayObject;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Heloísa'));

// Desafio 11  | Realizado com a ajuda do Lucas Eduardo Pedroso, que ensinou como usar o 'filter'  <3 grande abraço, Lucas!
function repetedNumber(arrayNumbers) {
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    let arrayFiltred = arrayNumbers.filter(function (x) { return arrayNumbers[index] === x; });
    if (arrayFiltred.length >= 3) {
      return true;
    }
  } return false;
}
function generatePhoneNumber(array) {
  let ddd = '';
  let fiveNumbers = '';
  let fourNumbers = '';
  let result = '';

  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let arrayCopy = array.filter(function (x) { return x < 0 || x > 9; });
  if (arrayCopy.length > 0 || repetedNumber(array)) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  ddd += '(' + array[0] + '' + array[1] + ') ';
  fiveNumbers += array[2] + '' + array[3] + array[4] + '' + array[5] + '' + array[6] + '-';
  fourNumbers += array[7] + '' + array[8] + '' + array[9] + '' + array[10];
  return result.concat(ddd).concat(fiveNumbers).concat(fourNumbers);
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
  } else if (lineB < (lineA + lineC) && lineB > Math.abs(lineA - lineC)) {
    return true;
  } else if (lineC < (lineA + lineB) && lineC > Math.abs(lineA - lineB)) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate() {
  // seu código aqui
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

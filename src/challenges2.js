// Desafio 10
function techList(array, names) {
  if (array.length === 0) {
    return 'Vazio!';
  }
  let order = array.sort();
  let techs = order.map((item) => {
    let obj = { tech: item, name: names };
    return obj;
  }, {});
  return techs;
}

// Desafio 11
// A função ArrayFilterRepeat foi contribuição do @Lucas Pedroso.
function arrayFilterRepeat(array) {
  for (let index = 0; index < array.length; index += 1) {
    const element = array[index];
    if ((array.filter((number) => number === element)).length >= 3) {
      return true;
    }
  }
  return false;
}

function generatePhoneNumber(array) {
  if (array.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  let arrayFilters = array.filter((number) => number < 0 || number > 9);
  if (arrayFilters.length > 0 || arrayFilterRepeat(array) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  let arrayToString = array.toString().replace(/,/g, '');
  return arrayToString.replace(/(\d{2})(\d{5})(\d{3})/g, '($1) $2-$3');
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  return lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC);
}

// Desafio 13
function hydrate(string) {
  let findNumber = string.match(/\d/g);
  let endString = '';
  let number = findNumber.reduce(function (accumulator, currentValue) {
    return parseInt(accumulator, 10) + parseInt(currentValue, 10);
  });
  if (number > 1) {
    endString = `${number} copos de água`;
  } else {
    endString = `${number} copo de água`;
  }
  return endString;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

// Função auxiliar
// Essa função de ordenação eu aprendi e apliquei conforme
// uma postagem no Stack Overflow: https://stackoverflow.com/questions/1129216/sort-array-of-objects-by-string-property-value
function compare(a, b) {
  if (a.tech < b.tech) {
    return -1;
  }
  if (a.tech > b.tech) {
    return 1;
  }
  return 0;
}

// Desafio 10
function techList(arrayList, name) {
  let newArrayList = [];
  if (arrayList.length > 0) {
    for (let index = 0; index < arrayList.length; index += 1) {
      newArrayList.push({ tech: arrayList[index], name });
    }
  } else {
    return 'Vazio!';
  }

  return newArrayList.sort(compare);
}

// Função auxiliar
let phone = {
  // A função isRepeatedNumber() foi resultado de estudos e pesquisar realizadas em uma das respostas do Stack Overflow, conforme o link abaixo:
  // link: https://pt.stackoverflow.com/questions/459413/verificar-quantas-vezes-um-n%C3%BAmero-aparece-no-array#:~:text=Se%20voc%C3%AA%20sempre%20estiver%20trabalhando,)%20%7B%20const%20countMap%20%3D%20Object.
  isRepeatedNumer(arr) {
    let resultado = arr.reduce((acc, val) => {
      if (!acc[val]) {
        acc[val] = {
          número: val,
          quantidade: 1,
        };
      } else acc[val].quantidade += 1;
      return acc;
    }, {});

    return Object.values(resultado);
  },
  lessThanZeroAndGreaterThanNine(arr) {
    for (let index = 0; index < arr.length; index += 1) {
      if (arr[index] < 0 || arr[index] > 9) {
        return false;
      }
    }
  },
  firstBlock(arrayNumbers) {
    let formatedPhoneNumber = '';
    for (let index = 0; index < 2; index += 1) {
      formatedPhoneNumber = formatedPhoneNumber.concat(arrayNumbers[index]);
    }
    return formatedPhoneNumber;
  },
  secondBlock(arrayNumbers) {
    let formatedPhoneNumber = '';
    for (let index = 2; index < 7; index += 1) {
      formatedPhoneNumber = formatedPhoneNumber.concat(arrayNumbers[index]);
    }
    return formatedPhoneNumber;
  },
  thirdBlock(arrayNumbers) {
    let formatedPhoneNumber = '';
    for (let index = 7; index < 11; index += 1) {
      formatedPhoneNumber = formatedPhoneNumber.concat(arrayNumbers[index]);
    }
    return formatedPhoneNumber;
  },
};

function validation(arr) {
  if (arr.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  if (phone.lessThanZeroAndGreaterThanNine(arr) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }

  for (let el of phone.isRepeatedNumer(arr)) {
    if (parseInt(el.quantidade, 10) >= 3) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  }

  return 0;
}

// Desafio 11
function generatePhoneNumber(arrayNumbers) {
  let formatedPhoneNumber = '';

  formatedPhoneNumber = formatedPhoneNumber.concat('(');
  formatedPhoneNumber = formatedPhoneNumber.concat(phone.firstBlock(arrayNumbers));

  formatedPhoneNumber = formatedPhoneNumber.concat(') ');

  formatedPhoneNumber = formatedPhoneNumber.concat(phone.secondBlock(arrayNumbers));

  formatedPhoneNumber = formatedPhoneNumber.concat('-');

  formatedPhoneNumber = formatedPhoneNumber.concat(phone.thirdBlock(arrayNumbers));

  if (validation(arrayNumbers) === 0) {
    return formatedPhoneNumber;
  }

  return validation(arrayNumbers);
}

// Função auxiliar
let triangleObj = {
  checkLadoA(ladoA, ladoB, ladoC) {
    if (ladoA > (ladoB + ladoC)) {
      return false;
    }
    return true;
  },
  checkLadoB(ladoA, ladoB, ladoC) {
    if (ladoB > (ladoA + ladoC)) {
      return false;
    }
    return true;
  },
  checkLadoC(ladoA, ladoB, ladoC) {
    if (ladoC > (ladoA + ladoB)) {
      return false;
    }
    return true;
  },
  checkAbsLadoA(ladoA, ladoB, ladoC) {
    if (ladoA < Math.abs(ladoB - ladoC)) {
      return false;
    }
    return true;
  },
  checkAbsLadoB(ladoA, ladoB, ladoC) {
    if (ladoB < Math.abs(ladoA - ladoC)) {
      return false;
    }
    return true;
  },
  checkAbsLadoC(ladoA, ladoB, ladoC) {
    if (ladoC < Math.abs(ladoA - ladoB)) {
      return false;
    }
    return true;
  },
};

// Desafio 12
function triangleCheck(ladoA, ladoB, ladoC) {
  let isTriangle = [];

  isTriangle.push(triangleObj.checkLadoA(ladoA, ladoB, ladoC));
  isTriangle.push(triangleObj.checkLadoB(ladoA, ladoB, ladoC));
  isTriangle.push(triangleObj.checkLadoC(ladoA, ladoB, ladoC));

  isTriangle.push(triangleObj.checkAbsLadoA(ladoA, ladoB, ladoC));
  isTriangle.push(triangleObj.checkAbsLadoB(ladoA, ladoB, ladoC));
  isTriangle.push(triangleObj.checkAbsLadoC(ladoA, ladoB, ladoC));

  for (let index = 0; index < isTriangle.length; index += 1) {
    if (isTriangle[index] === false) {
      return false;
    }
  }

  return true;
}

// Desafio 13
function hydrate(stringPhrase) {
  let newStringPhrase = stringPhrase.replace(/\D/g, '').split('');
  let sum = 0;
  let result;

  for (let index = 0; index < newStringPhrase.length; index += 1) {
    sum += parseInt(newStringPhrase[index], 10);
  }

  if (sum === 0 || sum === 1) {
    result = sum.toString().concat(' copo de água');
    return result;
  }

  result = sum.toString().concat(' copos de água');
  return result;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Wanderson'));

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

console.log(triangleCheck(10, 14, 8));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

// Desafio 10

function techList(techs, name) {
  let sortTechs = techs.sort();
  let techAndNameObj = [];
  if (techs.length === 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < sortTechs.length; index += 1) {
    techAndNameObj[index] = {
      tech: sortTechs[index],
      name: name,
    };
  }
  return techAndNameObj;
}

// Desafio 11

function repeatCount(numbersArray) {
  for (let index = 0; index < numbersArray.length; index += 1) {
    let compNumb = numbersArray[index];
    let repeat = 0;
    for (let index2 = 0; index2 < numbersArray.length; index2 += 1) {
      if (compNumb === numbersArray[index2]) {
        repeat += 1;
      }
        if (repeat >= 3) {
          return true;
        }
    }
  }
}

function wrongRangeCheck(currentValue) {
  if (currentValue > 9 || currentValue < 0) {
    return true;
  }
}

function generatePhoneNumber(phoneNumb) {
  if (phoneNumb.length !== 11) {
    return "Array com tamanho incorreto.";
  }

  if (repeatCount(phoneNumb) === true || phoneNumb.some(wrongRangeCheck) === true) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return `(${phoneNumb[0]}${phoneNumb[1]}) ${phoneNumb[2]}${phoneNumb[3]}${phoneNumb[4]}${phoneNumb[5]}${phoneNumb[6]}-${phoneNumb[7]}${phoneNumb[8]}${phoneNumb[9]}${phoneNumb[10]}`;
}

let aaa = [1, 2, 3, 4, 5, 6, 7, 8, 1, 1, 1];
console.log(generatePhoneNumber(aaa));

// Desafio 12

function triangleCheck(lineA, lineB, lineC) {
  if ((lineA > (lineB - lineC)) && (lineA < (Math.abs(lineB + lineC))) 
  && (lineB > (lineA - lineC)) && (lineB < (Math.abs(lineA + lineC))) 
  && ((lineC > (lineA - lineB))) && (lineC < (Math.abs(lineA + lineB)))) {
    return true;
  }
  return false;
}

// console.log(triangleCheck(10, 14, 8));

// Desafio 13
function hydrate(toDrink) {
  // seu código aqui
  let numbers = toDrink.replace(/\D/g, '');
  let total = 0;
  let response = '';
  for (let index = 0; index < numbers.length; index += 1) {
    total += parseInt(numbers[index], 10);
  }
  if (total > 1) {
    response = `${total} copos de água`;
  } else response = `${total} copo de água`;
  return response;
}
// console.log(hydrate("1 cachaça, 5 cervejas e 1 copo de vinho"));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

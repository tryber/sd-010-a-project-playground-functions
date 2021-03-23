// Desafio 10
function techList(technologiesList, name) {
  let techs = [];
  technologiesList.sort();

  if (technologiesList.length <= 0) {
    return 'Vazio!'
  }
  for (let index = 0; index < technologiesList.length; index += 1) {
    techs.push (
      {
        tech: technologies[index],
        name: name
      },
    );
  } return techs
}
 
// Desafio 11
function wrongRangeCheck(currentValue) {
  if (currentValue > 9 || currentValue < 0) {
    return "não é possível gerar um número de telefone com esses valores"
  }
}
function generatePhoneNumber(phoneNumb) {
  if (phoneNumb.length !== 11) {
    return "Array com tamanho incorreto."
  };
  phoneNumb.some(wrongRangeCheck);
  for (let index = 0; index < phoneNumb.length; index += 1) {
    let repeat = 0
    for (let index2 = index + 1; index2 < phoneNumb.lenght; index2 += 1) {
      if(phoneNumb[index] === phoneNumb[index2]) {
        repeat += 1;
      } if (repeat >= 3) {
        return "não é possível gerar um número de telefone com esses valores"
      }
    }
  }
  return `(${arr[0]}${arr[1]}) ${arr[2]}${arr[3]}${arr[4]}${arr[5]}${arr[6]}-${arr[7]}${arr[8]}${arr[9]}${arr[10]}`;
}


// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function hydrate(string) {
  let stringCaracteres = string.split(' ');
  let agua = 0;

  for (let index = 0; index < stringCaracteres.length; index += 1) {
    if (stringCaracteres[index] == Number) {
      agua += 1;
    }
  }
  if (agua = 1) {
    return agua + ' copo de água'ç
  } else if (agua > 1) {
    return agua + ' copos de água'
  }
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

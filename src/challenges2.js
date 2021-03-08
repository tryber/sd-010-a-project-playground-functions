// Desafio 10
function techList(technologies, name) {
  let technologiesGroup = [];
  if (technologies.length === 0) {
    technologiesGroup = 'Vazio!';
  } else {
    technologies = technologies.sort();
    for (let index = 0; index < technologies.length; index += 1) {
      technologiesGroup.push({
        tech: technologies[index],
        name: name
      });
    }
  }
  return technologiesGroup;
}

// Desafio 11
function generatePhoneNumber(numbersGroup) {
  if (numbersGroup.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  for (let i = 0; i < numbersGroup.length; i += 1) {
    let n = numbersGroup[i];
    let cont = 0;
    if (n < 0 || n > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let index = 0; index < numbersGroup.length; index += 1) {
      if (n === numbersGroup[index]) {
        cont += 1;
      }
      if (cont >= 3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
  return '(' + numbersGroup[0] + numbersGroup[1] + ') '
  + numbersGroup[2] + numbersGroup[3] + numbersGroup[4] + numbersGroup[5] + numbersGroup[6]
  + '-' + numbersGroup[7] + numbersGroup[8] + numbersGroup[9] + numbersGroup[10];
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < lineB + lineC && lineA > Math.abs(lineB - lineC))
  && (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC))
  && (lineC < lineA + lineB && lineC > Math.abs(lineA - lineB))) {
    return true;
  }
  return false;
}

// Desafio 13
function hydrate(drank) {
  let water = 0;
  for (let index = 0; index < drank.length; index += 1) {
    if (Math.abs(drank[index]) > 0) {
      water += Math.abs(drank[index]);
    }
  }
  if (water > 1) {
    return water + ' copos de água';
  }
  return water + ' copo de água';
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

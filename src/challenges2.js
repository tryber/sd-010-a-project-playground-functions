// Desafio 10
function techList(arr, name) {
  let list = arr.sort();
  let techsNames = [];
  for (let index = 0; index < list.length; index += 1) {
    techsNames.push(
      {
        tech: list[index],
        name,
      },
    );
  }

  if (arr.length === 0) {
    return 'Vazio!';
  }
  return techsNames;
}
// Desafio resolvido com ajuda de StackOverFlow

// Desafio 11
function generatePhoneNumber() {
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA >= lineB + lineC) {
    return false;
  } if (lineB >= lineA + lineC) {
    return false;
  } if (lineC >= lineA + lineB) {
    return false;
  }
  return true;
}

// Desafio 13
function hydrate(string) {
  let cups = 0;
  let drinks = string.split(' ');
  for (let index = 0; index < drinks.length; index += 1) {
    // eslint-disable-next-line radix
    if (parseInt(drinks[index])) {
      // eslint-disable-next-line radix
      cups += parseInt(drinks[index]);
    }
  }
  if (cups > 1) {
    return `${cups} copos de água`;
  }
  return `${cups} copo de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

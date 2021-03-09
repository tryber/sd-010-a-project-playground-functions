// Desafio 10
function techList(tech, name) {
  // seu código aqui
  let result = [];

  for (let index = 0; index < tech.length; index += 1) {
    result.push({ tech: tech[index], name: name });
  }
  result.sort(compare);
  if (result.sort(compare).length > 0) {
    return result;
  }
  else {
    return 'Vazio!';
  }

}

function compare(a, b) {
  if (a.tech < b.tech) {
    return -1;
  }
  if (a.tech > b.tech) {
    return 1;
  }
  return 0;
}

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
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

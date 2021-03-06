// Desafio 10
function techList(nomesTech,name) {
  nomesTech.sort();
  let tecnologies = [];

  if (nomesTech.length === 0) {
    return 'Vazio!';
  }

  for (let index = 0; index < nomesTech.length; index += 1) {
    tecnologies.push(
      {
        tech: nomesTech[index],
        name: name,
      },
    );
  }

  return tecnologies;
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

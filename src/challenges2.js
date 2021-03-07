// Desafio 10
function techList(nomeTech, name) {
  // seu código aqui
  const list = [];
  if (nomeTech.length === 0) {
    return 'Vazio!';
  } else {
    for (let index in nomeTech.sort()) {
      let object = {
        tech: nomeTech[index],
        name: name,
      }
      list.push(object);
    }
      return list;
  }
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

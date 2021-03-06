// Desafio 10
function techList(tech, name) {
  let techListObject = {};
  let retornoObject = [];
  tech = tech.sort();
  if (tech.length === 0) {
    return 'Vazio!';
  }
  for (let i = 0; i < tech.length; i += 1) {
    techListObject.tech = tech[i];
    techListObject.name = name;
    
    retornoObject.push({ tech: tech[i], name });
  }
  return retornoObject;
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

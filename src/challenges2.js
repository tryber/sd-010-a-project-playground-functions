// Desafio 10
function techList(listOfTech, name) {
  // seu código aqui
  let techListSort = listOfTech.sort();
  let ultimateList = [];
  for (let index = 0; index < techListSort.length; index += 1) {
    ultimateList.push({ tech: techListSort[index], name });
  } if (listOfTech.length === 0) {
    return 'Vazio!';
  }
  return ultimateList;
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

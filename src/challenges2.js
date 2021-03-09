// Desafio 10
function techList(techArray, name) {
  techArray.sort();
  
  let techName = {};
  let listTechName = [];
  
  if (techArray.length === 0) {
    techName = 'Vazio!';
    return techName;
  }

  for (let index = 0; index < techArray.length; index += 1){
    techName = {
      tech: techArray[index],
      name: name
    }
    listTechName.push(techName);
  }
  return listTechName;
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

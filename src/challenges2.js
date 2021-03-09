// Desafio 10
function techList(array, name) {
  // seu código aqui
  let arrayOrdened = array.sort();
  let arrayObjects = [];

  for(let key in arrayOrdened) { 
    arrayObjects[key] = {
      tech: arrayOrdened[key],
      name: name
    }
  }
  if(array[0] != undefined || array[0] != null) {
    return arrayObjects;
  } else {
    return 'Vazio!';
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

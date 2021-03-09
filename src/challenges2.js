// Desafio 10
function techList(technologyList , name) {
  // seu código aqui
  if (technologyList.length === 0){
    return 'Vazio!';
  }
 let arrayList = []; 
 let obj = {
   tech: '',
   name: ''
 }
 technologyList = technologyList.sort();
 for (let index = 0; index < technologyList.length; index += 1){
  obj = {
  tech: technologyList[index],
  name: name
  }
  arrayList.push(obj);
}
 return arrayList;
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

// Desafio 10
function techList(tecnologias, name) {
  let listTech = [];
  if (tecnologias.length == 0) {
    return 'Vazio!';
  } 
  else {
    for (let index in tecnologias.sort()) {
      let objeto = {
        tech: tecnologias[index],
        name: name,
      }
      listTech.push(objeto);
    }
    return listTech;
  }
}
// Lucas Pedroso que me avisou do .sort() *-* créditos a ele

// Desafio 11
function generatePhoneNumber(numeros){
  let numero = '('
  if (numeros.length != 11){
    for (index = 0; index < 2; index++){
      numero += numeros[index]
    }
    numero += ') '
    for (index = 2; index < 7; index++){
      numero += numeros[index]
    }
    numero += '-'
    for (index = 7; index < 11; index ++){
      numero += numeros[index]
    }
    return numero
    
  }
  else{
    return ("Array com tamanho incorreto.")
  }
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC){
  if (lineA > lineB + lineC){
    return false
  }
  else if (lineB > lineA + lineC){
    return false
  }
  else if (lineC > lineA + lineB){
    return false
  }
  else{
    return true
  }
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

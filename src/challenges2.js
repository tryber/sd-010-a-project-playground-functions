// Desafio 10
// Referência ao repositório de: nascjoao (https://github.com/tryber/sd-010-a-project-playground-functions/pull/132/files) para a manipulação do object
// e adição dele ao output
function techList(wishTechs, student) {
  let output = [];
  let sortedTechs = wishTechs.sort();
  if(wishTechs.length === 0) return 'Vazio!'
  for (index = 0; index < sortedTechs.length; index += 1) {
    let addToObject = { tech: sortedTechs[index], name: student }; // adiciona à key "tech:" do objeto (addToObject) o valor, correspondente ao index, da array sortedTechs já organizada.
    output.push(addToObject);
  }
  return output;
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

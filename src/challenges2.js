// Desafio 10
function techList(technologies, name) {
  let techs = [];
  technologies.sort();

  if (technologies.length <= 0) {
    return 'Vazio!';
  }
  for (let index = 0; index < technologies.length; index += 1) {
    techs.push(
      {
        tech: technologies[index],
        name: name,
      },
    );
  } return techs;
}

// desafio realizado com contriuição de alguns colegas (nilson/mauricio)

// Desafio 11
function generatePhoneNumber(foneNumber) {
  
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

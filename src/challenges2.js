// Desafio 10
// Colaborações de Luan Ramalho, Anderson Nascimento e Rodrigo Queiroz. Todos da turma 10, tentaram me ajudar a entender o motivo do desafio não passar no Evaluator e dedicaram horas tentando compreender o erro do meu código.
function techList(tech, name) {
  if (tech.length === 0) {
    return 'Vazio!';
  }

  let technologies = [];
  let orderedTechnologies = tech.sort();

  for (let index = 0; index < orderedTechnologies.length; index += 1) {
    technologies.push(
      {
        tech: orderedTechnologies[index],
        name,
      },
    );
  }
  return technologies;
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

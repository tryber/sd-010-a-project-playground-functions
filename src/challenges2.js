// Desafio 10 // olhei no repositorio da aluna maria luiza rodrigues
function techList(array, name) {
  let techs = array;
  let list;
  if (techs.length === 0) {
    list = 'Vazio!';
  } else {
    let objects = [];
    techs = techs.sort();
    for (let i = 0; i < techs.length; i += 1) {
      objects.push({
        tech: techs[i],
        name: name,
      });
    }
    list = objects;
  }
  return list;
}
console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Maria'));
// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}
/* document.getElementById().cla */
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

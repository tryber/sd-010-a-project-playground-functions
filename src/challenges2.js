// Desafio 10
function techList(nomesTech, name) {
  let skillPessoa = [];
  if (nomesTech.length === 0) {
    return 'Vazio!';
  }

  nomesTech.sort();
  for (let index = 0; index < nomesTech.length; index += 1) {
    skillPessoa.push({
      tech: nomesTech[index],
      name,
    });
  }
  return skillPessoa;
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));

// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
function encontraNumCopoAlcool(drink) {
  let aux = drink.match(/\d+/g);
  let contaCopo = 0;
  for (let index = 0; index < aux.length; index += 1) {
    contaCopo += parseInt(aux[index], 10);
  }
  return contaCopo;
}

function hydrate(drink) {
  let coposDeAgua = 'copos de água';
  let copoDeAgua = 'copo de água';
  let recebeContagem;
  recebeContagem = encontraNumCopoAlcool(drink);
  if (recebeContagem === 1) {
    return `${recebeContagem} ${copoDeAgua}`;
  }
  if (recebeContagem > 1) {
    return `${recebeContagem} ${coposDeAgua}`;
  }
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

// Desafio 10
function techList(paramTech, paramNome) {
  // seu código aqui
  let arrayTec = [];
  arrayTec = paramTech;
  arrayTec.sort();
  let name = '';
  name = paramNome;
  let novoArray = [];
  let objetoSeparado = {};
  for (let index = 0; index < arrayTec.length; index += 1) {
    objetoSeparado = { tech: arrayTec[index], name: name };
    novoArray.push(objetoSeparado);
  }
  if (novoArray.length === 0) {
    return 'Vazio!';
  } return novoArray;
}
const a = techList(['CSS', 'Javascript', 'HTML', 'MongoDB'], 'Luiz Felipe');

// Refatorando a função acima:

function techRefactor(arrayTec, nome) {

  const objeto = arrayTec.sort().map((tech) => ({
    tech: tech,
    name: nome
  }))

  return console.log(objeto);
}

// techRefactor(['CSS', 'JavaScript', 'HTML'], 'luiz');



// Desafio 11
function generatePhoneNumber() {
  // seu código aqui
}

generatePhoneNumber();

// Desafio 12
function triangleCheck() {
  // seu código aqui
}

// Desafio 13
// function hydrate(stringDrinks) {

//   const onlyNumber = stringDrinks.replace(/\D/g, '');

//   let sum = 0;
//   for (let index in onlyNumber) {
//     sum += parseInt(onlyNumber[index]) 
//   }
//   return sum;
// }

// hydrate.js
const hydrate = (string) => {
  const splitString = string.split(' ');
  console.log('A splitString é:', splitString)
  const result = splitString.reduce((acc, curr) => {
    let parsedCharacter = parseInt(curr);
    let checkCharacter = isNaN(parsedCharacter) === false;
    if (checkCharacter) { return acc + parsedCharacter };
    return acc;
  }, 0);

  const pluralGlass = result === 1 ? 'copo' : 'copos';
  return `${result} ${pluralGlass} de água`;
};

// const res = hydrate('1 cachaça, 5 cervejas e 1 copo de vinho');
// console.log(res);


module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
  checkEmployee
};

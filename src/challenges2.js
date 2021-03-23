// Desafio 10
function techList(techNames, name) {
  if (techNames.length === 0) {
    return 'Vazio!';
  }
  techNames = techNames.sort();
  let resultItem = {};
  let result = [];
  for (let i = 0; i < techNames.length; i += 1) {
    resultItem.techNames = techNames[i];
    resultItem.name = name;
    result.push({
      tech: techNames[i],
      name 
    });
  }
  return result;
}

// Desafio 11
function generatePhoneNumber(Numbers) {
  // for (let index = 0; index < Numbers.length; index += 1) {

  //   if (Numbers[index] < 0 || Numbers[index] > 9) {
  //     console.log('não é possível gerar um número de telefone com esses valores');
  //   } else if (Numbers.length > 11 || Numbers.length < 11) {
  //     console.log('Array com tamanho incorreto');
  //   }
  // }
}

// Desafio 12
function triangleCheck(line1, line2, line3) {
  let requisito1;
  let requisito2;
  if (line1 < (line2 + line3) && line2 < (line1 + line3) && line3 < (line2 + line1)) {
    requisito1 = true;
  } else { requisito1 = false; }

  if (Math.abs(line1) > line2 - line3 && Math.abs(line2) > line1 - line3 && Math.abs(line3) > line2 - line1) {
    requisito2 = true
  } else { requisito2 = false; }

  if (requisito1 === true && requisito2 === true ) {
    return true
  } else { return false }
}

// Desafio 13
function hydrate(string) {
  let drinkNumber = string.match(/\d+/g).map(Number) // referencia; https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
  let sum = drinkNumber.reduce((total, numero) => total + numero, 0); // referencia; https://www.devmedia.com.br/javascript-reduce-reduzindo-uma-colecao-em-um-unico-objeto/37981
  if (sum === 1) {
    return `${sum} copo de água`;
  } return `${sum} copos de água`;
}

console.log(techList(['java', 'css', 'HTML'], 'Eicke'));

console.log(triangleCheck(3, 6, 8));

console.log(hydrate('1 vodka, 3 cachaças e 1 caipirinha'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

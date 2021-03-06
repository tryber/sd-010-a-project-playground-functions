// Desafio 10
function techList(arrayTechs, name) {
  if (arrayTechs.length === 0) {
    return 'Vazio!';
  }
  let arrayNamesSort = arrayTechs.sort(); // ordenando arrayTechs.
  let arrayObjectInsert = []; // criando array vazio que será lotado de objetos e retornado.
  for (let i = 0; i < arrayNamesSort.length; i += 1) {
    let objectInsert = {}; // criando objeto vazio que será preenchido e colocado no arrayObjectInsert
    // objectInsert['tech'] = arrayNamesSort[i];
    // objectInsert['name'] = name;
    objectInsert = {
      tech: arrayNamesSort[i],
      name,
    };
    //  objectInsert[i].tech = arrayNamesSort[i];
    //  objectInsert[i].name = name;
    arrayObjectInsert.push(objectInsert);
  }
  return arrayObjectInsert;
}
// let array = ['React', 'Jest', 'HTML', 'CSS', 'JavaScript'];
// console.log(techList(array, 'stanrley'));

//  Desafio 11
function verificaArrayNumber(arrayNumber) { // função que retorna false se o arrayNumbe tiver algum inconssitencia
  let count = 0;
  for (let j = 0; j < arrayNumber.length; j += 1) {
    let compareNumber = arrayNumber[j];
    for (let i = 0; i < arrayNumber.length; i += 1) {
      if (compareNumber === arrayNumber[i]) {
        count += 1;
      }
      if (arrayNumber[i] < 0 || arrayNumber[i] > 9) {
        return false;
      }
    }
    if (count >= 3) {
      return false;
    }
    count = 0;
  }
}
function retornaNumeroMontado(arraySeparado) { // função que retorna o array em forma de uma unica string.
  let numberReturn = '(';
  for (let i = 0; i < arraySeparado.length; i += 1) {
    if (i === 1) {
      numberReturn += arraySeparado[i] + ') ';
    } else if (i === 6) {
      numberReturn += arraySeparado[i] + '-';
    } else {
      numberReturn += arraySeparado[i];
    }
  }
  return numberReturn;
}
function generatePhoneNumber(arrayNumber) {
  if (arrayNumber.length !== 11) {
    return 'Array com tamanho incorreto.';
  }
  if (verificaArrayNumber(arrayNumber) === false) {
    return 'não é possível gerar um número de telefone com esses valores';
  }
  return retornaNumeroMontado(arrayNumber);
}
// array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1];
// console.log(generatePhoneNumber(array));

//  Desafio 12
function verificaLineA(lineA, lineB, lineC) {
  let absBC = Math.abs(lineB - lineC);
  if (lineA > absBC && lineA < lineB + lineC) {
    return true;
  }
  return false;
}
function verificaLineB(lineA, lineB, lineC) {
  let absAC = Math.abs(lineA - lineC);
  if (lineB > absAC && lineB < lineA + lineC) {
    return true;
  }
  return false;
}
function verificaLineC(lineA, lineB, lineC) {
  let absAB = Math.abs(lineA - lineB);
  if (lineC > absAB && lineC < lineA + lineB) {
    return true;
  }
  return false;
}
function triangleCheck(lineA, lineB, lineC) {
  let a = lineA;
  let b = lineB;
  let c = lineC;
  if (verificaLineA(a, b, c) && verificaLineB(a, b, c) && verificaLineC(a, b, c)) {
    return true;
  }
  return false;
}
// console.log(triangleCheck(10,14,8));

//  Desafio 13
function hydrate(stringPedido) {
  let r = /\d+/g; // fonte : https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994
  let findNumber = stringPedido.match(r);
  let water = 0;
  // laço para somar numero encontrados em findNumber
  for (let i = 0; i < findNumber.length; i += 1) {
    let altType = parseInt(findNumber[i], 10);
    water += altType;
  }
  if (water === 1) {
    return `${water} copo de água`;
  }
  return `${water} copos de água`;
  // seu código aqui
}
// let teste = hydrate('1 copo de 10 cerveja');
// console.log(teste); 

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

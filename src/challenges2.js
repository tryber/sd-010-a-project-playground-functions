// Desafio 10 <-- Contribuição Felipe Muller e Lucas Lara-->
function techList(array, name) {
  if (array.length === 0) {
    return 'Vazio!'
  }
  let arrayTech = [];
  array.sort();
  for (index = 0; index < array.length; index += 1) {
    let learningTech = {
      tech: array[index],
      name: name
    };
    arrayTech.push(learningTech);
  }
return arrayTech.sort();
}

// Desafio 11 < ---- Contribuição Felipe Muller e Lucas Lara -->
function generatePhoneNumber(arrayNumber) {
  if (arrayNumber.length !== 11){
    return 'Array com tamanho incorreto.'
  }
  for (let index = 0; index < arrayNumber.length; index += 1) {
    let count = 0;
    for (let indexNumber = 0; indexNumber < arrayNumber.length; indexNumber += 1) {
      if (arrayNumber[index] === arrayNumber[indexNumber]) {
        count += 1;
      } if (arrayNumber[index] < 0 || arrayNumber[index] > 9 || count >=3) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  }
    return `(${arrayNumber[0]}${arrayNumber[1]}) ${arrayNumber[2]}${arrayNumber[3]}${arrayNumber[4]}${arrayNumber[5]}${arrayNumber[6]}-${arrayNumber[7]}${arrayNumber[8]}${arrayNumber[9]}${arrayNumber[10]}`
}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if (lineA < lineB + lineC && lineA > Math.abs(lineB - lineC)) {
    if (lineB < lineA + lineC && lineB > Math.abs(lineA - lineC)){
      if (lineC < lineB + lineA && lineC > Math.abs(lineB - lineA)) {
        return true;
      }
    }
  }
    return false;
 
  // seu código aqui
}

// Desafio 13
function hydrate(string) {
  let inter = string.match(/\d+/g);
  let numbers = 0;
  for (let key in inter) {
    numbers += parseInt(inter[key]);
    }  
  if (numbers > 1){
  return `${numbers} copos de água`;
  }
  return `${numbers} copo de água`;
  // seu código aqui
}

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'));
console.log(generatePhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1]));
console.log(triangleCheck(10, 14, 8));
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

function techList(tech, name) {

  tech.sort();
  let techs = [];

  if (tech.length === 0) {
    return 'Vazio!';
  }

  for (let indexTech = 0; indexTech < tech.length; indexTech += 1) {
    techs.push(
      {
        tech: tech[indexTech], 
        name: name,
      }
    );
  }
  return techs;
}

function generatePhoneNumber(numbers) {

  let telephoneNumber;

  let lowerNumber = Math.min.apply(Math, numbers);

  let maxNumber = Math.max.apply(Math, numbers);

  let repeatedNumber = 0;

  let comparedNumber = 0;

  for (let repeatIndex = 0; repeatIndex < numbers.length; repeatIndex += 1) {

    for (let compareIndex = 0; compareIndex < numbers.length; compareIndex += 1) {

      if (numbers[repeatIndex] === numbers[compareIndex]) {
        repeatedNumber += 1;
      }
      if (repeatedNumber >= 3) {
        comparedNumber += 1;
      }
      if (compareIndex === (numbers.length - 1)) {
        repeatedNumber = 0;
      }
    }
  }

  if (numbers.length > 11 || numbers.length < 11){
    telephoneNumber = 'Array com tamanho incorreto.';    
  } else if (lowerNumber < 0 || comparedNumber > 2 || maxNumber > 9) {
    telephoneNumber = 'não é possível gerar um número de telefone com esses valores';
  } else {
  telephoneNumber = `(${numbers[0]}${numbers[1]}) ${numbers[2]}${numbers[3]}${numbers[4]}${numbers[5]}${numbers[6]}-${numbers[7]}${numbers[8]}${numbers[9]}${numbers[10]}`
  }

  return telephoneNumber;
}

function triangleCheck(lineA, lineB, lineC) {

  let sideA = (Math.abs(lineB - lineC)) < lineA && lineA < (lineB + lineC);
  let sideB = (Math.abs(lineA - lineC)) < lineB && lineB < (lineA + lineC);
  let sideC = (Math.abs(lineA - lineB)) < lineC && lineC < (lineA + lineB);

  if (sideA === sideB === sideC === true) {
    return true;
  }
  return false;
}

function hydrate(text) {

  let filter = /\d+/g;

  //  let filter found in https://stackoverflow.com/questions/1623221/how-to-find-a-number-in-a-string-using-javascript/30160994, author jesterjunk answered May 11 '15 at 6:36

  let numberos = text.match(filter);

  let sumNumberos = 0;

  for (let index = 0; index < numberos.length; index += 1) {
    sumNumberos += Number(numberos[index]);
  }

  if (sumNumberos === 1) {
    return `${sumNumberos} copo de água`;
  }

  return `${sumNumberos} copos de água`;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

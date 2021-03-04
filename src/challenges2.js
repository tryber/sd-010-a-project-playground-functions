// Desafio 10
function techList(myArray, myString) {
  myArray.sort();
  let myObject = [];

  if (myArray.length === 0) {
    return 'Vazio!';
  }

  for (let index = 0; index < myArray.length; index += 1) {
    myObject.push(
      {
        tech: myArray[index],
        name: myString,
      },
    );
  }
  return myObject;
}

// Desafio 11
function generatePhoneNumber(myArray) {
  if (myArray.length !== 11) {
    return 'Array com tamanho incorreto.';
  }

  for (let index = 0; index < myArray.length; index += 1) {
    if (myArray[index] < 0 || myArray[index] > 9) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    for (let j = 1; j < myArray.length; j += 1) {
      for (let k = 2; k < myArray.length; k += 1) {
        if (index !== j && index !== k && j !== k) {
          if ((myArray[index] === myArray[j]) && (myArray[index] === myArray[k]) && (myArray[j] === myArray[k])) {
            return 'não é possível gerar um número de telefone com esses valores';
          }
        }
      }
    }
  }

  let myString = '';

  for (let index = 0; index < myArray.length; index += 1) {
    switch (index) {
    case 0:
      myString += '(' + myArray[index];
      break;
    case 1:
      myString += myArray[index] + ')';
      break;
    case 2:
      myString += ' ' + myArray[index];
      break;
    case 6:
      myString += myArray[index] + '-';
      break;
    default:
      myString += myArray[index];
    }
  }

  return myString;

}

console.log(generatePhoneNumber([1, 2, 3, 4, 5, 3, 7, 8, 9, 3, 1]));

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  if ((lineA < lineB + lineC) && (lineB < lineA + lineC) && (lineC < lineB + lineA)) {
    if (Math.abs(lineA > lineB - lineC) && Math.abs(lineB > lineC - lineA) && Math.abs(lineC > lineB - lineA)) {
      return true;
    }
  }
  return false;
}

console.log(triangleCheck(16, 20, 30));

// Desafio 13
function hydrate(myEntry) {
  let num = [];
  let sum = 0;
  let aux = [];

  for (let index = 0; index < myEntry.length; index += 1) {
    if (myEntry[index] >= 0 && myEntry[index] <= 9 && myEntry[index] !== ' ') {
      num.push(myEntry[index]);
    }
  }

  for (let index = 0; index < num.length; index += 1) {
    aux.push(parseInt(num[index], 10));
  }

  for (let index = 0; index < aux.length; index += 1) {
    sum += aux[index];
  }

  if (sum < 2) {
    return sum + ' copo de água';
  }
  return sum + ' copos de água';
}

console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

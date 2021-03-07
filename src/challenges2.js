// Desafio 10
function techList(array, name) {
  // esse codigo foi baseado por essa discussão no stack overflow https://stackoverflow.com/questions/5868850/creating-list-of-objects-in-javascript
  array.sort();
  let list = [];
  if (array.length === 0) {
    return 'Vazio!';
  }

  else {for (let index = 0;index < array.length;index += 1)
     {list.push({ tech: array[index], name: name })
    }
  }
  return list
}

// Desafio 11
function generatePhoneNumber(list) {
  if (list.length != 11) {
    return 'Array com tamanho incorreto.'
  }
  function times(a, b) {
    let counter = 0;
    for (let index of a) {
      if (index === b) {
        counter += 1;
      }
    }
    return counter;
  }
  for (let index of list) {
    if (times(list, index) >= 3 || index > 9 || index < 0) {
      return 'não é possível gerar um número de telefone com esses valores';
    }
  };
  return '(' + list[0] + list[1] + ')' + ' ' + list[2] + list[3] + list[4] + list[5] + list[6] + '-' + list[7] + list[8] + list[9] + list[10]  
  
}
console.log(generatePhoneNumber([2,2,6,8,7,9,8,3,4,2,6,2]))

// Desafio 12
function triangleCheck(a, b, c) {
  return (a < b + c && a > Math.abs(b - c));
}

// Desafio 13
function hydrate(str) {
  let sum = 0;
  let macth = '123456789';
  for (let index in str) {
    if (macth.includes(str[index])) {
      sum += Number(str[index]);
    }
  }
  if (sum === 1) {
    return (sum+'') + ' copo de água'
  }
  else {
      return (sum+'') + ' copos de água'
  } 
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

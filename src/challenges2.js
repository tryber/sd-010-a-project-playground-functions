// Desafio 10
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
};

console.log(techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Maria'));

// Desafio 11 - PENDENTE!
function generatePhoneNumber() {
  /*let repete = 0;
  for (let index = 0; index < array.length; index += 1) {
    if (array[index] < 0 || array[index] > 9 ||  {
      return 'não é possível gerar um número de telefone com esses valores';
    }
    if (array.length > 11) {
    return 'Array com tamanho incorreto';
    } 
    if (array[index] === array[index]) {
    repete ++
      if (repete > 2) {
        return 'não é possível gerar um número de telefone com esses valores';
      }
    }
  } else {
    let numbers = array.join('');
    
  } */  
} 

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
   if (lineA < (lineB + lineC) && lineA > Math.abs(lineB - lineC)) {
    return true;
   } else {
    return false;
   }
}
console.log(triangleCheck(10, 14, 8));
console.log(triangleCheck(50, 10, 11));
console.log(triangleCheck(7, 20, 10));

// Desafio 13
function hydrate(string) {
  let water = 0;
  for (let i = 0; i < string.length; i += 1) {
    if (string[i] > 0 && string[i] < 10) {
      water = water + parseInt(string[i]);
    }  
  }
  if (water === 1) {
    return water + ' copo de água';
  } else if (water > 1) {
    return water + ' copos de água';
  }
}

console.log(hydrate('1 cerveja'));
console.log(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho'));
console.log(hydrate('2 vodkas e 8 tequilas'));

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

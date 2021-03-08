// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true) {
    return true;
  }
  else {
    return false;
  }
}
console.log(compareTrue(true, true));

// Desafio 2
function calcArea(base, height) {
  let area = (base * height) / 2;
  return area;
}
console.log(calcArea(10, 50));

// Desafio 3
function splitSentence(sentence) {
  sentence = sentence.split(' ');
  return sentence
}
console.log('foguete trybe')

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ", " + array[0];   
}
console.log(concatName(['Lucas', 'Cassiano', 'Ferraz', 'Paolillo']));


// Desafio 5
function footballPoints(wins, ties) {
  let pontuacaoVitorias = wins * 3;
  let pontuacaoEmpates = ties * 1;
  let totalPontos = pontuacaoVitorias + pontuacaoEmpates;
  return totalPontos
}
console.log(footballPoints(14,8));

// Desafio 6
function highestCount(numeros) {
  let repetidos = 0; 
  let numeroM = 0;
    for (let index = 0; index < numeros.length; index = index + 1){
        if (numeroM < numeros[index]){
            numeroM = numeros[index]
        }
    }
    for (index = 0; index < numeros.length; index = index + 1){
        if (numeroM === numeros[index]){
            repetidos = repetidos + 1;
        }
    }
  return repetidos;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  // Até essa parte, peguei com os colegas, daqui para baixo eu mesmo fiz.
  if (dist1 < dist2) {
    return "cat1";
  } else if (dist2 < dist1) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}

// Desafio 8
function fizzBuzz(numeros) {
  let array = [];

  for (let index in numeros) {
    if (numeros[index] % 3 === 0 && numeros[index] % 5 === 0) {
      array.push("fizzBuzz");
    } else if (numeros[index] % 3 === 0) {
      array.push("fizz");
    } else if (numeros[index] % 5 === 0) {
      array.push("buzz");
    } else {
      array.push("bug!");
    }
  }
  return array;
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
};

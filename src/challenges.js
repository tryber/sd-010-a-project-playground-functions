// Desafio 1
function compareTrue(value1, value2) {
  if (value1 === true && value2 === true){
    return true
  }
  else{
    return false
  }
}

// Desafio 2
function calcArea(base, height) {
  let area = (base*height)/2
  return area
}

// Desafio 3
function splitSentence(frase) {
  return frase.split(' ')
}

// Desafio 4
function concatName(lista) {
  return (lista[lista.length -1] + ", " + lista[0])
}

// Desafio 5
function footballPoints(wins, ties) {
  return wins*3 + ties
}

// Desafio 6
function highestCount(numeros) {
  let contador = 0
  let numero = 0
  let maiorContador = 0
  let numeroMaximo = 0;
  for (let valorMaximo in numeros) {
    if (numeros[valorMaximo] > numeroMaximo) {
      numeroMaximo = numeros[valorMaximo];
    }
  }
  let repeticoes = 0;
  for (let repetido in numeros) {
    if (numeros[repetido] === numeroMaximo) {
      repeticoes += 1;
    }
  }
  return repeticoes;
}

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let distance1 = Math.abs(mouse - cat1);
  let distance2 = Math.abs(mouse - cat2);
  if (distance1 < distance2){
    return("cat1")
  }
  else if (distance2 < distance1){
    return("cat2")
  }
  else if (distance1 == distance2){
    return("os gatos trombam e o rato foge")
  }
}

// Desafio 8
function fizzBuzz(numeros) {
let texto = []
  for (let index in numeros){
    if (numeros[index] % 3 == 0 && numeros[index] % 5 == 0){
      texto.push('fizzBuzz')
    }
    if (numeros[index] % 3 == 0 && numeros[index] % 5 != 0){
      texto.push('fizz')
    }
    else if (numeros[index] % 3 != 0 && numeros[index] % 5 == 0){
      texto.push('buzz')
    }
    else if (numeros[index] % 3 != 0 && numeros[index] % 5 != 0){
      texto.push('bug!')
    }
  }
return texto
}

// Desafio 9
function encode(frase) {
  frase = frase.replace(/a/g, 1).replace(/e/g, 2).replace(/i/g, 3).replace(/o/g, 4).replace(/u/g, 5);
  return frase;
}
function decode(frase) {
  frase = frase.replace(/1/g, 'a').replace(/2/g, 'e').replace(/3/g, 'i').replace(/4/g, 'o').replace(/5/g, 'u');
  return frase;
}
// funções consertadas com ajuda da minha prima programadora

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

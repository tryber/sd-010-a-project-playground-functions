// Desafio 1
function compareTrue(calculo1 , calculo2) {
  if (calculo1 === true && calculo2 === true) {
    return true;
} else {
    return false;
}

}

// Desafio 2
function calcArea(base , height) {
  return base * height / 2;
}

// Desafio 3
function splitSentence(texto) {
  return texto.split(" ");
}
// Desafio 4
function concatName(nomes) {
  // seu código aqui
  return `${nomes[nomes.length -1]}, ${nomes[0]}`
}

// Desafio 5
function footballPoints(wins , ties) {
  let pontos
  return pontos = wins * 3 + ties

}

// Desafio 6
function highestCount(array) {
  let maiorNumeroAteAgora = array[0];
  let count = 0;
  for (let index = 0; index < array.length; index += 1){
    if (maiorNumeroAteAgora < array[index]){
      maiorNumeroAteAgora = array [index];
    }
  }
  for (let index = 0; index < array.length; index += 1){
    if (array[index] === maiorNumeroAteAgora){
      count += 1;
    }
  }
  return count
}
  //referencia https://pt.stackoverflow.com/questions/459413/verificar-quantas-vezes-um-n%C3%BAmero-aparece-no-array //
  // seu código aqui

// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  let cat1Position = Math.abs(cat1 - mouse)
  let cat2Position = Math.abs(cat2 - mouse) 
  if (cat1Position > cat2Position) {
    return 'cat2'
  }
  else if (cat2Position > cat1Position) {
    return 'cat1'
  
  } else {
    return 'os gatos trombam e o rato foge'
  }

}

  // seu código aqui

// Desafio 8
function fizzBuzz(Numbers) {
  let Return = [];
  for (let i = 0; i < Numbers.length; i += 1) {
    if (Numbers[i] % 3 === 0 && Numbers[i] % 5 === 0) {
      Return.push('fizzBuzz');
    } else if (Numbers[i] % 3 === 0) {
      Return.push('fizz');
    } else if (Numbers[i] % 5 === 0) {
      Return.push('buzz');
    } else {
      Return.push('bug!');
    }
  }
  return Return;

 
}

// Desafio 9
function encode(palavras) {
  palavras = palavras.replaceAll('a' , '1').replaceAll('e' , '2').replaceAll('i' , '3').replaceAll ('o' , '4').replace ('u' , '5');
  return palavras;

}

function decode(codigos) {
  codigos = codigos.replaceAll('1' , 'a').replaceAll('2' , 'e').replaceAll('3' , 'i').replaceAll('4' , 'o').replaceAll ('5' , 'u');
  return codigos

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

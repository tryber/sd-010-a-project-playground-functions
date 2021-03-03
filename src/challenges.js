// Desafio 1
function compareTrue(value1, value2) {
  // seu código aqui
  if (value1 === true && value2 === true) {
    return true;
  } else {
    return false;
  }
}

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
  return (base * height) / 2

}

// Desafio 3
function splitSentence(string) {
  // seu código aqui
  // vi isso em : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/String/split
  return string.split(" ");

}

// Desafio 4
function concatName(name_array) {
  // seu código aqui
  //bloco abaixo eu fiz
  /*     var resultado = [];
     for (let index = 0; index < name_array.length; index++) {
           if (index === 0){
                resultado[index]= name_array[name_array.length -1];
           } 
          if (index === name_array.length-1){
              resultado.push(name_array[0]);
          }
     }
     
    return '${resultado[0]}, ${resultado[1]}'; */

  //bloco abaixo aprendi no plantão
  return `${name_array[name_array.length - 1]}, ${name_array[0]}`;

}



// Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
  let valueWins = 3;
  let valueTies = 1;
  return (wins * valueWins) + (ties * valueTies);

}



// Desafio 6
function highestCount(number) {
  // seu código aqui
  let max = 0;
  let total = 0;
  for (let index = 0; index < number.length; index++) {

    if (number[index] >= max) {
      max = number[index];

    }
  }
  for (let i = 0; i < number.length; i++) {
    if (max === number[i]) {
      total += 1;
    };

  }
  return total;
}





// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  // documentação em : https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/sign
  let clozerCat1 = mouse - cat1;
  let clozerCat2 = mouse - cat2;
  if (Math.sign(clozerCat1) === -1) {
    clozerCat1 = clozerCat1 * (-1);
  }
  if (Math.sign(clozerCat2) === -1) {
    clozerCat2 = clozerCat2 * (-1);
  }
  if (clozerCat1 > clozerCat2) {
    return "cat2";
  } else if (clozerCat2 > clozerCat1) {
    return "cat1";
  } else {
    return "os gatos trombam e o rato foge";
  }

}



// Desafio 8
function fizzBuzz(arrayNamber) {
  // seu código aqui
  let result = [];
  for (let index = 0; index < arrayNamber.length; index++) {
    if (arrayNamber[index] %5 != 0 && arrayNamber[index] %3 === 0) {
      result.push("fizz");
    } else if (arrayNamber[index] %3 != 0 && arrayNamber[index] %5 === 0) {
      result.push("buzz");
    } else if (arrayNamber[index] %3 === 0 && arrayNamber[index] %5 === 0) {
      result.push("fizzBuzz");
    } else {
      result.push("bug!");
    }
  }
  return result;
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

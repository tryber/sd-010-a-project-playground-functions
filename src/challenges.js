// Desafio 1
function compareTrue(valueA, valueB) {
  // seu código aqui
   return valueA && valueB;

  }  

// Desafio 2
function calcArea(base, height) {
  // seu código aqui
   return (base*height/2)
  }

// Desafio 3
function splitSentence(sentence) {
  // seu código aqui
     return sentence.split(" ")
}

// Desafio 4
function concatName (name) {
  // seu código aqui
  let lastName = name[name.length - 1];
  let completeName = lastName + ', ' + name[0]; 
  return completeName
  
 }


 // Desafio 5
function footballPoints(wins, ties) {
  // seu código aqui
     return (wins*3 + ties);
    
}

// Desafio 6
function highestCount(num) {
  // seu código aqui 
let higher = Math.max(...num);
let rep = 0;

for (let i = 0; i < num.length; i++) {
    if (num[i] === higher) {
      rep++
    } 
  }
  return rep
}
 

  
// Desafio 7
function catAndMouse(mouse, cat1, cat2) {
  // seu código aqui
  if (Math.abs(cat1 - mouse) < Math.abs(cat2 - mouse)){
    return "cat1";
  }
  else if (Math.abs(cat2 - mouse) <  Math.abs(cat1- mouse)) {
    return "cat2";
  }
  else if (Math.abs(cat1 -mouse) === Math.abs(cat2 - mouse)){
    return "os gatos trombam e o rato foge";
  }
  }
  
// Desafio 8
function fizzBuzz(arrayNum) {
  // seu código aqui
  let res= []
 
    for (let i = 0; i < arrayNum.length; i+=1){
      if ((arrayNum[i] % 3 === 0) && (arrayNum[i] % 5 ===0)){
        res.push('fizzBuzz');
      }
      else if (arrayNum[i] % 5 === 0){
        res.push('buzz');
      }
      else if (arrayNum[i] % 3 === 0)  {
        res.push('fizz');
      }
      else{
        res.push('bug!');
      }
    
    }
    return res
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

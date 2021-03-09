// Desafio 1
function compareTrue(x,y) {
  if ((x && y)==true){
    return true;
  }
  else{
    return false;
  }
}
// Desafio 2
function calcArea(base,height) {
  return (base*height/2);
}

// Desafio 3
function splitSentence(word) {
  let setence="";
  let setenceSplited=[];
  for(let index=0;index<word.length;index++){
    if(word[index]!=" "){
      setence=setence+word[index];
    }else if(word[index]==" "){
      setenceSplited.push(setence);
      setence="";
    }
  }
  setenceSplited.push(setence);
  return setenceSplited;
}

// Desafio 4
let words=['Lucas', 'Cassiano', 'Ferraz', 'Paolillo'];
function concatName(words) {
 let firstConcat="";
 let lastConcat=""; 
  for (let index = 0; index < words.length; index++) {
      if(index==0){
        firstConcat=words[index];
      }else if(index == words.length-1){
        lastConcat=words[index];
      }
    }
  const concat=lastConcat+", "+firstConcat;
  return concat;
}
// Desafio 5
function footballPoints(wins, ties){
 let winsPoints=wins*3
 let tiesPoints=ties*1
 let points=winsPoints+tiesPoints; 
 return points
}
// Desafio 6
function getBiggest(array){
  let biggestOne=0;
  for (let index = 1; index < array.length; index++) {
        if(array[index]>biggestOne){
        biggestOne=array[index];
    }  
  }
  return biggestOne;
}
function highestCount(array){
  let biggestOne=getBiggest(array)
  let repeaterchecker=0;
    for (let index = 0; index < array.length; index++) {
      if(biggestOne==array[index]){
        repeaterchecker++;
      }
  }
  return repeaterchecker
}
// Desafio 7
function checkDistance(mouse,cat1,cat2){
  let distancebetweenCat1=0;
  let distancebetweenCat2=0;
  let distances=[];
  if(cat1<mouse){
      for (let index=cat1; index < mouse; index++) {
                distancebetweenCat1++
      }
    }else if(cat1>mouse){
    for (let index=cat1; index > mouse; index--) {
              distancebetweenCat1++
      }
    }
     if(cat2>mouse){
      for (let index=cat2; index > mouse; index--) {
        distancebetweenCat2++
    }
  } else if(cat2<mouse){
    for (let index=cat2; index < mouse; index++) {
      distancebetweenCat2++
    }
  } 
  distances.push(distancebetweenCat1);
  distances.push(distancebetweenCat2);
  return distances
}
function catAndMouse(mouse,cat1,cat2){
  let distances=checkDistance(mouse,cat1,cat2);
  let catcher;
  if(distances[0]>distances[1]){
    catcher='cat2'
  }else if(distances[1]>distances[0]){
    catcher='cat1'
  }else(
    catcher='os gatos trombam e o rato foge'
  )
return catcher
}
// Desafio 8

function fizzBuzz(array) {
let itsFizzOrBuzz=[];
  for (let index = 0; index < array.length; index+=1) {
        if(((array[index]%3)==0)&&((array[index]%5)==0)){
            itsFizzOrBuzz.push("fizzBuzz")
        }
        else if((array[index]%3)==0){
          itsFizzOrBuzz.push("fizz");
        }
        else if((array[index]%5)==0){
          itsFizzOrBuzz.push("buzz");

        }
        else{
          itsFizzOrBuzz.push("bug!");
        }
  }
  return itsFizzOrBuzz;
}
n=[3,4,12,15,45,35,85,65]
// Desafio 9
function itsVowel(letter){
let vowels=["a","e","i","o","u"]
let itsVowel;
  for (let index = 0; index < vowels.length; index++) {
    if(letter==vowels[index])
    itsVowel = true;
  }
  return itsVowel
}

function encode(string) {
let stringEncoded="";
  for (let index = 0; index < string.length; index++) {
    if(itsVowel(string[index])==true){
      switch (string[index]){
        case "a":
          stringEncoded+="1"
          break;
        case "e":
          stringEncoded+="2"
          break;
        case "i":
          stringEncoded+="3"
          break;
        case "o":
          stringEncoded+="4"
          break;
        case "u":
          stringEncoded+="5"
          break;
      }  
    }else{
      stringEncoded+=string[index];
    }
  }
  return stringEncoded;
}

function decode(string) {
let stringDecoded=""
  for(index=0;index<string.length;index+=1){
    let letter=string[index];
      switch (letter) {
        case "1":
          stringDecoded+="a"
          break;
        case "2":
          stringDecoded+="e"
          break;
        case "3":
          stringDecoded+="i";
          break;
        case "4":
          stringDecoded+="o"
          break;
        case "5":
          stringDecoded+="u"
          break;
        default:
          stringDecoded+=letter;
          break;
      }
  }
  return stringDecoded;
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

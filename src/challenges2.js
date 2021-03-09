// Desafio 10
function techList(array,name) {
  array.sort()
  let arrayWithObject=[];
  for(let index=0;index<array.length;index+=1){
      techonology=array[index];
     let newObject={
        tech:techonology,
        name:name
      }
      arrayWithObject.push(newObject); 
    }
  if(array.length<=0){
      return "Vazio!" 
    }
  else{
   return arrayWithObject;
  }
}

// Desafio 11

let test=[5,2,8,1,5,3,7,2,8,9,0]
function ceilChecker(array){
  let counter=0;
  let repeated=[];
  let ceilGeted=false;
  for (let index = 1; index < array.length; index++) {
      for (let ondex = 0; ondex < index; ondex++) {
        if(array[ondex]==array[index]){
          repeated.push(array[ondex]);
        } 
      
    }
   
    if(array[index]<0||array[index]>9){
          ceilGeted=true;
        }
      }
    for (let index = 1; index < repeated.length; index++) {
       for (let ondex = 0; ondex < index; ondex++) {
         if(repeated[index]==repeated[ondex]);
         counter+=1        
      }
      
    }
  if(counter>=3){
    ceilGeted=true
  }
  return ceilGeted
}

function generatePhoneNumber(array) {
let ceil = ceilChecker(array);
let result = ""
  if(array.length!=11){
    result+="Array com tamanho incorreto."
  }else if(ceil==true){
    result+="não é possível gerar um número de telefone com esses valores"
  }else{
    for (let index = 0; index < array.length; index++) {
      if(index==0){
        result+="("+array[index];
      }else if(index==1){
        result+=array[index]+")"
      }
      else if(index==2){
        result+=" "+array[index]
      }
      else if(index>=3&&index<=6){
        result+=array[index];
      }
      else if(index==7){
        result+="-"+array[index];
      }
      else{
        result+=array[index];
      }
    }
  }
  return result;
}
// Desafio 12
function triangleCheck(x,y,z) {
  let result;
  if(x>(y+z)||y>(x+z)||z>(x+y)){
    result = false;
  }else if(x<(x-y-z)||y<(x-y-z)||z<(x-y-z)){
    result = false;
  }else if(x<(y+z)||y<(z+x)||z<(x+y)||x>(x-y-z)||y>(x-y-z)||z>(x-y-z)){
    result = true;
  }
  return result;
}
// Desafio 13
function hydrate(string) {
 let drinkWater=0;
 let copo;
 for (let index = 0; index < string.length; index++) {
  let x = string[index];
  if(x==1||x==2||x==3||x==4||x==5||x==6||x==7||x>8){
    drinkWater+=parseInt(x)
  }
 } if(drinkWater<2){copo=" copos de água"}else{copo=" copos de água"};
 return drinkWater+copo;
}
module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

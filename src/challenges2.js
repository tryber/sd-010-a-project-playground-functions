// Desafio 10
function techList(arrayIn, name) {
  let arrayInFixed = arrayIn.sort();
  let exitArray = [];
  let obj = {};
  if (arrayIn.length === 0) {
    exitArray = 'Vazio!';
  } else {
    for (let key in arrayInFixed) {
      obj = {
        tech: arrayInFixed[key],
        name: name
      };
      exitArray.push(obj);
    }
  }
  return exitArray;
}
console.log(techList(['javascript','rubi','unix','html'], 'lucas'));

// Desafio 11
function generatePhoneNumber() {

}

// Desafio 12
function triangleCheck(lineA, lineB, lineC) {
  let result = true;
  let objRules = {
    case1: lineA + lineB,
    case2: lineA + lineC,
    case3: lineB + lineC,
    case4: Math.abs(lineA - lineB),
    case5: Math.abs(lineA - lineC),
    case6: Math.abs(lineB - lineC)
  };
  if (objRules.case1 < lineC || objRules.case2 < lineB || objRules.case3 < lineA || objRules.case4 > lineC 
    || objRules.case5 > lineB || objRules.case6 > lineC) {
    result = false;
  }
  return result;
}

// Desafio 13
function hydrate(drinks) {
  let excludeWords = drinks.replace(/\D+/g, '');
  let drinksToArray = excludeWords.split('').map(Number);
  let sum = 0;
  let toPrint = '';
  for (let index = 0; index < drinksToArray.length; index += 1) {
    sum += drinksToArray[index];
  }
  if (sum <= 1) {
    toPrint = sum + ' copo de água';
  } else {
    toPrint = sum + ' copos de água';
  }
  return toPrint;
}

module.exports = {
  generatePhoneNumber,
  techList,
  hydrate,
  triangleCheck,
};

function FizzBuzz(arrayNumb) {
  let numb = [];
  for (let i = 0; i < arrayNumb.length; i += 1) {
    if (arrayNumb[i] % 3 === 0 && arrayNumb[i] % 5 === 0) {
      numb.push('fizzBuzz');
    } else if (arrayNumb[i] % 3 === 0 && arrayNumb[i] % 5 !== 0) {
      numb.push('fizz');
    } else if (arrayNumb[i] % 3 !== 0 && arrayNumb[i] % 5 === 0) {
      numb.push('buzz');
    } else {
      numb.push('bug!');
    }
  }
  return (numb);
}
console.log(FizzBuzz([2, 15, 7, 9, 45]));
console.log(FizzBuzz([7, 9]));
console.log(FizzBuzz([9, 25]));

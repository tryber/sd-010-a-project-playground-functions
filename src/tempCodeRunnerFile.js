function highestCount(num) {
  // seu código aqui 
let higher = Math.max[num];
let rep = 0;
console.log(higher)
for (let i = 0; i < num.length; i++) {
    if (num[i] === higher) {
      rep++
    } 
  }
  return rep
}
 
console.log(highestCount([2,3,3,1]))
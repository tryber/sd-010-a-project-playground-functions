function catAndMouse(mouse, cat1, cat2) {
  let dist1 = Math.abs(mouse - cat1);
  let dist2 = Math.abs(mouse - cat2);
  if (dist1 < dist2) {
    return "cat1";
  } else if (dist1 > dist2) {
    return "cat2";
  } else {
    return "os gatos trombam e o rato foge";
  }
}
console.log(catAndMouse(15, 12, 13));
console.log(catAndMouse(18, 12, 6));
console.log(catAndMouse(15, 10, 10));

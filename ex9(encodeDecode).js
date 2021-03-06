function encode(string) {
  let frase = '';
  let encrypt = string.split('');
  for (let i = 0; i < encrypt.length; i += 1) {
    switch (encrypt[i]) {
      case 'a':
        encrypt[i] = 1;
        break;
      case 'e':
        encrypt[i] = 2;
        break;
      case 'i':
        encrypt[i] = 3;
        break;
      case 'o':
        encrypt[i] = 4;
        break;
      case 'u':
        encrypt[i] = 5;
        break;
    }
    frase += `${encrypt[i]}`;
  }
  return `${frase}`;
}
console.log(encode('Hi there!'));

function decode(string) {
  let frase = '';
  let encrypt = string.split('');
  for (let i = 0; i < encrypt.length; i += 1) {
    switch (encrypt[i]) {
      case '1':
        encrypt[i] = 'a';
        break;
      case '2':
        encrypt[i] = 'e';
        break;
      case '3':
        encrypt[i] = 'i';
        break;
      case '4':
        encrypt[i] = 'o';
        break;
      case '5':
        encrypt[i] = 'u';
        break;
    }
    frase += `${encrypt[i]}`;
  }
  return `${frase}`;
}
console.log(decode('H3 th2r2!'));

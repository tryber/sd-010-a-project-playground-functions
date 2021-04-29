// /* eslint-disable max-lines-per-function */
// const challenges = require('./challenges');
// const challenges2 = require('./challenges2');

// const { encode, decode } = challenges;
// const { techList, hydrate } = challenges2;
// describe('Encode tests', () => {
//   it('is function', () => {
//     expect(encode).toBeInstanceOf(Function);
//   });

//   it('aeiou = 12345', () => {
//     expect(encode('aeiou')).toBe('12345');
//   });

//   it('bcdfghjklmnpqrstvwxyz = bcdfghjklmnpqrstvwxyz', () => {
//     expect(encode('bcdfghjklmnpqrstvwxyz')).toBe('bcdfghjklmnpqrstvwxyz');
//   });

//   it('string length test = 18', () => {
//     expect(decode('string length test')).toHaveLength(18);
//   });
// });

// describe('Decode tests', () => {
//   it('is function', () => {
//     expect(decode).toBeInstanceOf(Function);
//   });

//   it('12345 = aeiou', () => {
//     expect(decode('12345')).toBe('aeiou');
//   });

//   it('06789 = 06789', () => {
//     expect(decode('06789')).toBe('06789');
//   });

//   it('string length test 123456 = 24', () => {
//     expect(decode('string length test 123456')).toHaveLength(25);
//   });
// });

// describe('Testa a função techList', () => {
//   it('Testa se a função techList é definida', () => {
//     expect(techList).toBeDefined();
//   });
//   it('Testa se techList é uma função', () => {
//     expect(typeof techList).toBe('function');
//   });
//   it('Lista com 5 tecnologias deve retornar uma lista de objetos ordenados', () => {
//     expect(
//       techList(['React', 'Jest', 'HTML', 'CSS', 'JavaScript'], 'Lucas'),
//     ).toEqual([
//       {
//         tech: 'CSS',
//         name: 'Lucas',
//       },
//       {
//         tech: 'HTML',
//         name: 'Lucas',
//       },
//       {
//         tech: 'JavaScript',
//         name: 'Lucas',
//       },
//       {
//         tech: 'Jest',
//         name: 'Lucas',
//       },
//       {
//         tech: 'React',
//         name: 'Lucas',
//       },
//     ]);
//   });
//   it('Lista com 0 tecnologias deve retornar uma mensagem de erro "Vazio!"', () => {
//     expect(techList([], 'Lucas')).toBe('Vazio!');
//   });
// });
// describe('Testa a função hydrate', () => {
//   it('Testa se a função hydrate é definida', () => {
//     expect(hydrate).toBeDefined();
//   });
//   it('Testa se hydrate é uma função', () => {
//     expect(typeof hydrate).toBe('function');
//   });
//   it('Ao receber uma string retorne a sugestão de quantos copos de água deve-se beber', () => {
//     expect(hydrate('1 cerveja')).toBe('1 copo de água');
//     expect(hydrate('1 cachaça, 5 cervejas e 1 copo de vinho')).toBe('7 copos de água');
//     expect(hydrate('2 shots de tequila, 2 cervejas e 1 corote')).toBe('5 copos de água');
//     expect(hydrate('1 copo de catuaba, 1 cervejas e 1 copo de vinho')).toBe('3 copos de água');
//     expect(hydrate('4 caipirinhas e 2 cervejas')).toBe('6 copos de água');
//   });
// });

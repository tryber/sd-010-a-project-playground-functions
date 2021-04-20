const { encode, decode } = require('./challenges');

describe('Exercicio Parte 2', () => {
    it('Testa se Encode e Decode sao funções: ', () => {
        expect(encode).toBeDefined();
    });

    it('Testa se as vogais a,e,i,o,u são transformadas em 1,2,3,4,5: ', ()=> {
        expect(encode('aeiou')).toEqual('12345');
    })

    it('Testa se os numeros 12345 sao convertidos em aeiou: ', ()=> {
        expect(decode('12345')).toEqual('aeiou');
    })

    it('Testa se as demais letras nao sao convertidas: ', ()=> {
        expect(encode('bomdia')).toEqual('b4md31');
    })

    it('Testa se a string retornada tem a mesma quantidade de caracteres que a string passada por parâmetro: ', ()=> {
        expect(encode('trybe').length).toBe(5);
    })
})


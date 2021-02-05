const getUserName = require('./exercício-2');

describe('Exercício-2', () => {
    it('Encontrar usuário', () => {
        expect.assertions(1);
        return getUserName(4).then((data) => {
            expect(data).toEqual('Mark');
        });
    });
});

describe("Exercício - 2. User não existe", () => {
    it('retorna um erro', () => {
        expect.assertions(1);
        return getUserName(10).catch((error => {
          expect(error).toEqual({error: 'User with 10 not found.'});  
        }));
    });
});
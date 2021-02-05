const uppercase = require('./exercício-1')

describe('Exercício-1', () => {
    it('Transforma as letras de uma palavra em letras maiúsculas', () => {
        expect.assertions(1);
        uppercase('ana', (data) => {
            expect(data).toBe('ANA');
        });
    });
});
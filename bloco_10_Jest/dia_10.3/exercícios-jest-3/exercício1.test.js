const { TestScheduler } = require('jest');
const  exercício = require('./exercício1');

describe('Exerciçio - 1', () => {
    it('Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada', () => {
        exercício.numbers = jest.fn()
        .mockReturnValueOnce(10);
    
        expect(exercício.numbers()).toBe(10);
        expect(exercício.numbers).toHaveBeenCalled();
        expect(exercício.numbers).toHaveBeenCalledTimes(1);
    });
});



test('Exercício - 2', () => {
    exercício.numbers = jest.fn()
    .mockImplementationOnce((a, b) => a / b);
    
    
    expect(exercício.numbers(20, 2)).toBe(10);
    expect(exercício.numbers).toHaveBeenCalled();
    expect(exercício.numbers).toHaveBeenCalledTimes(1);
    expect(exercício.numbers).toHaveBeenCalledWith(20, 2);
});


describe('Exercício - 3', () => {
test('mockando função para receber 3 parâmetros e retornar sua multiplicação', () => {
    exercício.numbers = jest.fn()
    .mockImplementation((a, b, c) => a * b * c);

    expect(exercício.numbers(1, 2, 3)).toBe(6);
    expect(exercício.numbers).toHaveBeenCalled();
    expect(exercício.numbers).toHaveBeenCalledTimes(1);
    expect(exercício.numbers).toHaveBeenCalledWith(1, 2, 3);   
});

test('mockando função que recebe um parâmetro e retorna seu dobro', () => {
    exercício.numbers.mockReset();

    exercício.numbers.mockImplementation(a => a * 2);

    expect(exercício.numbers(2)).toBe(4);
    expect(exercício.numbers).toHaveBeenCalled();
    expect(exercício.numbers).toHaveBeenCalledTimes(1);
    expect(exercício.numbers).toHaveBeenCalledWith(2);   
});
});
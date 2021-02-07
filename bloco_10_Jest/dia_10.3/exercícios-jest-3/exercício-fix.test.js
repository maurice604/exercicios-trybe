const exercício = require('./exercício-fix');

/*describe('Exercício para fixar', () => {
    it('Faça o mock da funcão subtrair e teste sua chamada', () => {
        exercício.subtrair = jest.fn()
        .mockReturnValueOnce(10);

        expect(exercício.subtrair(20, 10)).toBe(10);
        expect(exercício.subtrair).toHaveBeenCalled();
        expect(exercício.subtrair).toHaveBeenCalledTimes(1);
    });
});*/

/*jest.mock('./exercício1');

test('Faça o mock da função multiplicar', () => {
    exercício.multiplicar.mockImplementation((num1, num2) => num1 * num2);

    expect(exercício.multiplicar(2, 5)).toBe(10);

    expect(exercício.multiplicar).toHaveBeenCalled();
});

test('Faça o mock da função somar ', () => {
    exercício.somar.mockImplementation((num1, num2) => num1 + num2);

    expect(exercício.somar(1, 2)).toBe(3);
    expect(exercício.somar).toHaveBeenCalled();
    expect(exercício.somar).toHaveBeenCalledWith(1, 2);
});

test('Faça o mock da função dividir', () => {
    exercício.dividir = jest.fn()
    .mockReturnValueOnce(10)
    .mockReturnValueOnce(2)
    .mockReturnValueOnce(5);

    expect(exercício.dividir(20, 2)).toBe(10);
    expect(exercício.dividir).toHaveBeenCalled();
    expect(exercício.dividir).toHaveBeenCalledWith(20, 2);
    expect(exercício.dividir).toHaveBeenCalledTimes(1);
});*/

test('Faça o mock da função subtrair de maneira que seja possível restaurar sua implementação original', () => {

    //implementação original e sem mock
    //expect(exercício.subtrair(2, 1)).toBe(1);

    //implementação mockada
    let spySubtrair = jest.spyOn(exercício, 'subtrair')
    .mockImplementation((num1, num2) => num1 + num2)
    .mockReturnValueOnce(20);

    expect(spySubtrair(10, 10)).toBe(20);
    //expect(spySubtrair).toHaveBeenCalled();
    //expect(spySubtrair).toHaveBeenCalledTimes(1);

    spySubtrair.mockRestore();
    spySubtrair = jest.spyOn(exercício, 'subtrair');
    expect(spySubtrair(30, 10)).toBe(20);
    expect(spySubtrair).toHaveBeenCalledWith(30, 10);
    expect(spySubtrair).toHaveBeenCalledTimes(1);
})
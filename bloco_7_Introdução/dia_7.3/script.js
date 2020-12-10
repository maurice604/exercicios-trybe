const assert = require('assert');

function sum(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw new Error('parameters must be numbers');
    }

    return a + b;
}

// implemente seus testes aqui

assert.strictEqual(sum(4, 5), 9, 'O retorno esperado era, 9.');
assert.strictEqual(sum(0, 0), 0, 'O retorno esperado era, 0.');
assert.throws(() => {
    sum(4, '5');
});


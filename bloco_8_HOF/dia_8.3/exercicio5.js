const names = [
    'Aanemarie',
    'Adervandes',
    'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
];

// Retorne a quantidade de vezes em que a letra a maiúscula ou minúscula aparece.

function containsA() {
    return names.reduce((sum, name) => {
        return sum + name.split('').reduce((sumSplit, caracter) => {
            if(caracter === 'a' || caracter === 'A') {
                return sumSplit + 1;
            }
            return sumSplit;
        }, 0);
    }, 0)
}

console.log(containsA());
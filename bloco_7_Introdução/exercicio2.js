const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
};

const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
};

const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
};

//Exercício 1.

const addchave = (obj, chave, valor) => obj[chave] = valor;
addchave(lesson2, 'turno', 'manhã');
console.log(lesson2);

//Exercício 2.

const listaChaves = (obj) => Object.keys(obj);
console.log(listaChaves(lesson3));

//Exercício 3.

const tamanhoObj = (obj) => Object.keys(obj).length;
console.log(tamanhoObj(lesson1));

//Exercício 4.

const listaValores = (obj) => Object.values(obj);
console.log(listaValores(lesson3));

//Exercício 5.

const allLessons = Object.assign({}, { lesson1, lesson2, lesson3 });
console.log(allLessons);

//Exercício 6.

const numeroDEEstudantes = (obj) => {
    let total = 0;
    const lista = Object.keys(obj);
    for (i in lista) {
        total += obj[lista[i]].numeroEstudantes;
    }
    return total;
};
console.log(numeroDEEstudantes(allLessons));
const fetchPrommise = () => {
    const myPromise = new Promise((resolve, rejected) => {
        const myArray = array.from(
            { length: 10 },
            () => Math.floor(Math.random() * 50) + 1
        );
        const sum = myArray.map(number => number * number)
            .reduce((number, acc) => number + acc, 0);

        (sum < 8000) ? resolve() : rejected();
    });

    myPromise
        .then(() => console.log('Deu bom'))
        .catch(() => console.log('Deu ruim'));
};

fetchPrommise();
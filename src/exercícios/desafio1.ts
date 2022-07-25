// Como podemos rodar isso em um arquivo .ts sem causar erros? 

/* let employee = {};
employee.code = 10;
employee.name = "John"; */

//Forma 1

let employee: {code: number, name: string} = {
    code: 15482,
    name: 'Yasmin'
}

//Forma 2

interface iEmployee {
    code: number,
    name: string
}

const gustavo: iEmployee = {
    code: 16985,
    name: 'Gustavo'
}

// Forma 3

const employee2 = {
    code: 65872,
    name: 'Isabella'
}
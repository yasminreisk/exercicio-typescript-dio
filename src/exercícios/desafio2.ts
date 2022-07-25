/* let pessoa1 = {}
pessoa1.nome = "maria";
pessoa1.idade = 29;
pessoa1.profissao = "atriz"

let pessoa2 = {}
pessoa2.nome = "roberto";
pessoa2.idade = 19;
pessoa2.profissao = "Padeiro";

let pessoa3 = {
    nome: "laura",
    idade: "32",
    profissao: "Atriz"
};

let pessoa4 = {
    nome = "carlos",
    idade = 19,
    profissao = "padeiro"
} */

enum Ocupação {
    Medica,
    Padeiro,
    Dentista
}

type Humano = {
    nome: string,
    idade: number,
    profissao: Ocupação
}

let pessoa1: Humano = {
    nome: 'André',
    idade: 32,
    profissao: Ocupação.Padeiro
}

let pessoa2: Humano = {
    nome: 'Mariana',
    idade: 29,
    profissao: Ocupação.Medica
}

let pessoa3: Humano = {
    nome: 'Gustavo',
    idade: 31,
    profissao: Ocupação.Dentista
}




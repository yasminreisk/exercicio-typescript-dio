const pessoa = {
    nome:'Mariana',
    idade: 28,
    profissao: 'desenvolvedora'
}

pessoa.idade = 29

const andre: {nome: string, idade: number, profissao: string} = {
    nome: 'Andre',
    idade: 25,
    profissao: 'advogado'
}

const yasmin: {nome: string, idade: number, profissao: string} = {
    nome: 'Yasmin',
    idade: 27,
    profissao: 'Desenvolvedora'
}

enum Profissao {
    Professora,
    Atriz,
    Desenvolvedora,
    Advogada
}

interface Pessoa {
    nome: string,
    idade: number,
    profissao: Profissao
}

interface Estudante extends Pessoa {
    materias: string[]
}

const isabella: Pessoa = {
    nome: 'Isabella',
    idade: 25,
    profissao: Profissao.Desenvolvedora
}

const nina: Pessoa = {
    nome: 'Nina',
    idade: 29,
    profissao: Profissao.Desenvolvedora,
}

const jessica: Estudante = {
    nome: 'Jessica',
    idade: 19,
    profissao: Profissao.Desenvolvedora,
    materias: ['Matemática', 'programação']
}

const miki: Estudante = {
    nome: 'Jessica',
    idade: 19,
    profissao: Profissao.Advogada,
    materias: ['Direito Penal', 'Direito Civil']
}

function listar(lista: string[]) {
    for (const item of lista) {
        console.log('- ', item)
    }
}

listar(miki.materias)
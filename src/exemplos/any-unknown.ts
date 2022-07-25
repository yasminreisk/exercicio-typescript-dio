let anyBack: any
anyBack = 3
anyBack = 'teste'
anyBack = 5

let stringTest: string = 'verificar'
stringTest = anyBack

let unknownValor: unknown
unknownValor = 3
unknownValor = 'opa'
unknownValor = true
unknownValor = 'vai sim'

let stringTeste2: string = 'agora vai'

if (typeof unknownValor === 'string') {
    stringTeste2 = unknownValor
}

function jogaErro(erro: string, codigo: number): never
{
    throw {error: erro, code: codigo}
}

jogaErro('deu erro', 500)
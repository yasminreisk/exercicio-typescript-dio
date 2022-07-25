function printaValoresNumericos(num1: number, num2: number): void {
    console.log(num1 + num2)
}

function somarValoresNumericosETratar(num1: number, num2: number, callback: (num: number) => number): number {
    let resultado = num1 + num2
    return callback(resultado)
}

function aoQuadrado (num: number): number {
    return num * num
}

function dividirPorEleMesmo(num: number): number {
    return num / num
}

console.log(somarValoresNumericosETratar(1, 3, aoQuadrado)) // 16
console.log(somarValoresNumericosETratar(1, 3, dividirPorEleMesmo)) // 1
function printaSomaValoresNumericos(numero1: number, numero2: number): void {
    console.log(numero1 + numero2);
}

function somaValoresNumericosETratar(numero1: number, numero2: number, callback: (numbero: number) => number): number {
    let resultado = numero1 + numero2; 
    return callback(resultado);
}

function aoQuadrado(numero: number): number {
    return numero * numero;
}

function dividirNumeroPorEleMesmo(numero: number): number {
    return numero / numero
}

console.log(somaValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somaValoresNumericosETratar(1, 3, dividirNumeroPorEleMesmo));
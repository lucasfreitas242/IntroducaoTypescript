function printaSomaValoresNumericos(numero1, numero2) {
    console.log(numero1 + numero2);
}
function somaValoresNumericosETratar(numero1, numero2, callback) {
    var resultado = numero1 + numero2;
    return callback(resultado);
}
function aoQuadrado(numero) {
    return numero * numero;
}
function dividirNumeroPorEleMesmo(numero) {
    return numero / numero;
}
console.log(somaValoresNumericosETratar(1, 3, aoQuadrado));
console.log(somaValoresNumericosETratar(1, 3, dividirNumeroPorEleMesmo));

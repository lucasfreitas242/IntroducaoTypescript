"use strict";
function somaValores(input1, input2) {
    if (typeof input1 === 'string' || typeof input2 === 'string') {
        return input1.toString() + input2.toString();
    }
    else {
        let somaInt = input1 + input2;
        return somaInt;
    }
}
console.log(somaValores(1, 5));
console.log(somaValores('fala', ', mauricio!'));
console.log(somaValores('1', 5));

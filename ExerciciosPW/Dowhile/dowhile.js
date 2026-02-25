// AlgoritmoExpoente - Potenciação

let base = 2;
let exp = 5;

let i = 1;
let resultado = 1;

do {
    resultado = resultado * base;
    i++;
} while (i <= exp);

console.log("Resultado: " + resultado);


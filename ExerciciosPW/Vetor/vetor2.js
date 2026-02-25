// Média de valores do vetor

let tam = 10;

let e = [5, 7, 8, 6, 9, 4, 10, 3, 2, 8];

let soma = 0;
let media;

// Somando os valores do vetor
for (let i = 0; i < tam; i++) {
    soma = soma + e[i];
}

// Calculando a média
media = soma / tam;

console.log("O resultado da média é: " + media);
// Inversão de vetor

let TAM = 10;

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let b = new Array(TAM);

// Copiando vetor A para B
for (let i = 0; i < TAM; i++) {
    b[i] = a[i];
}

// Mostrando vetor B invertido
for (let i = TAM - 1; i >= 0; i--) {
    console.log(b[i])
}


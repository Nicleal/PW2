// AlgoritmoFibonacci

let n = 10; // quantidade de termos

let termo1 = 1;
let termo2 = 1;
let proximo;
let j = 1;

do {
    process.stdout.write(termo1 + " ");

    proximo = termo1 + termo2;
    termo1 = termo2;
    termo2 = proximo;

    j++;

} while (j <= n);
// Estrutura condicional case - Rodízio por placa
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let placa = 7;

switch (placa) {
    case 1:
    case 2:
        console.log("Segunda-feira");
        break;

    case 3:
    case 4:
        console.log("Terça-feira");
        break;

    case 5:
    case 6:
        console.log("Quarta-feira");
        break;

    case 7:
    case 8:
        console.log("Quinta-feira");
        break;

    case 9:
    case 0:
        console.log("Sexta-feira");
        break;

    default:
        console.log("Número inválido");
}
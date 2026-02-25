// Estrutura condicional case - Número do mês
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let mes = 4;

switch (mes) {
    case 1:
    case 3:
    case 5:
    case 7:
    case 8:
    case 10:
    case 12:
        console.log("O mês apresenta 31 dias");
        break;

    case 4:
    case 6:
    case 9:
    case 11:
        console.log("O mês apresenta 30 dias");
        break;

    case 2:
        console.log("O mês apresenta 28 dias");
        break;

    default:
        console.log("Mês inválido");
}


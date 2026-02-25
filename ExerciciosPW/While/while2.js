// ano bissexto

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let anoInicial;
let anoFinal;

rl.question('Digite o ano inicial: ', (resposta1) => {
    anoInicial = (resposta1);

    rl.question('Digite o ano final: ', (resposta2) => {
        anoFinal = (resposta2);

        console.log("Anos bissextos entre", anoInicial, " e ", anoFinal);

        while (anoInicial <= anoFinal) {
            if (anoInicial % 4 === 0) {
                console.log(anoInicial);
            }
            anoInicial++;
        }

    });
});
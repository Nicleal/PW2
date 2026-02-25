 // Código 2: Verifica se é par ou ímpar
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


  rl.question('Digite outro numero: ', (numeroInteiroo) => {
    let numeroo = (numeroInteiroo);

    if (numeroo % 2 === 0) {
      console.log("par");
    } else {
      console.log("ímpar");
    }

   
  });
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Código 1:  negativ/positivo
rl.question('Digite seu numero: ', (numeroInteiro) => {
  let numero = (numeroInteiro);

  if (numero < 0) {
    console.log("negativo");
  } else if (numero === 0) {
    console.log("neutro");
  } else {
    console.log("positivo");
  }

 
});


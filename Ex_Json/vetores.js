//soma total
export function se_somaTotal(lista){

    let somaTotal = lista.reduce(function(total, numero) {
    return total + numero;
    }, 0);

    return somaTotal;
}

//Adicao 
export function se_adicao(lista1){
    lista1.push(40);
    console.log("Após adicionar:", lista1);
}

//Busca
export function se_busca(lista2) {
    console.log("Tem 20?", lista2.includes(20));
}

//Remocao
export function se_remocao(lista3) {

    lista3.pop();
}
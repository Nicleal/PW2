//If
export function se (nota){

    if (nota >= 6) {
        console.log("Aprovado");
    }

}

// IfComposto
export function se_composto (nota2){

    if (nota2 >= 9) {
        console.log("Excelente");
    } else if (nota2 >= 6) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

//IfElse
export function se_ifelse (nota3){

    if (nota3 >= 6) {
        console.log("Aprovado");
    } else {
        console.log("Reprovado");
    }
}

//switch
export function se_switch(dia){

    switch (dia) {
        case 1:
            console.log("Domingo");
            break;
        case 2:
            console.log("Segunda-feira");
            break;
        case 3:
            console.log("Terça-feira");
            break;
        case 4:
            console.log("Quarta-feira");
            break;
        case 5:
            console.log("Quinta-feira");
            break;
        case 6:
            console.log("Sexta-feira");
            break;
        case 7:
            console.log("Sábado");
            break;              
        default:
            console.log("Outro dia");
    }
}

//ternarios 

export function se_ternarios(nota4){
    
    let resultado = nota4 >= 6 ? "Aprovado" : "Reprovado";
    console.log(resultado);
}
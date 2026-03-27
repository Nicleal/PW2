//If
export function se (nota){

    if (nota >= 6) {
        return "Aprovado";
    }

}

// IfComposto
export function se_composto (nota2){

    if (nota2 >= 9) {
        return "Excelente";
    } else if (nota2 >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

//IfElse
export function se_ifelse (nota3){

    if (nota3 >= 6) {
        return "Aprovado";
    } else {
        return "Reprovado";
    }
}

//switch
export function se_switch(dia){

    switch (dia) {
        case 1:
            return "Domingo";
        case 2:
            return "Segunda-feira";
        case 3:
            return "Terça-feira";
        case 4:
            return "Quarta-feira";
        case 5:
            return "Quinta-feira";
        case 6:
            return "Sexta-feira";
        case 7:
            return "Sábado";              
        default:
            return "Dia inválido";
    }
}

//ternarios 

export function se_ternarios(nota4){
    
    let resultado = nota4 >= 6 ? "Aprovado" : "Reprovado";
    return resultado;
}
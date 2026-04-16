// AND (&&)
export function opLogAnd(idade) {
    let possuiCarteira = true;

    if (idade >= 18 && possuiCarteira) {
        return "Você pode dirigir!";
    } else {
        return "Você não pode dirigir.";
    }
}

// NOT (!)
export function opLogNot() {
    let nome = "";

    if (!nome) {
        return "Nome não informado";
    }

    return "Nome informado";
}

// OR (||)
export function opLogOr(idade2) {
    let possuiAutorizacao = true;

    if (idade2 >= 18 || possuiAutorizacao) {
        return "Você pode entrar!";
    } else {
        return "Você não pode entrar.";
    }
}
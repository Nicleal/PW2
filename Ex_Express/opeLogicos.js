// AND (&&)
export function opLogAnd() {
    let idade = 18;
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
export function opLogOr() {
    let idade = 16;
    let possuiAutorizacao = true;

    if (idade >= 18 || possuiAutorizacao) {
        return "Você pode entrar!";
    } else {
        return "Você não pode entrar.";
    }
}
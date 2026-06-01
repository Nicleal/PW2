let quiz = JSON.parse(
    sessionStorage.getItem("quiz")
);

if (!quiz || !quiz.jantar) {

    window.location.href =
        "../index.html";

}

let titulo =
    document.querySelector("#titulo");

let mensagem =
    document.querySelector("#mensagem");

let pontos =
    document.querySelector("#pontos");

pontos.textContent =
    `${quiz.pontos} / 15 pontos`;

if (quiz.pontos >= 13) {

    titulo.textContent =
        "🏆 Excelente alimentação!";

    mensagem.textContent =
        "Você possui hábitos muito saudáveis.";

}
else if (quiz.pontos >= 9) {

    titulo.textContent =
        "🥈 Boa alimentação!";

    mensagem.textContent =
        "Você possui bons hábitos, mas pode melhorar.";

}
else {

    titulo.textContent =
        "⚠️ Atenção";

    mensagem.textContent =
        "Você precisa melhorar sua alimentação.";

}

function reiniciar() {

    sessionStorage.clear();

    window.location.href =
        "../index.html";
}
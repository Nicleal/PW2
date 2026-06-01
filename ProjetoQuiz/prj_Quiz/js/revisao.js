let quiz = JSON.parse(
    sessionStorage.getItem("quiz")
);

if (!quiz || !quiz.jantar) {

    window.location.href =
        "./Page_5.html";

}

document.querySelector("#cafe")
    .textContent = quiz.cafeManha.resposta;

document.querySelector("#lanche")
    .textContent = quiz.lanche.resposta;

document.querySelector("#almoco")
    .textContent = quiz.almoco.resposta;

document.querySelector("#tarde")
    .textContent = quiz.cafeTarde.resposta;

document.querySelector("#jantar")
    .textContent = quiz.jantar.resposta;

function finalizarQuiz() {

    window.location.href =
        "./Resultado.html";

}
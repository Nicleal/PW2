let quiz = JSON.parse(
    sessionStorage.getItem("quiz")
);

if (!quiz || !quiz.cafeManha) {

    window.location.href =
        "../index.html";

}

function responder(resposta, pontos) {

    quiz.lanche = {
        resposta,
        pontos
    };

    quiz.pontos += pontos;

    sessionStorage.setItem(
        "quiz",
        JSON.stringify(quiz)
    );

    window.location.href =
        "./Page_3.html";
}
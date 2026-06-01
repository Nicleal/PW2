let quiz = JSON.parse(
    sessionStorage.getItem("quiz")
);

if (!quiz || !quiz.lanche) {

    window.location.href =
        "./Page_2.html";

}

function responder(resposta, pontos) {

    quiz.almoco = {
        resposta,
        pontos
    };

    quiz.pontos += pontos;

    sessionStorage.setItem(
        "quiz",
        JSON.stringify(quiz)
    );

    window.location.href =
        "./Page_4.html";
}
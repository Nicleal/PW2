let quiz = JSON.parse(
    sessionStorage.getItem("quiz")
);

if (!quiz || !quiz.almoco) {

    window.location.href =
        "./Page_3.html";

}

function responder(resposta, pontos) {

    quiz.cafeTarde = {
        resposta,
        pontos
    };

    quiz.pontos += pontos;

    sessionStorage.setItem(
        "quiz",
        JSON.stringify(quiz)
    );

    window.location.href =
        "./Page_5.html";
}
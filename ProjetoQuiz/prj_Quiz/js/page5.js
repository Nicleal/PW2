let quiz = JSON.parse(
    sessionStorage.getItem("quiz")
);

if (!quiz || !quiz.cafeTarde) {

    window.location.href =
        "./Page_4.html";

}

function responder(resposta, pontos) {

    quiz.jantar = {
        resposta,
        pontos
    };

    quiz.pontos += pontos;

    sessionStorage.setItem(
        "quiz",
        JSON.stringify(quiz)
    );

    window.location.href =
        "./Revisao.html";
}
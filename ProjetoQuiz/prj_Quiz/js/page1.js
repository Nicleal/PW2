function responder(resposta, pontos) {

    let quiz = {

        cafeManha: {
            resposta,
            pontos
        },

        pontos: pontos

    };

    sessionStorage.setItem(
        "quiz",
        JSON.stringify(quiz)
    );

    window.location.href =
        "./Page_2.html";
}
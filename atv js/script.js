function verificarPrioridade() {

    const prioridade = document.getElementById("prioridade").value;
    let mensagem;

    switch (prioridade) {

        case "urgente":
            mensagem = "Atenção redobrada!";
            break;

        case "alta":
            mensagem = "Prioridade alta.";
            break;

        case "media":
            mensagem = "Prioridade média.";
            break;

        case "baixa":
            mensagem = "Prioridade baixa.";
            break;

        default:
            mensagem = "Prioridade desconhecida.";
    }

    document.getElementById("resultado").textContent = mensagem;
}

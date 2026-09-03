unction verificarIdade() {
 
    const idade = Number(document.getElementById("idade").value);
 
    if (idade >= 18) {
        document.getElementById("resultadoIdade").textContent = "Você é maior de Idade";
    } else {
        document.getElementById("resultadoIdade").textContent = "Você é menor de Idade";
    }
}
 function verificarIdade() {
 
    const idade = Number(document.getElementById("idade").value);
 
    if (idade >= 18) {
        document.getElementById("ResultadoIdade").textContent = "Maior de Idade";
    } else {
        document.getElementById("ResultadoIdade").textContent = "Menor de Idade";
    }
 
}
 
 
function verificarNumero() {
 
    const numero = Number(document.getElementById("numero").value);
 
    if (numero > 0) {
        document.getElementById("ResultadoNumero").textContent = "O número é positivo.";
    } else if (numero < 0) {
        document.getElementById("ResultadoNumero").textContent = "O número é negativo.";
    } else {
        document.getElementById("ResultadoNumero").textContent = "O número é igual a zero.";
    }
 
}
 
 
function verificarNota() {
 
    const nota = Number(document.getElementById("nota").value);
 
    if (nota >= 7) {
        document.getElementById("ResultadoNota").textContent = "Aprovado";
    } else if (nota >= 5) {
        document.getElementById("ResultadoNota").textContent = "Recuperação";
    } else {
        document.getElementById("ResultadoNota").textContent = "Reprovado";
    }
 
}
 
function verificarLogin() {
 
    const usuario = document.getElementById("usuario").value;
    const senha = document.getElementById("senha").value;
 
    if (usuario === "admin" && senha === "1234") {
        document.getElementById("ResultadoLogin").textContent = "Login realizado com sucesso!";
    } else if (usuario === "admin" && senha !== "1234") {
        document.getElementById("ResultadoLogin").textContent = "Senha incorreta.";
    } else {
        document.getElementById("ResultadoLogin").textContent = "Usuário não encontrado.";
    }
 
}
 
function verificarIdadeTernario() {
 
    const idade = Number(document.getElementById("idadeTernario").value);
 
    const situacao = idade >= 18 ? "Maior de idade" : "Menor de idade";
 
    document.getElementById("ResultadoTernario").textContent = situacao;
 
}

function calcularDesconto() {
 
    
    const valorCompra = Number(
        document.getElementById("valorCompra").value
    );
 
    
    const clienteVip =
        document.getElementById("clienteVip").value === "true";
 
 
    let percentualDesconto = 0;
 
 
  
    if (valorCompra > 500) {
 
        percentualDesconto = 20;
 
    } else if (valorCompra >= 200) {
 
        percentualDesconto = 10;
 
    } else {
 
        percentualDesconto = 0;
    }
 
 
    if (clienteVip && percentualDesconto > 0) {
 
        percentualDesconto += 5;
    }
 
 

    const valorDesconto =
        valorCompra * (percentualDesconto / 100);
 
 
   
    const valorFinal =
        valorCompra - valorDesconto;
 
 
    document.getElementById("resultadoCompra").innerHTML =
        "Valor da compra: R$ " + valorCompra.toFixed(2);
 
    document.getElementById("resultadoDesconto").innerHTML =
        "Desconto: R$ " + valorDesconto.toFixed(2) +
        " (" + percentualDesconto + "%)";
 
    document.getElementById("resultadoFinal").innerHTML =
        "Valor final: R$ " + valorFinal.toFixed(2);
}

function verificarTarefa() {
 
    const validação = document.getElementById("validaçãoTarefa");
    const tarefa = {
            titulo: "Estudar JavaScript",
            concluida: false
        };
 
    if (validação.checked) {
        marcarComoConcluida(tarefa);
    } else {
        document.getElementById("resultadoValidaçãoTarefa").textContent =
            "A tarefa ainda não foi concluída.";
    }
 
    function marcarComoConcluida(tarefa) {
 
        if (!tarefa) {
        document.getElementById("resultadoValidaçãoTarefa").textContent =
            "Nenhuma tarefa foi informada!";
        return;
    }
 
    if (tarefa.concluida) {
        document.getElementById("resultadoValidaçãoTarefa").textContent =
            "Esta tarefa já foi concluída.";
        return;
    }
 
    tarefa.concluida = true;
 
    document.getElementById("resultadoValidaçãoTarefa").textContent =
        "Tarefa concluída com sucesso!";
    }
}
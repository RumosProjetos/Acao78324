//Idealmente deveria utilizar um token de autenticação para validar o usuário
//A ideia aqui é usar um algoritmo super simples para validar o usuário
function ValidarUsuario() {
    var usuario = document.getElementById("txtUsuario").value;
    var senha = document.getElementById("txtSenha").value;

    var resultado = usuario == senha;

    if (resultado == true) {
        document.cookie = usuario;
        window.location.replace("dashboard.html");
    }
    else {
        document.cookie = "";
        alert("Usuário ou senha inválidos");
    }
}

function UsuarioLogado() {
    var usuario = document.cookie;
    if (usuario == "") {
        window.location.replace("index.html");
    }    
}

// Para apresentar alguns dados relevantes no dashboard
function ObterAlertas() {
    var alertas = [
        "<p>O produto X está com estoque baixo</p>",
        "<p>O preço do produto Y aumentou no fornecedor</p>",
        "<p>O pedido do cliente Z ainda não foi expedido</p>"
    ];

    document.getElementById("spanAlerta01").innerHTML = alertas[0];
    document.getElementById("spanAlerta02").innerHTML = alertas[1];
    document.getElementById("spanAlerta03").innerHTML = alertas[2];
}
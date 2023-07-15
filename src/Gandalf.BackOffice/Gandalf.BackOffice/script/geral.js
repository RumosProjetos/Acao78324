﻿//Idealmente deveria utilizar um token de autenticação para validar o usuário
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


function ObterEstatisticas() {
    var est01 = {
        Quantidade: 10,
        Label: "Pedidos",
        Icone: "pedidos.jpg",
        Link: "pedidos.html",
        Cor: "#007bff"
    };

    var est02 = {
        Quantidade: 8,
        Label: "Clientes Novos",
        Icone: "clientes.jpg",
        Link: "clientes.html",
        Cor: "green"
    };
    var est03 = {
        Quantidade: 100,
        Label: "Estoque",
        Icone: "estoques.jpg",
        Link: "estoques.html",
        Cor: "orange"
    };
    var est04 = {
        Quantidade: 10,
        Label: "Produtos Novos",
        Icone: "produtos.jpg",
        Link: "produtos.html",
        Cor: "yellow"
    };

    var estatisticas = [
        est01, est02, est03, est04
    ];

    FormatarEstatisticas("estatistica01", estatisticas[0]);
    FormatarEstatisticas("estatistica02", estatisticas[1]);
    FormatarEstatisticas("estatistica03", estatisticas[2]);
    FormatarEstatisticas("estatistica04", estatisticas[3]);
}


function FormatarEstatisticas(elemento, dados) {
    var elemento = document.getElementById(elemento);
    if (elemento == null) {
        return;
    };

    elemento.innerHTML = "<table style='background-color:" + dados.Cor + "'><tr><td>" + dados.Label
        + "</td><td>" + dados.Icone
        + "</td></tr><tr><td>Quantidade</td><td>" + dados.Quantidade + "</td></tr>"
        + "<tr><td colspan='2'> <a href='" + dados.Link + "'>Maiores Informações</a> </td></tr></table>";
}


function ObterClientes() {
    var clientes = [];

    for (var i = 0; i < 10; i++) {
        var cliente = {
            id: i,
            nome: "Cliente 0" + i,
            endereco: "Rua 0" + i,
            dataNascimento: "01/01/2001",
            email: "cliente" + i + "@email.com",
            cidade: "Cidade 0" + i,
            nif: "123456789"
        };

        clientes[i] = cliente;
    }

    formatarClientes(clientes);

}

var formatarClientes = function (clientes) {
    var elemento = document.getElementById("tblClientes");
    var cabecalho = "<tbody><tr><th>Id</th><th>Nome</th><th>Endereço</th><th>Data de Nascimento</th><th>Email</th><th>Cidade</th><th>NIF</th></tr>";
    var corpo = "";

    for (var i = 0; i < clientes.length; i++) {
        corpo += "<tr><td>" + clientes[i].id + "</td>" +
            "<td>" + clientes[i].nome + "</td>" +
            "<td>" + clientes[i].endereco + "</td>" +
            "<td>" + clientes[i].dataNascimento + "</td>" +
            "<td>" + clientes[i].email + "</td>" +
            "<td>" + clientes[i].cidade + "</td>" +
            "<td>" + clientes[i].nif + "</td></tr>";
    }

    var rodape = "</tbody>";

    elemento.innerHTML = cabecalho + corpo + rodape;
}
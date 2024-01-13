$(document).ready(function () {

    $('#telefone').mask('(00) 0000-00009');


    $('#cpf').mask('000.000.000-00', { reverse: true });


    $('#cep').mask('00000-000');
});


$('#cadastroForm').submit(function (event) {

    event.preventDefault();
    alert('Formulário enviado com sucesso!');
});
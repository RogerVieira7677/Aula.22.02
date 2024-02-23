$(document).ready(function(){//Chamando o JQuery
    /* console.log(document.querySelector('header button'));
    console.log($('header button'));*/


    $('header button').click(function(){
        $('form').slideDown();
    })
    $('#botao-cancelar').click(function(){
        $('form').slideUp();
    })


    $('form').on('submit', function(e) {
    e.preventDefault();
    const enderecoDaNovaImagem = $('endereço-imagem-nova').val();
    console.log(enderecoDaNovaImagem); ERR0
    })

})
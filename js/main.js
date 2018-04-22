$(document).ready(function () {
    $('select').formSelect();
    $('.tabs').tabs();    
    $('.collapsible').collapsible();


    var elem = document.querySelector('.collapsible.expandable');
    var instance = M.Collapsible.init(elem, {
        accordion: false
    });

    $('#simular').on('click', function(){
        console.log('Done!!');
    
        $('#card-simulador').addClass('scale-transition scale-out');
        $('#card-simulador').addClass('hide');
        $('#cronograma_loading').removeClass('hide');
        setTimeout(function(){ 
            $('#cronograma_loading').addClass('hide');
            $('#content_cronograma_credito').removeClass('hide scale-out');
            $('#content_cronograma_credito').addClass('scale-transition');
        }, 5000);
    });



});
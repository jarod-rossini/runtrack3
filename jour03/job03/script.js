window.onload = function(){
    for(let i = 1; i < 9; i++){
        $('#taquin').append('<div id="case'+ i +'"><img src="plateforme'+ i +'" id="plateforme'+ i +'.png"/></div>');
    }
}

function mix(){
    $('#taquin').empty();

    for(let i = 0; i<8 ; i++){
        var nb = Math.floor((Math.random() *8) + 1),
            plateforme = 'plateforme' + nb
            plateformeTag = '#plateforme' + nb

        if($(plateformeTag).length == 0){
            $('#taquin').append('<div id="case'+ nb +'"><img id="'+ plateforme +'" src="'+ plateforme +'.png"/></div>');
        }
        else{
            i--;
        }
    }

    $('#taquin').prepend('<div id="case9"></div>');

    move();
}

function move(){
    $('#case8').on('click', function(){
        $(this).appendTo('#case9');
    })
}

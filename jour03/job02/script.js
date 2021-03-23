window.onload = function(){
    base();
}

function mix(){
    $('#rangees').empty();
    $('#melangees').empty();

    for(let i = 0; i<6 ; i++){
        var nb = Math.floor((Math.random() *6) + 1),
            rainbow = 'rainbow' + nb
            rainbowTag = '#rainbow' + nb

        if($(rainbowTag).length == 0) $('#rangees').append('<img id="'+ rainbow +'" src="'+ rainbow +'.png"/>');
        else i--;
    }

    move();
}

function base(){
    $('#button').css({'display': 'block'});
    $('#rangees').empty();
    $('#melangees').empty();

    for(let i = 1; i<=6 ; i++){
        $('#rangees').append('<img id="rainbow'+ i +'" src="rainbow'+ i +'.png"/>');
    }

    move();
}

var count = 0;
var result = new Array;

function move(){
    $('img').on('click', function(){
        $(this).appendTo('#melangees');
        $('#button').css({'display': 'none'});
        result[count] = $(this).attr('id');
        count++;

        if(count == 6){
            if(result[0] == 'rainbow1' && result[1] == 'rainbow2' && result[2] == 'rainbow3' && result[3] == 'rainbow4' && result[4] == 'rainbow5' && result[5] == 'rainbow6'){
                return document.write('Vous avez gagné !');
            }
            else{
                return document.write('Vous avez perdu !');
            }
        }
    })
}

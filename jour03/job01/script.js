function ShowHide(){
    $('#button').on('click', function(){
        $('.str').css({'display': 'block'});
        $('#hide').css({'display': 'block'});
    });

    $('#hide').on('click', function(){
        $('.str').css({'display': 'none'});
        $('#hide').css({'display': 'none'});
    });
}

window.onload = function(){
    ShowHide();
}

function sommenombrespremiers(nb1, nb2){
    if(isPremier(nb1) && isPremier(nb2)) {return document.write(nb1 + nb2);}
    else {return false;}
}

function isPremier(nb){
    for(var i = 2; i < nb; i++)
        if(nb % i === 0) {return false;}
     return true;
}

window.onload = function(){
    let a = 2;
    let b = 3;
    sommenombrespremiers(a, b);
}
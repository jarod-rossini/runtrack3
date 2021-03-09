function bisextile(année){
    let rule1 = année / 4;
    let rule2 = année / 100;
    let rule3 = année / 400;

    if(Number.isInteger(rule1) && !Number.isInteger(rule2)){
        document.write(année + ' est une année bisextile');
    }
    else if(Number.isInteger(rule3)){
        document.write(année + ' est une année bisextile');
    }
    else{document.write(année + ' n\'est pas bisextile')}
}

window.onload = function (){
    var nombre = prompt('Choisissez une année :')
    bisextile(nombre);
};
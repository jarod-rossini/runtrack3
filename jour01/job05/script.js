function afficherjourssemaines(){
    var jourssemaines = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi', 'Dimanche'];
    
    for(let i = 0; i<jourssemaines.length; i++){
        document.write(jourssemaines[i] + '</br>');
    }
}

window.onload = function (){
    afficherjourssemaines();
};
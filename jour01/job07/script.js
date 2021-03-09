function jourtravaille(date){
    var Mois = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Semptembre', 'Octobre', 'Novembre', 'Décembre'];
    let mois = date.getMonth();
    let jour = date.getDate();
    let jour_wkd = date.getDay();
    let année = date.getFullYear();

    if(année == 2020){
        if(jour_wkd == 2 || jour_wkd == 3){
            return document.write('Non, ' + jour + ' ' + Mois[mois-1] + ' ' + année + ' ' + ' est un week-end');
        }

        else if((jour == 13 && mois == 4) || (jour == 8 && mois == 5) || (jour == 21 && mois == 5) || (jour == 1 && mois == 6) || (jour == 14 && mois == 7) || (jour == 15 && mois == 8) || (jour == 1 && mois == 11) || (jour == 11 && mois == 11) || (jour == 25 && mois == 12) || (jour == 1 && mois == 1)){
            document.write('Le ' + jour + ' ' + Mois[mois-1] + ' ' + année + ' ' + ' est un jour férié');
        }
        else{document.write('Oui, ' + jour + ' ' + Mois[mois-1] + ' ' + année + ' ' + ' est un jour travaillé');}
    }
}

window.onload = function(){
    var date_test = new Date(2020, 1, 10);
    jourtravaille(date_test);
};
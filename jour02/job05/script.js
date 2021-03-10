onscroll = function(){
    var footer = document.getElementById('footer');
    var scroll = window.scrollY;
    var scrollPercentage = [300, 600, 900, 1200, 1500, 1800, 2100, 2400, 2700, 3000];

    switch(scroll){
        case 0 :
            return footer.style.width = '0';
        case scrollPercentage[0] :
            return footer.style.width = '10%';
        case scrollPercentage[1] :
            return footer.style.width = '20%';
        case scrollPercentage[2] :
            return footer.style.width = '30%';
        case scrollPercentage[3] :
            return footer.style.width = '40%';
        case scrollPercentage[4] :
            return footer.style.width = '50%';
        case scrollPercentage[5] :
            return footer.style.width = '60%';
        case scrollPercentage[6] :
            return footer.style.width = '70%';
        case scrollPercentage[7] :
            return footer.style.width = '80%';
        case scrollPercentage[8] :
            return footer.style.width = '90%';
        case scrollPercentage[9] :
            return footer.style.width = '100%';
    }
};
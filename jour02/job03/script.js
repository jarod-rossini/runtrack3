var button = document.getElementById('button');

var nb = 1;

function addone(){
    document.getElementById('compteur').innerHTML = nb;
    nb++;
}

button.onclick = addone();
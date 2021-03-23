document.getElementById('connexion').addEventListener('submit', function(e){
    e.preventDefault();

    var data = new FormData(this);

    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        if(this.readyState == 4 && this.status == 200){
            console.log(this.response);

            var res = this.response;

            $('#resultat').append(res.msg);
        } else if(this.readyState == 4){
            alert('Une erreur est survenue...');
        }
    };

    xhr.open('POST', 'connexion.php', true);
    xhr.responseType = 'json';
    xhr.send(data);

    return false;
});

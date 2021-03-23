$('#button').on('click', function(){
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function(){
        console.log(this);
        if(this.readyState == 4 && this.status == 200){
            $('#monarticle').append(this.responseText);
        }
    };

    xhr.open('GET', 'expression.txt', true);
    xhr.send();
});

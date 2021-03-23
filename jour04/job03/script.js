var xhr = new XMLHttpRequest();

xhr.open('GET', 'pokemon.json', true);
xhr.responseType = 'json';
xhr.onreadystatechange = function(){
    console.log(this);

    if(xhr.readyState === 4 && xhr.status === 200){
        $('#filter').on('click', function(){
            var object = xhr.response;

            if($('#id').val() !== ""){
                var val = $('input#id').val();
                jsonValueKey(object, val);
            }

            if($('input#name').val() !== ""){
                var val = $('input#name').val();
                jsonValueKey(object, val);
            }

            if($('#type').val() !== ""){
                var val = $('#type option:selected').val();
                jsonValueKey(object, val);
            }
        });
    }
};

xhr.send();

function jsonValueKey(str, key){
    var a = 0;

    for(var i = 0; i < str.length; i++){
        if(str[i].id == key){
            console.log(str[i].id);
            console.log(str[i].name);
            console.log(str[i].type);
            console.log(str[i].base);
            a++;
        }

        if(str[i].name['french'] == key){
            console.log(str[i].id);
            console.log(str[i].name);
            console.log(str[i].type);
            console.log(str[i].base);
            a++;
        }

        if(str[i].type.indexOf(key) > -1){
            console.log(str[i].id);
            console.log(str[i].name);
            console.log(str[i].type);
            console.log(str[i].base);
            a++;
        }
    }

    alert('Nombre de pokémons : '+ a);
}

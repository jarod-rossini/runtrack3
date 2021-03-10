function addkey(key){
    var add = String.fromCharCode(key.which);
    document.getElementById('keylogger').value = document.getElementById('keylogger').value + add;
}

onkeypress = function(){addkey(event);};
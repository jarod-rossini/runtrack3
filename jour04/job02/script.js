function jsonValueKey(str, key){
    var object = JSON.parse(str);
    document.write(object[key]);
}

jsonValueKey('{"key" : "valeur"}', 'key');

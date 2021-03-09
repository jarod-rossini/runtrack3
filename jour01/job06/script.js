function fizzbuzz(){
    for(let i = 0; i<=151; i++){
        if (i % 3 == 0) {document.write('Fizz</br>');}
        if (i % 5 == 0) {document.write('Buzz</br>');}
        if (i % 3 == 0 && i % 5 == 0) {document.write('FizzBuzz</br>');}
        else {document.write(i + '</br>');}
    }
}

window.onload = function (){
    fizzbuzz();
};
function tri(numbers, order)
{
    let a = 0;
    var desc = new Array;

    while(a < numbers.length){
        let nb = 0;
        
        for(let i = 0; i < numbers.length; i++){
            if(numbers[i] > nb){
                nb = numbers[i];
            }
        }

        desc[a] = nb;

        let index = numbers.indexOf(nb);
        delete(numbers[index]);

        a++;
    }

    if(order == 'desc') return document.write('<pre>' + desc + '</pre>');
        return document.write('<pre>' + desc.reverse() + '</pre>');
}

window.onload = function(){
    tri([12, 15, 32, 9, 2, 27], 'desc');
}
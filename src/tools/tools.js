exports.getBinary = (number, n) => {
    n--;
    let array = [];
    for(let exponent = 0 ; exponent <= n ; exponent++){
        if((Math.pow(2, n - exponent) - number ) > 0){
        array.push(0);
        }else{
            array.push(1);
            number = number - Math.pow(2, n - exponent);
        }
    }
    return array;
}

exports.getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}
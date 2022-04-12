function multiplier(factor){

    return function(number){
        return number * factor;
    }
}


var twice = multiplier(2);
//console.log(twice(5));

function power(base, exponent){
    if(exponent == 0)
        return 1;
    else
        return base * power(base, exponent-1);
}

console.log(power(2, 3));
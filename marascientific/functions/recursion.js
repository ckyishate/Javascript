
function lessTwo(n){
    if(n-2 == 0){
        return "The number is even"
    }else if (n-2 == 1){
        return "The number is odd"
    }else{
        return lessTwo(n-2)
    }
}



console.log(lessTwo(75))
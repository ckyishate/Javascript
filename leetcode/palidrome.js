var isPalindrome = function(x) {
    let  rem , reverse=0, copy =x;

    
    while (x>0){
        rem = x%10;
        reverse = reverse*10 + rem;
        

        x = Math.trunc(x/10);
        
    }

    if (copy === reverse){
        return true;
    }else{
        return false;
    }

    
};




console.log(isPalindrome(626));
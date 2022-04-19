
function countBs(arg){
    num =0;
    for(i=0; i< arg.length; i++){
        letter = arg.charAt(i);
        if(letter === "B")
            num+=1;
    }

    return num
}


function countChar(word, char){
    num =0;
    for(i=0; i< word.length; i++){
        letter = word.charAt(i);
        if(letter === char)
            num+=1;
    }
    return num
}

console.log(countBs("BooBlinBBBBBB"))
console.log(countChar("henrrry", 'r'))
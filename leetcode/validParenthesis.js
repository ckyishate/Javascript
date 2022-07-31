var isValid = function(s){
    const dic ={
        "(":"()",
        "{":"{}",
        "[":"[]"
    };

    const stack=[];

    if(s.length%2 == 0){
        for(let turn =0; turn < s.length; turn++){
    
            if(s[turn] in dic){
                stack.push(s[turn]);
            }else{
                if(stack.length > 0 && (s.length/2)>= stack.length){
                    let test = stack.pop();
                    console.log(test + s[turn]);
                    if(test+s[turn] === dic[test])
                        continue;
                    return false;
                }else{
                    return false;
                }
            }
        }
        return stack.length===0? true: false;
    }else return false; 


  
}



console.log(isValid("([{}])"));
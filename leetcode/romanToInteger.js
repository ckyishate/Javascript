/**
 * @param {string} s
 * @return {number}
 */
 var romanToInt = function(s) {
    
    let sArray = s.split("");
    let dic = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
    let numArray=[];
    sArray.forEach((e)=>{
        if(e in dic) numArray.push(dic[e]);
    });


   let decimalNumber=0;

    let i=0;
    while(i< numArray.length){
        if(i=== numArray.length-1){
            decimalNumber= decimalNumber+numArray[i];
            
            return decimalNumber;
        }
        else if(numArray[i]>=numArray[i+1])
        {
            decimalNumber = decimalNumber+numArray[i];
            i+=1;
        }else{
            decimalNumber =  decimalNumber+(numArray[i+1]-numArray[i]);
            i+=2;
        }
        

    }
    return decimalNumber;
    
};



console.log(romanToInt("MCMXCIV"));


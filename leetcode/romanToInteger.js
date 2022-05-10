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
    for(let i= numArray.length-1; i>=0; i--){
        
        if( decimalNumber > numArray[i]){
            decimalNumber += numArray[i];
        }else
            decimalNumber -= numArray[i];
        
        console.log(decimalNumber)
    }
    return decimalNumber;
    
};



console.log(romanToInt("III"));


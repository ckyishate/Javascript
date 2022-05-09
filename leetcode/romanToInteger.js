var romanToInt = function(s) {
    
    let sArray = s.split("");
    let dic = {I:1, V:5, X:10, L:50, C:100, D:500, M:1000 };
    let numArray=[];
    sArray.forEach((e)=>{
        if(e in dic) numArray.push(dic[e]);
    });
    console.log(numArray);
    let decimalNumber=0;
    for(let i= numArray.length-1; i>=0; i--){
        
        if(numArray[i] >= decimalNumber ){
            decimalNumber = decimalNumber + numArray[i];
        
        }else{
            decimalNumber -= numArray[i];
        }
        return decimalNumber;      
    }
    
    
    
};



console.log(romanToInt("III"));


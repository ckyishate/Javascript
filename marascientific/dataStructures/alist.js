var list = {
    value : 1 ,
    rest : {
            value : 2 ,
            rest : {
                    value : 3 ,
                    rest : null
                }
        }
};


data ={};

function arrayToList(arr){
        for(let i=0; i<arr.length-1; arr++){
                data['value'] = arr[i];
                data['rest'] = {}
        }
    
        
}

data['value'] = 1
data['rest'] = {}

console.log(data)

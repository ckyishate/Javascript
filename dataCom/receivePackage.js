const fs = require('fs').promises;
const path = require('path');


function makeArray(dic){
    let result = [];

    for(const prop in dic){
      result.unshift(...dic[prop]);
    }
    return result.join('');
}


function reshuffle(dic){
    let keys = [], dicnew={};
    
    for(const prop in dic){
    
        keys.push(parseInt(prop));
      
    }
    
    keys.forEach(item =>{dicnew[item] = dic[`${item}s`];})
    
    return dicnew;
}
    


const fileOps = async ()=>{
    try{

        const data = await fs.readFile(path.join(__dirname, 'data.json'), 'utf-8');
        let newdata = JSON.parse(data);
    

        newdata = reshuffle(newdata);
    
        let message =makeArray(newdata);
        console.log(message);

        await fs.writeFile(path.join(__dirname, 'message.txt'),  message, (error)=>{
            if(error){
                console.log("An error has occured ", error );
                return;
            }
            console.log("Data written successfully to disk");
        });   

    }catch(err){
        console.log("Data read is not on the disk");

    }

}


fileOps();
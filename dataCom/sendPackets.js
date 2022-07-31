// console.log("Hello World");

const fsPromises = require('fs').promises;
const path = require('path');


let package ={};


// function  code to make packets of 5 characters 
function makePacket(arr,pkt){
    if(pkt.length==5){
        return pkt;

    }
      
    if(arr.length === 0 && pkt.length != 0)
        return pkt;
        
    pkt.unshift(arr.pop());
    return makePacket(arr, pkt)

}

//FUNCTION TO DISTORT THE PACKAGES
function shuffle(dic){
    let keys = [], dicnew={};
    
    for(const prop in dic){
    
        keys.push(parseInt(prop));
        keys = keys.sort((a, b) => 0.5 - Math.random());
    }

    keys.forEach(item => {dicnew[`${item}s`] =dic[item];}  )
    
    return dicnew;
}
    


const fileOps = async ()=>{
    try{
        const data = await fsPromises.readFile(path.join(__dirname, 'readMe.txt'), 'utf-8');
        console.log(data);

        dataArr = data.split('');

    
        for(let i=0, j=0; i<data.length; i+=5,j++){

            let pkt=[];

            package[j] = makePacket(dataArr,pkt); 
            
        }
        // console.log(package);
        package = shuffle(package);
        
        for(const prop in package)  console.log(package[prop]);
        
        await fsPromises.writeFile(path.join(__dirname, 'data.json'),  JSON.stringify(package), (error)=>{
            if(error){
                console.log("An error has occured ", error );
                return;
            }
            console.log("Data written successfully to disk");
        });     
        
        
    }catch(err){
        console.error(err);
    }

    
}


fileOps();


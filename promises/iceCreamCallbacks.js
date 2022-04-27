let stocks = {
    fruits : ["straw berry", "grapes","banana", "Apple" ],
    liquid : ["water", "ice"],
    holders : ["Cone","cup","stick"],
    toppings : ["Chocholate", "sprinkles"]

}

let order = (fruit_name, call_prducttion)=>{
    
    setTimeout(()=>{
        console.log(`${stocks.fruits[fruit_name]} has been selected`);
        call_prducttion();
    },2000);
    

};
let production = ()=>{
    setTimeout(()=>{
        console.log("Production has started ....");

        setTimeout(()=>{
            console.log("The fruit has been chopped");

            setTimeout(()=>{
                console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been selected.`);

                setTimeout(()=>{
                    console.log("Start the machine....");

                    setTimeout(()=>{
                        console.log(`${stocks.holders[0]} has been selected `);

                        setTimeout(()=>{
                            console.log(`${stocks.toppings[1]} has been selected `);
                            setTimeout(()=>{
                                console.log("Ice cream has been served......");
                            },2000);
                        },3000);

                    }, 2000);
                },1000);
            })
        }, 2000);
    },0000);
   

};


order(0, production);

let stocks = {
    fruits : ["straw berry", "grapes","banana", "Apple" ],
    liquid : ["water", "ice"],
    holders : ["Cone","cup","stick"],
    toppings : ["Chocholate", "sprinkles"]

}

let is_shop_open = true;

let time = (ms)=>{
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(()=>resolve(), ms);
        }else{
            reject(console.log("The shop is closed ........"));
            
        }
    });
        

    
}


async function kitchen(){
    try{
        await time(2000);
        console.log(`${stocks.fruits[0]} has been selected......`);

        await time(0000);
        console.log("Production has started ");

        await time(2000);
        console.log("The fruits has been chopped");

        await time(1000);
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} has been selected.`);

        await time(1000);
        console.log(`${stocks.holders[0]} is being selected for holding the ice cream`);

        await time(3000);
        console.log(`${stocks.toppings[0]} is used for topping `);

        await time(2000);
        console.log("The customer is served ice cream");



    }
   catch(error){
       console.log("Customer left", error);
   }
   finally{
       console.log("The day has ended, shop is closed.....")
   }


}



kitchen();


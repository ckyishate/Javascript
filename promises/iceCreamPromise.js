let stocks = {
    fruits : ["straw berry", "grapes","banana", "Apple" ],
    liquid : ["water", "ice"],
    holders : ["Cone","cup","stick"],
    toppings : ["Chocholate", "sprinkles"]

}

let is_shop_open = true;

let order = (time, work)=>{
    return new Promise((resolve, reject)=>{
        if(is_shop_open){
            setTimeout(()=>{
                resolve(work());
            }, time);
        }else{
            reject(console.log("The shop is closed......"));
        }
    });
}

order(2000, ()=>{
    console.log(`${stocks.fruits[0]} is seleected;`)
})
.then(()=>{
    return order(0000,()=>console.log("Production has started ....."));

}).then(()=>{
    return order(2000, ()=>{
        console.log("The fruit has been chopped ");
    });

}).then(()=>{
    return order(1000, ()=>{
        console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} is added `);
    });

}).then(()=>{
    return order(1000, ()=>{
        console.log("Start the machine......");
    });

}).then(()=>{
    return order(2000, ()=>{
        console.log(`${stocks.holders[0]} is seleced `);
    });

}).then(()=>{
    return order(3000, ()=>{
        console.log(`${stocks.toppings[0]} is selected for topping`);
    });
    
}).then(()=>{
    return order(2000, ()=>{
        console.log("The Ice cream is served ");
    });
})

.catch(()=>{
    console.log("The customer has left ");
})

.finally(()=>{
    console.log("day ended, shop is closed ");
})
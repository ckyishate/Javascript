var journal = [
    { events : 
        ["work",
         "touched tree", 
         "pizza","running",
         "television"],
     squirrel: false
    },
    {
        events : ["work",
                "ice cream", 
                "cauliflower",
                "lasgna",
                "touched tree",
                "brushed teeth"],
        squirrel: false
    },
    {
        events :["weekend",
                "cycling",
                "break",
                "peanuts",
                "beer"],
        squirrel: true
    }

]

// function to add the objects to the journal list 
function addEntry(events, didITurnInToSqurriel){
    journal.push({
        events : events,
        squirrel : didITurnInToSqurriel
    });
}


// computing correlation
function phi(table){
    return (table[3]*table[0] - table[2]*table[1]/
            Math.sqrt((table[2] + table[3])*
                      (table[0] + table[1])*
                      (table[1] + table[3])*
                      (table[0] + table[2])
            
            ));
}


console.log(phi([4,6,8,11]))
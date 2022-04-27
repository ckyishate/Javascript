// functions that take on new functions
function greaterThan(n){
    return function(m){ return m > n;}
}


// var greaterThan10 = greaterThan(10);
// console.log(greaterThan10(9));

// function that change a function
function noisy(f){
    return function(arg){
        console.log("calling with ", arg);
        var val = f(arg);
        console.log("called with arg ", arg, " got ", val);
        return val;
    };
}


// noisy(Boolean)(0)

//FUNCTION OF CONTROL FLOW
function unless(test, then){
    if(!test) then();
}

function repeat(times, body){
    for(var i=0; i< times; i++) body(i);
}


// repeat(3, function(n){
//     unless(n%2, function(){
//         console.log(n, "is even");
//     });
// })


// "foreach()" FUNCTION

var a = ['a', 'b', 'c'];
a.forEach(function(element){   ///so the element is each value in the a list, t
     return element;
});                              // for each takes in a function that enables to that has each element at a time

// filtet FUNCTIION

function isBigEnough(value){
    return value >= 10;
}

var filtered = [1,12,45,9,21,60].filter(isBigEnough)

console.log(filtered)  /// this returns an array with those elements that satisfy the function in a  new array






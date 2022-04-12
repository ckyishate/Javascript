
let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")

let count = 0

function increment(){

    count = count +1 
    countEl.innerText = count
}


//create a function, save(), which logs out the count when its called
function save(){
    saveEl.innerText += count + '-'
    count = 0
    countEl.innerText = count

}


/// index1.html

//muscle buiding
var firstName = "Ssentamu "
var lastName = "Yusuf"

var fullName = firstName + lastName
console.log(fullName)


//Create a function that logs out hi Linda when called 

let name = "Linda"
let greeting =  "Hi there"


function greetings()
{
    console.log(greeting + " " + name+"!")
}


greetings()


// next challenge 

let myPoints = 3

function add3Points(){
    myPoints += 3
}

function remove1Point(){
    myPoints -=1
}

for(let i=1; i<=3; i++){
    add3Points()
}

remove1Point()
remove1Point()

console.log(myPoints)
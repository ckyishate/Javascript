
arr = [3,6,7,9,1]

function reverseArray(arr){
    newArray = [];
    for(let i= arr.length-1; i>=0; i--){
        newArray.push(arr[i]);
    }
    return newArray
}

function reverseArrayInPlace(arr){
    for(let i=0; i<(arr.length)/2; i++){
        let rgtv = arr[i];
        let lftv = arr[arr.length-(i+1)]
        arr[i] = lftv;
        arr[arr.length-(i+1)] = rgtv;
       
    }
    
    return arr;
}


console.log(arr);
reverseArrayInPlace(arr);
console.log(arr)

// console.log(reverseArray(arr))
// console.log(arr)
// console.log(reverseArrayInPlace(arr))

function sumOfRange(start, end, step=1){
    let arr=[];
    if(start > end){
        for(let i=start; i>=end; i+=step)
        arr.push(i);
    }else{

        for(let i=start; i<=end; i+=step)
        arr.push(i);
    }
    
    return arr;
}

function sum(arr){
    let sum = 0;
    for(let i =0; i<arr.length; i++)
        sum += arr[i];
    return sum;
}

console.log(sumOfRange(5,2,-1))

let arr =sumOfRange(1,10,2);
console.log(sum(arr));
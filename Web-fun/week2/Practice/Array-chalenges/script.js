function alwaysHungry(arr) {
    // your code here 
    var count=0
    for(var i=0; i<arr.length ; i++){
        if(arr[i]==="food"){
        console.log("yummy")
        count++
        }
    }
    if(count==0){
    console.log("I'm hungry")
    
    }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"

var filteredArr = [];
var arr=[];
var cutoff = 0;
function highPass(arr, cutoff) {
    // your code here
    for (var i=0; i<arr.length; i++){
        if(arr[i]>cutoff){
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]

function betterThanAverage(arr) {
    var sum = 0;
    // calculate the average
    var count = 0
    for(var i=0;i<arr.length;i++){
        sum+=arr[i]
    }
    for(var i=0;i<arr.length;i++){
    if(arr[i]>(sum/arr.length)){
        count++
    }
    }
    // count how many values are greated than the average
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4

function reverse(arr) {
    // your code here
    var arr_cont=[];
    for(var i=arr.length; i>=0;i--){
        arr_cont.push(arr[i])
    }
    return arr_cont;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]


function fibonacciArray(n) {
    // the [0, 1] are the starting values of the array to calculate the rest from
    var fibArr = [0, 1];
    for (var i=0;i<n-2 ;i++){
    var a=fibArr[i],
        b=fibArr[i+1],
        c=a+b ;

    fibArr.push(c)
    }
    // your code here
    return fibArr;
}
   
var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

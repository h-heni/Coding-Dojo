// // function plusOne (element){
// //     var i=document.querySelector("add")
// //     i++
// // }
// // var elementnum= document.querySelector(".add")
// var count=9
// var count1=12
// var count2=9

// function plusOne (){
//     count++
//     document.querySelector(".add").innerText=count +" "+ "likes"
// }

// function plusOne1 (){
//     count1++
//     document.querySelector(".add1").innerText=count1 +" "+ "likes"
// }
// function plusOne2 (){
//     count2++
//     document.querySelector(".add2").innerText=count2 +" "+ "likes"
// }

var count =[9,12,9]
var classes=[".add", ".add1", ".add2" ]

function plusOne (i){
    count[i]++
    document.querySelector(classes[i]).innerText=count[i] +" "+ "likes"
}


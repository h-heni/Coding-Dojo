var newName=document.querySelector("#name")

function change(){
    newName.innerText="Heni Hasnaoui";
}

var remUser=[ document.querySelector(".connection1"),
            document.querySelector(".connection2")
]

var count=418;
var friend=document.querySelector('.numbers')
var two=2 ;
var num=document.querySelector('.number')

function dec(x){
    remUser[x].remove()
    count--
    friend.innerText=count;
    two--;
    num.innerText=two;
}

function inc(x){
    remUser[x].remove()
    count++;
    friend.innerText=count ;
    two--;
    num.innerText=two;

}


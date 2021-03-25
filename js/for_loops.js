"use strict";

// Takes an input and gives the multiplication table for it between 1 -10
function showMultiplicationTable(input){
    for(var i = 1; i <= 10; i++){
        console.log(input +  " x " + i + " = " + (input * i));
    }
}

console.log(showMultiplicationTable(1));



function randomLoop(){
    for(var x = 1;x<=10;x++){
        var random = Math.floor(Math.random() * 201)+20;
        if(random%2 === 0){
            console.log(random + " is even!");
        }
        else{
            console.log(random + " is odd!")
        }
    }
}

console.log(randomLoop())


for(var i = 1; i<10;i++){
    for(var x = 0; x<i;x++){
        console.log(i);
    }
    x=0;
}

for(var a = 100;a > 0;){
    console.log(a)
    a-=5;
}
"use strict";



for(var x = 0; x<=1; x++){
    var odd = prompt("Give me an odd number between 1 and 50!");
    if(odd%2 === 0){
        x=0;
    }
    else if(odd%2 !== 0){
        for(var i = 1; i < 50;){
            if(i==odd){
                console.log("OOps! Skipping number : " + odd);
            }
            else if(i!==odd){
                console.log("Here is an odd number : " + i);
            }
        i+=2;
        }
    }
    continue;

}


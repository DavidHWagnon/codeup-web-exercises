"use strict";

var x = 2;

while(x<=65536){
    console.log(x);
    x=x*2;
}

// This is how you get a random number between 50 and 100

// This expression will generate a random number between 1 and 5

var allCones = Math.floor(Math.random() * 50) + 50;

console.log("We have " + allCones + " cones to sell today");

var conesSold = 0;

do{
    var numberOfCones = Math.floor(Math.random() * 5) + 1;
    if(allCones===0){
        console.log("We've sold all our cones for the day!");
        break;
    }
    else if(numberOfCones>allCones){
        console.log("I'm so sorry, we only have " + allCones + " left, so I can't sell you " + numberOfCones + " cones...");
    }
    else{
        console.log(numberOfCones + " cones sold!")
        conesSold += numberOfCones;
        allCones -= numberOfCones;
    }

}while(allCones>=0);
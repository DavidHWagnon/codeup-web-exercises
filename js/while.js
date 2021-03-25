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

do{
    // number of cones being sold in this loop iteration
    var numberOfCones = Math.floor(Math.random() * 5) + 1;
    //checks to see if number of cones available is 0 and stops loop if so
    if(allCones===0){
        console.log("We've sold all  of our cones for the day!");
        break;
    }
    //checks to see if number of cones being sold is more than the number of cones available
    else if(numberOfCones>allCones){
        console.log("I'm so sorry, we only have " + allCones + " left, so I can't sell you " + numberOfCones + " cones...");
    }
    //prints out number of cones sold and subtracts it from number of cones available
    else{
        console.log(numberOfCones + " cones sold!");
        allCones -= numberOfCones;
    }

}while(allCones>=0);
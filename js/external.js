"use strict";

// Part 1
console.log("Hello from external Javascript");

alert("Welcome to my Website!");

//Part 2
var favoriteColor = prompt("What is your favorite color?");

var myFavoriteColor = "red";

if ((favoriteColor.toLowerCase()) == (myFavoriteColor.toLowerCase()))
{
    alert("WoW! " + favoriteColor +" is my favorite color too!");
}
else{
    alert("That's nice");
}
//Part 3
var movieRate = parseFloat(prompt("Your kids want to rent the following movies. How much are you going to pay per night per movie?"));
console.log(movieRate);


var littleMermaid = parseFloat(prompt("For how many days are you going to rent The Little Mermaid?"));
console.log(littleMermaid);

var brotherBear = parseFloat(prompt("For how many days are you going to rent Brother Bear?"));
console.log(brotherBear);

var hercules = parseFloat(prompt("For how many days are you going to rent Hercules?"));
console.log(hercules);

alert("Your total price is going to be " + (movieRate * (littleMermaid + brotherBear + hercules)) + ". Would that be cash or life-juice?");



alert("You are a contractor working for Google, Amazon and Facebook." +
    " Tell me your pay rate and how many hours you worked for each company last week");


var googlePay = parseFloat(prompt("How much does Google pay you per hour?"));
console.log(googlePay);
var googleHours = parseFloat(prompt("How many hours did you work at Google last week?"));
console.log(googleHours);
var googleTotal = googlePay * googleHours

var amazonPay = parseFloat(prompt("How much does Amazon pay you per hour?"));
console.log(amazonPay);
var amazonHours = parseFloat(prompt("How many hours did you work at Amazon last week?"));
console.log(amazonHours);
var amazonTotal = amazonPay*amazonHours

var facebookPay = parseFloat(prompt("How much does Facebook pay you per hour?"));
console.log(facebookPay);
var facebookHours = parseFloat(prompt("How many hours did you work at Facebook last week?"));
console.log(facebookHours);
var facebookTotal = facebookPay* facebookHours

alert("Based on your total hours worked last week, you will receive $"
    + ((googleTotal)+(amazonTotal)+(facebookTotal)) + " on your next paycheck");



alert("You are a student that can only enroll in a certain class if the class is not full and it does not conflict with your current schedule.");


var classFull = confirm("Is the class you want to sign up for currently full?");
console.log(classFull);

var conflict = confirm("Does this class conflict with any classes you are currently taking?");
console.log(conflict);

if ((!classFull && !conflict) === true)
{
    alert("You are able to sign up for the class!")

}
else {
    alert("You are not able to sign up for the class...");

}


alert("You are able to redeem this offer only if you buy more than two items, or you are a premium member AND the offer has not expired.");


var offerExpired = confirm("Has the offer expired?");
console.log(offerExpired);

var items = confirm("Are you purchasing more than two items today?");
console.log(items);

var premium = confirm("Are you a premium member?");
console.log(premium);

if(offerExpired === true || (premium === false && items === false))
{
    alert("Unfortunately the offer has expired and is no longer available...");

}
else if(offerExpired == false && (items === true || premium === true))
{
    alert("Congratulations you are eligible for this offer!!!");

}


"use strict";

/**
 * TODO:
 * Create a function called 'sayHello' that takes a parameter 'name'.
 * When called, the function should return a message that says hello to the passed in name.
 *
 * Example
 * > sayHello("codeup") // returns "Hello, codeup!"
 */
// function that takes a name out outputs "Hello, " + name
function sayHello(name){
    return "Hello, " + name;
}

/**
 * TODO:
 * Call the function 'sayHello' and pass your name as a string literal argument.
 * Store the result of the function call in a variable named 'helloMessage'.
 *
 * console.log 'helloMessage' to check your work
 */

// Calls function 'sayHello' with "David" as 'name' parameter
sayHello("David");

// variable that calls line above
var helloMessage = sayHello("David");

// checks to see if output is correct
console.log(helloMessage);

/**
 * TODO:
 * Store your name as a string in a variable named 'myName', and pass that
 * variable to the 'sayHello' function. You should see the same output in the
 * console.
 */

// var that holds my name
var myName = "David";

// Calling 'sayHello' function with 'myName' as parameter
sayHello(myName);
console.log(sayHello(myName));


// Don't modify the following line, it generates a random number between 1 and 3
// and stores it in a variable named random
var random = Math.floor((Math.random() * 3) + 1);

/**
 * TODO:
 * Create a function called 'isTwo' that takes a number as a parameter.
 * The function should return a boolean value based on whether or not the passed
 * number is the number 2.
 *
 * Example
 * > isTwo(1) // returns false
 * > isTwo(2) // returns true
 * > isTwo(3) // returns false
 *
 * Call the function 'isTwo' passing the variable 'random' as a argument.
 *
 * console.log *outside of the function* to check your work (you should see a
 * different result everytime you refresh the page if you are using the random
 * number)
 */
// function that decides whether 'number' is equal to '2'
function isTwo(number){
    if (number == 2)
    {
        return true;
    }
    else{
        return false;
    }
}
// Calls above function with random number as parameter
isTwo(random);

console.log(isTwo(random));
/**
 * TODO:
 * Create a function named 'calculateTip' to calculate a tip on a bill at a
 * restaurant. The function should accept a tip percentage and the total of the
 * bill, and return the amount to tip
 *
 * Examples:
 * > calculateTip(0.20, 20) // returns 4
 * > calculateTip(0.25, 25.50) // returns 6.375
 * > calculateTip(0.15, 33.42) // returns 5.013
 */
// function to calculate tip
function calculateTip(tipPercentage, totalBill){
    var tip = tipPercentage * totalBill;
    return tip;
}
/**
 * TODO:
 * Use prompt and alert in combination with your calculateTip function to
 * prompt the user for the bill total and a percentage they would like to tip,
 * then display the dollar amount they should tip
 */

// prompt user for bill total
var total = parseFloat(prompt("What was the billed total?"));
alert("The billed total was $" + total) + ".";
// prompt user for tip percentage
var percent = (parseFloat(prompt("What percentage of the total bill would you like to tip?")));
alert("You would like to tip " + percent + "% of the bill.");
// alert that calls function to calculate tip
alert("You should leave a tip of $" + calculateTip(total,(percent/100)) + ".");
/**
 * TODO:
 * Create a function named `applyDiscount`. This function should accept a price
 * (before a discount is applied), and a discount percentage (a number between 0
 * and 1). It should return the result of applying the discount to the original
 * price.
 *
 * Example:
 * > var originalPrice = 100;
 * > var dicountPercent = .2; // 20%
 * > applyDiscount(originalPrice, dicountPercent) // 80
 *
 * > applyDiscount(45.99, 0.12) // 40.4712
 */
// prompt user for original price of item
var originalPricePrompt = parseFloat(prompt("What is the original price of the item?"));
alert("$" + originalPricePrompt + " is the original price of the item.");
// prompt user for discount of item (between 0 and 1
var discountPercent = parseFloat((prompt("What is the percentage of the discount? ** A number between 0 and 1 **")));
alert("This discount gives a " + (discountPercent*100) + "% discount off the full price of the item." );

// function to calculate and output discount price
function applyDiscount(fullPrice, discountPercentage){
    // variable that calculates discount price
    var discountPrice =alert("The discount price is $" +( fullPrice - (fullPrice*discountPercentage)));
    return discountPrice;
}
// call function
applyDiscount(originalPricePrompt, discountPercent);


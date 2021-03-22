"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message that related to that
 * color. Only worry about the colors defined below, if the color passed is not
 * one of the ones defined below, return a message that says so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// function that contains specific responses to the colors
function analyzeColor(color){
    if(color == "red"){
        alert(color + " is the color of my mouse");
    }
    else if(color == "orange"){
        alert(color + "  is the color of my kicks");
    }
    else if(color == "yellow"){
        alert(color + " is the color of the sun");
    }
    else if(color == "green"){
        alert(color + " is the color of my plants");
    }
    else if(color == "blue"){
        alert(color + " is the color of my water");
    }
    else if(color == "indigo"){
        alert(color + " a color of a Pokemon game");
    }
    else if(color == "violet"){
        alert(color + " is the name of a character from 'The Incredibles'");
    }
    else{
        alert("I do not know anything about " + color);
    }
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];
/**
 * TODO:
 * Pass the `randomColor` variable to your function and console.log the results.
 * You should see a different message every time you refresh the page
 */
console.log(analyzeColor(randomColor));
/**
 * TODO:
 * Refactor your above function to use a switch-case statement
 */
function switchColor(color){
    switch(color){
        case "red":
            alert(color + " is the color of my mouse");
            break;
        case "orange":
            alert(color + " is the color of my kicks");
            break;
        case "yellow":
            alert(color + " is the color of the sun");
            break;
        case "green":
            alert(color + " is the color of my plants");
            break;
        case "blue":
            alert(color + " is the color of my water");
            break;
        case "indigo":
            alert(color + " a color of a Pokemon game");
            break;
        case "violet":
            alert(color + " is the name of a character from 'The Incredibles'");
            break;
        default:
            alert("I don't know anything that is " + color);
            break;
    }
}
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
var colorPrompt = prompt("Give me a color.");
console.log(alert("You gave me the color: " + colorPrompt));
console.log(switchColor(colorPrompt));
/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * all for free!.
 *
 * Write a function named `calculateTotal` that accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */
function calculateTotal(luckyNumber, totalAmount){
    if(luckyNumber == 0){
        alert("Waaa Waa your 'lucky number' was " + luckyNumber + " so you don't get a discount today.");
        alert("Your total bill before your discount was $" + totalAmount);
        alert("Your total bill after your discount is $" + totalAmount);
    }
    if(luckyNumber == 1){
        alert("Cool, your 'lucky number' was " + luckyNumber + " so you recieve a 10% discount today!");
        alert("Your total bill before your discount was $" + totalAmount);
        alert("Your total bill after your discount is $" + (totalAmount - (totalAmount*.1)));
    }
    if(luckyNumber == 2){
        alert("Nice, your 'lucky number' was " + luckyNumber + " so you recieve a 25% discount today!");
        alert("Your total bill before your discount was $" + totalAmount);
        alert("Your total bill after your discount is $" + (totalAmount - (totalAmount*.25)));
    }
    if(luckyNumber == 3){
        alert("Wonderful, your 'lucky number' was " + luckyNumber + " so you recieve a 35% discount today!!");
        alert("Your total bill before your discount was $" + totalAmount);
        alert("Your total bill after your discount is $" + (totalAmount - (totalAmount*.35)));
    }
    if(luckyNumber == 4){
        alert("Fantastic, your 'lucky number' was " + luckyNumber + " so you recieve a 50% discount today!!");
        alert("Your total bill before your discount was $" + totalAmount);
        alert("Your total bill after your discount is $" + (totalAmount - (totalAmount*.5)));
    }
    if(luckyNumber == 5){
        alert("INCREDIBLE, your 'lucky number' was " + luckyNumber + " so you recieve a 100% discount today!!!");
        alert("Your total bill before your discount was $" + totalAmount);
        alert("Your total bill after your discount is $" + (totalAmount - (totalAmount)));
    }
}
/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 6.
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
 var luckyNumber = Math.floor(Math.random() * 6);
 var totalPrompt = parseFloat(prompt("What was your total bill today?"));

 console.log(calculateTotal(luckyNumber,totalPrompt));


/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * if what the user enters is not a number, use an alert to tell them that, and
 * do *not* display any of the above information.
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

var confirmDialog = confirm("Would you like to enter a number?");

function oddOrEven(number){
    if (number % 2 == 0){
        return "even";
    }
    else{
        return "odd";
    }
}

function positiveOrNegative(number){
    if(number > 0){
      return "positive";
    }
    else if(number === 0){
        return "That is literally zero you nincompoop";
    }
    else if(number < 0){
        return "negative";
    }
}

if(confirmDialog === true){
    var numberPrompts = parseFloat(prompt("Give me a number"));
    if(isNaN(numberPrompts) ==false ){
        alert(numberPrompts + " is a(n) " + oddOrEven(numberPrompts) + "number.");
        alert(numberPrompts + " plus 100 is " + (numberPrompts + 100) + ".");
        alert(numberPrompts + " is a " + positiveOrNegative(numberPrompts) + " number.");
    }
    else if(isNaN(numberPrompts)== true){
        alert("That aint a numberrrr");
        console.log("Number was not provided.");
    }
}
else if(confirmDialog === false){
    alert("Get outtta heeeeere.");
    console.log("Request denied.");
}
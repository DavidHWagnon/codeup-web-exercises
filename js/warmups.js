for(var i = 1; i <= 30; i++ ){
    if( i % 3 === 0 && i % 5 === 0){
        console.log("fizzbuzz")
    }
    else if(i % 3 === 0){
        console.log("fizz")
    }
    else if(i % 5 === 0){
        console.log("buzz")
    }
    else{
        console.log(i);
    }
}
function seven(){
    console.log(7)
    return 7;
}

function multipyFive (num){
    return num * 5;
}
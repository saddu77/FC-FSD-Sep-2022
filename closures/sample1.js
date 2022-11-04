//nested function example
//outer function
function greet(name){

    //inner function
    function displayName(){
        console.log('Hi' + ' ' + name);
    }

    displayName();
}

greet('John');
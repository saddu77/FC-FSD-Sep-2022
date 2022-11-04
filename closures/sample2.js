function greet(name){
    function displayName(){
        console.log('Hi' + ' ' + name);
    }

    return displayName;
}

const g1 = greet('John');
console.log(g1); // returns function definition
g1(); // calling the function
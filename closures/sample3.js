// JS closure provides access to outer scope of a function from the inner function,
//even after outer functon has closed.

//outer function 
function greet(){

    let name = 'John';
    //inner function
    function displayName(){
        return 'Hi ' + ' ' + name;
    }

    return displayName;
}

const g1 = greet();
console.log(g1);
console.log(g1());


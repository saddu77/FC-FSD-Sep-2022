//ES6 introduces a new kind of function that is different from reagular function: function generator or generator

function* generate(){ // * denotes that the generate() is a generator,not a normal function
    console.log("Invoked first!!! ");
    yield 1; //yield statement returns a value and pauses the execution of the function.

    console.log("Invoked Second!!! ");
    yield 2;
}

let gen = generate();
// console.log(gen);
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

// for(const g of gen){
//     console.log(g);
// }


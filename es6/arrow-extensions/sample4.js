function arrayFromArgs(){
    return Array.from(arguments);
}

var fruits = arrayFromArgs('Apple','Orange','Banana');
console.log(fruits);


//ES6 Introduces Array.from() that creates a new intance of the Array from an array-like iterable Object.
//Syntax :  Array.from(target[,mapFn[,thisArg]])
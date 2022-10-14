let add = function(x,y){
    return x + y;
}

console.log(add(20,20));
//arrow function

let addition = (x,y) => { return x + y };
console.log(addition(40,40));
console.log(typeof addition)
console.log(addition instanceof Function);


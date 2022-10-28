// Object.is()  <=  To check if two values are the same.

let amount = -0,
    volume = +0;

console.log(volume === amount);
console.log(Object.is(amount, volume));
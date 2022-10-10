// const person = Object.freeze({age:20});
const person ={age:20};

person.age = 35; //changing the value of its property
console.log(person.age);

person = {age:33}; //re-assigning
//console.log(person.age);
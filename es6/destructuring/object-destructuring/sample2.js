let person = {
    firstName : 'John',
    lastName : 'Doe',
    middleName : 'C.',
    currentAge : 23
}

let { firstName, lastName, middleName='',currentAge:age = 18 } = person;

console.log(middleName);
console.log(age);
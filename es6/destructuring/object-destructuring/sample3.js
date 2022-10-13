let employee = {
    id: 1001,
    emp_name:{
        firstName:'John',
        lastName:'Doe'
    }
};

let {
    id,
    emp_name:{
        firstName,
        lastName
    }
} = employee;

console.log(id + " " + firstName + " " + lastName);
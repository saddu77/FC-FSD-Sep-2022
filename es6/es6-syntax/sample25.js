let statuses = {
    OPEN: Symbol('Open'),
    IN_PROGRESS: Symbol('In progress'),
    COMPLETED: Symbol('Completed'),
    HOLD: Symbol('On hold'),
    CANCELED: Symbol('Canceled')
};

console.log(statuses.COMPLETED);

let status = Symbol('status');
let tasks = {
    [status]: statuses.OPEN,
    description:'Learning ES6 Symbol'
};

// console.log(tasks);
console.log(Object.keys(tasks));
console.log(Object.getOwnPropertyNames(tasks));


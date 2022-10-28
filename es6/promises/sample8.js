async function sayHi(){
    return Promise.resolve('Hi');
}

sayHi().then(console.log);
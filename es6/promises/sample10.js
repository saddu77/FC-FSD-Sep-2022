class Greeter{
    async sayHi(){
        return 'Hi from Greeter';
    }
}

let msg = new Greeter();
msg.sayHi().then(console.log);
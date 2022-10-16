class Person{
    constructor(name){
        this.name = name;
    }

    getName = () => {
        return this.name;
    }
}


let p = new Person("John Doe");
console.log(p.getName());
class Person{
    constructor(name,age){
        this.setPerson(name,age);
    }

    getPerson(){
        return this.name + " " + this.age;
    }

    setPerson(newName,newAge){
        newName = newName.trim();
        this.name = newName;
        this.age = newAge;
    }
}
//getPerson() setPerson() <- getter ans setter in othr Programming languages...

let p = new Person(' John Doe ',21);
console.log(typeof p);
console.log(p instanceof Person)
console.log(p);
console.log(p.name);
console.log(p.age);

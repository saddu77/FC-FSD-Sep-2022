class Person{
    constructor(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    set name(newName){
       newName = newName.trim();
       this._name = newName;
    }
}

let p = new Person("John Doe");
console.log(p.name);

p.name = 'Alex';
console.log(p.name);

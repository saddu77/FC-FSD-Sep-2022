function Person(name){
    this.name = name;
}

Person.prototype.getName = function(){
    return this.name;
}

var p = new Person("John");
console.log(p.getName());
//Event handlers
//Object methods
//Prototype methods
//Functions that use the arguments object
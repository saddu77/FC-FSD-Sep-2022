let john = {name:"John"},
    lily = {name:"Lily"},
    peter = {name:"Peter"};

let userRoles = new Map();
console.log(typeof(userRoles));
console.log(userRoles instanceof Map);

userRoles.set(john,'admin');
userRoles.set(lily,'editor');
userRoles.set(peter,'subscriber');


console.log(userRoles.get(lily));
let john = {name:"John"},
    lily = {name:"Lily"},
    peter = {name:"Peter"};
    alex = {name:"Alex"};

let userRoles = new Map();
console.log(typeof(userRoles));
console.log(userRoles instanceof Map);

userRoles.set(john,'admin');
userRoles.set(lily,'editor');
userRoles.set(peter,'subscriber');


console.log(userRoles.get(lily));

console.log(userRoles.has(alex));
console.log(userRoles.size);

console.log("======================");

for ( const user of userRoles.keys()){
    console.log(user.name);
}

console.log("======================");

for ( let role of userRoles.values()){
    console.log(role);
}

console.log("======================");

for ( const role of userRoles.entries()){
    console.log(`${role[0].name}:${role[1]}`);
}

console.log("======================");

for ( let [user,role] of userRoles.entries()){
    console.log(`${user.name}:${role}`);
}

console.log("======================");


userRoles.forEach((role,user) => console.log(`${user.name} : ${role}`));

console.log("======================");

let roles = [ ...userRoles.values()];
console.log(roles);

console.log(userRoles.size);
userRoles.clear();
console.log(userRoles.size);
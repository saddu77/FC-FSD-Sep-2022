let roles = new Set();
roles.add('admin')
     .add('editor')
     .add('subscriber');


for ( let role of roles){
    console.log(role);
}

for ( let [key,values] of roles.entries()){
    console.log(key === values);
}

roles.forEach( role => console.log(role.toUpperCase()));
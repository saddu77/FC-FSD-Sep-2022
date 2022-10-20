function getUsers(callback){
    setTimeout( () => {
        callback([
            {username:'john',email:'john@gmail.com'},
            {username:'jane',email:'jane@gmail.com'} 
        ]);
    },1000);
}

function findUser(username,callback){ 
  getUsers((resp) => {
    const user = resp.find((user) => user.username === username);
    callback(user);
  });
}

findUser('jane',console.log);
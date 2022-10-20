function getUsers(){  //API or Acees DB : will have a delay
    let users = [];
    // return [
    //     {username:'john',email:'john@gmail.com'},
    //     {username:'jane',email:'jane@gmail.com'} 
    // ]

    setTimeout( () => {
        users = [
        {username:'john',email:'john@gmail.com'},
        {username:'jane',email:'jane@gmail.com'} 
        ];
    },1000);

    return users;
}

function findUser(username){ //synchronous and blocking
    const users = getUsers();
    const user = users.find((user) => user.username === username);
    return user;
}

console.log(findUser('john'));
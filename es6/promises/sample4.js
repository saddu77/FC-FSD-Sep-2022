let success = false;

function getUsers(){
    return new Promise( (resolve,reject) => {
        setTimeout( () => {
            if(success){
                resolve([
                    {username:'john',email:'john@gmail.com'},
                    {username:'jane',email:'jane@gmail.com'}
                ]);
            } else {
                reject('Failed to List Users');
            }
        },1000);
    })
}

// const promise = getUsers();
// promise.then((users)=>{
//     console.log(users);
// },(error) => {
//     console.log(error);
// })

getUsers().then( (users) => {
    console.log(users);
}).catch((error) => {
    console.log(error);
}).finally( () => {
    console.log("msg from finally block")
});

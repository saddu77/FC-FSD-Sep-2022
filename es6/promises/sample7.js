function getUser(userId){
    return new Promise( (resolve,reject) => {
        console.log('Get user from the Database');
        setTimeout( () => {
            resolve({
                userId: userId,
                username: 'john'
            });
        }, 1000);
    })
}

function getServices(user){
    return new Promise( (resolve,reject) => {
        console.log(`Get services of  ${user.username} from API`);

        setTimeout( () => {
            resolve(['Email','VPN','CDN']);
        }, 2 * 1000);
    })
}

function getServicesCost(services){
    return new Promise( (resolve,reject) => {
        console.log(`Calculate service costs of ${services}.`);
        setTimeout( () => {
            resolve(services.length * 100);
        }, 3 * 1000);
    })
}
//chain the promises
// getUser(100)
//     .then(getServices)
//     .then(getServicesCost)
//     .then(console.log);

async function showServicesCost(){
    let user =await getUser(100);
    let services = await getServices(user);
    let cost = await getServicesCost(services);
    console.log(`The service cost is ${cost}`);
}

showServicesCost();
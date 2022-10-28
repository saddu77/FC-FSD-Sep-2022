async function getUser(userId){
    await Promise.reject(new Error('Invalid User Id'));
}

getUser().catch(err => {
    console.log(err);
})
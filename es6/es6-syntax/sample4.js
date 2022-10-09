function getTime(){   
    console.log( new Date().toLocaleString())
}

//setInterval(getTime,1000);

setTimeout(getTime,3000)
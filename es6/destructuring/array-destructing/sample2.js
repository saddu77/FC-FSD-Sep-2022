function getStores(){
    return [70,80,90,100];
}

let [x,y, ...args] = getStores();
console.log(x); //70
console.log(y); //80
console.log(args); //[90,100]
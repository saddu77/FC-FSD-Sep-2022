function getStores(){
    return [70,80,90];
}
//prior to ES6
let scores = getStores();
console.log(scores[0] + " " + scores[1] + " " + scores[2]);

//from ES6
let [x,y,z] = getStores();
console.log(x);
console.log(y);
console.log(z);


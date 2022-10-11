function sum(...args){
    return args
    .filter(function(e){
        return typeof e === 'number';
    })
    .reduce(function(prev,curr){
        console.log(prev + " " + curr)
        return prev + curr;
    })
}

let res = sum(20,'welcome',null,undefined,30);
console.log(res);
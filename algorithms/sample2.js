function fact(n){
    let num = n

    if ( n === 0) return 1

    for(let i = 0; i < n; i++){
        num = n * fact(n - 1)
    }

    return num;
}

const t0 = performance.now()
fact(1)
fact(2)
fact(3)
fact(6)
fact(9)
fact(12)
fact(14)

const t1 = performance.now()
console.log("Function tooks: " + (t1 - t0) + "ms"); 
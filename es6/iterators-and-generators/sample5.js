function* forever(){
    let index = 0;
    while(true){
        yield index++;
    }
}

let f = forever();
console.log(f.next());
console.log(f.next());
console.log(f.next());
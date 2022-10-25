function addOne(){
    return Array.from(arguments, x => x + 1);
}
console.log(addOne(1,2,3));
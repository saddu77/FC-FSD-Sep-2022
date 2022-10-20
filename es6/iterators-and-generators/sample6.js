class Bag{
    constructor(){
        this.elements = [];
    }
    isEmpty(){
        return this.elements.length === 0;
    }
    add(element){
        this.elements.push(element);
    }

   
    * [Symbol.iterator](){
        for ( let element of this.elements){           
            yield element;          
        }
    }
}
let bg = new Bag();
bg.add(10);
bg.add(20);
bg.add(30);
bg.add(40);
bg.add(50);

// console.log(bg);

for( let e of  bg){
    console.log(e);
}
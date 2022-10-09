class Queue{
    constructor(){
        this.items = [];
    }
   enque(element){     
     this.items.push(element);
   }
   front(){
    return this.items[0];
   }
   deque(){
    return this.items.shift();
   }
   display(){
        var data = " ";
        for(var i = 0; i < this.items.length ; i++){
            data = data + this.items[i] + " " ;           
        }
        return data;
   }
}

var que = new Queue();

que.enque(10);
que.enque(20);
que.enque(30);
que.enque(40);
que.enque(50);
que.enque(60);

console.log(que.front());
console.log(que.deque());
console.log("------------------")
console.log(que.display());




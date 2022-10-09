class Stack{
    constructor(){
        this.items = [];
    }

    push(element){
        this.items.push(element);
    }

    pop(){
        return this.items.pop();
    }

    peek(){
        return this.items[this.items.length - 1];
    }

    displayStack(){
        var str = "";
        for(var i = this.items.length-1; i >= 0 ; i--){
            str += this.items[i] + " ";
        }

        return str;
    }
}

var stack = new Stack();
stack.push(10);
stack.push(20);
stack.push(30);
stack.push(40);
stack.push(50);

console.log(stack.displayStack()); //10 20 30 40 50
console.log("==================================")
console.log(stack.peek());// 50
console.log(stack.pop()); //50

console.log("==================================")
console.log(stack.displayStack()); // 10 20 30 40

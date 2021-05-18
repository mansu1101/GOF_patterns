var stack = function(){
    this.count = 0;
    this.storage = {};
    // Add value to stack
    this.push = function(element){
        this.storage[this.count] = element;
        this.count++;
    }
    // Remove value from stack and remove it from stack
    this.pop = function(){
        if(this.count === 0){
            return undefined;
        }
        this.count--;
        var popElement = this.storage[this.count];
        delete this.storage[this.count];
        return popElement;
    }
    // Get the value from stack without removing it
    this.peek = function(){
        return this.storage[this.count-1];
    }
    // Size of the stack
    this.size = function(){
        return this.count;
    }
}

var myStack = new stack();
myStack.push(1);
myStack.push(2);
myStack.push("Manish");
myStack.push("Joshi");
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.peek());


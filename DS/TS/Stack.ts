class Stack {
    private count: number = 0;
    private storage: any = {};
    public  push(value:any): void {
        this.storage[this.count] = value;
        this.count++;
    }
    public pop():any{
        if(this.count === 0){
            return undefined;
        }
        this.count--;
        let popedValue = this.storage[this.count];
        delete this.storage[this.count];
        return popedValue; 
    }
    public peek(): any{
        return this.storage[this.count-1];
    }
    public size(): number{
        return this.count;
    }
}

let myStack = new Stack();
console.log('Stack created with TS and now Inserting element into stack');

myStack.push(1);
myStack.push(2);
myStack.push("Manish");
myStack.push("Joshi");
console.log(myStack.size());
console.log(myStack.pop());
console.log(myStack.peek());
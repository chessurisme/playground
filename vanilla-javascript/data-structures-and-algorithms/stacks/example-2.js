"use strict";

class Stack {
  constructor(){
    this.count = 0;
    this.storage = {};
    this.push = push();
    this.pop = pop();
    this.size = size();
    this.peek = peek();
  }

  // Adds a value onto the end  of the stack
  push(value){
    this.storage[this.count] = value;
    this.count++;
  }

  // Removes and returns the value at the end of the stack
  pop(){
    this.count == 0 ? undefined : null;

    this.count--;
    const result = this.storage[this.count];
    delete this.storage[this.count];
    return result;
  } 

  size(){
    return this.count;
  }

  // Returns the value at the end of the stack
  peek(){
    return this.storage[this.count - 1];
  }
}

const myStack = new Stack();

myStack.push('apple');
myStack.push('mango')
console.log(myStack.peek());

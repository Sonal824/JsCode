/**
 * Design a stack which supports the following operations.

Implement the CustomStack class:

CustomStack(int maxSize) Initializes the object with maxSize which is the maximum number of elements in the stack or do nothing if the stack reached the maxSize.
void push(int x) Adds x to the top of the stack if the stack hasn't reached the maxSize.
int pop() Pops and returns the top of stack or -1 if the stack is empty.
void inc(int k, int val) Increments the bottom k elements of the stack by val. If there are less than k elements in the stack, just increment all the elements in the stack.
 */

 class CustomStack {
     constructor(maxSize, stackArray=[]){
         this.maxSize = maxSize;
         this.stackArray = stackArray;
     }
 }

 CustomStack.prototype.push = function(element) {
     if(this.stackArray.length < this.maxSize) {
         this.stackArray.push(element);
     }
 }

 CustomStack.prototype.pop = function() {
     if(this.stackArray.length == 0){
         return -1;
     }
     this.stackArray.pop();
 }

 CustomStack.prototype.increment = function(k, val) { 
    for(let i=0; i<k; i++) {
        if(this.stackArray[i])
            this.stackArray[i] += val;
    }
 }

 var cs = new CustomStack(3);
 cs.push(1);
 cs.push(2);
 cs.pop();
 cs.push(2);
 cs.push(3);
 cs.push(4);
 cs.push(5);
 cs.increment(5,100);
 cs.increment(2,100);


 console.log(cs);

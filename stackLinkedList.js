class Stack{
    constructor(){
        this.top = null;
        this.size = 0;
    }
    isEmpty(){
        if(this.size === 0){
            return true;
        }
        else 
        {
            return false;
        }
    }
}
class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

function push(value, stack){
    const node = new Node(value);
    if(stack.isEmpty()){
        stack.top = node;
    } else{
        node.next = stack.top;
        stack.top = node;
    }
    stack.size++;
}

function pop(stack){
    if(stack.isEmpty()){
        return null;
    } 
    const popNode = stack.top;
        stack.top = stack.top.next;
        stack.size--;
        return popNode.value;
}
function peek(stack){
    if(stack.isEmpty()){
        return null;
    }
    return stack.top.value;
}
function clear(stack){
    if(stack.isEmpty()){
        return null;
    }else {
    stack.top =null;
    stack.size = 0;
    return null;
    }
}
function printStack(stack){
    if(stack.isEmpty()){
        console.log("Empty Stack ")
        return null;
    }
    let current = stack.top;
    while(current){
        console.log(current.value);
        current = current.next;
    }
}
const stack = new Stack();
push(6,stack);
push(19,stack);
push(12,stack);
console.log("stack is:- ")
printStack(stack);
console.log("POP from stack :- ")
console.log(pop(stack));
console.log("stack is:- ")
printStack(stack);
console.log(" ")
console.log(peek(stack));
console.log(" ")
console.log(clear(stack));
console.log("stack is:- ")
printStack(stack);
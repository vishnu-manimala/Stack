//stack with inbuilt methods
// class Stack {
//     constructor(){
//         this.items = [];
//     }
//     push(element){
//         this.items.push(element);
//     }
//     pop(){
//        return this.items.pop();

//     }
//     peek(){
//         return this.items[this.items.length-1];
//     }
//     isEmpty(){
//         return this.items.length === 0;
//     }
//     size(){
//         return this.items.length;
//     }
//     print(){
//         console.log(this.items.toString());
//     }
// }
// const stack = new Stack();
// console.log(stack.isEmpty());
// stack.push(20);
// stack.push(32);
// stack.push(43);
// stack.print();
// console.log(stack.pop());
// stack.print();
// console.log(stack.peek());


//stack without in built methods
class Stack{ 
    constructor(){
        this.items =[];
        this.size =0;
    }
    isEmpty(){
       if(this.size === 0){
        return true;
       }else{
        return false;
       }
       
    }
    push(element){
        this.items[this.size] = element;
        this.size++;
        console.log(`added ${element} at the position ${this.size}`);
        return this.size;
    }
    pop(){
        if(this.size===0){
            console.log("empty stack");
            return -1;
        }
        let delet = this.items[this.size-1];
        this.size--;
        console.log(`deleted ${delet} from the position ${this.size+1}`);
        return delet;
       
    }
    peek(){
        if(this.isEmpty()){

            console.log("Empty stack ");
            return -1;
        }
        console.log(this.items[this.size-1]);
        return this.size;
    }
    print(){
        let string = "";
        for(let i =0;i<this.size;i++){
            string+=this.items[i] +" ";
        }
        console.log(string);
    }
    clear(){
        if(this.isEmpty()){
            console.log("Empty stack already");
            return -1;
        }
        this.items = [];
        this.size =0;
        console.log("cleared stack ..")
        return this.size;
    }
}
const stack = new Stack();
stack.isEmpty();
stack.push(20);
stack.push(32);
stack.push(43);
stack.peek();
stack.print();
stack.pop();
stack.print();
stack.peek();
stack.print();
stack.clear();
stack.print();


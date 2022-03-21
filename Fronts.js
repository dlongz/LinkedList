// Add Front
/* Write a method that accepts a value and create a new node, 
assign it to the list head, and return a pointer to the new head node.*/
// 
// Remove Front
/* Write a method to remove the head node and return the new list head node. 
If the list is empty, return null.*/
// 
// Front
/* Write a method to return the value (not the node) at the head of the list. 
If the list is empty, return null.*/


class Node{
    constructor(data){
        this.value = data
        this.next = null
    }
}

class SLL {
    // constructor, other methods, removed for brevity
    constructor(){
        this.head = null
    }

    // Methods
    addFront(value) {
        let node1 = new Node(value);
        this.head = node1;
        return this
    }

    removeFront(){
        if(this.head == null){
            return null;
        } else {
            this.head = null;
            return "Head Node Removed"
        }
    }

    front(){
        if(this.head == null){
            return null;
        } else{
            return this.head.value
        }
    }
}

let newList = new SLL()
console.log(newList)
console.log(newList.addFront(88))
console.log(newList.front())
console.log(newList.removeFront())
console.log(newList.removeFront())
console.log(newList.front())
console.log(newList)
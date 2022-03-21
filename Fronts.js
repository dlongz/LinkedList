// Add Front
/* Write a method that accepts a value and create a new node, 
assign it to the list head, and return a pointer to the new head node.*/

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
        return this.head
    }
}

let newList = new SLL()
console.log(newList)
console.log(newList.addFront(88))
console.log(newList)
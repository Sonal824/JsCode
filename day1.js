/* Linked List */

/** 
 * Node Class with data and next
 * Below code will initialize object with 2 properties
 */ 
class Node {
    constructor(data,next = null) {
        this.data = data;
        this.next = next;
    }
}

/** 
 * Linked List Class which maintains head pointer of the list
 * Below code will initialize object with head property
 */ 
class LinkedList {
    constructor(){
        this.head = null;
    }
}

/** Insert Operation 
 * New node before head - at beginning of the list
 * New node after tail - at end of the list
 * New node in middle of the list - at any random position
*/

LinkedList.prototype.insertAtBeginning = function(data) {

    // Create node
    let newNode = new Node(data);

    // set next of newly created object as head because we are inserting at beginning
    newNode.next = this.head;

    // set newly created node object as head
    this.head = newNode;

    return this.head;

}

LinkedList.prototype.insertAtEnd = function(data) {

    // Create node with value and next
    let newNode = new Node(data);

    // if head is null means its first element
    if(this.head == null) {
        this.head = newNode;
        return this.head;
    } 

    // traverse through linked list until tail is null
     tail = this.head;
     while(tail.next != null) {
        tail = tail.next;
     }
     tail.next = newNode;
     return this.head;
}

LinkedList.prototype.insertAt = function(data, index) {

    // Create new node
    let newNode = new Node(data);

    // If the list is empty
    if(this.head == null){
        this.head = newNode;
        return;
    }
    
    // If index is zero, insert at first position
    if(index == 0){
        this.head = new Node(data, this.head);
        return;
    }

    // Find position and insert node
    const previousNode = this.getAt(index - 1);

    // Insert node
    newNode.next = previousNode.next;
    previousNode.next = newNode;

    return this.head;
}

LinkedList.prototype.getAt = function(index){
    let counter = 0;
    let node = this.head;
    while (node) {
        if (counter === index) {
           return node;
        }
        counter++;
        node = node.next;
    }
    return null;
}

/**
 * Delete Operation
 * Delete first node
 * Delete last node
 * Delete node from middle of list at given position
 */

 LinkedList.prototype.deleteFirstNode = function() {
     if(!this.head)
        return;
     this.head = this.head.next;
     return this.head;
 }  

 LinkedList.prototype.deleteLastNode = function() {
    
    // If head is null
    if(!this.head)
        return;

     // If only one element
     if(!this.head.next){
        this.head == null;
        return;
     }   

     // Traverse till last element and capture prev element
     prev = this.head;
     tail = this.head.next;
     while(tail.next !== null){
        prev = tail;
        tail = tail.next;
     }

     prev.next = null;
     return this.head;
 }

 LinkedList.prototype.deleteAt = function(index) {

     // if no head
     if(!this.head)
        return;

    // if index is 0
    if(index == 0){
        this.head = this.head.next;
        return;
    }

    // find given position
    var previousNode = this.getAt(index - 1);
    if(!previousNode && !previousNode.next) {
        return;
    }
    previousNode.next = previousNode.next.next;
    return this.head;
 }

// A linked list object created with property head as null
let list = new LinkedList();
list.insertAtBeginning(4);
list.insertAtBeginning(3);
list.insertAtBeginning(2);
list.insertAtBeginning(1);
list.deleteFirstNode();
list.deleteLastNode();
list.deleteAt(1);

console.log(list);
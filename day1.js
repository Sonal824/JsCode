/* Linked List */

// Node Class with data and next
class Node {
    constructor(data,next = null) {
        this.data = data;
        this.next = next;
    }
}
// The above code will initialize object with 2 properties

// Linked List Class which maintains head pointer of the list
class LinkedList {
    constructor(){
        this.head = null;
    }
}
// The above code will initialize object with head property

// A linked list object created with property head as null
let list = new LinkedList();

/** Insert Operation 
 * New node before head - at beginning of the list
 * New node after tail - at end of the list
 * New node in middle of the list - at any random position
*/

// Create node
LinkedList.prototype.insertAtBeginning = function(data) {

    // Create node
    let newNode = new Node(data);

    // set next of newly created object as head because we are inserting at beginning
    newNode.next = this.head;

    // set newly created node object as head
    this.head = newNode;

    return this.head;

}

list.insertAtBeginning(1);
list.insertAtBeginning(2);
list.insertAtBeginning(3);


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
    console.log(previousNode)
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

list.insertAt(6,2);
console.log(list);

/** 
 * Revision : Linked List (Singly)
 * One element / node is linked to another element or node 
 * Node
 * Head - Start of linked list
 * Class Node {val, next}
 * Class Linked List { head = null }
 * Insert operations
 * Insert at beginning
 * create new node -> newNode.next = this.head.next -> this.head = newNode 
 * Insert at end
 * traverse till next == null
 * tail = this.head
 * while(tail.next != null) {
 *  tail = tail.next;
 * }
 * tail.next = new node;
 * Insert at given position
 * find position of prev element -> newNode.next = prev.next -> prev.next = newNode
 * node = this.head;
 * while(node){
 * if(curr == index) return node;
 * counter++;
 * node = node.next
 * }
 */
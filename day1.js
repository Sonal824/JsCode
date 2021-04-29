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

list.insertAtEnd(4);
console.log(list);
/**
 * Given the head of a singly linked list, reverse the list, and return the reversed list.
 */

var linkList = require('./linkedlist');
const { LinkedList } = require('./linkedlist');
let llObj = new linkList.LinkedList();

llObj.insertAtBeginning(5);
llObj.insertAtBeginning(4);
llObj.insertAtBeginning(3);
llObj.insertAtBeginning(2);
llObj.insertAtBeginning(1);

console.log(llObj);

var prev = null;
var curr = llObj.head;

while(curr!=null){
    let temp = curr.next; // store current next data
    curr.next = prev; 
    prev = curr;
    curr = temp;
}

llObj.head = prev;
console.log(llObj);
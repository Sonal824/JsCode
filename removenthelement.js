/**
 * Given the head of a linked list, remove the nth node from the end of the list and return its head.
 */

var linkList = require('./linkedlist')
let llObj = new linkList.LinkedList();

llObj.insertAtBeginning(2);
llObj.insertAtBeginning(1);

/** 
 * TWO PASS APPROACH
 * Step 1 : Find Length of Linked List
 * Step 2 : Find index to remove by Length - n and delete
 */

 /** Find Length of all element */
let L = 0;
node = llObj.head;
while(node!==null){
    L++;
    node = node.next;
}

/** Traverse and find L-n Element where n is index to delete from last */
const n = 1;
let prevNode = llObj.deleteAt(L-n);
"use strict";
class Nodee {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
class LinkedList {
    constructor() {
        this.head = null;
    }
    append(value) {
        const newNodee = new Nodee(value);
        if (!this.head) {
            this.head = newNodee;
            return;
        }
        let current = this.head;
        while (current.next) {
            current = current.next;
        }
        current.next = newNodee;
    }
    printList() {
        let current = this.head;
        let result = "";
        while (current) {
            result += "->" + current.value;
            current = current.next;
        }
        console.log(result + "->null");
    }
}
function toLinkedList(arr) {
    const linkedList = new LinkedList();
    arr.forEach((el) => linkedList.append(el));
    return linkedList;
}
const arr2 = [1, 2, 3, 4, 5, 6];
let myLinkedList = new LinkedList();
myLinkedList = toLinkedList(arr2);
myLinkedList.printList();

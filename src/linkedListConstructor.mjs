import { Node } from "./nodeConstructor.mjs";

class LinkedList {
    constructor() {
        this.head = new Node();
        this.tail = this.head;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.head.value === null) {
            this.head = newNode;
        } else {
            this.tail.nextNode = newNode;
        }
        this.tail = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        const previousHead = this.head;
        this.head = newNode;
        if (previousHead.value !== null) {
            newNode.nextNode = previousHead;
        } else {
            this.tail = newNode;
        }
        this.length++;
    }
}

export { LinkedList }
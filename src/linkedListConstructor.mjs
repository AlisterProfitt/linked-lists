import { Node } from "./nodeConstructor.mjs";

class LinkedList {
    constructor() {
        this.head = new Node(null);
        this.length = 0;
    }

    append(value) {
        if (this.head.value === null) {
            this.head.value = value;
            this.length++;
            return
        }
        const newNode = new Node(value);
        let currentNode = this.head;
        while (currentNode.value !== null) {
            if (currentNode.nextNode === null) {
                currentNode.nextNode = newNode;
                break;
            }
            currentNode = currentNode.nextNode;
        } 
        this.length++;
    }
}

export { LinkedList }
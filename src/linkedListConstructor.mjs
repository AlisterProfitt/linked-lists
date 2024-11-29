import { Node } from "./nodeConstructor.mjs";

class LinkedList {
    constructor() {
        this.listHead = new Node(null);
        this.length = 0;
    }

    append(value) {
        if (this.listHead.value === null) {
            this.listHead.value = value;
            this.length++;
            return
        }

        const newNode = new Node(value);
        let currentNode = this.listHead;
        while (currentNode.value !== null) {
            if (currentNode.nextNode === null) {
                currentNode.nextNode = newNode;
                break;
            }
            currentNode = currentNode.nextNode;
        } 
        this.length++;
    }

    prepend(value) {
        if (this.listHead.value === null) {
          this.listHead.value = value;
          this.length++;
          return;
        }

        const newNode = new Node(value);
        const previousHead = this.listHead;
        this.listHead = newNode;
        newNode.nextNode = previousHead;
        this.length++;
    }

    size() {
        return this.length;
    }

    head() {
        return this.listHead;
    }

    tail() {
        let currentNode = this.listHead;
        while (currentNode.value !== null) {
            if (currentNode.nextNode === null) {
                return currentNode;
            }
            currentNode = currentNode.nextNode;
        }
    }
}

export { LinkedList }
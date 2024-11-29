import { Node } from "./nodeConstructor.mjs";

class LinkedList {
    constructor() {
        this.headNode = new Node();
        this.tailNode = this.headNode;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        if (this.headNode.value === null) {
            this.headNode = newNode;
        } else {
            this.tailNode.nextNode = newNode;
        }
        this.tailNode = newNode;
        this.length++;
    }

    prepend(value) {
        const newNode = new Node(value);
        const previousHead = this.headNode;
        this.headNode = newNode;
        if (previousHead.value !== null) {
            newNode.nextNode = previousHead;
        } else {
            this.tailNode = newNode;
        }
        this.length++;
    }

    size() {
        return this.length;
    }

    head() {
        return this.headNode;
    }


}

export { LinkedList }
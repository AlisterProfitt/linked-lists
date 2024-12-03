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

    tail() {
        return this.tailNode;
    }

    at(index) {
        if (index > this.length || index < 0) return null;
        let currentNode = this.headNode;
        for (let i = 0; i <= index; i++) {
            if (i === index) {
                break;
            } else {
                currentNode = currentNode.nextNode;
            }
        }

        return currentNode;
    }

    pop() {
        if (this.headNode.value === null) return;
        if (this.headNode.nextNode === this.tailNode) {
            this.headNode.nextNode = null;
            this.tailNode = this.headNode
            this.length--;
            return;
        }
        
        let currentNode = this.headNode;
        let previousNode = this.headNode;
        for (let i = 0; i < this.length; i++) {
                if (currentNode.nextNode !== null) {
                    previousNode = currentNode;
                    currentNode = currentNode.nextNode;
                } else {
                    previousNode.nextNode = currentNode.nextNode;
                    this.tailNode = previousNode
                }
            }
        this.length--;
    }

    contains(value) {
        let currentNode = this.headNode;
        let boolean = false;
        for (let i = 0; i < this.length; i++) {
            if (currentNode.value === value) {
                boolean = true;
                break;
            } else {
                currentNode = currentNode.nextNode;
            }
        }
        return boolean;
    }

    find(value) {
        let currentNode = this.headNode;
        let container = -1;
        for (let i = 0; i < this.length; i++) {
            if (currentNode.value === value) {
                container = i;
                break;
            } else {
                currentNode = currentNode.nextNode;
            }
        }
        return container;
    }

    toString() {
        if (this.length === 0) return 'null';
        let currentNode = this.headNode;
        let stringContainer = '';
        for (let i = 0; i < this.length; i++) {
            if (currentNode.nextNode === null) {
                stringContainer += `( ${currentNode.value} ) -> null`
            } else {
                stringContainer += `( ${currentNode.value} ) -> `
            }
            currentNode = currentNode.nextNode;
        }

        return stringContainer;
    }
}

export { LinkedList }
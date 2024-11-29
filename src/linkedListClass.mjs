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
        if (currentNode.value === null) {
            return currentNode;
        }

        while (currentNode.value !== null) {
            if (currentNode.nextNode === null) {
                return currentNode;
            }
            currentNode = currentNode.nextNode;
        }
    }

    at(index) {
        if (index > this.length || index < 0) return null;
        let currentNode = this.listHead;
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
        let currentNode = this.listHead;
        let previousNode = this.listHead;
        if (this.length === 1) {
            this.listHead = new Node(null);
            this.length--;
        } else if (this.length > 1) {
            for (let i = 0; i < this.length; i++) {
                if (currentNode.nextNode !== null) {
                    previousNode = currentNode;
                    currentNode = currentNode.nextNode;
                } else {
                    previousNode.nextNode = currentNode.nextNode;
                }
            }
            this.length--;
        }
    }

    contains(value) {
        let currentNode = this.listHead;
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
        let currentNode = this.listHead;
        let container = -1;
        for (let i = 0; i < this.length; i++) {
            if (currentNode.value === value) {
                container = i;
                break;
            }
            currentNode = currentNode.nextNode;
        }
        return container;
    }

    toString() {
        let currentNode = this.listHead;
        let stringContainer = '';
        if (this.length === 0) return 'null';
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

    insertAt(value, index) {
        if (index < 0 || index > this.length) {
            console.log('Not a valid operation');
            return;
        }

        let currentNode = this.listHead;
        let previousNode = this.listHead;
        let newNode = new Node(value);
        for (let i = 0; i <= index; i++) {
            if (i === index) {
                if (index !== 0) {
                    previousNode.nextNode = newNode;
                    newNode.nextNode = currentNode;
                } else {
                    this.listHead = newNode;
                    if (currentNode.value !== null) {
                        newNode.nextNode = currentNode;
                    }
                }
            } else {
                previousNode = currentNode;
                currentNode = currentNode.nextNode;
            }
        }
        this.length++
    }

    // removeAt(index) {
    //     let currentNode = this.listHead;
    //     let previousNode = this.listHead;
    //     console.log(currentNode === previousNode);
    //     this.length--;
    // }
}

export { LinkedList }
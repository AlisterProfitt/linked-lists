import { Node } from './nodeConstructor.mjs';

class LinkedList {
    constructor() {
        this.headNode = null;
        this.tailNode = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.headNode === null) {
            this.headNode = newNode;
            this.tailNode = newNode;
        } else {
            const oldTail = this.tailNode;
            this.tailNode = newNode;
            oldTail.nextNode = this.tailNode; 
        }

        this.length++;
        return newNode;
    }

    prepend(value) {
        const newNode = new Node(value);
        
        if (this.headNode === null) {
            this.headNode = newNode;
            this.tailNode = newNode;
        } else {
            const oldHead = this.headNode;
            this.headNode = newNode;
            this.headNode.nextNode = oldHead;
        }

        this.length++;
        return newNode;
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
        if (index >= this.length || index < 0 || this.headNode === null) {
            return null;
        } else if (this.length === 1) {
            return this.headNode;
        }

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
        if (this.headNode === null) {
            return;
        } else if (this.length === 1) {
            this.headNode = null;
            this.tailNode = null;
        } else if (this.length === 2) {
            this.headNode.nextNode = null;
            this.tailNode = this.headNode;
        } else {
            let currentNode = this.headNode;
            let previousNode = this.headNode;
            for (let i = 0; i < this.length; i++) {
                if (currentNode.nextNode !== null) {
                    previousNode = currentNode;
                    currentNode = currentNode.nextNode;
                } else {
                    previousNode.nextNode = null;
                    this.tailNode = previousNode;
                }
            }
        }
        this.length--
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
        if (this.length === 0) {
            return 'null';
        }
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

    shift() {
        if (this.headNode === null) {
            return;
        } else if (this.length === 1) {
            this.headNode = null;
            this.tailNode = null;
        } else {
            this.headNode = this.headNode.nextNode;
        }
        this.length--;
    }

    insertAt(value, index) {
        if (index < 0 || index > this.length) {
            console.log('Not a valid operation');
            return;
        }

        if (index === 0) {
            this.prepend(value);
        } else if (index === this.length) {
            this.append(value);
        } else {
            const newNode = new Node(value);
            let currentNode = this.headNode;
            let previousNode = this.headNode;
            for (let i = 0; i <= index; i++) {
                if (i === index) {
                    console.log(previousNode);
                    console.log(newNode);
                    console.log(currentNode);
                    previousNode.nextNode = newNode;
                    newNode.nextNode = currentNode;
                } else {
                    previousNode = currentNode;
                    currentNode = currentNode.nextNode;
                }
            }

            this.length++;
        }
    }

    removeAt(index) {
        if (index < 0 || index >= this.length) {
            console.log('Not a valid operation');
            return;
        }

        if (index === 0) {
            this.shift();
        } else if (index === this.length - 1) {
            this.pop();
        } else {
            let currentNode = this.headNode;
            let previousNode = this.headNode;
            for (let i = 0; i <= index; i++) {
                if (i === index) {
                    previousNode.nextNode = currentNode.nextNode;
                } else {
                    previousNode = currentNode;
                    currentNode = currentNode.nextNode;
                }
            }

            this.length--;
        }
    }
}

const test = new LinkedList();
test.append('1')
test.append('2')
test.append('2')
test.append('2')
test.append('5')
test.prepend('0')
test.insertAt('22', 6)
test.insertAt('32', 7)
test.removeAt(7)
test.removeAt(5)
test.removeAt(0)
test.removeAt(0)
test.removeAt(0)
test.removeAt(0)
test.removeAt(0)
console.log(test);
console.log(test.toString());

export { LinkedList };
class LinkedList {
    constructor() {
        this.linkedList = [];
    }

    append(value) {
        const newNode = new Node(value);
        this.linkedList.push(newNode);
        const length = this.linkedList.length;
        if (typeof this.linkedList[length - 2] !== 'undefined') {
            const previousNode = this.linkedList[length - 2];
            previousNode.nextNode = newNode
        }
    }
}

LinkedList.prototype.toString = function linkedListToString() {

}

class Node {
    constructor(value, nextNode) {
        this.value = value || null;
        this.nextNode = nextNode || null;
    }
}

const list = new LinkedList();
list.append('dog');
list.append('cat');
list.append('watermelon')
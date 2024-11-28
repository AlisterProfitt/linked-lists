class LinkedList {
    constructor() {
        this.linkedList = [];
    }

    append(value) {
        const newNode = new Node(value);
        let list = this.linkedList;
        list.push(newNode);
        const length = list.length;
        if (typeof list[length - 2] !== 'undefined') {
            const previousNode = list[length - 2];
            previousNode.nextNode = newNode
        }
    }

    prepend(value) {
        let list = this.linkedList;
        const newNode = new Node(value, list[0]);
        list.splice(0, 0, newNode);
    }

    size() {
        return this.linkedList.length;
    }

    head() {
        return this.linkedList[0];
    }

    tail() {
        return this.linkedList[this.linkedList.length - 1];
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
list.prepend('alister')
list.append('great')
console.log(list.size());
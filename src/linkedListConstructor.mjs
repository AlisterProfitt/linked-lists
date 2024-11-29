import { Node } from "./nodeConstructor.mjs";

class LinkedList {
    constructor() {
        this.head = new Node(null);
        this.length = 0;
    }
}

export { LinkedList }
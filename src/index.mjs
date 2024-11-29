import { LinkedList } from "./linkedListConstructor.mjs";

const list = new LinkedList();
list.append('dog')
list.append('spider')
list.append('spear')
list.prepend('alice')
console.log(list.head());
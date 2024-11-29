import { LinkedList } from "./linkedListConstructor.mjs";

const list = new LinkedList();
list.append('dog')
list.append('spider')
list.append('spy')
list.append('cat')
list.prepend('lion')
console.log(list.size());
console.log(list.head());
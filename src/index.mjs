import { LinkedList } from "./linkedListClass.mjs";

const list = new LinkedList();
list.append('dog')
list.append('spider')
list.append('spy')
list.append('cat')
list.prepend('lion')
list.append('snake')
console.log(list.tail());
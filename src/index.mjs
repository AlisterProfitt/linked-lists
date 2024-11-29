import { LinkedList } from "./linkedListClass.mjs";

const list = new LinkedList();
list.append('dog')
list.append('spider')
list.append('spy')
list.append('cat')
list.append('snake')
list.prepend('cat')
list.removeAt(0);
console.log(list.head());

list.insertAt('great whale', 0)
list.prepend('cat')
list.removeAt(3)
console.log(list.toString());
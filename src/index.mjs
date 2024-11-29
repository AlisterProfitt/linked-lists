import { LinkedList } from "./linkedListConstructor.mjs";

const list = new LinkedList();
list.append('dog')
list.append('scorpion')
list.append('ice spice')
list.prepend('alice')
list.pop()

console.log(list.at(0))
console.log(list.contains('scorpion'));
console.log(list.find('alice'));
console.log(list.toString());
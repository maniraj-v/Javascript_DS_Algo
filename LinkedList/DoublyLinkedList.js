// Ref : https://medium.com/geekculture/doubly-linked-lists-javascript-b13cc21ca59d
// Just understand the basics, implementation will rarely be asked
class Node{
  constructor(value){
    this.val = value
    this.next = null
    this.prev = null
  }
}

class DoublyLinkedList{
  constructor(){
    this.head = null
    this.tail = this.head
    this.size = 0
  }

  isEmpty(){
    return this.size === 0
  }

  append(val){
    const node = new Node(val)
    if(!this.head){
        this.head = node
        this.tail = node
    }else{
      node.prev = this.tail
      this.tail.next = node
      this.tail = this.tail.next
    }
    this.size++
  }

  prepend(val){
  }

  insert(val, index){

  }

  reverse(){

  }

  remove(index){

  }

  print(){

  }
}

const list = new DoublyLinkedList()

list.append(1);
list.append(2);
list.append(3);


console.log({list})

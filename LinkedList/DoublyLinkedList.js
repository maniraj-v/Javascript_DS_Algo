// Ref : https://medium.com/geekculture/doubly-linked-lists-javascript-b13cc21ca59d
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

   // Display forward
  displayForward() {
    let current = this.head;
    while (current) {
      console.log(current.data);
      current = current.next;
    }
  }

  // Display backward
  displayBackward() {
    let current = this.tail;
    while (current) {
      console.log(current.data);
      current = current.prev;
    }
  }
}

const dll = new DoublyLinkedList();
dll.append(10);
dll.append(20);
dll.append(30);
dll.displayForward();   // Output: 10 20 30
dll.displayBackward();  // Output: 30 20 10

// Ref : https://medium.com/geekculture/doubly-linked-lists-javascript-b13cc21ca59d
// Traverse bidirectional forwards or backwards
// usage - undo/redo, browser history back/front, LRU cache
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.size = 0;
  }

  // prepend
  addToHead(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    }
    this.size++;
  }

  // append
  addToTail(val) {
    const node = new Node(val);
    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      node.prev = this.tail;
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  insert(val, index) {
    if (index === 0) {
      this.addToHead(val);
      return;
    }
    if (index > this.size - 1) {
      this.addToTail(val);
      return;
    }
    const node = new Node(val);
    let counter = 0;
    let currentNode = this.head;
    while (index - 1 > counter) {
      currentNode = currentNode.next;
      counter++;
    }
    node.next = currentNode.next;
    node.prev = currentNode;
    currentNode.next.prev = node;
    currentNode.next = node;
    this.size++;
  }

  removeFromHead() {}

  removeFromTail() {}

  displayForwards() {
    const result = [];
    let currentNode = this.head;
    while (currentNode) {
      result.push(currentNode.val);
      currentNode = currentNode.next;
    }
    console.log("fwd", { result });
  }

  displayBackwards() {
    const result = [];
    let currentNode = this.tail;
    while (currentNode) {
      result.push(currentNode.val);
      currentNode = currentNode.prev;
    }
    console.log("back", { result });
  }
}

const dll = new DoublyLinkedList();

dll.addToTail(1);
dll.addToTail(2);
dll.addToTail(3);

dll.insert(4, 3);

dll.displayForwards();
dll.displayBackwards();

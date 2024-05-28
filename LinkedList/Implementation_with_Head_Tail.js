// Node class
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

// Linked list Implementation with head & tail pointer
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = this.head;
    this.size = 0;
  }

  // O(1)
  prepend(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }

  // O(1)
  append(val) {
    const node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.size++;
  }

  // O(1),  remove front node,  if found return value, else null
  removeFromFront() {
    if (this.isEmpty()) return null;
    const removedNodeVal = this.head.val;
    this.head = this.head.next;
    this.size--;
    return removedNodeVal;
  }

  // O(n),  remove last node,  if found return value, else null
  removeFromEnd() {
    if (this.isEmpty()) return null;
    const removedNodeVal = this.tail.val;
    if (this.size === 1) {
      this.head = null;
      this.tail = null;
    } else {
      let currentNode = this.head;
      while (currentNode.next.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = null;
      this.tail = currentNode;
    }
    this.size--;
    return removedNodeVal;
  }

  print() {
    if (this.isEmpty()) {
      console.log("List is empty");
      return;
    }
    let currentNode = this.head;
    let values = [];
    while (currentNode) {
      values.push(currentNode.val);
      currentNode = currentNode.next;
    }
    console.log(values.toString());
  }

  isEmpty() {
    return this.size === 0;
  }

  getSize() {
    return this.size;
  }
}

const list = new LinkedList();
list.prepend(5);
list.prepend(4);
list.append(6);
console.log(list);
console.log("removed val", list.removeFromEnd());
console.log("removed val", list.removeFromFront());
list.print();
console.log(list);

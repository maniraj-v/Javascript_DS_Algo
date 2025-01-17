/**
    Linked List Tail Pointer Implementation

    Stack [LIFO] -- see implementation below

    push -- prepend O(1)
    pop -- removeFromFront O(1)

    Note:  1 -> 2 -> 3 appending like this makes removal difficult O(n), so prepend it 3 -> 2 -> 1 to remove easily from front

    Queue [FIFO]

    push -- append O(1)
    pop -- removeFromFront O(1)
**/

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
    // tail is impacted when if last node is removed
    if(this.size === 0){
      this.tail = null
    }
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




class Stack extends LinkedList {
  constructor() {
    super();
  }
  // leverage prepend
  push(val) {
    this.prepend(val);
  }
  pop() {
    this.removeFromFront();
  }
  peek() {
    if (this.head) {
      return this.head.val;
    }
    return null;
  }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.peek());
stack.pop();
console.log(stack.peek());

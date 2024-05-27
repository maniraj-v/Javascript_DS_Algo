// Node class
class Node {
    constructor(val) {
      this.val = val;
      this.next = null;
    }
  }
  
  // Linked list Implementation with only head pointer
  class LinkedList {
    constructor() {
      this.head = null;
      this.size = 0;
    }
  
    // O(1)
    prepend(val) {
      const node = new Node(val);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        node.next = this.head;
        this.head = node;
      }
      this.size++;
    }
  
    // O(n)  --> can be optimisied to constant time O(1) with tail pointer
    append(val) {
      const node = new Node(val);
      if (this.isEmpty()) {
        this.head = node;
      } else {
        let currentNode = this.head;
        while (currentNode.next) {
          currentNode = currentNode.next;
        }
        currentNode.next = node;
      }
      this.size++;
    }
  
    // Reuse prepend method if insert index = 0
    // Reuse append method if insert index >= size of list
    // Else traverse upto index-1 and add node & trailing portion
    insert(index, val) {
      if (index < 0 || index > this.size) return;
  
      if (index === 0) {
        this.prepend(val);
      } else if (index === this.size) {
        this.append(val);
      } else {
        let currentNode = this.head;
        for (let i = 0; i < index - 1; i++) {
          currentNode = currentNode.next;
        }
        const insertNode = new Node(val);
        const nodesAfterInsertIndex = currentNode.next
        insertNode.next = nodesAfterInsertIndex
        currentNode.next = insertNode
        this.size++
      }
    }
    // Remove node at index, if found return value, else null
    remove(index) {
      if (index < 0 || index >= this.size || this.isEmpty()) return null;
      let removedNode;
      if (index === 0) {
        removedNode = this.head;
        this.head = this.head.next;
      } else {
        let currentNode = this.head;
        for (let i = 0; i < index - 1; i++) {
          currentNode = currentNode.next;
        }
        removedNode = currentNode.next;
        currentNode.next = currentNode.next.next;
      }
      this.size--;
      return removedNode.val;
    }
    
    // Search node, if found return index, else -1
    search(val) {
      if (this.isEmpty()) return -1;
      let currentNode = this.head
      let counter = 0, resultIndex = -1
      while(currentNode){
          if(currentNode.val === val){
            resultIndex = counter
            break
          }
          currentNode = currentNode.next
          counter++
      }
      return resultIndex
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
  list.insert(2, 5.5);
  console.log("removed val", list.remove(3));
  list.append(7);
  console.log("search", list.search(5));
  list.print();
  console.log(list);
  

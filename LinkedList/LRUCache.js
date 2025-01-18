// https://saurabhnativeblog.medium.com/paytm-frontend-interview-question-implement-a-lru-cache-in-javascript-8e1754ba8b87

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.prev = null;
    this.next = null;
  }
}

class LRUCache {
  constructor(capacity) {
    this.cache = new Map();
    this.capacity = capacity;
    this.head = null; // head being most used
    this.tail = null; // tail being least used
  }

  get(key) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      if (node !== this.head) {
        // delete node from current position
        this.delete(node);
        // add node to head
        this.addToHead(node);
      }
      return node.val;
    } else {
      return null
    }
  }

  set(key, val) {
    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.val = val;
      // If the node is not at the head, move it to the head
      if (node !== this.head) {
        this.delete(node);
        this.addToHead(node);
      }
      return;
    }

    if (this.cache.size >= this.capacity) {
      const keyToDelete = this.tail.key;
      // remove tail (least used)
      this.delete(this.tail);
      this.cache.delete(keyToDelete);
    }

    const node = new Node(key, val);
    // add node to head
    this.addToHead(node);
    this.cache.set(key, node);
  }

  delete(node) {
    const prev = node.prev;
    const next = node.next;

    if (prev) {
      prev.next = next;
    }

    if (next) {
      next.prev = prev;
    }

    // if node is the head, move head to next
    if (node === this.head) {
      this.head = next;
    }

    // if node is the tail, move tail to previous
    if (node === this.tail) {
      this.tail = prev;
    }

    node.prev = node.next = null; // clean up the node references
  }

  addToHead(node) {
    if (this.head) {
      node.next = this.head;
      this.head.prev = node;
      this.head = node;
    } else {
      this.head = node;
      this.tail = node;
    }
  }
}

const cache = new LRUCache(3);
cache.set(1, "one");
cache.set(2, "two");
cache.set(3, "three");
console.log(cache.get(1));
console.log(cache.get(2));
cache.set(4, "four");
console.log(cache.get(1));

console.log(cache.cache);

class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
    this.freq = 1; // Initial frequency is 1
  }
}

class LFUCache {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map(); // Key -> Node (stores key-value pair)
    this.freqMap = new Map(); // Frequency -> Set of Nodes
    this.minFreq = 0; // To track the minimum frequency for eviction
  }

  // Helper function to update the frequency of a node
  updateFrequency(node) {
    // Remove node from the current frequency list
    this.freqMap.get(node.freq).delete(node);
    
    // If there is no more node with the current frequency, adjust minFreq
    if (this.freqMap.get(node.freq).size === 0) {
      if (node.freq === this.minFreq) {
        this.minFreq++;
      }
      this.freqMap.delete(node.freq);
    }

    // Update the frequency of the node
    node.freq++;

    // Add the node to the new frequency list
    if (!this.freqMap.has(node.freq)) {
      this.freqMap.set(node.freq, new Set());
    }
    this.freqMap.get(node.freq).add(node);
  }

  // get method: Retrieve value if the key exists and update its frequency
  get(key) {
    if (!this.cache.has(key)) return -1;

    // Access the node and update its frequency
    const node = this.cache.get(key);
    this.updateFrequency(node);

    return node.val;
  }

  // set method: Insert a new key-value pair or update an existing key
  set(key, val) {
    if (this.capacity === 0) return;

    if (this.cache.has(key)) {
      const node = this.cache.get(key);
      node.val = val;
      this.updateFrequency(node);
    } else {
      if (this.cache.size === this.capacity) {
        // Evict the least frequently used node
        const leastFreqNodes = this.freqMap.get(this.minFreq);
        const nodeToEvict = leastFreqNodes.values().next().value;
        leastFreqNodes.delete(nodeToEvict);
        if (leastFreqNodes.size === 0) {
          this.freqMap.delete(this.minFreq);
        }
        this.cache.delete(nodeToEvict.key);
      }

      // Create a new node and add it to the cache
      const newNode = new Node(key, val);
      this.cache.set(key, newNode);

      // Add the new node to the frequency map
      if (!this.freqMap.has(newNode.freq)) {
        this.freqMap.set(newNode.freq, new Set());
      }
      this.freqMap.get(newNode.freq).add(newNode);

      // Update the minimum frequency if necessary
      this.minFreq = 1;
    }
  }
}

// Example Usage:
const cache = new LFUCache(3);
cache.set(1, 1); // Cache = {1=1}
cache.set(2, 2); // Cache = {1=1, 2=2}
console.log(cache.get(1)); // Returns 1, Cache = {1=1, 2=2}, freq of 1 becomes 2
cache.set(3, 3); // Cache = {1=1, 2=2, 3=3}
console.log(cache.get(2)); // Returns 2, Cache = {1=1, 2=2, 3=3}, freq of 2 becomes 2
cache.set(4, 4); // Cache evicts the least frequently used (3) Cache = {1=1, 2=2, 4=4}
console.log(cache.get(3)); // Returns -1 (not found)
console.log(cache.get(4)); // Returns 4

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = []; // Stores: { key, value }
    }

    get(key) {
        const index = this.cache.findIndex(item => item.key === key);
        if (index === -1) return -1;

        // Move accessed item to the end (most recently used)
        const [item] = this.cache.splice(index, 1);
        this.cache.push(item);
        return item.value;
    }

    put(key, value) {
        const index = this.cache.findIndex(item => item.key === key);

        if (index !== -1) {
            // Remove existing item before updating
            this.cache.splice(index, 1);
        } else if (this.cache.length >= this.capacity) {
            // Remove least recently used item
            this.cache.shift();
        }

        // Add new item to end (most recently used)
        this.cache.push({ key, value });
    }
}

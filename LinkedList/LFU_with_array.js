class LFUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.cache = []; // Each entry: { key, value, freq, time }
        this.time = 0; // For resolving tie (least recently used)
    }

    get(key) {
        this.time++;
        const item = this.cache.find(entry => entry.key === key);
        if (!item) return -1;
        item.freq++;
        item.time = this.time;
        return item.value;
    }

    put(key, value) {
        if (this.capacity === 0) return;

        this.time++;
        const existing = this.cache.find(entry => entry.key === key);

        if (existing) {
            existing.value = value;
            existing.freq++;
            existing.time = this.time;
        } else {
            if (this.cache.length >= this.capacity) {
                // Evict LFU item (and LRU if tie)
                this.cache.sort((a, b) => {
                    if (a.freq !== b.freq) return a.freq - b.freq;
                    return a.time - b.time;
                });
                this.cache.shift(); // remove the least frequently (and least recently) used
            }
            this.cache.push({ key, value, freq: 1, time: this.time });
        }
    }
}

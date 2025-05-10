class EventEmitter {
  constructor() {
    this.subscribers = new Map();
  }

  subscribe(eventName, callback) {
    if (!this.subscribers.has(eventName)) {
      this.subscribers.set(eventName, []);
    }
    this.subscribers.get(eventName).push(callback);

    return () => {
      const callbacks = this.subscribers
        .get(eventName)
        .filter((cb) => cb !== callback);
      if (callbacks.length > 0) {
        this.subscribers.set(eventName, callbacks);
      } else {
        this.subscribers.delete(eventName);
      }
    };
  }

  emit(eventName, ...args) {
    const callbacks = this.subscribers.get(eventName);
    if (callbacks) {
      for (const callback of callbacks) {
        callback(...args);
      }
    }
  }
}

const emitter = new EventEmitter();

function addTwoNumbers(a, b) {
  console.log(`The sum is ${a + b}`);
}

function multiplyTwoNumbers(a, b) {
  console.log(`The multiply is ${a * b}`);
}

const unsubscribeAdd = emitter.subscribe("foo", addTwoNumbers);
const unsubscribeMultiply = emitter.subscribe("foo", multiplyTwoNumbers);
emitter.emit("foo", 2, 5);
emitter.emit("foo", 12, 15);
unsubscribeAdd();
emitter.emit("foo", 22, 15);

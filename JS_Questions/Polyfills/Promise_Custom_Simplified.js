// Simplified version of the MyPromise polyfill without nultiple then chaining
MyPromise = function(executor) {
  var self = this;
  
  // Initial promise state
  self.status = 'pending';  // The promise starts in 'pending' state
  self.value = null;        // Holds the value if fulfilled
  self.reason = null;       // Holds the reason if rejected
  self.onFulfilled = null;  // Callback for fulfillment
  self.onRejected = null;   // Callback for rejection

  // Resolve function
  function resolve(value) {
    if (self.status === 'pending') {
      self.status = 'fulfilled';  // Change to 'fulfilled' state
      self.value = value;         // Store resolved value
      if (self.onFulfilled) {
        self.onFulfilled(self.value);  // Execute fulfillment callback
      }
    }
  }

  // Reject function
  function reject(reason) {
    if (self.status === 'pending') {
      self.status = 'rejected';  // Change to 'rejected' state
      self.reason = reason;      // Store rejection reason
      if (self.onRejected) {
        self.onRejected(self.reason);  // Execute rejection callback
      }
    }
  }

  // Execute the executor function immediately
  executor(resolve, reject);  // Pass resolve and reject to the executor function
};

// Add 'then' method to the prototype
MyPromise.prototype.then = function(onFulfilled, onRejected) {
  var self = this;

  // Store the callbacks for future use
  self.onFulfilled = onFulfilled;
  self.onRejected = onRejected;

  // If promise is already fulfilled, execute onFulfilled callback
  if (self.status === 'fulfilled') {
    onFulfilled(self.value);
  }

  // If promise is already rejected, execute onRejected callback
  if (self.status === 'rejected') {
    onRejected(self.reason);
  }

  return this;  // Return the current promise (not chaining)
};

// Add 'catch' method to the prototype for handling rejections
MyPromise.prototype.catch = function(onRejected) {
  this.then(null, onRejected);  // Shorthand for `then(null, onRejected)`
};

// Static method to resolve a promise immediately
MyPromise.resolve = function(value) {
  return new MyPromise(function(resolve) {
    resolve(value);
  });
};

// Static method to reject a promise immediately
MyPromise.reject = function(reason) {
  return new MyPromise(function(resolve, reject) {
    reject(reason);
  });
};

// Example usage of MyPromise

// Example 1: Resolving a promise
const myPromise1 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");  // The promise is resolved after 1 second
  }, 1000);
});

myPromise1.then(result => {
  console.log(result);  // Logs "Success!" once the promise is resolved
}).catch(error => {
  console.log(error);   // Will not be called here as the promise is resolved
});

// Example 2: Rejecting a promise
const myPromise2 = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    reject("Error occurred!");  // The promise is rejected after 1 second
  }, 1000);
});

myPromise2.then(result => {
  console.log(result);  // Will not be called, as the promise was rejected
}).catch(error => {
  console.log(error);   // Logs "Error occurred!" when the promise is rejected
});

// Example 3: Using static resolve and reject methods
MyPromise.resolve("Resolved immediately").then(result => {
  console.log(result);  // Logs "Resolved immediately" instantly
});

MyPromise.reject("Rejected immediately").catch(error => {
  console.log(error);  // Logs "Rejected immediately" instantly
});

  MyPromise = function(executor) {
    var self = this;
    self.status = 'pending';
    self.value = null;
    self.reason = null;
    self.onFulfilledCallbacks = [];
    self.onRejectedCallbacks = [];

    function resolve(value) {
      if (self.status === 'pending') {
        self.status = 'fulfilled';
        self.value = value;
        self.onFulfilledCallbacks.forEach(function(callback) {
          callback(self.value);
        });
      }
    }

    function reject(reason) {
      if (self.status === 'pending') {
        self.status = 'rejected';
        self.reason = reason;
        self.onRejectedCallbacks.forEach(function(callback) {
          callback(self.reason);
        });
      }
    }

    executor(resolve, reject);
  };

  MyPromise.prototype.then = function(onFulfilled, onRejected) {
    var self = this;
    var promise = new Promise(function(resolve, reject) {
      if (self.status === 'fulfilled') {
        try {
          var result = onFulfilled(self.value);
          if (result instanceof Promise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (e) {
          reject(e);
        }
      } else if (self.status === 'rejected') {
        try {
          var result = onRejected(self.reason);
          if (result instanceof Promise) {
            result.then(resolve, reject);
          } else {
            resolve(result);
          }
        } catch (e) {
          reject(e);
        }
      } else {
        self.onFulfilledCallbacks.push(function(value) {
          try {
            var result = onFulfilled(value);
            if (result instanceof Promise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (e) {
            reject(e);
          }
        });
        self.onRejectedCallbacks.push(function(reason) {
          try {
            var result = onRejected(reason);
            if (result instanceof Promise) {
              result.then(resolve, reject);
            } else {
              resolve(result);
            }
          } catch (e) {
            reject(e);
          }
        });
      }
    });
    return promise;
  };

  MyPromise.prototype.catch = function(onRejected) {
    return this.then(null, onRejected);
  };

  MyPromise.resolve = function(value) {
    return new Promise(function(resolve) {
      resolve(value);
    });
  };

  MyPromise.reject = function(reason) {
    return new Promise(function(resolve, reject) {
      reject(reason);
    });
  };


// Example usage of MyPromise:

const myPromise = new MyPromise((resolve, reject) => {
  setTimeout(() => {
    resolve("Success!");
    // reject("Error!");
  }, 1000);
});

myPromise
  .then(result => {
    console.log(result); // "Success!"
    return "Next step";
  })
  .then(nextResult => {
    console.log(nextResult); // "Next step"
  })
  .catch(error => {
    console.log(error);
  });

MyPromise.resolve('test static').then(result => {
    console.log(result); 
  })

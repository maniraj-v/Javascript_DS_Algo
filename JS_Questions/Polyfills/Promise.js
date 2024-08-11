// Promise, Promise.all, Promise.allSettled, Promise.race,

const promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("promise 1");
  }, 2000);
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 2");
  }, 1000);
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("promise 3");
  }, 3000);
});

/* *********************************************************************** */
/* Promise.allSettled - wait for all promise to resolve/reject

sample response:
  [{
    reason: "promise 1",
    status: "rejected"
  }, {
    status: "fulfilled",
    value: "promise 2"
  }, {
    status: "fulfilled",
    value: "promise 3"
  }] 
/* *********************************************************************** */
Promise.myAllSettled = function (promises) {
  const result = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((resp) => {
          result[index] = {
            status: "fulfilled",
            value: resp,
          };
          counter++;
        })
        .catch((err) => {
          result[index] = {
            status: "rejected",
            reason: err,
          };
          counter++;
        })
        .finally(() => {
          if (counter === promises.length) {
            resolve(result);
          }
        });
    });
  });
};

Promise.myAllSettled([promise1, promise2, promise3])
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {
    console.log(err);
  });

/* *********************************************************************** */
/* Promise.all - if anyone reject, the return err else wait for all promise to resolve

sample response if all resolves:
  ["promise 1", "promise 2", "promise 3"] 
sample response if any one rejects (assume promise 2 reject):
  "promise 2"

/* *********************************************************************** */
Promise.myAll = function (promises) {
  const result = [];
  let counter = 0;
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((resp) => {
          result[index] = resp;
          counter++;
        })
        .catch((err) => {
          reject(err);
        })
        .finally(() => {
          if (counter === promises.length) {
            resolve(result);
          }
        });
    });
  });
};

Promise.myAll([promise1, promise2, promise3])
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {
    console.log(err);
  });

//   Promise.race

Promise.myRace = function (promises) {
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          reject(err);
        });
    });
  });
};

Promise.myRace([promise1, promise2, promise3])
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {
    console.log(err);
  });

//   Promise.any
Promise.myAny = function (promises) {
  let count = 0;
  let errors = [];
  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      Promise.resolve(promise)
        .then((resp) => {
          resolve(resp);
        })
        .catch((err) => {
          count++;
          errors[index] = err;
          if (promises.length === count) {
            reject(new AggregateError(errors));
          }
        });
    });
  });
};

Promise.myAny([promise1, promise2, promise3])
  .then((resp) => {
    console.log(resp);
  })
  .catch((err) => {
    console.log(err);
  });

/*

Interview Questions faced

	1. Promise.all ,, not Promise.prototype.all --> Promise is simply JS object

	2. Handle non- promise example
	Convert each item to promise by Promise.resolve() and do then/catch
[' ', Promise.resolve('promise1'), Promise.reject('promise2'), Promise.resolve('promise3')]

*/

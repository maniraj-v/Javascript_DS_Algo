const timerSet = new Set();

window.setTimeout = function (callback, duration, ...args) {
  const futureTime = Date.now() + duration;
  const id = window.crypto.randomUUID();

  function check() {
    if (!timerSet.has(id)) {
      return;
    }
    if (Date.now() >= futureTime) {
      callback.apply(null, args);
      timerSet.delete(id);
    } else {
      requestIdleCallback(check);
    }
  }
  timerSet.add(id);
  check();
  return id;
};

window.clearTimeout = function (timerId) {
  if (!timerId) {
    return;
  }
  timerSet.delete(timerId);
};

const timerId = setTimeout(
  (name) => {
    console.log(name, "test222");
  },
  2000,
  "mani"
);

// Modify setTimeout slightly

window.setInterval = function (callback, duration, ...args) {
  let futureTime = Date.now() + duration;
  const id = window.crypto.randomUUID();

  function check() {
    if (!timerSet.has(id)) {
      return;
    }
    if (Date.now() >= futureTime) {
      callback.apply(null, args);
      futureTime = duration + futureTime;
    }
    requestAnimationFrame(check);
  }
  timerSet.add(id);
  check();
  return id;
};

window.clearInterval = function (timerId) {
  if (!timerId) {
    return;
  }
  timerSet.delete(timerId);
};



(function IIFE(window) {
  let idCounter = 0;
  const timeouts = {};
  const intervals = {};

  window.customSetTimeout = function (callback, delay, ...args) {
    const id = ++idCounter;
    const targetTime = Date.now() + delay;

    function check() {
      if (!timeouts[id]) return;

      if (Date.now() >= targetTime) {
        try {
          callback.apply(null, args);
        } catch (e) {
          console.error("customSetTimeout error:", e);
        }
        delete timeouts[id];
      } else {
        requestAnimationFrame(check);
      }
    }

    timeouts[id] = true;
    requestAnimationFrame(check);
    return id;
  };

  window.customClearTimeout = function (id) {
    delete timeouts[id];
  };

  window.customSetInterval = function (callback, interval, ...args) {
    const id = ++idCounter;
    let nextTime = Date.now() + interval;

    function tick() {
      if (!intervals[id]) return;

      const now = Date.now();
      if (now >= nextTime) {
        try {
          callback.apply(null, args);
        } catch (e) {
          console.error("customSetInterval error:", e);
        }
        nextTime += interval;
      }

      requestAnimationFrame(tick);
    }

    intervals[id] = true;
    requestAnimationFrame(tick);
    return id;
  };

  window.customClearInterval = function (id) {
    delete intervals[id];
  };
})(window);

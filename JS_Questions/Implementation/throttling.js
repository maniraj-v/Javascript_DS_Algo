// Throttle:
// Immeditely execute cb, block further cb for specified duration
function throttle(cb, dur) {
  let isThrottle = false;
  return function (...args) {
    console.log(args);
    if (!isThrottle) {
      cb(...args);
      isThrottle = true;
      setTimeout(() => {
        isThrottle = false;
      }, dur);
    }
  };
}

function print(value) {
  console.log("print", value);
}

const throttledPrint = throttle(print, 5000);

throttledPrint("Mani first time"); // print immediately
throttledPrint("Mani second time"); // dont print Mani
setTimeout(() => {
  throttledPrint("Mani third time"); // dont print after 2 seconds
}, 2000);
setTimeout(() => {
  throttledPrint("Mani fourth time"); // print after 6 seconds
}, 6000);

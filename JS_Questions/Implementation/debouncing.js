// Debounce:
// Execute cb after specified duration, cancel that cb if any new call comes inbetween
function debounce(cb, dur = 1000) {
  let timer = null;
  return function (...args) {
    if (timer) clearTimeout(timer);
    timer = setTimeout(() => {
      cb(...args);
    }, dur);
  };
}

function print(value) {
  console.log("print", value);
}

const debouncedPrint = debounce(print, 5000);

debouncedPrint("Mani"); // print Mani after 5 seconds
debouncedPrint("Maniraj"); // defer previous print and print Maniraj after 5 seconds

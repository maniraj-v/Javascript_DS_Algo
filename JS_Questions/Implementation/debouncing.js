// Debounce:
// Execute cb after specified duration, cancel that cb if any new call comes inbetween
// Note: Taken care of context(this)
function debounce(func, delay) {
  let timerId = null
  return function (...args) {
    if (timerId) {
      clearTimeout(timerId)
    }
    const context = this
    timerId = setTimeout(() => {
      func.apply(context, args)
    }, delay)
  }
}

function print(value) {
  console.log("print", value);
}

const debouncedPrint = debounce(print, 5000);

debouncedPrint("Mani"); // print Mani after 5 seconds
debouncedPrint("Maniraj"); // defer previous print and print Maniraj after 5 seconds

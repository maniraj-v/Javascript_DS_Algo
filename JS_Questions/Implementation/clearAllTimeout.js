(function(w){
	const timeoutIds = []
  const originalTimeout = w.setTimeout
  w.setTimeout = function(cb, duration){
  		const timeoutId = originalTimeout(cb, duration)
      console.log('setting', {timeoutId})
      timeoutIds.push(timeoutId)
      return timeoutId
  }
  w.clearAllTimeout = function(){
  	timeoutIds.forEach((timeoutId) => {
      console.log('clearing', {timeoutId})
    		clearTimeout(timeoutId)
    })
    // make array empty
    timeoutIds.length =0
  }
})(window)


setTimeout(() => {console.log("One")}, 4000);
setTimeout(() => {console.log("Two")}, 5000);
setTimeout(() => {console.log("Three")}, 6000);
setTimeout(() => {console.log("Four")}, 7000);
clearAllTimeout()

// since all timeout cleared, none of below prints
// One
// Two
// Three
// Four

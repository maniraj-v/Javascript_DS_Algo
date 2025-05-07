// call, apply, bind


const obj = {
  firstName: "mani",
  place: "chennai",
}

function greet(age) {
  return this.firstName + " " + this.place + " " + age
}

// CALL Polyfill
Function.prototype.myCall = function(ref,...props){
		const func = this
    const symbol = Symbol()
    const obj = ref || globalThis
    obj[symbol] = func
       
   const result= obj[symbol](...props)
   delete obj[symbol]
   return result
}

console.log(greet.myCall(obj, 23))
console.log(greet.myCall(null, 23))

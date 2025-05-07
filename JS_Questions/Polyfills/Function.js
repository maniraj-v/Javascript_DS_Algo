// call, apply, bind


const obj = {
  firstName: "mani",
  place: "chennai",
}

function greet(age) {
  return this.firstName + " " + this.place + " " + age
}

// CALL Polyfill  
Function.prototype.myCall = function(ref,...args){
		const func = this
    const symbol = Symbol()
    const obj = ref || globalThis
    obj[symbol] = func
       
   const result= obj[symbol](...args)
   delete obj[symbol]
   return result
}

console.log(greet.myCall(obj, 23))
console.log(greet.myCall(null, 23))

// APPLY Polyfill - args will be array

Function.prototype.myApply = function(ref,args){
		const func = this
    const symbol = Symbol()
    const obj = ref || globalThis
    obj[symbol] = func
       
   const result= obj[symbol](...args)
   delete obj[symbol]
   return result
}

console.log(greet.myApply(obj, [23]))

// BIND polyfill

Function.prototype.myBind = function (ref, ...args1) {
  const func = this

  return function (...args2) {
    const symbol = Symbol()
    const obj = ref || globalThis
    obj[symbol] = func
    return obj[symbol](...args1, ...args2)
  }
}

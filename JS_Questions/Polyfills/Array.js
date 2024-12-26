// map, filter, reduce, flat

/* *********************************************************************** */
/* isArray
/* *********************************************************************** */

Array.isArrayChecker = function(arg){
return Object.prototype.toString.call(arg) === '[object Array]';
}

console.log(Array.isArrayChecker('aa'))
/* *********************************************************************** */
/* Note: to detect any datatype using Object proto method
/* Object.prototype.toString.call({}) --> '[object Object]'
/* Object.prototype.toString.call(function(){}) --> '[object Function]'
/* *********************************************************************** */
/* Flat
/* *********************************************************************** */
const arrToBeFlat = [1, 2, 3, , [4, 5, [[[6]]]]];

Array.prototype.myFlat = function flatArray(level = 1) {
  const arr = this;
  const result = [];
  arr.forEach((element) => {
    if (Array.isArray(element) && level > 0) {
      result.push(...flatArray.call(element, level - 1));
    } else {
      result.push(element);
    }
  });
  return result;
};

console.log("flat", arrToBeFlat.flat(2));
console.log("myflat", arrToBeFlat.myFlat(2));

/* *********************************************************************** */
/* Map
/* *********************************************************************** */
const numbers = [1, 2, 3, 4, 5];

Array.prototype.myMap = function (callBack) {
  const arr = this;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    result.push(callBack(arr[i], i, arr));
  }
  return result;
};

console.log(
  "map",
  numbers.map((ele) => ele * 2)
);
console.log(
  "myMap",
  numbers.myMap((ele) => ele * 2)
);

/* *********************************************************************** */
/* Filter
/* *********************************************************************** */

Array.prototype.myFilter = function (callBack) {
  const arr = this;
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    if (callBack(arr[i], i, arr)) {
      result.push(arr[i]);
    }
  }
  return result;
};

console.log(
  "filter",
  numbers.filter((ele) => ele % 2 === 0)
);
console.log(
  "myFilter",
  numbers.myFilter((ele) => ele % 2 === 0)
);

/* *********************************************************************** */
/* Reduce
/* *********************************************************************** */

Array.prototype.myReduce = function (callBack, intialValue) {
  const arr = this;
  let accumulator = intialValue;
  let startIndex = 0;
  if (intialValue === undefined) {
    startIndex = 1;
    accumulator = arr[0];
  }
  for (let i = startIndex; i < arr.length; i++) {
    total = callBack(accumulator, arr[i], i, arr);
  }
  return total;
};

console.log(
  "reduce",
  numbers.reduce((accm, curr) => {
    return accm + curr;
  }, 0)
);
console.log(
  "myReduce",
  numbers.myReduce((accm, curr) => {
    return accm + curr;
  }, 10)
);

/* *********************************************************************** */
/* Reverse
/* *********************************************************************** */

const array = [1,2,3,4,5, 6]

Array.prototype.myReverse = function(){
	const arr = this
  let start = 0
  let end = arr.length - 1
  while(start < end){
  		const temp = arr[start]
      arr[start] = arr[end]
      arr[end] = temp
      start++
      end--
  }
  return arr
}
console.log(array.myReverse())

/* *********************************************************************** */
/* Push
/* *********************************************************************** */

const arr = [1,2]

Array.prototype.myPush = function(){
	const arr = this
  const arrLen= this.length
  let i = 0
  while(i<arguments.length){
      arr[arrLen + i] = arguments[i]
      i++
  }
  return arr.length
}
console.log(arr.myPush(3,4), arr, arr.length)


/* *********************************************************************** */
/* Pop  -- Important delete last element and also reduce this.length (else last element will contain sparse (undefined)
/* *********************************************************************** */
Array.prototype.pop = function() {
    if (this.length === 0) {
      return undefined;
    }

    const poppedElement = this[this.length - 1]; // Get the last element
    delete this[this.length - 1]
    this.length = this.length - 1; // Reduce the array length by 1

    return poppedElement; // Return the popped element
  };


/* *********************************************************************** */
/* Shift  -- Shift all elements from index 1 to the left and also reduce this.length (else last element will contain sparse (undefined)
/* *********************************************************************** */

const array = [1,2,3,4,5,6]

Array.prototype.myShift = function() {
    if (this.length === 0) {
      return undefined;
    }

    var removedElement = this[0];
		for(let i=1;i<this.length;i++){
    		this[i-1] = this[i]
        delete this[i]
    }
    this.length = this.length -1
    return removedElement; 
  };
  
console.log(array.myShift(), array)

/* *********************************************************************** */
/* UnShift  -- solve this and put solution below
/* *********************************************************************** */



/* *********************************************************************** */
/* Sort  -- using bubble sort
/* *********************************************************************** */
const array = [8,12,7,1,2,6,5]

 Array.prototype.sort = function (compareFunction) {
    for (let i = 0; i < this.length - 1; i++) {
      for (let j = i+1; j < this.length; j++) {
        if (compareFunction ? compareFunction(this[i], this[j]) > 0 : String(this[i]) > String(this[j])) {
          const temp = this[j];
          this[j] = this[i];
          this[i] = temp;
        }
      }
    }
    return this;
  };

console.log(array.sort((a,b) => a-b))

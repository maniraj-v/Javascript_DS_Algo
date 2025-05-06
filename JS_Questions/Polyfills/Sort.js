// Bubble Sort

const array = [8, 12, 7, 1, 2, 6, 5]

for (let i = 0; i < array.length; i++) {
  for (let j = i + 1; j < array.length; j++) {
    if (array[i] > array[j]) {
      const temp = array[i]
      array[i] = array[j]
      array[j] = temp
    }
  }
}

console.log(array)


// Merge Sort
const array = [8, 12, 7, 1, 2, 6, 5]

Array.prototype.mySort = function (compareFn) {
  function merge(leftArr, rightArr) {
    let i = 0;
    let j = 0;
    const result = [];
    while (i < leftArr.length && j < rightArr.length) {
      if (
        compareFn
          ? compareFn(leftArr[i], rightArr[j]) > 0
          : String(leftArr[i]) > String(rightArr[j])
      ) {
        result.push(rightArr[j]);
        j++;
      } else {
        result.push(leftArr[i]);
        i++;
      }
    }
    while (i < leftArr.length) {
      result.push(leftArr[i]);
      i++;
    }
    while (j < rightArr.length) {
      result.push(rightArr[j]);
      j++;
    }
    return result;
  }

  function mergeSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid, arr.length);
    const sortedLeft = mergeSort(left);
    const sortedRight = mergeSort(right);
    return merge(sortedLeft, sortedRight);
  }
  const result = mergeSort(this);
  for (let i = 0; i < this.length; i++) {
    this[i] = result[i];
  }
  return this;
};

console.log(array.mySort()) // [1, 12, 2, 5, 6, 7, 8]
console.log(array.mySort((a, b) => a - b)) //[1, 2, 5, 6, 7, 8, 12]

/* console.log(mergeSort(array)) */

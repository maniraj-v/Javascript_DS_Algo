// Binary Search - used on sorted arry to find the target element efficiently with Time Complexity O(logn)

const array = [1, 2, 3, 4, 5, 6, 7]

function binarySearch(sortedArr, element) {
  let left = 0
  let right = sortedArr.length - 1
  while (left <= right) {
    const mid = Math.floor((left + right) / 2)
    if (element === sortedArr[mid]) {
      return mid
    } else if (element > sortedArr[mid]) {
      left = mid + 1
    } else {
      right = mid - 1
    }
  }
  return -1
}

console.log(binarySearch(array, 2))

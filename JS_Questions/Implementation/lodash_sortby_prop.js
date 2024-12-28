function getNestedValue(obj, path) {
  const keys = path.split('.')
  let value = obj
  for (let key of keys) {
    if (value) {
      value = value[key]
    } else {
      return undefined
    }
  }
  return value
}

function sortBy(collection, property) {
  return collection.sort((a, b) => {
    const aValue = getNestedValue(a, property)
    const bValue = getNestedValue(b, property)
    if (aValue === null || aValue === undefined || bValue === null | bValue === undefined) {
      return 0
    } else if (aValue > bValue) {
      return 1
    } else if (bValue > aValue) {
      return -1
    } else {
      return 0
    }
  })
}


const arrayOne = [{a: 1}, {a: 3}, {a: 2}];

// expected output: [{a: 1}, {a: 2}, {a: 3}];
sortBy(arrayOne, 'a');

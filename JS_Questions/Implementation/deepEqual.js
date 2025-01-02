function deepEqual(value, other) {
  if (typeof value !== typeof other) {
    return false
  }

  if (Array.isArray(value) && Array.isArray(other)) {
    if (value.length !== other.length) {
      return false
    }
    for (let i = 0; i < value.length; i++) {
      if (!deepEqual(value[i], other[i])) {
        return false
      }
    }
    return true
  }

  if (value !== null && typeof value === 'object' &&
    other !== null && typeof other === 'object'
  ) {
    const keys = Object.keys({ ...value, ...other })
    for (const key of keys) {
      if (!deepEqual(value[key], other[key])) {
        return false
      }
    }
    return true
  }


  return value === other
}

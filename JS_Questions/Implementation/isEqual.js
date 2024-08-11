// Check equal any variable type
function isEqual(a, b) {
  // Check types
  if (typeof a !== typeof b) return false;
  // Check for functions
  if (typeof a === "function" || typeof b === "function") {
    // You can choose to compare function toString() or ignore functions
    return a.toString() === b.toString();
  }

  // Check for objects/arrays (Handled null)
  if (a && b && typeof a === "object" && typeof b === "object") {
    if (Object.keys(a).length !== Object.keys(b).length) return false;
    for (let key in a) {
      return isEqual(a[key], b[key]);
    }
  }

  // Fallback to strict equality
  return a === b;
}

const a = { name: "mani" };
const b = { name: "mani" };
console.log(isEqual(a, b));

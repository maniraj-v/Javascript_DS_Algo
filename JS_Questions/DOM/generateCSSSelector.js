/*

Generate CSS selector for below HTML structure
<section>
    <ul>
        <li>Home</li>
        <li>Services</li>
        <li>Product</li>
    </ul>
</section>
*/
const selector = generateSelector(root, target);
console.log(selector); // section > ul > li:nth-of-type(3)

// Note: same tags at the same level are differentiated by nth-child
// solution:
function generateSelector(root, target) {
  // Make sure target is within the root
  if (!root.contains(target)) {
    return null;
  }
  // Edge case direct selection using id
  if (target.id) {
    return `#${target.id}`;
  }

  let selector = [];
  let currentElement = target;

  // Traverse up the DOM tree Upside to generate the selector
  while (currentElement && currentElement !== root) {
    let tagName = currentElement.tagName.toLowerCase();
    let id = currentElement.id;
    let classNames = Array.from(currentElement.classList).join(".");

    let selectorPart = tagName;

    // Add index if there are multiple similar elements at this level
    let siblings = Array.from(currentElement.parentElement.children);
    const isMultipleSameTags =
      siblings.filter((element) => element.tagName === currentElement.tagName)
        .length > 1;
    if (isMultipleSameTags) {
      let index = siblings.indexOf(currentElement) + 1;
      selectorPart += `:nth-child(${index})`;
    }

    selector.push(selectorPart);
    currentElement = currentElement.parentElement;
  }
  // finally push root tagname
  selector.push(root.tagName.toLowerCase());
  return selector.reverse().join(" > ");
}

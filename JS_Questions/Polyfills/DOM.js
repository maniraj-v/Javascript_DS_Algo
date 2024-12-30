// Polyfill for getElementsByTagName

Document.prototype.getElementsByTagName = function customGetElementsByTagName(tagName) {

  const currentNode = this
console.log('this', this)
  const result = []
  if (!currentNode.children){
    return result
  }
  const childrens = Array.from(currentNode.children);
  for(const children of childrens){
    if(children.tagName.toLowerCase() === tagName){
      result.push(children)
    }
    result.push(...customGetElementsByTagName.call(children, tagName))
  }
  return result
}

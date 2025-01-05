const vDocument = new VDocument();
const body = vDocument.createElement("body");
const div = vDocument.createElement("div");

div.innerHTML = "Hello, I am a div!";
body.appendChild(div);
vDocument.appendChild(body);

// proper html structure
const html = vDocument.render();

/*
output print as below with indents

<html>
	<body>
		<div>
			Hello, I am a div!
		</div>
	</body>
</html>

*/

// solution:

class Node {
  constructor(tagName) {
    this.tagName = tagName;
    this.childrens = [];
    this.innerHTML = "";
  }
  appendChild(node) {
    this.childrens.push(node);
  }
}

class VDocument extends Node {
  constructor() {
    super("html");
  }
  createElement(tagName) {
    return new Node(tagName);
  }
  render() {
    function print(node, level) {
      const spaces = " ".repeat(level * 4);
      console.log(spaces + `<${node.tagName}>`);
      if (node.innerHTML) {
        console.log(spaces + "    " + node.innerHTML);
      }
      console.log(spaces + `<${node.tagName}>`);
      for (const children of node.childrens) {
        print(children, level + 1);
      }
      console.log(spaces + `</${node.tagName}>`);
    }
    print(this, 0);
  }
}

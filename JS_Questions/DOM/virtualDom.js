/*
<div id="root">
   <div class="heading-container">
      This is
      <h1 key="10" id="heading">devtools.tech</h1>
      <h2 id="heading">is Awesome!!</h2>
      <input type="text" value="Devtools Tech"><button>Click</button>
      <div>React</div>
      <div>Fragment</div>
   </div>
</div>
*/

// Above Representation as virtual DOM node
const virtualNode = {
  type: "div",
  props: {
    class: "heading-container",
    children: {
      0: "This is",
      1: {
        type: "h1",
        props: {
          key: "10",
          id: "heading",
          children: "devtools.tech",
        },
      },
      2: {
        type: "h2",
        props: {
          id: "heading",
          children: "is Awesome!!",
        },
      },
      3: {
        type: "input",
        props: {
          type: "text",
          value: "Devtools Tech",
        },
      },
      4: {
        type: "button",
        props: {
          children: "Click",
        },
      },
      5: 0,
      6: {
        props: {
          children: {
            0: {
              type: "div",
              props: {
                children: "React",
              },
            },
            1: {
              type: "div",
              props: {
                children: "Fragment",
              },
            },
          },
        },
      },
      7: "",
    },
  },
};

// Actual DOM
const root = document.createElement("div");
root.id = "root";
document.body.appendChild(root);
const domNode = document.getElementById("root");

renderToDOM(virtualNode, domNode);

// Solution:
// Create a function to render the virtual DOM to the actual DOM
function renderToDOM(virtualNode, domNode) {
  if (!virtualNode) {
    return null;
  }
  if (typeof virtualNode === "string") {
    const textNode = document.createTextNode(virtualNode);
    domNode.appendChild(textNode);
    return;
  }

  const rootNode = virtualNode.type
    ? document.createElement(virtualNode.type)
    : document.createDocumentFragment();

  const { children, ...rest } = virtualNode.props;
  Object.entries(rest).forEach(([key, value]) => {
    // handles class, id, value everything in setAttribute
    // instead of node.classList.add(class), node.value = value, node.id = id
    rootNode.setAttribute(key, value);
  });

  if (typeof children === "string") {
    const textNode = document.createTextNode(children);
    rootNode.appendChild(textNode);
  } else if (children !== null && typeof children === "object") {
    Object.values(children).forEach((child) => {
      renderToDOM(child, rootNode);
    });
  }
  domNode.appendChild(rootNode);
}

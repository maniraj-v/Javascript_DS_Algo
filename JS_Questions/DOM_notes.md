# Basic DOM Traversal and Access

- **document** – The root object that represents the entire HTML document.
- **document.getElementById('id')** – Access an element by its id attribute.
- **document.querySelector(selector)** – Returns the first element that matches the CSS selector.
- **document.querySelectorAll(selector)** – Returns all elements that match the CSS selector as a NodeList.
- **node.children** – Returns a live HTMLCollection of all child elements (ignores text and comment nodes).

    ```javascript
    const children = node.children; // Array-like collection of child elements.
    ```

- **node.firstChild** – Returns the first child node, including text and comment nodes.

    ```javascript
    const firstNode = node.firstChild;
    ```

- **node.firstElementChild** – Returns the first child element node (ignores text and comment nodes).

    ```javascript
    const firstElement = node.firstElementChild;
    ```

- **node.lastChild** – Returns the last child node, including text and comment nodes.

    ```javascript
    const lastNode = node.lastChild;
    ```

- **node.lastElementChild** – Returns the last child element node (ignores text and comment nodes).

    ```javascript
    const lastElement = node.lastElementChild;
    ```

- **node.previousSibling** – Returns the previous sibling node.

    ```javascript
    const prevNode = node.previousSibling;
    ```

- **node.previousElementSibling** – Returns the previous sibling element node (ignores text and comment nodes).

    ```javascript
    const prevElement = node.previousElementSibling;
    ```

- **node.nextSibling** – Returns the next sibling node.

    ```javascript
    const nextNode = node.nextSibling;
    ```

- **node.nextElementSibling** – Returns the next sibling element node (ignores text and comment nodes).

    ```javascript
    const nextElement = node.nextElementSibling;
    ```

# Element Attributes and Properties

- **node.tagName** – Returns the tag name of the element (uppercase).

    ```javascript
    const tagName = node.tagName; // <div> returns DIV.
    ```

- **node.id** – Returns the id attribute of the element.

    ```javascript
    const id = node.id;
    ```

- **node.className** – Returns the class attribute of the element as a string.

    ```javascript
    const className = node.className;
    ```

- **node.classList** – Returns a live DOMTokenList collection of the element’s class attributes (provides methods like add(), remove(), contains()).

    ```javascript
    node.classList.add('new-class');
    node.classList.remove('old-class');
    node.classList.contains('some-class');
    ```

- **node.setAttribute(name, value)** – Sets an attribute to the specified value.

    ```javascript
    node.setAttribute('data-id', '123');
    ```

- **node.getAttribute(name)** – Retrieves the value of an attribute.

    ```javascript
    const value = node.getAttribute('data-id');
    ```

- **node.removeAttribute(name)** – Removes the specified attribute from the element.

    ```javascript
    node.removeAttribute('data-id');
    ```

- **node.dataset** – Provides access to all data-\* attributes as an object.

    ```javascript
    const dataValue = node.dataset.someData;
    ```

# Element Content

- **node.innerHTML** – Returns or sets the HTML content inside the element.

    ```javascript
    const content = node.innerHTML; 
    node.innerHTML = '<p>New Content</p>';
    ```

- **node.textContent** – Returns or sets the plain text content inside the element (does not include HTML tags).

    ```javascript
    const text = node.textContent; 
    node.textContent = 'New text content';
    ```

- **node.innerText** – Similar to textContent, but respects CSS styles like display: none and visibility: hidden.

    ```javascript
    const innerText = node.innerText;
    ```

- **node.outerHTML** – Returns or sets the HTML content including the element itself.

    ```javascript
    const outerContent = node.outerHTML; 
    node.outerHTML = '<div class="new-element"></div>';
    ```

- **node.value** – Accesses or sets the value of form controls (like input, select, textarea).

    ```javascript
    const value = node.value; 
    node.value = 'New Value';
    ```

# DOM Manipulation

- **node.appendChild(newNode)** – Adds a new child node to the end of the list of children of the current node.

    ```javascript
    node.appendChild(newElement);
    ```

- **node.insertBefore(newNode, referenceNode)** – Inserts a new node before a specified reference node.

    ```javascript
    parentNode.insertBefore(newElement, referenceElement);
    ```

- **node.removeChild(childNode)** – Removes a specified child node.

    ```javascript
    parentNode.removeChild(childElement);
    ```

- **node.replaceChild(newChild, oldChild)** – Replaces an old child with a new one.

    ```javascript
    parentNode.replaceChild(newElement, oldElement);
    ```

# Event Handling

- **node.addEventListener(type, listener)** – Attaches an event listener to the element.

    ```javascript
    node.addEventListener('click', handleClick);
    ```

- **node.removeEventListener(type, listener)** – Removes an event listener.

    ```javascript
    node.removeEventListener('click', handleClick);
    ```

- **node.dispatchEvent(event)** – Dispatches an event to trigger the event listener.

    ```javascript
    const event = new Event('customEvent');
    node.dispatchEvent(event);
    ```

- **event.target** – The element that triggered the event.

    ```javascript
    event.target; // gives you the element that was clicked or interacted with.
    ```

- **event.preventDefault()** – Prevents the default action associated with the event.

    ```javascript
    event.preventDefault(); // e.g., preventing form submission or link navigation
    ```

- **event.stopPropagation()** – Stops the event from bubbling up to parent elements.

    ```javascript
    event.stopPropagation();
    ```

# Node Types and Comparison

- **node.nodeType** – Returns the type of node (e.g., 1 for Element, 3 for Text).

    ```javascript
    const type = node.nodeType;
    ```

- **node.nodeName** – Returns the name of the node (e.g., "DIV" for an element node).

    ```javascript
    const nodeName = node.nodeName;
    ```

- **node.isEqualNode(otherNode)** – Checks if two nodes are identical (same name, same attributes, etc.).

    ```javascript
    node.isEqualNode(otherNode);
    ```

# Other Useful Methods

- **document.createElement(tagName)** – Creates a new element node of the specified tag name.

    ```javascript
    const newElement = document.createElement('div');
    ```

- **document.createTextNode(text)** – Creates a new text node with the specified text content.

    ```javascript
    const textNode = document.createTextNode('Hello');
    ```

- **document.getElementsByTagName(tagName)** – Returns a live HTMLCollection of elements with the specified tag name.

    ```javascript
    const divs = document.getElementsByTagName('div');
    ```

- **document.getElementsByClassName(className)** – Returns a live HTMLCollection of elements with the specified class name.

    ```javascript
    const elements = document.getElementsByClassName('my-class');
    ```

- **document.querySelector(selector)** – Returns the first element that matches the CSS selector.

    ```javascript
    const element = document.querySelector('.my-class');
    ```

- **document.querySelectorAll(selector)** – Returns a static NodeList of all elements that match the CSS selector.

    ```javascript
    const elements = document.querySelectorAll('.my-class');
    ```

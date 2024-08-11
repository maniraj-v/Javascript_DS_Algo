
/*proxies can be used to:

- Log property access and modification
- Validate property values

*/
// Logging Proxy
// Create a proxy that logs every property access and modification:

const target = {
  name: 'John',
  age: 30
};

const handler = {
  get: function(target, prop) {
    console.log(`Getting ${prop}`);
    return target[prop];
  },
  set: function(target, prop, value) {
    console.log(`Setting ${prop} to ${value}`);
    target[prop] = value;
  }
};

const loggedTarget = new Proxy(target, handler);

loggedTarget.name; // Getting name
loggedTarget.age = 31; // Setting age to 31

// Validation Proxy
// Create a proxy that validates property values:

const target2 = {
  name: '',
  age: 0
};

const handler2 = {
  set: function(target, prop, value) {
    if (prop === 'name' && typeof value !== 'string') {
      throw new Error('Name must be a string');
    }
    if (prop === 'age' && typeof value !== 'number') {
      throw new Error('Age must be a number');
    }
    target[prop] = value;
  }
};

const validatedTarget = new Proxy(target2, handler2);

validatedTarget.name = 'Jane'; // valid
validatedTarget.age = 'thirty'; // throws Error: Age must be a number
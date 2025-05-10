// Implement classnames library 

classNames('foo', 'bar'); // 'foo bar'
classNames('foo', { bar: true }); // 'foo bar'
classNames({ 'foo-bar': true }); // 'foo-bar'
classNames({ 'foo-bar': false }); // ''
classNames({ foo: true }, { bar: true }); // 'foo bar'
classNames({ foo: true, bar: true }); // 'foo bar'
classNames({ foo: true, bar: false, qux: true }); // 'foo qux'
classNames('a', ['b', { c: true, d: false }]); // 'a b c'
classNames(
  'foo',
  {
    bar: true,
    duck: false,
  },
  'baz',
  { quux: true },
); // 'foo bar baz quux'
classNames(null, false, 'bar', undefined, { baz: null }, ''); // 'bar'


export default function classNames(...args) {
let result = []
 args.forEach((arg, index) => {
  // Check Falsy arg values
  if(!arg){
    return 
  }
  // Check String/Number type
  if(typeof arg === 'string' || typeof arg === 'number'){
    result.push(arg)
    return
  }
  // Check Array type
  if(Array.isArray(arg)){
      result.push(classNames(...arg))
    return
  }
  // Else its object
  for(let key in arg){
    if(Object.hasOwn(arg, key) && arg[key]){
      result.push(key)
    }
  }
})
 return result.join(' ')
}

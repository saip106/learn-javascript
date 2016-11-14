One of the biggest misconceptions in javascript is that [[prototype]] of an object 
can be accessed by using the property prototype as follows:
~~~~
var foo = {};
console.log(foo.prototype);
~~~~

[[prototype]] of an object foo can be accessed by one of the following:
~~~~
foo.__proto__
Object.getPrototypeOf(foo); 
Object.setPrototypeOf(foo, null); 
~~~~ 
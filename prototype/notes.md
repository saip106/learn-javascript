Taken from [here](http://stackoverflow.com/questions/31340608/proto-and-prototype-difference?noredirect=1&lq=1)
~~~~
__proto__
~~~~
You can actually access the internal [[Prototype]] property of an object with . 
You can think of [[Prototype]] as the actual parent of the current object, in the inheritance hierarchy.
~~~~
prototype
~~~~
This is a special property, when set on a (constructor) function object, 
used to establish the inheritance chain for instances created from the constructor. 
For example,
~~~~
function Foo() {}
Foo.prototype = {a: 1};
~~~~
Now, when you create a new object of type Foo, the newly created object's 
internal [[Prototype]] property will refer the Foo.prototype object. 
You can confirm that like this
~~~~
console.assert((new Foo()).__proto__ === Foo.prototype);
~~~~
In your case,
~~~~
myFunc.prototype = myObj;
~~~~
you are creating a prototype property on the function object and this will be used 
only when you are creating new objects with this function (constructor function). 
You might want to think of it as a template for the new objects. So, when you do myFunc.a, 
JS engine tries to find a in myFunc and its parents in the prototype chain and it doesn't find it, 
that is why it returns undefined.

But, when you do
~~~~
myFunc.__proto__ = myObj;
~~~~
you are setting the parent of myFunc, in the prototype chain, to myObj. 
So, when you do myFunc.a, JS engine first tries to find a in myFunc object itself, and it is not there. 
So, it tries to find it in its immediate parent, which is myObj. That is why it returns 1 in this case.

Note: Don't use __proto__ in your actual code, 
as it is retained in the latest versions of JavaScript specification just for backward compatibility. 
Read more about it here. Use Object.getPrototypeOf and Object.setPrototypeOf instead.
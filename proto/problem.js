var foo = {};

//what is the [[prototype]] of foo at this point?
console.log(foo.prototype === null);
console.log(foo.prototype === undefined);
console.log(foo.prototype === Object);
console.log(foo.prototype === Object.prototype);

//what will this print and why?
console.log(foo.toString());


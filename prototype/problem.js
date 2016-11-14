//my prototype Object
var myObj = {
    a: 1,
    b: 2
};

var myFunc = function () {};

// setting function's `prototype` property
myFunc.prototype = myObj;
console.log(myFunc.a);

//setting function __proto__ property
myFunc.__proto__ = myObj;
//returns 1
console.log(myFunc.a);
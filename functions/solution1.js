var foo = function() {
    console.log("foo");
}

foo();

foo = function() {
    console.log("foo redefined");
}

foo();
var foo1 = 123;
var foo2 = foo1;

foo2 = 456;

console.log(foo1);

var bar1 = {
    value: 123
}

var bar2 = bar1;
bar2.value = 456;

console.log(bar1.value);

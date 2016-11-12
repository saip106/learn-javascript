var parent = {
    get: function (){
        return this.value;
    },
    value: 111
}

var child = Object.create(parent);
child.value = 222;

var grandChild = Object.create(child);

console.log(parent.get());
console.log(child.get());
console.log(grandChild.get());
var Foo = {
    privateMethod: function () {
        console.log("private method called...");
    },
    publicMethod : function () {
        this.privateMethod();
        console.log("public method called...");
    }
}

//We can access private method from here
Foo.privateMethod();

//how do we prevent this
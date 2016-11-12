var Foo = (function(){
    var privateMethod = function () {
        console.log("private method called...");
    }

    return {
        publicMethod : function () {
            privateMethod();
            console.log("public method called...");
        }
    }
})();

//Foo.privateMethod(); //this will throw an error
Foo.publicMethod(); //this will work fine


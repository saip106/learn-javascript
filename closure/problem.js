function printWithDelay(names){
    for (var index = 0; index < names.length; index++) {
        setTimeout(function() {
                console.log(names[index]);
            }, 1000);
    }
}

printWithDelay(["foo", "bar", "baz"]);
function printWithDelay(people){
    for (var index = 0; index < people.length; index++) {
        (function () {
            var  i = index;
            setTimeout(function() {
                console.log(people[i]);
            }, 1000);
        })();
    }
}

printWithDelay(["foo", "bar", "baz"]);
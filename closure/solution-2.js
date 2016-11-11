function printWithDelay(people){
    for (var index = 0; index < people.length; index++) {
        (function (index) {
            setTimeout(function() {
                console.log(people[index]);
            }, 1000);
        })(index);
    }
}

printWithDelay(["foo", "bar", "baz"]);
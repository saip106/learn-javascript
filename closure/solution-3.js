function log(name) {
    console.log(name);
}

function printWithDelay(people){
    for (var index = 0; index < people.length; index++) {
        setTimeout(log.bind(null, people[index]) , 1000);
    }
}

printWithDelay(["foo", "bar", "baz"]);
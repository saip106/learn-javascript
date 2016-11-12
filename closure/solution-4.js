function logFactory(name) {
    return function log() {
        console.log(name);
    }
}

function printWithDelay(people){
    for (index = 0; index < people.length; index++) {
        setTimeout(logFactory(people[index]) , 1000);
    }
}

printWithDelay(["foo", "bar", "baz"]);
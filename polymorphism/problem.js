var person = {
    getName: function(){
        return this.name;
    } 
}

person.name = "John Doe";

var stylishPerson = Object.create(person);
stylishPerson.getName = function(){
    return "!!! " + person.getName() + " !!!"; 
}

stylishPerson.name = "James Bond";
console.log(stylishPerson.getName());


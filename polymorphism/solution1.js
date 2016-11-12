var person = {
    getName: function(){
        return this.name;
    } 
}

person.name = "John Doe";

var stylishPerson = Object.create(person);
stylishPerson.getName = function(){
    return "!!! " + person.getName.call(this) + " !!!"; 
}

stylishPerson.name = "James Bond";
console.log(stylishPerson.getName());


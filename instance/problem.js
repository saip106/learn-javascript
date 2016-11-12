var Person = function (name) {
    this.name = name;
}

Person.prototype.bankBalance = 0;
Person.prototype.getPaid = function (payment) {
    this.bankBalance += payment;
}

var jane = new Person("Jane");
var john = new Person("John");

console.log(jane.bankBalance);
console.log(john.bankBalance);

jane.getPaid(100);

console.log(jane.bankBalance);
console.log(john.bankBalance);
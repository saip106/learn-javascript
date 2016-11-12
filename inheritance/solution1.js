var Vehicle = function(){
    
}

Vehicle.prototype.drive = function () {
    console.log("driving...");
}

var Car = function(){

}

Car.prototype = Object.create(Vehicle.prototype); //the key for inheritance
Car.prototype.constructor = Car;
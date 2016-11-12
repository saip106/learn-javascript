var Vehicle = function(){

}

Vehicle.prototype.drive = function () {
    console.log("driving...");
}

var Car = function(){

}

Car.prototype = Object.create(Vehicle.prototype); //the key for inheritance

/*
Now the million dollar question is why not
    Car.prototype = Vehicle;
    Car.prototype = Vehicle.prototype;
    Car.prototype = new Vehicle();
*/  
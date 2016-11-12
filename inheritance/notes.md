~~~~
Car.prototype = Vehicle.prototype;
~~~~
The reason you want a new object for the Car prototype is that 
if you're bothering to make a subclass you'll probably want 
specialized behaviors that do apply to the subclass but 
don't apply to the more general parent class. 
You need a new object for those new properties; 
otherwise, you'd be adding those behavior properties to the Vehicle prototype, 
and all Vehicles would have access.

~~~~
Car.prototype = new Vehicle();
~~~~
This was the way people did it in ES3 as there was no Object.create (introduced in ES5)
The problem with this is that what if Vehicle Constructor took some parameters,
we certainly do not want to call the constructor when setting Car's prototype.
Hence this approach is discouraged.

~~~~
Car.prototype = Vehicle;
~~~~
Finally, setting Car.prototype to just Vehicle doesn't make much sense. 
That would work, in that it would not cause an exception, 
but it would set the Car prototype to be the Vehicle constructor function itself.



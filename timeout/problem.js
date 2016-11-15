console.log("before timeout");

setTimeout(function(){
    console.log("from timeout");
}, 1000);

console.log("after timeout");

//What is the output?
//How will this change when setTimeout is called with 0 ms delay
var fs = require("fs");

fs.stat("test_nexttick.js", function(err, stats){
    if (stats) {
        console.log("test_nexttick.js exists");
    }
});

setImmediate(function(){
    console.log("Immediate Timer 1 exists");
});

setImmediate(function(){
    console.log("Immediate Timer 2 exists");
});

process.nextTick(function(){
    console.log("Next Tick 1 executed");
});

process.nextTick(function(){
    console.log("Next Tick 2 executed");
});
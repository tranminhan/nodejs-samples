var events = require('events');

function CarShow() {
    events.EventEmitter.call(this);
    this.seeCar = function(make) {
        this.emit('sawCar', make);
    }
}

CarShow.prototype.__proto__ = events.EventEmitter.prototype;

var show = new CarShow();
function logCar(logMsg, callback) {
    process.nextTick(function(){
        callback(logMsg);
    });
}

var cars = ["Ferrari", "Porsche", "Buggati"];
for (var idx in cars) {
    var message = "Saw a " + cars[idx];
    logCar(message, function() {
        console.log("Normal Callback: " + message);
    });
}

for (var idx in cars) {
    var message = "Saw a " + cars[idx];
    (function(msg){
        logCar(msg, function(){
            console.log("Closure Callback: " + msg);
        });
    })(message);
}
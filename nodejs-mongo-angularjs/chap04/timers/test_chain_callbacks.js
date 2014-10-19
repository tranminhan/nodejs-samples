function logCar(car, callback) {
    console.log("Saw a %s", car);

    if (cars.length) {
        process.nextTick(function() {
            console.log("calling from nextTick");
            callback();
        });
    }
}

function logCars(cars) {
    var car = cars.pop();

    logCar(car, function() {
        logCars(cars);
    });
}

var cars = ["Buggati", "Ferrari", "Porsche", "Aston Martin", "Lamborghini"];

logCars(cars);
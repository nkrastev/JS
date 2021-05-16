function solve(inputCar) {
    let car={};

    car.model=inputCar.model;

    if (inputCar.power<=90) {
        car.engine={power:90, volume:1800}
    }else if (inputCar.power>90 && inputCar.power<=120) {
        car.engine={power:120, volume:2400}
    }else if (inputCar.power>120) {
        car.engine={power:200, volume:3500}
    }

    car.carriage={type:inputCar.carriage, color:inputCar.color};


    let wheelSizeNumber=inputCar.wheelsize;
    if (wheelSizeNumber % 2===0) {
        wheelSizeNumber=2* Math.floor(inputCar.wheelsize/2) - 1;
    }
    car.wheels=Array(4).fill(wheelSizeNumber);
    //console.log(car.wheels[0]);

    return car;
}
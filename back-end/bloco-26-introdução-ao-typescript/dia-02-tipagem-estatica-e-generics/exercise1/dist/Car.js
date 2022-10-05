"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(brand, color, doors) {
        this.brand = brand;
        this.color = color;
        this.doors = doors;
    }
    Car.prototype.honk = function () {
        console.log('Acionou a buzina');
    };
    Car.prototype.turnOn = function () {
        console.log('Ligou o carro');
    };
    Car.prototype.turnOff = function () {
        console.log('Deligou o carro');
    };
    Car.prototype.speedUp = function () {
        console.log('Acelerou o carro');
    };
    Car.prototype.speedDown = function () {
        console.log('Desacelerou o carro');
    };
    Car.prototype.stop = function () {
        console.log('Parou o carro');
    };
    Car.prototype.turn = function (direction) {
        console.log("Virou o carro para ".concat(direction));
    };
    return Car;
}());
exports["default"] = Car;

/*eslint-disable*/
import Car from './10-car.js';

export default class EVCar extends Car {
  constructor(brand, motor, color, range) {
    super(brand, motor, color);
    this._range = range;
  }

  cloneCar() {
    const Clone = super.constructor[Symbol.species] || super.constructor;
    return new Clone();
  }

  static get [Symbol.species]() {
    return Car;
  }
}

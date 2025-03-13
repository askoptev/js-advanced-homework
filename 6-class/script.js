'use strict'

class Car {
  #brand;
  #model;
  #mileage;

  constructor(brand, model, mileage) {
    this.#brand = brand;
    this.#model = model;
    this.#mileage = mileage;    
  };

  set mileage(value) {
    if (Number.isFinite(value)) {
      this.#mileage = value;
    }
  };

  get mileage() {
    return this.#mileage;
  }

  info() {
    console.log(`Марка: ${this.#brand}`);
    console.log(`Модель: ${this.#model}`);
    console.log(`Пробег: ${this.#mileage}`);    
  }
};

const vehicle = new Car('Hyundai', 'Solaris', 10_000);

vehicle.mileage = 120_000;
console.log(vehicle.mileage);
vehicle.info();

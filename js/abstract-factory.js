// Car class (Product)
class Car {
  constructor({ brand, model, color, engine, wheels }) {
    this.brand = brand;
    this.model = model;
    this.color = color;
    this.engine = engine;
    this.wheels = wheels;
  }

  describe() {
    return `${this.color} ${this.brand} ${this.model} with a ${this.engine} engine and ${this.wheels} wheels.`;
  }
}

// CarBuilder class
class CarBuilder {
  constructor() {
    this.car = {};
  }

  setBrand(brand) {
    this.car.brand = brand;
    return this;
  }

  setModel(model) {
    this.car.model = model;
    return this;
  }

  setColor(color) {
    this.car.color = color;
    return this;
  }

  setEngine(engine) {
    this.car.engine = engine;
    return this;
  }

  setWheels(wheels) {
    this.car.wheels = wheels;
    return this;
  }

  build() {
    return new Car(this.car);
  }
}

// CarDirector class
class CarDirector {
  static createSportsCar() {
    return new CarBuilder()
      .setBrand("Lamborghini")
      .setModel("Huracan")
      .setColor("Yellow")
      .setEngine("V10")
      .setWheels(4)
      .build();
  }

  static createFamilyCar() {
    return new CarBuilder()
      .setBrand("Honda")
      .setModel("Civic")
      .setColor("White")
      .setEngine("Hybrid")
      .setWheels(4)
      .build();
  }
}

// Usage
const sportsCar = CarDirector.createSportsCar();
console.log(sportsCar.describe());

const familyCar = CarDirector.createFamilyCar();
console.log(familyCar.describe());

const customCar = new CarBuilder()
  .setBrand("Tesla")
  .setModel("Model S")
  .setColor("Red")
  .setEngine("Electric")
  .setWheels(4)
  .build();

console.log(customCar.describe());

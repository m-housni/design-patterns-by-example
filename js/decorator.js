class Coffee {
  cost() {
    return 2.0; // base cost of a coffee
  }
}
class MilkDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  cost() {
    return this.coffee.cost() + 0.5; // add cost of milk to coffee
  }
}
class WhipDecorator {
  constructor(coffee) {
    this.coffee = coffee;
  }
  cost() {
    return this.coffee.cost() + 0.7; // add cost of whip to coffee
  }
}


const milkCoffee = new MilkDecorator(new Coffee());
console.log(milkCoffee.cost()); // outputs 2.5
const whipCoffee = new WhipDecorator(new Coffee());
console.log(whipCoffee.cost()); // outputs 2.7
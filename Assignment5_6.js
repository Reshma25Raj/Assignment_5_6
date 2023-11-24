// Car object constructor
class Car {
  constructor(brand, model, year, color, price, gas) {
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.color = color;
    this.price = price;
    this.gas = gas;
  }

  // Honk method for Car object
  honk() {
    console.log(`Tuut tuut! Car details: Brand: ${this.brand}, Model: ${this.model}, Year: ${this.year}, Color: ${this.color}, Price: ${this.price}`);
  }

  // Method to calculate gas loss during the race
  calculateGasLoss(currentYear) {
    let gasLoss = 5;

    // Calculate additional gas loss based on years difference
    if (this.year < currentYear) {
      gasLoss += (currentYear - this.year);
    }

    return gasLoss;
  }
}

// Create car objects
const cars = [
  new Car('Honda', 'CR-V', 2023, 'Red', 50000, 45),
  new Car('Ford', 'F-150', 2020, 'Black', 25000, 30),
  new Car('BMW', 'X5', 2022, 'Green', 60000, 65),
  new Car('Mazda', 'CX-5', 2019, 'White', 15000, 60),
  new Car('Audi', 'Q7', 2018, 'Silver', 52000, 47),
  new Car('Kia', 'Forte', 2020, 'Blue', 21000, 56)
];

// Simulate the race for 7 turns
const currentYear = new Date().getFullYear();

for (let i = 0; i < 7; i++) {
  console.log(`Turn ${i + 1}:`);

  cars.forEach(car => {
    const gasLoss = car.calculateGasLoss(currentYear);
    car.gas -= gasLoss;

    if (car.gas <= 0) {
      console.log(`${car.brand} ${car.model} has run out of gas!`);
    } else {
      console.log(`${car.brand} ${car.model} has ${car.gas} liters of gas remaining.`);
    }
  });

  console.log('-------------------');
}

// Invoke the honk method for each car instance
cars.forEach(car => {
  car.honk();
});

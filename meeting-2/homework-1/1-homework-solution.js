function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
  this.owners = [];

  this.getCarInfo = function () {
    return `${this.make} ${this.model} released in ${this.year}`;
  }

  this.addOwner = function (owner) {
    if (!this.owners.includes(owner)) {
      this.owners.push(owner);
  }

  }

  this.removeOwner = function (owner) {
    const index = this.owners.indexOf(owner);
        if (index !== -1) {
            this.owners.splice(index, 1);
        }
  }

  this.getOwnersCount = function () {
    return this.owners.length;
  }

  this.getOwnerNames = function () {
    return this.owners.map(function(owner) {
      return owner.fullName();
  })
  }

  this.getFullInfo = function () {
    return `${make} ${model} from ${year}. ${this.getOwnersCount()} person owns this car. These are - ${this.getOwnerNames().join(", ")}.`;
  }

}



function Person(name, surname, age, gender, cars = []) {
  this.name = name;
  this.surname = surname;
  this.age = age;
  this.gender = gender;
  this.cars = cars;

  this.fullName = function () {
    return `${this.name} ${this.surname}`;
  }

  this.countCars = function () {
    return this.cars.length;
  }

  this.buysCar = function (car) {
    this.cars.push(car);
    car.addOwner(this);
  }

  this.sellsCar = function(car) {
    const index = this.cars.indexOf(car);
    if (index !== -1) {
      this.cars.splice(index, 1);
      car.removeOwner(this);
  }
  }

  this.getAllCarsInfo = function(){
    return `${this.name} owns these cars: ${this.cars.map(x => x.getCarInfo()).join(', ')}.`;
  }

}

let daniel = new Person("Daniel", "Barbakadze", 30, "Male", []);
let elon = new Person("Elon", "Musk", 30, "Male");
let duti_picoti = new Car("BMW", "525", 1999);
let stodevianosto = new Car("Mercedes", "E190", 1991);

// manual tests
// console.log(daniel.fullName());
// console.log(elon.fullName());

// daniel.buysCar(duti_picoti);
// elon.buysCar(stodevianosto);
// elon.buysCar(duti_picoti);

// console.log(daniel.countCars());
// console.log(elon.countCars());

// console.log(elon.getAllCarsInfo());
// console.log(daniel.getAllCarsInfo());


// console.log(duti_picoti.getCarInfo());
// console.log(stodevianosto.getCarInfo());

// console.log(duti_picoti.getOwnerNames());
// console.log(stodevianosto.getFullInfo());

module.exports = { Person, Car };


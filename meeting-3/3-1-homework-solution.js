
// parent class
class Vehicle {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}


// child class
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model);
    this.year = year;
    this.owners = [];
  }

  getCarInfo = () => `${this.make} ${this.model} released in ${this.year}`;

  addOwner = owner => !this.owners.includes(owner) && this.owners.push(owner);

  removeOwner = owner => this.owners = this.owners.filter(item => item !== owner);

  getOwnersCount = () => this.owners.length;

  getOwnerNames = () => this.owners.map(owner => owner.fullName());

  getFullInfo = () => `${this.make} ${this.model} from ${this.year}. ${this.getOwnersCount()} person owns this car. These are - ${this.getOwnerNames().join(", ")}.`;

}


class Person {
  constructor(name, surname, age, gender, cars = []) {
    this.name = name;
    this.surname = surname;
    this.age = age;
    this.gender = gender;
    this.cars = cars;
  }

  fullName = () => `${this.name} ${this.surname}`;

  countCars = () => this.cars.length;

  buysCar = car => this.cars.push(car) && car.addOwner(this);


  sellsCar = car => this.cars = this.cars.filter(i => i !== car) && car.removeOwner(this);
  

  getAllCarsInfo = () => `${this.name} owns these cars: ${this.cars.map(car => car.getCarInfo()).join(', ')}.`;



}


// ანალოგიური დავალება Class ების გამოყენებით.
// დაამატეთ კლასი სახელად Vehicle, რომელსაც დააextendებს Car კლასი.
// Vehicle კლასის კონსტრუქტორმა უნდა მიიღოს 2 არგუმენტი make & model
// შესაბამისად ამ ცვლადების აღწერა უნდა მოხდეს ამ კლასში და 
//აღარ Car კლასში, შესაბამისად Car კლასი მას მიიღებს მემკვიდრეობით 
//Vehicle სგან.


// let daniel = new Person("Daniel", "Barbakadze", 30, "Male", []);
// let elon = new Person("Elon", "Musk", 50, "Male");
// let duti_picoti = new Car("BMW", "525", 1999);
// let stodevianosto = new Car("Mercedes", "E190", 1991);

// console.log(duti_picoti.getCarsInfo()); 
// duti_picoti.addOwner(daniel);
// duti_picoti.addOwner(elon);
// stodevianosto.addOwner(elon);
// console.log(duti_picoti.owners);
// console.log(duti_picoti.getFullInfo());
// console.log(stodevianosto.getFullInfo());


module.exports = { Person, Car };
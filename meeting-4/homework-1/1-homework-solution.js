// ანალოგიური დავალება Factory Function ების გამოყენებით.
// Car და Person ფუნქციებს შეუცვალეთ სახელი შემდეგნაირად -> createCar და createPerson.
// საერთო ფუნქციონალი უნდა იყოს გატანილი ცალკე და ყოველი ობიექტის შექმნისას 
//ახალი ადგილი არ უნდა გამოიყოფოდეს მეხსიერებაში ერთი და იგივე ფუნქციონალის მისანიჭებლად, 
//არამედ მას უნდა დავუსტოთ პროტოტიპში (როგორც ეს შეხვედრის მასალებშია მოცემული).


const carBehavior = {
  getCarInfo() {
    return `${this.make} ${this.model} released in ${this.year}`;
  },

  addOwner(owner) {
    return !this.owners.includes(owner) && this.owners.push(owner);
  },

  removeOwner(owner) {
    return this.owners = this.owners.filter(item => item !== owner);
  },

  getOwnersCount() {
    return this.owners.length;
  },

  getOwnerNames() {
    return this.owners.map(owner => owner.fullName());
  },

  getFullInfo() {
    return `${this.make} ${this.model} from ${this.year}. 
    ${this.getOwnersCount()} person owns this car. These are 
    - ${this.getOwnerNames().join(", ")}.`;
  },
}

function createCar(make, model, year) {
  let car = Object.create(carBehavior);
  car.make = make;
  car.model = model;
  car.year = year;
  car.owners = [];

  return car;
}

const personBehavior = {
  fullName() {
    return `${this.name} ${this.surname}`;
  },

  countCars() {
    return this.cars.length;
  },

  buysCar(car) {
    return this.cars.push(car) && car.addOwner(this);
  },

  sellsCar(car) {
    return this.cars = this.cars.filter(i => i !== car)
      && car.removeOwner(this);
  },

  getAllCarsInfo() {
    return `${this.name} owns these cars: 
    ${this.cars.map(car => car.getCarInfo()).join(', ')}.`;
  },
}

function createPerson(name, surname, age, gender, cars = []) {
  let person = Object.create(personBehavior);
  person.name = name;
  person.surname = surname;
  person.age = age;
  person.gender = gender;
  person.cars = cars;

  return person;
}




// let daniel = createPerson("Daniel", "Barbakadze", 30, "M", []);
// let elon = createPerson("Elon", "Musk", 50, "M");
// let duti_picoti = createCar("BMW", "525", "1999");
// let stodevianosto = createCar("Mercedes", "E190", 1991);

// daniel.buysCar(duti_picoti);
// daniel.buysCar(stodevianosto);
// daniel.sellsCar(duti_picoti);
// elon.buysCar(stodevianosto);
// elon.buysCar(duti_picoti);




module.exports = { createPerson, createCar };
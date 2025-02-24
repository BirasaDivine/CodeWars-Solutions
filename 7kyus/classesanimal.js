class Animal {
  constructor(name, age, legs, species, status) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
}

class Shark extends Animal {
  constructor(name, age, status) {
    super(name, age, 0, "Shark", status);
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, 4, "cat", status);
  }
  introduce() {
    return super.introduce() + "  Meow meow!";
  }
}

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, 4, "Dog", status);
    this.master = master;
  }
  introduce() {
    return super.introduce() + "  Bark bark!";
  }
  greetMaster() {
    return `Hello ${this.master}`;
  }
}
const myDog = new Shark("Misty", 4, "home");
console.log(myDog);
console.log(myDog.introduce());

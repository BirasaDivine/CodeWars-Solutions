class person {
  constructor(firstname = "John", lastname = "Doe", age = 0, gender = "Male") {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.gender = gender;
  }
  sayFullName() {
    return this.firstname + " " + this.lastname;
  }
  static greetExtraTerrestrials(raceName) {
    return "Welcome to Planet Earth " + raceName;
  }
}
const person1 = new person("Divine");
console.log(person1.firstname);
console.log(person.greetExtraTerrestrials("Adam"));

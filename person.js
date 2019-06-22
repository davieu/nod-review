const person = {
  name: 'John Doe',
  age: 30
}

class PersonClass {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greeting() {
    console.log(`My name is ${this.name} and I am ${this.age} years old`)
  }

}



const obj1 = {person, PersonClass}

module.exports = obj1;
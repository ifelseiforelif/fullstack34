export default class User {
  #_name; //private fields
  #_age;
  constructor(name, age) {
    this.#_name = name;
    this.#_age = age;
  }
  getAge() {
    return this.#_age;
  }
  getName() {
    return this.#_name;
  }
  setAge(name) {
    this.#_name = name;
  }
  setName(age) {
    if (age < 0) throw new Error("неправильний вік");
    this.#_age;
  }
  toString() {
    return `${this.#_name} ${this.#_age}`;
  }
}
// module.exports = User;

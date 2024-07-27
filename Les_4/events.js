import EventEmitter from "events";
const emitter = new EventEmitter();

//Приклад 3:
// class Buyer {
//   #_name;
//   #_email;
//   constructor(name, email) {
//     this.#_name = name;
//     this.#_email = email;
//   }
//   notifyAboutSale(discount) {
//     console.log(
//       `Name: ${this.#_name}. Email: ${this.#_email}. Discount: ${discount}%`
//     );
//   }
// }
// const buyer1 = new Buyer("Alex", "alex@gmail.com");
// const buyer2 = new Buyer("Egor", "egor@gmail.com");
// const buyer3 = new Buyer("Bogdan", "bodya@gmail.com");
// const buyers = [buyer1, buyer2, buyer3];
// buyers.forEach((buyer) => {
//   emitter.on("sale", (discount) => buyer.notifyAboutSale(discount));
// });
// emitter.emit("sale", 50);

//Приклад 2:
emitter.on("login", (data) => {
  const { id, name } = data;
  console.log(`Login. ID: ${id}. Name: ${name}`);
});
emitter.on("logout", (data) => {
  const { id, name } = data;
  console.log(`Logout. ID: ${id}. Name: ${name}`);
});
const user = { id: 234, name: "Alex" };

emitter.emit("logout", user);
//emitter.setMaxListeners(30); //встановлення макс кількості listeners
console.log(emitter.getMaxListeners()); //макс кількості listeners. Default: 10
//emitter.removeAllListeners("login"); //видаляє всіх підписників

emitter.prependListener("login", () => {
  //Додати підписника на початок списку підписників
  console.log("test");
});
emitter.emit("login", user);
console.log(emitter.eventNames()); //всі події
console.log(emitter.listenerCount("login")); //дізнаємось кількість підписників

//Приклад 1:
// const f1 = (data) => {
//   console.log("end..." + data);
// };
// const f2 = (data) => {
//   console.log("start (f2)..." + data);
// };

// const f3 = (data) => {
//   console.log("start (f3)..." + data);
// };
// //створюємо подію
// emitter.on("start", f2);
// emitter.on("start", f3);

// emitter.once("end", f1);

// emitter.emit("start", "our data");
// emitter.emit("end", "our data 1");
// emitter.emit("start", "our data");
// emitter.emit("end", "our data 2");
// emitter.off("start", f2); //видалення підписника
// emitter.emit("start", "our data");

//Common JS modules
// const User = require("./User.cjs");
import User from "./User.js";
import dotenv from "dotenv";
dotenv.config();
const user = new User("Oleg", 75);
console.log(user.toString(), process.env.TEMPERATURE);
while (true) {}
//ES modules

// console.log("Hello NodeJS");
// console.log(process.pid);
// while (true) {}

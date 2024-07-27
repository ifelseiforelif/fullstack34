// const buffer = Buffer.alloc(300, 15);
// buffer.write("AAAAA");
// console.log(buffer.toString());

//const buffer = Buffer.allocUnsafe(300, 2);
// console.log(buffer);

// const buffer = Buffer.from("string", "utf-8");

// const buffer = Buffer.from("string", "utf-8");

// console.log(String.fromCharCode(buffer[0]));

// import fs from "fs";
// try {
//   const data = fs.readFileSync("events.js", "utf8");
//   console.log(data);
// } catch (err) {
//   console.error(err);
// }

import fs from "fs";
fs.readFile("events.js", "utf8", (err, data) => {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});

//console.log(process.argv);
// const a = +process.argv[2];
// const b = +process.argv[3];
// console.log(a + b);
import readline from "readline";
const readstream = readline.createInterface({
  input: process.stdin,
  otput: process.stdout,
});
console.log("Enter number: ");
readstream.question("", (val) => {
  const num = parseInt(val);
  if (isNaN(num)) {
    console.error("not number");
  } else {
    console.log("Result: " + num * 2);
  }
  readstream.close();
});

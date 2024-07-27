const fs = require("fs");
const readableStream = fs.createReadStream(
  "CPlusPlusNotesForProfessionals.pdf"
);
const writableStream = fs.createWriteStream("output.pdf");
const duplexStream = readableStream.pipe(writableStream);
duplexStream.on("error", (err) => {
  console.error(err);
});
duplexStream.on("end", () => {
  console.log("Копіювання файлу завершено.");
});

// const readableStream = fs.createReadStream("data.txt");
// let i = 0;
// readableStream.on("data", (chunk) => {
//   console.log("chunk #" + i.toString());
//   console.log(chunk.toString().length);
//   i++;
// });
// readableStream.on("end", () => {
//   console.log("Кінець потоку");
// });

// const writableStream = fs.createWriteStream("data.txt");
// let i = 0;
// while (i < 10000) {
//   writableStream.write("Hello, world!\n");
//   writableStream.write(i.toString());
//   i++;
// }

// writableStream.on("error", (err) => {
//   console.error(err);
// });
// writableStream.on("finish", () => {
//   console.log("Дані записані до файлу.");
// });

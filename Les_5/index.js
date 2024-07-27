//Тема: Файлова система, Streams
//Тіпи файлів: текстові, бінарні (пишеться програмно, читається програмно)
//Шляхи до файлів бувають: абсолютні (починаються з диску) та відносні
const path = require("path");
const fs = require("fs");
const { exit } = require("process");
//const path_to_file = __dirname + path.sep + "data.txt";
const path_to_dir = path.resolve(__dirname, "logs");
const name_dir = "logs";
const path_to_file = path.resolve(__dirname, name_dir, "data.txt");

fs.readFile(path.join(path_to_dir, "person.json"), "utf8", (data, err) => {
  if (err) console.log(err);
  else {
    console.log(`Name: ${JSON.parse(data).name}`);
    console.log(`Age: ${JSON.parse(data).age}`);
    console.log(`Email: ${JSON.parse(data).email}`);
  }
});

// fs.readFile(path_to_file, "utf8", (data, err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(data);
//   }
// });

// fs.exists(path.join(name_dir), (exists) => {
//   if (exists) {
//     console.log(`Папка ${name_dir} існує.`);
//   } else {
//     console.log(`Папка ${name_dir} не існує.`);
//     fs.mkdir(path.join(name_dir), (err) => {
//       if (err) {
//         console.error(err);
//         exit(0);
//       } else {
//         console.log("Папку створено.");
//       }
//     });
//   }

//   //дозаписати файл mode='a'
//   fs.appendFile(path_to_file, "This is \nmy data", (err) => {
//     console.log(err);
//   });
//   //перезаписує файл mode='w'
//   fs.writeFile(path_to_file, "This is \nmy data", (err) => {
//     console.log(err);
//   });
// });

// console.log(path.extname(path_to_file)); //повертає розширення файлу
// console.log(path.parse(path_to_file).base);

// console.log(__dirname); //абсолютный шлях до папки
// console.log(__filename); //абсолютний шлях до файлу

// import http from "http";
// const PORT = 3000;
// const delay = (ms) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       console.log("delay...");
//       resolve();
//     }, ms);
//   });
// };
// const server = http.createServer(async (req, res) => {
//   switch (req.url) {
//     case "/home":
//       {
//         await delay(10000);
//         res.write("Hello From NodeJS");
//         res.end();
//         // setTimeout(() => {
//         //   //async
//         //   res.write("Hello From NodeJS");
//         //   res.end();
//         // }, 10000);
//         // const start = new Date(); // not async
//         // while (new Date() - start < 5000) {
//         //   console.log(new Date() - start);
//         // }
//       }
//       break;

//     default:
//       res.end("Not Found: 404");
//       break;
//   }
// });
// server.listen(PORT, () => {
//   console.log(`Server start... localhost:${PORT}`);
// });
setTimeout(() => {
  let i = 0;
  while (i < 50) {
    console.log(i);
    i++;
  }
}, 3000);
setTimeout(() => {
  let i = 0;
  while (i < 50) {
    console.log(i);
    i++;
  }
}, 3000);
setTimeout(() => {
  let i = 0;
  while (i < 50) {
    console.log(i);
    i++;
  }
}, 3000);
setTimeout(() => {
  let i = 0;
  while (i < 50) {
    console.log(i);
    i++;
  }
}, 3000);
setTimeout(() => {
  let i = 0;
  while (i < 50) {
    console.log(i);
    i++;
  }
}, 3000);
console.log("RUN");

// import http from "node:http";
// const PORT = 3000;
// http
//   .createServer((req, res) => {
//     for (let i = 0; i < 1e6; i++) {}
//     res.end("OK");
//   })
//   .listen(PORT, () => {
//     console.log(`http://localhost:${PORT}`);
//   });

//CLUSTER

import http from "node:http";
import cluster from "node:cluster";
import os from "node:os";
const PORT = 3000;
const cpus = os.cpus().length;
if (cluster.isPrimary) {
  for (let i = 0; i < cpus - 1; i++) {
    cluster.fork();
  }
}
if (cluster.isWorker) {
  http
    .createServer((req, res) => {
      for (let i = 0; i < 1e6; i++) {}
      res.end("OK");
    })
    .listen(PORT, () => {
      console.log(`http://localhost:${PORT}`);
    });
}

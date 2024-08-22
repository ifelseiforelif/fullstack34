import { Worker } from "node:worker_threads";
const worker = new Worker("./worker.js", { workerData: { color: "white" } });
//const worker = new Worker("./worker.js", { workerData: 100 });
// console.log("end");
worker.on("message", (msg) => console.log(msg));
let i = 1;
setInterval(() => {
  worker.postMessage("Hello from Main Thread: Mes: " + i);
  ++i;
}, 2000);

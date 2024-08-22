import { workerData, parentPort } from "node:worker_threads";
console.log("I am worker: ", workerData.color);
parentPort.on("message", (msg) => console.log(msg));
setTimeout(() => {
  parentPort.postMessage("Hello from Worker");
}, 4000);

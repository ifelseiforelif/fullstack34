//cluster
import os from "node:os";
import cluster from "node:cluster";
import http from "node:http";
const PORT = 4200;
const cpus = os.cpus().length;
if (cluster.isPrimary) {
  console.log(`I am primary cluster. Pid: ${process.pid}`);
  for (let i = 0; i < cpus - 1; i++) {
    const worker = cluster.fork();
    worker.on("exit", () => {
      console.log(`Worker died. Pid: ` + worker.process.pid);
      cluster.fork();
    });
  }
}
if (cluster.isWorker) {
  console.log(`I am worker. Pid: ${process.pid}`);
  const app = http.createServer((req, res) => {
    if (req.url == "/") {
      for (let i = 0; i < 10; i++) {
        crypto.randomBytes(64).toString("hex");
      }
      res.write("OK");
      res.end();
    }
  });

  app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`);
  });
}

import express from "express";
import cors from "cors";
const PORT = 3002;

const app = express();
app.use(
  cors({
    origin: "http://127.0.0.1:5500", // Замініть джерелом вашого зовнішнього інтерфейсу
    methods: ["GET"],
    credentials: true, // Allow credentials (cookies, authorization headers)
  })
);
app.get("/", (req, res) => {
  res.json({ mes: "OK" });
});
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

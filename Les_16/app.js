import express from "express";
import multer from "multer";
import path from "path";
import { v4 as uuidv4 } from "uuid";
const app = express();
const PORT = 8000;
// const upload = multer({
//   dest: "files",
// });
const storage = multer.diskStorage({
  destination: "uploads/",
  filename: (req, file, cb) => {
    cb(null, uuidv4() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

app.get("/", (req, res) => {
  res.sendFile(path.resolve("form.html"), (err) => {
    console.log(err);
  });
});

app.post("/", upload.single("file"), (req, res) => {
  console.log(req.file);
  res.send("Файл успішно завантажено");
});
app.listen(PORT, () => console.log("Server is running..."));

import express from "express";
import cors from "cors";
import { cars_routes } from "./routes/cars-routes";
import { color_routes } from "./routes/colors-routes";
const PORT: number = 3000;
const app = express();
app.use(cors());
app.use("/cars", cars_routes);
app.use("/colors", color_routes);
app.listen(PORT, () => {
  console.log(`Server is running http://localhost:${PORT}`);
});

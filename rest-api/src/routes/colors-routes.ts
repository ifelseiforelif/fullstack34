import { Router } from "express";
import { Color } from "../models/Color";

const color_routes = Router();

color_routes.get("/", async (req, res) => {
  Color.get_all_colors()
    .then((data) => {
      res.send(data);
    })
    .catch((err: Error) => {
      console.log(err);
      res.sendStatus(500);
    });
});

export { color_routes };

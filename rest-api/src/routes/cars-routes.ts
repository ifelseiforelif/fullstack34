import { Router } from "express";
import { Car } from "../models/Car";

const cars_routes = Router();
cars_routes.get("/:id", async (req, res) => {
  const id_car = req.params.id;
});
cars_routes.get("/", async (req, res) => {
  Car.get_all_cars()
    .then((data) => {
      res.send(data);
    })
    .catch((err: Error) => {
      console.log(err);
      res.sendStatus(500);
    });
});

export { cars_routes };

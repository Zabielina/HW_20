
import { Router } from "express";
import { Car } from "../models/Car";

const cars_routes = Router();

cars_routes.get("/", async (req, res) => {
  try {
    const cars = await Car.get_all_cars();
    res.status(200).send(cars);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});


cars_routes.delete("/:id", async (req, res) => {
  const id_car = req.params.id;
  try {
    const result = await Car.delete_car(id_car);
    if (result === 0) {
      return res.status(404).send('Car not found');
    }
    res.status(200).send('Car deleted successfully');
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

export { cars_routes };


import { CarDTO } from "../dto/CarDTO";

export class Car {
  static async get_all_cars() {
    return await CarDTO.findAll({
      attributes: [
        "id",
        "model",
        "year",
        "number",
        "color",
        "type",
        "isnew",
        "vengine",
      ],
    });
  }

  static async delete_car(id: string): Promise<number> {
    return await CarDTO.destroy({
      where: {
        id: id
      }
    });
  }
}

import { ColorDTO } from "../dto/ColorDTO";

export class Color {
  static async get_all_colors() {
    return await ColorDTO.findAll({
      attributes: ["id", "title"],
    });
  }
}

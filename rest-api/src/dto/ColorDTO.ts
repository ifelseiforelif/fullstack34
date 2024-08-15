import { sequelize } from "../config/dbconnection";
import { DataTypes } from "sequelize";
const ColorDTO = sequelize.define("colors", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: {
    type: DataTypes.STRING(25),
    allowNull: false,
  },

  //   createdAt: { type: DataTypes.STRING },
  //   updatedAt: { type: DataTypes.STRING },
});

export { ColorDTO };

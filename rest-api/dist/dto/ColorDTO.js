"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ColorDTO = void 0;
const dbconnection_1 = require("../config/dbconnection");
const sequelize_1 = require("sequelize");
const ColorDTO = dbconnection_1.sequelize.define("colors", {
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    title: {
        type: sequelize_1.DataTypes.STRING(25),
        allowNull: false,
    },
    //   createdAt: { type: DataTypes.STRING },
    //   updatedAt: { type: DataTypes.STRING },
});
exports.ColorDTO = ColorDTO;

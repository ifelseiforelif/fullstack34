import { Sequelize } from "sequelize";

const sequelize = new Sequelize("autocrm", "postgres", "simple", {
  dialect: "postgres", // або інший
  host: "localhost",
});

export { sequelize };

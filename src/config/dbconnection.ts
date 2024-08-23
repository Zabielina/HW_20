import { Sequelize } from "sequelize";

const sequelize = new Sequelize("autocrm", "postgres", "lisa", {
  dialect: "postgres", // або інший
  host: "localhost",
});

export { sequelize };

import { Sequelize } from "sequelize";

const db = new Sequelize("kujang_db", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

export default db;

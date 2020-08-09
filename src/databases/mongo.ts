import { Sql } from "@mayajs/sql";
import sample from "../controllers/sample/sample.model";

export = Sql({
  name: "sql",
  options: {
    database: "api",
    username: "root",
    password: "",
    options: {
      host: "localhost",
      dialect: "mysql" /* one of 'mariadb' | 'postgres' | 'mssql' */,
    },
  },
  schemas: [
    sample, // Sequelize Schema here
  ],
});

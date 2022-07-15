const { Sequelize } = require("sequelize");
const dbConfig = require("./db.config");

const sequelize = new Sequelize({
  username: dbConfig.user,
  password: dbConfig.password,
  host: dbConfig.host,
  database: dbConfig.db,
  dialect: dbConfig.dialect,
});

// const db = {};

// db.Sequelize = Sequelize;
// db.sequelize = sequelize;

// db.blogs = require("../models/blog.model")(sequelize, Sequelize);

// module.exports = db;
module.exports = sequelize;

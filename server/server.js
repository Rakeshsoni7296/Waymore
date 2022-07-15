const dotenv = require("dotenv");
dotenv.config({ path: `${__dirname}/config.env` });

const app = require("./app");
const association = require("./database/association");
const sequelize = require("./database/init_database");

association();
sequelize.sync();
(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

const port = process.env.PORT || 4500;

app.listen(port, () => {
  console.log(`Server is running at: http://localhost:${port}`);
});

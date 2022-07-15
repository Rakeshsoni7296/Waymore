const fs = require("fs");
const sequelize = require("../database/init_database");
const association = require("../database/association");
const User = require("../models/user.model");
const Blog = require("../models/blog.model");
const Review = require("../models/review.model");

const users = JSON.parse(fs.readFileSync(`${__dirname}/users.json`, "utf-8"));
const blogs = JSON.parse(fs.readFileSync(`${__dirname}/blogs.json`, "utf-8"));
const reviews = JSON.parse(
  fs.readFileSync(`${__dirname}/reviews.json`, "utf-8")
);

const importData = async () => {
  try {
    await User.bulkCreate(users);
    await Blog.bulkCreate(blogs);
    await Review.bulkCreate(reviews);
    console.log("💖💖 Data successfully loaded. 💖💖");
  } catch (err) {
    console.log("Error in loading data.", err);
  }
  process.exit();
};

const deleteData = async () => {
  try {
    await User.destroy({
      where: {},
    });
    await Blog.destroy({
      where: {},
    });
    await Review.destroy({
      where: {},
    });
    console.log("💥💥 Data deleted successfully. 💥💥");
  } catch (err) {
    console.log("Error in deleting data.", err);
  }
  process.exit();
};

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

if (process.argv[2] === "--import") { 
  importData();
} else if (process.argv[2] === "--delete") {
  deleteData();
}

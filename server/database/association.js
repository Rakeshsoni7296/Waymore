const User = require("../models/user.model");
const Blog = require("../models/blog.model");
const Review = require("../models/review.model");

const setAssociation = () => {
  User.hasMany(Blog, { foreignKey: "user_id", as: "blogs" });
  Blog.belongsTo(User, { foreignKey: "user_id", as: "user" });

  Blog.hasMany(Review, { foreignKey: "blog_id", as: "reviews" });
  Review.belongsTo(Blog, { foreignKey: "blog_id", as: "blog" });

  User.hasMany(Review, { foreignKey: "user_id", as: "reviews" });
  Review.belongsTo(User, { foreignKey: "user_id", as: "user" });
};

module.exports = setAssociation;

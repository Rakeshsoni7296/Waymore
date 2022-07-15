const { DataTypes } = require("sequelize");
const sequelize = require("../database/init_database");
const Blog = sequelize.define(
  "blog",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "This title is already taken. Please provide another title.",
      },
      validate: {
        len: {
          args: [10, 100],
          msg: "The title must contain between 10 and 100 characters.",
        },
      },
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: {
          args: [2, 2500],
          msg: "The description must contain at least 2 characters.",
        },
      },
    },
    likes: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    category: {
      type: DataTypes.STRING,
      defaultValue: "Education",
    },
    image: {
      type: DataTypes.STRING,
      defaultValue: "default.jpg",
    },
    ratingsAverage: {
      type: DataTypes.FLOAT,
      defaultValue: 5,
    },
    ratingsQuatity: {
      type: DataTypes.INTEGER,
      defaultValue: 0,
    },
    slug: {
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    hooks: {
      beforeCreate: function (blog) {
        blog.slug = blog.title.split(" ").join("-");

        if (!blog.image) blog.image = "default.jpg";
      },
    },
  }
);

module.exports = Blog;

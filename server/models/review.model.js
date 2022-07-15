const { DataTypes } = require("sequelize");
const sequelize = require("../database/init_database");

const Review = sequelize.define("Review", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  content: {
    type: DataTypes.TEXT,
  },
  rating: {
    type: DataTypes.INTEGER,
    defaultValue: 5,
    validate: {
      min: 1,
      max: 5,
      customValidator(value) {
        if (value < 1 || value > 5) {
          throw new Error("Rating must be between 1 and 5.");
        }
      },
    },
  },
});

module.exports = Review;

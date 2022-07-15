const { DataTypes } = require("sequelize");
const sequelize = require("../database/init_database");
const bcrypt = require("bcryptjs");

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstname: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: { args: /^[a-z]+$/i, msg: "Please provide your valid first name." },
        len: {
          args: [2, 20],
          msg: "First Name should contain at least 2 characters.",
        },
      },
    },
    lastname: {
      type: DataTypes.STRING,
      validate: {
        is: { args: /^[a-z]+$/i, msg: "Please provide your valid last name." },
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: {
        args: true,
        msg: "This email is already in use, please provide another email.",
      },
      validate: {
        isEmail: {
          args: true,
          msg: "Please provide a valid email address.",
        },
      },
    },
    gender: {
      type: DataTypes.ENUM,
      values: ["male", "female", "others"],
      validate: {
        isIn: {
          args: [["male", "female", "others"]],
          msg: "Gender can only be: male, female or others.",
        },
      },
    },
    photo: { type: DataTypes.STRING, defaultValue: "default.svg" },
    role: {
      type: DataTypes.ENUM,
      values: ["admin", "user"],
      defaultValue: "user",
      validate: {
        isIn: {
          args: [["admin", "user"]],
          msg: "Role can be either user or admin.",
        },
      },
    },
    dob: DataTypes.DATE,
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 200],
          msg: "Password should contain at least 6 characters.",
        },
      },
    },
  },
  {
    freezeTableName: true,
    scopes: {
      withoutPassword: {
        attributes: { exclude: "password" },
      },
    },
    hooks: {
      beforeCreate: async (user) => {
        // User email lowercase
        user.email = user.email.toLowerCase();

        // Password hasing
        const salt = await bcrypt.genSalt(12);
        user.password = await bcrypt.hash(user.password, salt);
      },
      beforeUpdate: async (user) => {
        const salt = await bcrypt.genSalt(12);
        user.password = await bcrypt.hash(user.password, salt);
      },
    },
  }
);

User.prototype.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};

module.exports = User;

const factory = require("../helper/factoryFunction");
const User = require("../models/user.model");
const catchAsync = require("../utils/catchAsync");

exports.getAllUsers = catchAsync(async (req, res, next) => {
  const users = await User.scope("withoutPassword").findAll();

  res.status(200).json({
    status: "success",
    results: users.length,
    data: {
      users,
    },
  });
});

exports.getUser = catchAsync(async (req, res, next) => {
  const user = await User.scope("withoutPassword").findByPk(req.params.id);
  res.status(200).json({
    status: "success",
    data: {
      user,
    },
  });
});

exports.deleteUser = factory.deleteOne(User);
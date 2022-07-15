const Blog = require("../models/blog.model");
const Review = require("../models/review.model");
const User = require("../models/user.model");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/app.error");

exports.getBlog = catchAsync(async (req, res, next) => {
  const blog = await Blog.findOne({
    where: {
      slug: req.params.slug,
    },
    include: [
      {
        model: User,
        as: "user",
        attributes: ["firstname", "photo", "lastname"],
      },
      {
        model: Review,
        as: "reviews",
        attributes: ["rating", "content", "createdAt"],
        include: {
          model: User,
          as: "user",
          attributes: ["firstname", "photo", "lastname"],
        },
      },
    ],
  });

  if (!blog) return next(new AppError("No blog found with this id", 404));

  res.status(200).json({
    status: "success",
    data: {
      blog,
    },
  });
});

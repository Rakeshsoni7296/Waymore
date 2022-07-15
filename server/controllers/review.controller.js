const factory = require("../helper/factoryFunction");
const Blog = require("../models/blog.model");
const User = require("../models/user.model");
const Review = require("../models/review.model");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/app.error");

exports.setBlogUserIds = (req, res, next) => {
  if (!req.body.blog_id) req.body.blog_id = req.params.blogId * 1;
  if (!req.body.user_id) req.body.user_id = req.user.id * 1;
  next();
};

exports.getAllReviews = factory.getAll(Review);
// exports.createReview = factory.createOne(Review);

exports.createReview = catchAsync(async (req, res, next) => {
  const blog = await Blog.findByPk(req.body.blog_id);

  console.log(req.user);

  if (!req.user)
    return next(new AppError("Please signin to create review.", 401));

  if (blog.user_id === req.body.user_id)
    return next(new AppError(`A user can't review its content.`, 403));

  const newReview = await Review.create(req.body, {
    include: [
      {
        model: User,
        as: "user",
      },
      {
        model: Blog,
        as: "blog",
      },
    ],
  });
  res.status(201).json({
    status: "success",
    data: {
      review: newReview,
      blog,
    },
  });
});

exports.getReview = factory.getOne(Review);
exports.updateReview = factory.updateOne(Review);
exports.deleteReview = factory.deleteOne(Review);

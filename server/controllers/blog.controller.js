const multer = require("multer");
const sharp = require("sharp");
const factory = require("../helper/factoryFunction");
const Blog = require("../models/blog.model");
const User = require("../models/user.model");
const Review = require("../models/review.model");
const catchAsync = require("../utils/catchAsync");
const AppError = require("../utils/app.error");

const multerStorage = multer.memoryStorage();

const multerFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb(new AppError("Not an image! Please upload only images.", 400), false);
  }
};

const upload = multer({
  storage: multerStorage,
  fileFilter: multerFilter,
});

exports.uploadBlogImage = upload.single("image");

exports.resizeBlogImage = catchAsync(async (req, res, next) => {
  if (!req.file) return next();

  req.body.image = `blog-${Math.floor(
    Math.random() * 8779348
  )}-${Date.now()}.jpeg`;

  await sharp(req.file.buffer)
    .resize(1200, 900)
    .toFormat("jpeg")
    .jpeg({ quality: 90 })
    .toFile(`public/img/blogs/${req.body.image}`);

  next();
});

// exports.getAllBlogs = factory.getAll(Blog);
exports.getAllBlogs = catchAsync(async (req, res, next) => {
  const findConds = {
    include: {
      as: "user",
      model: User,
      attributes: ["firstname", "photo"],
    },
  };

  if (+req.query.page > 0) {
    findConds.limit = 8;
    findConds.offset = 8 * (+req.query.page - 1);
  }

  const blogs = await Blog.findAll(findConds);

  res.status(200).json({
    status: "success",
    results: blogs.length,
    data: {
      blogs,
    },
  });
});

// exports.getBlog = factory.getOne(Blog);
exports.getBlog = catchAsync(async (req, res, next) => {
  console.log(req.params.id);
  const blog = await Blog.findByPk(req.params.id, {
    include: [
      {
        model: User,
        as: "user",
        attributes: ["firstname", "photo", "lastname"],
      },
      {
        model: Review,
        as: "reviews",
        attributes: ["rating", "content"],
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

// exports.createBlog = factory.createOne(Blog);
exports.createBlog = catchAsync(async (req, res, next) => {
  req.body.user_id = req.user.id;
  const newBlog = await Blog.create(req.body, {
    include: {
      model: User,
      as: "user",
    },
  });

  res.status(201).json({
    status: "success",
    data: {
      blog: newBlog,
    },
  });
});

exports.updateBlog = factory.updateOne(Blog);
exports.deleteBlog = factory.deleteOne(Blog);

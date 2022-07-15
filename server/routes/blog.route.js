const router = require("express").Router();
const blogController = require("../controllers/blog.controller");
const authController = require("../controllers/auth.controller");
const reviewRouter = require("./review.route");
const viewController = require("../controllers/view.controller");

// Reviewing a blog
router.use("/:blogId/reviews", reviewRouter);

router.get("/:slug/blog", viewController.getBlog);

router
  .route("/")
  .get(blogController.getAllBlogs)
  .post(
    authController.protect,
    blogController.uploadBlogImage,
    blogController.resizeBlogImage,
    blogController.createBlog
  );

router
  .route("/:id")
  .get(blogController.getBlog)
  .patch(
    authController.protect,
    blogController.uploadBlogImage,
    blogController.resizeBlogImage,
    blogController.updateBlog
  )
  .delete(authController.protect, blogController.deleteBlog);

module.exports = router;

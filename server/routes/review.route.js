const router = require("express").Router({ mergeParams: true });
const reviewController = require("../controllers/review.controller");
const authController = require("../controllers/auth.controller");

router
  .route("/")
  .get(reviewController.getAllReviews)
  .post(
    authController.protect,
    reviewController.setBlogUserIds,
    reviewController.createReview
  );

router
  .route("/:id")
  .get(reviewController.getReview)
  .patch(authController.protect, reviewController.updateReview)
  .delete(authController.protect, reviewController.deleteReview);

module.exports = router;

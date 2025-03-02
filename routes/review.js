const express = require("express");
const router = express.Router({mergeParams:true});
const wrapAsync = require("../utils/wrapAsync.js");
const Listing = require("../MODELS/listing.js");
const Review = require("../MODELS/reviews.js");
const {isLoggedIn,validateReview, isReviewAuthor} = require("../middleware.js");
const listingController = require("../controllers/reviews.js");

// POST review ROUTE
router.post("/",isLoggedIn,validateReview, wrapAsync(listingController.createReview));

//delete review route
router.delete("/:reviewId",isLoggedIn,isReviewAuthor,
    wrapAsync(listingController.deleteReview));

module.exports = router;
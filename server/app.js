const path = require("path");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const cookieParser = require("cookie-parser");

// Routers
const blogRoutes = require("./routes/blog.route");
const reviewRoutes = require("./routes/review.route");
const userRoutes = require("./routes/user.route");

// Global Error Handler
const globalErrorHandler = require("./controllers/error.controller");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
  optionsSuccessStatus: 200,
};

// Middlewares
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

// Test Middleware
// app.use((req, res, next) => {
//   console.log(`Cokkies = `, req.cookies);
//   req.requestTime = new Date().toISOString();
//   next();
// });

// Routes Mounting
app.use("/api/v1/blogs", blogRoutes);
app.use("/api/v1/reviews", reviewRoutes);
app.use("/api/v1/users", userRoutes);

app.use(globalErrorHandler);

module.exports = app;

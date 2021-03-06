const AppError = require("../utils/app.error");

const handleValidationErrorDB = (err) => {
  const message = err.errors.map((el) => el.message).join(" ");
  return new AppError(message, 400);
};

const handleUniqueConstraintError = (err) => {
  const message = err.errors.map((el) => el.message).join(" ");
  return new AppError(message, 400);
};

const sendErrorDev = (err, res) => {
  console.log(err);
  res.status(err.statusCode).json({
    status: err.status,
    message: err.message,
    stack: err.stack,
    error: err,
  });
};

const sendErrorProd = (err, res) => {
  // A) Operational or Trusted Errors
  if (err.isOperational) {
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }

  // B) Programming or other errors (Can't leak error details)
  console.log(`Errorπ₯π₯:  ${err}`);
  return res.status(500).json({
    status: "error",
    message: "Something went wrong. Sorry for your inconvenience.",
  });
};

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || "error";

  if (process.env.NODE_ENV === "development") {
    sendErrorDev(err, res);
  } else if (process.env.NODE_ENV === "production") {
    // console.log(`π₯π₯π₯π₯π₯ ERROR NAME = ${err.name} π₯π₯π₯π₯π₯π₯`);
    let error = { ...err };
    error.message = err.message;
    if (err.name === "SequelizeValidationError")
      error = handleValidationErrorDB(error);
    if (err.name === "SequelizeUniqueConstraintError")
      error = handleUniqueConstraintError(error);
    sendErrorProd(error, res);
  }
};

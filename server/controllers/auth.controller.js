const { promisify } = require("util");
const catchAsync = require("../utils/catchAsync");
const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/app.error");

const signToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: process.env.EXPIRES_IN,
  });
};

const createSendToken = (user, statusCode, res) => {
  const token = signToken(user.id);

  const cookiesOptions = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  // 1) Remove password from output
  user.password = undefined;
  res.cookie("jwt", token, cookiesOptions);

  // 2) Send Token
  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      user,
    },
  });
};

exports.register = catchAsync(async (req, res, next) => {
  // 1) Get data from req.body
  const { firstname, lastname, email, password, passwordConfirm } = req.body;

  // 2) Check whether required fields are provided or not
  if (!firstname || !email || !password || !passwordConfirm)
    return next(new AppError("Please provide required information.", 400));

  if (password !== passwordConfirm)
    return next(new AppError("Passwords must match.", 400));

  // Create new user
  const newUser = await User.scope("withoutPassword").create({
    firstname,
    lastname,
    email,
    password,
  });

  // 3) create and sign token
  createSendToken(newUser, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  // 1) Check if email or password exists
  if (!email || !password)
    return next(new AppError("Please provide required information.", 400));

  // Get user based on email
  const user = await User.findOne({ where: { email } });

  // CHeck if user exists or password is not correct
  if (!user || !user.validPassword(password))
    return next(new AppError("Email or password is not correct.", 401));

  // create and send token
  createSendToken(user, 200, res);
});

exports.protect = catchAsync(async (req, res, next) => {
  // 1) Get token and check if it exists there
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  if (!token)
    return next(
      new AppError("You are not logged in. Please login to get access.", 401)
    );

  // 2) Verify token
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3) Check if user still exist
  const currentUser = await User.findByPk(decoded.id);

  if (!currentUser)
    return next(
      new AppError(
        "The user belonging to this token does no longer exist.",
        401
      )
    );

  // 4) Check if password changed after token is issued

  // 5) GRANT ACCESS TO PROTECTED ROUTES
  req.user = currentUser;
  next();
});

exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new AppError("You do not have permission to perform this action.", 403)
      );
    }
    next();
  };
};

exports.logout = catchAsync(async (req, res, next) => {
  res.clearCookie("jwt");

  res.status(200).json({
    status: "success",
    message: "You are logged out.",
  });
});

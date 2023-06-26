const express = require("express");
const xss = require("xss-clean");
const cors = require("cors");
const helmet = require("helmet");
const { rateLimit } = require("express-rate-limit");
const httpStatus = require("http-status");

// The following configuration will limit the number of requests
// for each IP address per a certain amount of time.
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 60, // 60 requests
  message: {
    status: "error",
    statusCode: httpStatus.TOO_MANY_REQUESTS,
    message: "You're blocked",
  },
});

module.exports = (app) => {
  app.use(limiter);
  app.use(express.json({ limit: "10kb" }));
  app.use(express.urlencoded({ extended: true }));
  app.use(helmet());
  app.use(cors({ origin: true }));
  app.use(xss());
};

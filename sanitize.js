const express = require("express");
const xss = require("xss-clean");
const cors = require("cors");
const helmet = require("helmet");
const { rateLimit } = require("express-rate-limit");

// The following configuration will limit the number of requests
// for each IP address per a certain amount of time.
const limiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 minute
  max: 10, // 10 requests per minute
  message:
    "<b style='font-size: 28px'>You're blocked for an amount of time</b>",
});

module.exports = (app) => {
  app.use(limiter);
  app.use(express.json({ limit: "10kb" }));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.static("public"));
  app.use(helmet());
  app.use(cors({ origin: true }));
  app.use(xss());
};

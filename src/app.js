const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const dotenv = require("dotenv");
const router = require("./routes/index.js");
dotenv.config();
const app = express();
const path = require("path");

app.use(helmet());
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(
  "/alfabet",
  express.static(path.join(__dirname, "./public/alfabet"), {
    setHeaders: (res, path) => {
      res.set("Cross-Origin-Resource-Policy", "cross-origin");
    },
  })
);
app.use(
  "/number",
  express.static(path.join(__dirname, "./public/number"), {
    setHeaders: (res, path) => {
      res.set("Cross-Origin-Resource-Policy", "cross-origin");
    },
  })
);
app.use(
  "/team",
  express.static(path.join(__dirname, "./public/team"), {
    setHeaders: (res, path) => {
      res.set("Cross-Origin-Resource-Policy", "cross-origin");
    },
  })
);
//routes
app.use("/api", router);

module.exports = app;
